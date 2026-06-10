// Dashboard Application Logic

function getColor(percentage) {
    if (percentage >= 90) return '#42be65';
    if (percentage >= 70) return '#ff832b';
    return '#da1e28';
}

function getBulbColor(percentage) {
    if (percentage >= 90) return 'radial-gradient(circle, #42be65, #24a148)';
    if (percentage >= 70) return 'radial-gradient(circle, #ff832b, #d9822b)';
    return 'radial-gradient(circle, #da1e28, #8a0000)';
}

function getCurrentBenchmark(percentage) {
    if (percentage >= 100) return { level: 100, message: 'Target smashed!' };
    if (percentage >= 90) return { level: 90, message: 'Strong finish!' };
    if (percentage >= 80) return { level: 80, message: 'Nearly there!' };
    if (percentage >= 70) return { level: 70, message: 'Keep pushing!' };
    if (percentage >= 60) return { level: 60, message: 'Getting moving!' };
    if (percentage >= 50) return { level: 50, message: 'Warming up!' };
    return null;
}

function getStatusClass(percentOfTarget) {
    if (percentOfTarget >= 100) return 'status-excellent';
    if (percentOfTarget >= 90) return 'status-good';
    return 'status-needs-improvement';
}

function getStatusText(percentOfTarget) {
    if (percentOfTarget >= 100) return 'Excellent';
    if (percentOfTarget >= 90) return 'Good';
    return 'Needs Improvement';
}

