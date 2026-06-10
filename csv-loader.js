// CSV Data Loader for S&A Performance Dashboard
// This script loads performance data from a CSV file with quarter support
// Supports loading from local files or Box cloud storage

async function loadCSVData(source = 'local', fileId = null) {
    try {
        let csvText;
        
        if (source === 'box' && fileId) {
            // Load from Box
            if (!window.boxIntegration) {
                throw new Error('Box integration not initialized');
            }
            csvText = await window.boxIntegration.downloadFile(fileId);
            console.log('✅ CSV loaded from Box');
        } else {
            // Load from local file
            const response = await fetch('performance-data.csv');
            csvText = await response.text();
            console.log('✅ CSV loaded from local file');
        }
        
        return parseCSV(csvText);
    } catch (error) {
        console.error('Error loading CSV:', error);
        // Fallback to dashboard-data.js if CSV fails
        return null;
    }
}

function filterDataByQuarter(allData, quarterKey) {
    // If no quarter filtering needed, return all data
    if (!quarterKey || !allData.byQuarter) {
        return allData.current || allData;
    }
    
    // Return data for specific quarter
    return allData.byQuarter[quarterKey] || allData.current || allData;
}

function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    
    // Check if CSV has Quarter column
    const hasQuarterColumn = headers.some(h => h.trim().toLowerCase() === 'quarter');
    
    const dataByQuarter = {};
    const currentData = {
        growth: {},
        acv: {}
    };
    
    // Parse each line
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const row = {};
        
        headers.forEach((header, index) => {
            row[header.trim()] = values[index]?.trim() || '';
        });
        
        const category = row.Category.toLowerCase();
        const subcategory = row.Subcategory.toLowerCase().replace(/\s+/g, '-');
        const percentage = parseInt(row.Percentage);
        const target = parseInt(row.Target);
        const teamName = row.TeamName;
        const repName = row.RepName;
        const quarter = hasQuarterColumn ? row.Quarter : null;
        const supportOffering = row.SupportOffering ? row.SupportOffering.toLowerCase().replace(/\s+/g, '-') : null;
        
        // Determine which data object to use
        let targetData = currentData;
        if (quarter) {
            if (!dataByQuarter[quarter]) {
                dataByQuarter[quarter] = { growth: {}, acv: {} };
            }
            targetData = dataByQuarter[quarter];
        }
        
        // Handle Support Offering with sub-offerings
        if (subcategory === 'support-offering' && supportOffering) {
            // Initialize support-offering structure with offerings
            if (!targetData[category][subcategory]) {
                targetData[category][subcategory] = {
                    percentage: percentage,
                    target: target,
                    hasSubOfferings: true,
                    offerings: {}
                };
            }
            
            // Initialize specific offering
            if (!targetData[category][subcategory].offerings[supportOffering]) {
                targetData[category][subcategory].offerings[supportOffering] = {
                    percentage: percentage,
                    target: target,
                    topRevenue: [],
                    topProgress: [],
                    teams: {}
                };
            }
            
            // Initialize team structure within offering
            if (!targetData[category][subcategory].offerings[supportOffering].teams[teamName]) {
                targetData[category][subcategory].offerings[supportOffering].teams[teamName] = {
                    percentage: 0,
                    revenue: 0,
                    target: 0,
                    reps: []
                };
            }
            
            // Add rep data to offering's team
            const rep = {
                name: repName,
                revenue: parseInt(row.RepRevenue),
                target: parseInt(row.RepTarget),
                percentOfTarget: parseInt(row.RepPercentOfTarget),
                progress: parseFloat(row.RepProgress)
            };
            
            targetData[category][subcategory].offerings[supportOffering].teams[teamName].reps.push(rep);
        } else {
            // Standard category structure (non-support)
            if (!targetData[category][subcategory]) {
                targetData[category][subcategory] = {
                    percentage: percentage,
                    target: target,
                    topRevenue: [],
                    topProgress: [],
                    teams: {}
                };
            }
            
            // Initialize team structure
            if (!targetData[category][subcategory].teams[teamName]) {
                targetData[category][subcategory].teams[teamName] = {
                    percentage: 0,
                    revenue: 0,
                    target: 0,
                    reps: []
                };
            }
            
            // Add rep data
            const rep = {
                name: repName,
                revenue: parseInt(row.RepRevenue),
                target: parseInt(row.RepTarget),
                percentOfTarget: parseInt(row.RepPercentOfTarget),
                progress: parseFloat(row.RepProgress)
            };
            
            targetData[category][subcategory].teams[teamName].reps.push(rep);
        }
    }
    
    // Helper function to calculate totals for a data object
    function calculateTotals(data) {
        for (const category in data) {
            for (const subcategory in data[category]) {
                const item = data[category][subcategory];
                
                // Handle Support Offering with sub-offerings
                if (item.hasSubOfferings && item.offerings) {
                    for (const offeringKey in item.offerings) {
                        const offering = item.offerings[offeringKey];
                        const allReps = [];
                        
                        // Calculate team totals for this offering
                        for (const teamName in offering.teams) {
                            const team = offering.teams[teamName];
                            team.revenue = team.reps.reduce((sum, rep) => sum + rep.revenue, 0);
                            team.target = team.reps.reduce((sum, rep) => sum + rep.target, 0);
                            team.percentage = Math.round((team.revenue / team.target) * 100);
                            
                            allReps.push(...team.reps);
                        }
                        
                        // Get top 5 by revenue for this offering
                        offering.topRevenue = [...allReps]
                            .sort((a, b) => b.revenue - a.revenue)
                            .slice(0, 5)
                            .map(rep => ({
                                name: rep.name,
                                revenue: rep.revenue,
                                percentOfTarget: rep.percentOfTarget
                            }));
                        
                        // Get top 5 by progress for this offering
                        offering.topProgress = [...allReps]
                            .sort((a, b) => b.progress - a.progress)
                            .slice(0, 5)
                            .map(rep => ({
                                name: rep.name,
                                previousWeek: Math.round(rep.revenue / (1 + rep.progress / 100)),
                                current: rep.revenue,
                                progress: rep.progress,
                                percentOfTarget: rep.percentOfTarget
                            }));
                    }
                } else {
                    // Standard category (non-support)
                    const allReps = [];
                    
                    // Calculate team totals
                    for (const teamName in item.teams) {
                        const team = item.teams[teamName];
                        team.revenue = team.reps.reduce((sum, rep) => sum + rep.revenue, 0);
                        team.target = team.reps.reduce((sum, rep) => sum + rep.target, 0);
                        team.percentage = Math.round((team.revenue / team.target) * 100);
                        
                        allReps.push(...team.reps);
                    }
                
                    // Get top 5 by revenue
                    item.topRevenue = [...allReps]
                        .sort((a, b) => b.revenue - a.revenue)
                        .slice(0, 5)
                        .map(rep => ({
                            name: rep.name,
                            revenue: rep.revenue,
                            percentOfTarget: rep.percentOfTarget
                        }));
                    
                    // Get top 5 by progress
                    item.topProgress = [...allReps]
                        .sort((a, b) => b.progress - a.progress)
                        .slice(0, 5)
                        .map(rep => ({
                            name: rep.name,
                            previousWeek: Math.round(rep.revenue / (1 + rep.progress / 100)),
                            current: rep.revenue,
                            progress: rep.progress,
                            percentOfTarget: rep.percentOfTarget
                        }));
                }
            }
        }
    }
    
    // Calculate totals for current data
    calculateTotals(currentData);
    
    // Calculate totals for each quarter
    for (const quarter in dataByQuarter) {
        calculateTotals(dataByQuarter[quarter]);
    }
    
    // Return data structure with quarter support
    if (hasQuarterColumn && Object.keys(dataByQuarter).length > 0) {
        return {
            current: currentData,
            byQuarter: dataByQuarter,
            hasQuarters: true
        };
    }
    
    return currentData;
}

