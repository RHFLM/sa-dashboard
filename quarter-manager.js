// Quarter Management for Dashboard
// This file handles quarter filtering without modifying the core data structure

// Helper functions for quarter management
function getCurrentQuarter() {
    const now = new Date();
    const month = now.getMonth(); // 0-11
    const year = now.getFullYear();
    const quarter = Math.floor(month / 3) + 1;
    return { year, quarter, key: `Q${quarter}-${year}` };
}

function getQuarterInfo(quarterType) {
    const { year, quarter } = getCurrentQuarter();
    
    if (quarterType === 'current') {
        return { year, quarter, label: `Q${quarter} ${year}`, key: `Q${quarter}-${year}` };
    } else if (quarterType === 'previous') {
        const prevQuarter = quarter === 1 ? 4 : quarter - 1;
        const prevYear = quarter === 1 ? year - 1 : year;
        return { year: prevYear, quarter: prevQuarter, label: `Q${prevQuarter} ${prevYear}`, key: `Q${prevQuarter}-${prevYear}` };
    } else if (quarterType === 'next') {
        const nextQuarter = quarter === 4 ? 1 : quarter + 1;
        const nextYear = quarter === 4 ? year + 1 : year;
        return { year: nextYear, quarter: nextQuarter, label: `Q${nextQuarter} ${nextYear}`, key: `Q${nextQuarter}-${nextYear}` };
    }
}

// Store data for multiple quarters
// For now, we'll use the same data for all quarters (in production, this would come from CSV with quarter field)
const quarterDataStore = {};

// Initialize quarter filter
let currentSelectedQuarter = 'current';

function initializeQuarterFilter() {
    const buttons = document.querySelectorAll('.quarter-btn');
    const quarterInfo = document.getElementById('current-quarter-info');
    
    // Set initial quarter info
    updateQuarterInfo();
    
    // Add click handlers to quarter buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const quarter = button.dataset.quarter;
            
            // Update active state
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update selected quarter
            currentSelectedQuarter = quarter;
            
            // Update info display
            updateQuarterInfo();
            
            // Update dashboard data for selected quarter
            updateDashboardDataForQuarter(quarter);
            
            // Reload dashboard with new quarter data
            if (typeof initializeDashboard === 'function') {
                initializeDashboard();
            }
        });
    });
}

function updateQuarterInfo() {
    const quarterInfo = document.getElementById('current-quarter-info');
    const info = getQuarterInfo(currentSelectedQuarter);
    quarterInfo.textContent = `Showing data for ${info.label}`;
}

function updateDashboardDataForQuarter(quarterType) {
    const quarterInfo = getQuarterInfo(quarterType);
    
    // If we have CSV data with quarters
    if (window.allCSVData && window.allCSVData.hasQuarters) {
        const quarterData = window.allCSVData.byQuarter[quarterInfo.key];
        if (quarterData) {
            window.dashboardData = quarterData;
            console.log(`📊 Switched to ${quarterInfo.label} data`);
        } else {
            console.log(`⚠️ No data available for ${quarterInfo.label}, using current data`);
            window.dashboardData = window.allCSVData.current;
        }
    } else {
        // No quarter-specific data available, use same data for all quarters
        console.log(`ℹ️ Quarter filtering not available - showing same data for all quarters`);
    }
}

function getSelectedQuarterData() {
    return window.dashboardData;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeQuarterFilter);
} else {
    initializeQuarterFilter();
}

// Made with Bob