function createSupportOfferingColumn(category, subcategory, data) {
    const column = document.createElement('div');
    column.className = 'thermometer-column';
    column.dataset.category = category;
    column.dataset.subcategory = subcategory;

    const title = subcategory.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    const benchmark = getCurrentBenchmark(data.percentage);
    const fillColor = getColor(data.percentage);
    const bulbColor = getBulbColor(data.percentage);
    
    column.innerHTML = `
        <div class="thermometer-card">
            <div class="card-title">${title}</div>
            <div class="thermometer-container">
                <div class="thermometer-wrapper">
                    <div class="scale-markers">
                        ${[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0].map(marker => `
                            <div class="scale-marker">
                                <div class="scale-label">${marker}%</div>
                                <div class="scale-line"></div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="thermometer">
                        <div class="thermometer-fill" style="height: 0%; background: ${fillColor};"></div>
                        <div class="thermometer-bulb" style="background: ${bulbColor};">
                            <div class="bulb-percentage">${data.percentage}%</div>
                        </div>
                        ${benchmark ? `<div class="message-badge" data-level="${benchmark.level}" style="bottom: ${benchmark.level}%; background: ${fillColor};">${benchmark.message}</div>` : ''}
                    </div>
                </div>
            </div>
            <div class="drill-down">
                <div class="drill-down-title">Support Offerings</div>
                <div class="breadcrumb">
                    <span class="breadcrumb-item active">Support</span>
                </div>
                <div class="offerings-grid">
                    ${Object.entries(data.offerings).map(([offeringKey, offeringData]) => {
                        const offeringTitle = offeringKey.split('-').map(word =>
                            word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ');
                        return `
                            <div class="offering-card" data-offering="${offeringKey}">
                                <div class="offering-name">${offeringTitle}</div>
                                <div class="offering-stats">
                                    <div class="offering-stat">
                                        <div class="offering-stat-label">Achievement:</div>
                                        <div class="offering-stat-value">${offeringData.percentage}%</div>
                                    </div>
                                    <div class="offering-stat">
                                        <div class="offering-stat-label">Target:</div>
                                        <div class="offering-stat-value">$${offeringData.target.toLocaleString()}</div>
                                    </div>
                                </div>
                                <div class="mini-progress">
                                    <div class="mini-progress-fill" style="width: 0%; background: ${getColor(offeringData.percentage)}"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="teams-drill-down" style="display: none;">
                    <div class="drill-down-title">Team Performance</div>
                    <div class="breadcrumb">
                        <span class="breadcrumb-item breadcrumb-back" data-level="offerings">Support</span>
                        <span class="breadcrumb-separator">›</span>
                        <span class="breadcrumb-item active offering-name-breadcrumb"></span>
                    </div>
                    <div class="teams-grid"></div>
                    <button class="back-to-offerings">← Back to Offerings</button>
                </div>
                <button class="close-drill-down">Close Details</button>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-box-title">Top 5 Revenue Reps (All Support)</div>
            <table class="info-table">
                <thead>
                    <tr>
                        <th>Rep Name</th>
                        <th>Revenue</th>
                        <th>% of Target</th>
                    </tr>
                </thead>
                <tbody>
                    ${(() => {
                        // Aggregate top revenue across all offerings
                        const allReps = [];
                        Object.values(data.offerings).forEach(offering => {
                            allReps.push(...offering.topRevenue);
                        });
                        return allReps
                            .sort((a, b) => b.revenue - a.revenue)
                            .slice(0, 5)
                            .map(rep => `
                                <tr>
                                    <td>${rep.name}</td>
                                    <td>$${rep.revenue.toLocaleString()}</td>
                                    <td>${rep.percentOfTarget}%</td>
                                </tr>
                            `).join('');
                    })()}
                </tbody>
            </table>
        </div>
        
        <div class="info-box">
            <div class="info-box-title">Top 5 Progress From Last Week (All Support)</div>
            <table class="info-table">
                <thead>
                    <tr>
                        <th>Rep Name</th>
                        <th>Difference</th>
                        <th>% of Target</th>
                    </tr>
                </thead>
                <tbody>
                    ${(() => {
                        // Aggregate top progress across all offerings
                        const allReps = [];
                        Object.values(data.offerings).forEach(offering => {
                            allReps.push(...offering.topProgress);
                        });
                        return allReps
                            .sort((a, b) => b.progress - a.progress)
                            .slice(0, 5)
                            .map(rep => {
                                const difference = rep.current - rep.previousWeek;
                                const percentOfTarget = ((difference / data.target) * 100).toFixed(1);
                                return `
                                    <tr>
                                        <td>${rep.name}</td>
                                        <td style="color: ${difference >= 0 ? '#24a148' : '#da1e28'}; font-weight: 600;">
                                            ${difference >= 0 ? '+' : ''}$${difference.toLocaleString()}
                                        </td>
                                        <td>${percentOfTarget}%</td>
                                    </tr>
                                `;
                            }).join('');
                    })()}
                </tbody>
            </table>
        </div>
    `;

    return column;
}

function createThermometerColumn(category, subcategory, data) {
    const column = document.createElement('div');
    column.className = 'thermometer-column';
    column.dataset.category = category;
    column.dataset.subcategory = subcategory;

    const title = subcategory.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    const benchmark = getCurrentBenchmark(data.percentage);
    const fillColor = getColor(data.percentage);
    const bulbColor = getBulbColor(data.percentage);
    
    // Calculate overall progress from topProgress data
    const totalProgress = data.topProgress ? data.topProgress.reduce((sum, rep) => {
        return sum + (rep.current - rep.previousWeek);
    }, 0) : 0;
    const progressPercent = data.target > 0 ? ((totalProgress / data.target) * 100).toFixed(1) : 0;
    
    column.innerHTML = `
        <div class="thermometer-card">
            <div class="card-title">${title}</div>
            <div class="card-subtitle" style="text-align: center; color: #24a148; font-weight: 600; font-size: 0.9rem; margin-bottom: 10px;">
                Progress: +$${totalProgress.toLocaleString()} (+${progressPercent}%)
            </div>
            <div class="thermometer-container">
                <div class="thermometer-wrapper">
                    <div class="scale-markers">
                        ${[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0].map(marker => `
                            <div class="scale-marker">
                                <div class="scale-label">${marker}%</div>
                                <div class="scale-line"></div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="thermometer">
                        <div class="thermometer-fill" style="height: 0%; background: ${fillColor};"></div>
                        <div class="thermometer-bulb" style="background: ${bulbColor};">
                            <div class="bulb-percentage">${data.percentage}%</div>
                        </div>
                        ${benchmark ? `<div class="message-badge" data-level="${benchmark.level}" style="bottom: ${benchmark.level}%; background: ${fillColor};">${benchmark.message}</div>` : ''}
                    </div>
                </div>
            </div>
            <div class="drill-down">
            <div class="drill-down-title">Team Performance Breakdown</div>
            <div class="teams-grid">
                ${Object.entries(data.teams).map(([teamName, teamData]) => {
                    // Calculate team progress from reps
                    const teamProgress = teamData.reps.reduce((sum, rep) => sum + rep.progress, 0);
                    const avgProgress = (teamProgress / teamData.reps.length).toFixed(1);
                    const progressDollar = (teamData.revenue * (avgProgress / 100)).toFixed(0);
                    
                    return `
                    <div class="team-card" data-team="${teamName}">
                        <div class="team-name">${teamName}</div>
                        <div class="team-stats">
                            <div class="team-stat">
                                <div class="team-stat-label">Achievement:</div>
                                <div class="team-stat-value">${teamData.percentage}%</div>
                            </div>
                            <div class="team-stat">
                                <div class="team-stat-label">Revenue:</div>
                                <div class="team-stat-value">$${teamData.revenue.toLocaleString()}</div>
                            </div>
                            <div class="team-stat">
                                <div class="team-stat-label">Target:</div>
                                <div class="team-stat-value">$${teamData.target.toLocaleString()}</div>
                            </div>
                            <div class="team-stat">
                                <div class="team-stat-label">Progress:</div>
                                <div class="team-stat-value" style="color: #24a148;">+$${parseInt(progressDollar).toLocaleString()} (+${avgProgress}%)</div>
                            </div>
                        </div>
                        <div class="mini-progress">
                            <div class="mini-progress-fill" style="width: 0%; background: ${getColor(teamData.percentage)}"></div>
                        </div>
                        
                        <div class="reps-list">
                            <div class="reps-title">Team Members</div>
                            ${teamData.reps.map(rep => `
                                <div class="rep-item">
                                    <div class="rep-name">${rep.name}</div>
                                    <div class="rep-value">$${rep.revenue.toLocaleString()}</div>
                                    <div class="rep-value">$${rep.target.toLocaleString()}</div>
                                    <div class="rep-value">${rep.percentOfTarget}%</div>
                                    <div class="rep-value">+${rep.progress.toFixed(1)}%</div>
                                    <div class="rep-status ${getStatusClass(rep.percentOfTarget)}">${getStatusText(rep.percentOfTarget)}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
            <button class="close-drill-down">Close Details</button>
            </div>
        </div>
        
        <div class="info-box">
            <div class="info-box-title">Top 5 Revenue Reps</div>
            <table class="info-table">
                <thead>
                    <tr>
                        <th>Rep Name</th>
                        <th>Revenue</th>
                        <th>% of Target</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.topRevenue.map(rep => `
                        <tr>
                            <td>${rep.name}</td>
                            <td>$${rep.revenue.toLocaleString()}</td>
                            <td>${rep.percentOfTarget}%</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        
        <div class="info-box">
            <div class="info-box-title">Top 5 Progress From Last Week</div>
            <table class="info-table">
                <thead>
                    <tr>
                        <th>Rep Name</th>
                        <th>Difference</th>
                        <th>% of Target</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.topProgress.map(rep => {
                        const difference = rep.current - rep.previousWeek;
                        const percentOfTarget = ((difference / data.target) * 100).toFixed(1);
                        return `
                        <tr>
                            <td>${rep.name}</td>
                            <td style="color: ${difference >= 0 ? '#24a148' : '#da1e28'}; font-weight: 600;">
                                ${difference >= 0 ? '+' : ''}$${difference.toLocaleString()}
                            </td>
                            <td>${percentOfTarget}%</td>
                        </tr>
                    `}).join('')}
                </tbody>
            </table>
        </div>
    `;

    return column;
}

function animateThermometer(column, percentage) {
    const fill = column.querySelector('.thermometer-fill');
    const badge = column.querySelector('.message-badge');
    
    setTimeout(() => {
        fill.style.height = `${percentage}%`;
        
        // Show the benchmark message after fill animation completes
        if (badge) {
            setTimeout(() => {
                badge.classList.add('show');
            }, 2600);
        }
    }, 100);
}

function animateTeamProgress(column) {
    const teamCards = column.querySelectorAll('.team-card');
    teamCards.forEach((teamCard, index) => {
        setTimeout(() => {
            const progressFill = teamCard.querySelector('.mini-progress-fill');
            const percentage = parseInt(teamCard.querySelector('.team-stat-value').textContent);
            progressFill.style.width = `${percentage}%`;
        }, index * 200);
    });
}

function setupSupportCardInteractions(column, data) {
    const thermometerCard = column.querySelector('.thermometer-card');
    const drillDown = column.querySelector('.drill-down');
    const closeButton = column.querySelector('.close-drill-down');
    const offeringsGrid = column.querySelector('.offerings-grid');
    const teamsDrillDown = column.querySelector('.teams-drill-down');
    const teamsGrid = column.querySelector('.teams-grid');
    const backToOfferingsBtn = column.querySelector('.back-to-offerings');
    const offeringCards = column.querySelectorAll('.offering-card');

    // Thermometer card click - show offerings
    thermometerCard.addEventListener('click', (e) => {
        if (e.target.closest('.drill-down')) return;
        
        const wasExpanded = thermometerCard.classList.contains('expanded');
        
        // Close all other expanded cards
        document.querySelectorAll('.thermometer-card.expanded').forEach(c => {
            c.classList.remove('expanded');
            c.querySelector('.drill-down').classList.remove('show');
        });
        
        if (!wasExpanded) {
            thermometerCard.classList.add('expanded');
            drillDown.classList.add('show');
            
            // Reset to offerings view
            offeringsGrid.style.display = 'grid';
            teamsDrillDown.style.display = 'none';
            
            // Animate offering progress bars
            setTimeout(() => {
                offeringCards.forEach((card, index) => {
                    setTimeout(() => {
                        const progressFill = card.querySelector('.mini-progress-fill');
                        const percentage = parseInt(card.querySelector('.offering-stat-value').textContent);
                        progressFill.style.width = `${percentage}%`;
                    }, index * 200);
                });
            }, 100);
        }
    });

    // Offering card clicks - show teams for that offering
    offeringCards.forEach(offeringCard => {
        offeringCard.addEventListener('click', (e) => {
            e.stopPropagation();
            const offeringKey = offeringCard.dataset.offering;
            const offeringData = data.offerings[offeringKey];
            const offeringTitle = offeringKey.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            
            // Update breadcrumb
            column.querySelector('.offering-name-breadcrumb').textContent = offeringTitle;
            
            // Hide offerings, show teams
            offeringsGrid.style.display = 'none';
            teamsDrillDown.style.display = 'block';
            
            // Populate teams grid
            teamsGrid.innerHTML = Object.entries(offeringData.teams).map(([teamName, teamData]) => `
                <div class="team-card" data-team="${teamName}">
                    <div class="team-name">${teamName}</div>
                    <div class="team-stats">
                        <div class="team-stat">
                            <div class="team-stat-label">Achievement:</div>
                            <div class="team-stat-value">${teamData.percentage}%</div>
                        </div>
                        <div class="team-stat">
                            <div class="team-stat-label">Revenue:</div>
                            <div class="team-stat-value">$${teamData.revenue.toLocaleString()}</div>
                        </div>
                        <div class="team-stat">
                            <div class="team-stat-label">Target:</div>
                            <div class="team-stat-value">$${teamData.target.toLocaleString()}</div>
                        </div>
                    </div>
                    <div class="mini-progress">
                        <div class="mini-progress-fill" style="width: 0%; background: ${getColor(teamData.percentage)}"></div>
                    </div>
                    
                    <div class="reps-list">
                        <div class="reps-title">Team Members</div>
                        ${teamData.reps.map(rep => `
                            <div class="rep-item">
                                <div class="rep-name">${rep.name}</div>
                                <div class="rep-value">$${rep.revenue.toLocaleString()}</div>
                                <div class="rep-value">$${rep.target.toLocaleString()}</div>
                                <div class="rep-value">${rep.percentOfTarget}%</div>
                                <div class="rep-value">+${rep.progress.toFixed(1)}%</div>
                                <div class="rep-status ${getStatusClass(rep.percentOfTarget)}">${getStatusText(rep.percentOfTarget)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
            
            // Animate team progress bars
            setTimeout(() => {
                const teamCards = teamsGrid.querySelectorAll('.team-card');
                teamCards.forEach((card, index) => {
                    setTimeout(() => {
                        const progressFill = card.querySelector('.mini-progress-fill');
                        const percentage = parseInt(card.querySelector('.team-stat-value').textContent);
                        progressFill.style.width = `${percentage}%`;
                    }, index * 200);
                });
            }, 100);
            
            // Setup team card interactions
            setupTeamCardInteractions(teamsGrid);
        });
    });

    // Back to offerings button
    backToOfferingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        offeringsGrid.style.display = 'grid';
        teamsDrillDown.style.display = 'none';
    });

    // Breadcrumb back navigation
    const breadcrumbBack = column.querySelector('.breadcrumb-back');
    if (breadcrumbBack) {
        breadcrumbBack.addEventListener('click', (e) => {
            e.stopPropagation();
            offeringsGrid.style.display = 'grid';
            teamsDrillDown.style.display = 'none';
        });
    }

    // Close button
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        thermometerCard.classList.remove('expanded');
        drillDown.classList.remove('show');
        
        // Reset to offerings view
        offeringsGrid.style.display = 'grid';
        teamsDrillDown.style.display = 'none';
    });
}

function setupTeamCardInteractions(container) {
    const teamCards = container.querySelectorAll('.team-card');
    
    teamCards.forEach(teamCard => {
        teamCard.addEventListener('click', (e) => {
            e.stopPropagation();
            const repsList = teamCard.querySelector('.reps-list');
            const wasExpanded = teamCard.classList.contains('expanded');
            
            // Close other team cards
            teamCards.forEach(tc => {
                if (tc !== teamCard) {
                    tc.classList.remove('expanded');
                    tc.querySelector('.reps-list').classList.remove('show');
                }
            });
            
            if (!wasExpanded) {
                teamCard.classList.add('expanded');
                repsList.classList.add('show');
            } else {
                teamCard.classList.remove('expanded');
                repsList.classList.remove('show');
            }
        });
    });
}

function setupCardInteractions(column) {
    const thermometerCard = column.querySelector('.thermometer-card');
    const drillDown = column.querySelector('.drill-down');
    const closeButton = column.querySelector('.close-drill-down');
    const teamCards = column.querySelectorAll('.team-card');

    // Thermometer card click - toggle drill-down
    thermometerCard.addEventListener('click', (e) => {
        if (e.target.closest('.drill-down')) return;
        
        const wasExpanded = thermometerCard.classList.contains('expanded');
        
        // Close all other expanded cards
        document.querySelectorAll('.thermometer-card.expanded').forEach(c => {
            c.classList.remove('expanded');
            c.querySelector('.drill-down').classList.remove('show');
        });
        
        if (!wasExpanded) {
            thermometerCard.classList.add('expanded');
            drillDown.classList.add('show');
            animateTeamProgress(column);
        }
    });

    // Close button
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        thermometerCard.classList.remove('expanded');
        drillDown.classList.remove('show');
        
        // Close all team rep lists
        teamCards.forEach(tc => {
            tc.classList.remove('expanded');
            tc.querySelector('.reps-list').classList.remove('show');
        });
    });

    // Team card clicks - toggle rep list
    teamCards.forEach(teamCard => {
        teamCard.addEventListener('click', (e) => {
            e.stopPropagation();
            const repsList = teamCard.querySelector('.reps-list');
            const wasExpanded = teamCard.classList.contains('expanded');
            
            // Close other team cards in this drill-down
            teamCards.forEach(tc => {
                if (tc !== teamCard) {
                    tc.classList.remove('expanded');
                    tc.querySelector('.reps-list').classList.remove('show');
                }
            });
            
            if (!wasExpanded) {
                teamCard.classList.add('expanded');
                repsList.classList.add('show');
            } else {
                teamCard.classList.remove('expanded');
                repsList.classList.remove('show');
            }
        });
    });
}

function initializeDashboard() {
    const growthRow = document.getElementById('growth-row');
    const acvRow = document.getElementById('acv-row');

    // Clear existing content to prevent duplicates
    growthRow.innerHTML = '';
    acvRow.innerHTML = '';

    // Create Growth columns
    Object.entries(dashboardData.growth).forEach(([key, data]) => {
        let column;
        
        // Check if this is the support-offering with sub-offerings
        if (key === 'support-offering' && data.hasSubOfferings) {
            column = createSupportOfferingColumn('growth', key, data);
            growthRow.appendChild(column);
            animateThermometer(column, data.percentage);
            // Use setTimeout to ensure DOM is ready
            setTimeout(() => setupSupportCardInteractions(column, data), 0);
        } else {
            column = createThermometerColumn('growth', key, data);
            growthRow.appendChild(column);
            animateThermometer(column, data.percentage);
            // Use setTimeout to ensure DOM is ready
            setTimeout(() => setupCardInteractions(column), 0);
        }
    });

    // Create ACV columns
    Object.entries(dashboardData.acv).forEach(([key, data]) => {
        const column = createThermometerColumn('acv', key, data);
        acvRow.appendChild(column);
        animateThermometer(column, data.percentage);
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => setupCardInteractions(column), 0);
    });
    
    console.log('Dashboard initialization complete');
}

// Initialize dashboard when DOM is ready
// Note: csv-loader.js will handle initialization if present
// This code only runs if csv-loader.js is not included
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Only initialize if csv-loader hasn't already done so
        if (!window.dashboardInitialized) {
            initializeDashboard();
        }
    });
} else {
    // Only initialize if csv-loader hasn't already done so
    if (!window.dashboardInitialized) {
        initializeDashboard();
    }
}

// Made with Bob