// Initialize dashboard with CSV data
async function initializeDashboardWithCSV(source = 'local', fileId = null) {
    const csvData = await loadCSVData(source, fileId);
    
    if (csvData) {
        // Store all CSV data
        window.allCSVData = csvData;
        
        // Set initial dashboard data (current quarter or all data)
        if (csvData.hasQuarters) {
            const currentQ = getCurrentQuarter();
            window.dashboardData = csvData.byQuarter[currentQ.key] || csvData.current;
            console.log('✅ Dashboard loaded from CSV with quarter support');
        } else {
            window.dashboardData = csvData;
            console.log('✅ Dashboard loaded from CSV');
        }
    } else {
        console.log('⚠️ Using fallback data from dashboard-data.js');
    }
    
    // Set flag to prevent double initialization
    window.dashboardInitialized = true;
    
    // Initialize the dashboard
    if (typeof initializeDashboard === 'function') {
        initializeDashboard();
    }
}

// Load CSV from Box
async function loadFromBox() {
    try {
        // Show loading indicator
        showLoadingIndicator('Connecting to Box...');
        
        // Authenticate if needed
        if (!window.boxIntegration.accessToken) {
            await window.boxIntegration.authenticate();
        }
        
        // Pick file
        showLoadingIndicator('Select your CSV file from Box...');
        const file = await window.boxIntegration.pickFile();
        
        // Load and initialize dashboard
        showLoadingIndicator('Loading data from Box...');
        await initializeDashboardWithCSV('box', file.id);
        
        // Store file ID for future loads
        localStorage.setItem('box_csv_file_id', file.id);
        localStorage.setItem('box_csv_file_name', file.name);
        
        hideLoadingIndicator();
        showSuccessMessage(`Loaded data from Box: ${file.name}`);
    } catch (error) {
        console.error('Error loading from Box:', error);
        hideLoadingIndicator();
        showErrorMessage('Failed to load data from Box. Using local data.');
        await initializeDashboardWithCSV('local');
    }
}

// Reload data from previously selected Box file
async function reloadFromBox() {
    const fileId = localStorage.getItem('box_csv_file_id');
    if (fileId) {
        try {
            showLoadingIndicator('Reloading data from Box...');
            await initializeDashboardWithCSV('box', fileId);
            hideLoadingIndicator();
            showSuccessMessage('Data reloaded from Box');
        } catch (error) {
            console.error('Error reloading from Box:', error);
            hideLoadingIndicator();
            showErrorMessage('Failed to reload from Box. Using local data.');
            await initializeDashboardWithCSV('local');
        }
    } else {
        await loadFromBox();
    }
}

// UI Helper functions
function showLoadingIndicator(message) {
    let indicator = document.getElementById('loading-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'loading-indicator';
        indicator.className = 'loading-indicator';
        document.body.appendChild(indicator);
    }
    indicator.textContent = message;
    indicator.style.display = 'block';
}

function hideLoadingIndicator() {
    const indicator = document.getElementById('loading-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

function showSuccessMessage(message) {
    showMessage(message, 'success');
}

function showErrorMessage(message) {
    showMessage(message, 'error');
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast ${type}`;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Load CSV data when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDashboardWithCSV);
} else {
    initializeDashboardWithCSV();
}

// Made with Bob
