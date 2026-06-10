// ============================================
// DATA CONFIGURATION - Update values here
// ============================================
const dashboardData = {
    growth: {
        upgrade: {
            percentage: 85,
            target: 1000000,
            topRevenue: [
                { name: 'John Smith', revenue: 125000, percentOfTarget: 125 },
                { name: 'Sarah Johnson', revenue: 118000, percentOfTarget: 118 },
                { name: 'Mike Davis', revenue: 112000, percentOfTarget: 112 },
                { name: 'Emily Brown', revenue: 108000, percentOfTarget: 108 },
                { name: 'David Wilson', revenue: 105000, percentOfTarget: 105 }
            ],
            topProgress: [
                { name: 'John Smith', previousWeek: 100000, current: 125000, progress: 25, percentOfTarget: 125 },
                { name: 'Sarah Johnson', previousWeek: 95000, current: 118000, progress: 24.2, percentOfTarget: 118 },
                { name: 'Mike Davis', previousWeek: 92000, current: 112000, progress: 21.7, percentOfTarget: 112 },
                { name: 'Emily Brown', previousWeek: 88000, current: 108000, progress: 22.7, percentOfTarget: 108 },
                { name: 'David Wilson', previousWeek: 87000, current: 105000, progress: 20.7, percentOfTarget: 105 }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 88,
                    revenue: 880000,
                    target: 1000000,
                    reps: [
                        { name: 'John Smith', revenue: 125000, target: 100000, percentOfTarget: 125, progress: 25, status: 'excellent' },
                        { name: 'Sarah Johnson', revenue: 118000, target: 100000, percentOfTarget: 118, progress: 24.2, status: 'excellent' },
                        { name: 'Mike Davis', revenue: 112000, target: 100000, percentOfTarget: 112, progress: 21.7, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 82,
                    revenue: 820000,
                    target: 1000000,
                    reps: [
                        { name: 'Emily Brown', revenue: 108000, target: 100000, percentOfTarget: 108, progress: 22.7, status: 'excellent' },
                        { name: 'David Wilson', revenue: 105000, target: 100000, percentOfTarget: 105, progress: 20.7, status: 'excellent' },
                        { name: 'Lisa Anderson', revenue: 98000, target: 100000, percentOfTarget: 98, progress: 18.5, status: 'good' }
                    ]
                },
                'Team Sophie': {
                    percentage: 85,
                    revenue: 850000,
                    target: 1000000,
                    reps: [
                        { name: 'Tom Harris', revenue: 115000, target: 100000, percentOfTarget: 115, progress: 23.5, status: 'excellent' },
                        { name: 'Rachel Green', revenue: 102000, target: 100000, percentOfTarget: 102, progress: 19.8, status: 'excellent' },
                        { name: 'Chris Martin', revenue: 95000, target: 100000, percentOfTarget: 95, progress: 17.2, status: 'good' }
                    ]
                }
            }
        },
        'trade-up': {
            percentage: 72,
            target: 800000,
            topRevenue: [
                { name: 'Alex Turner', revenue: 95000, percentOfTarget: 119 },
                { name: 'Jessica Lee', revenue: 88000, percentOfTarget: 110 },
                { name: 'Robert Chen', revenue: 82000, percentOfTarget: 103 },
                { name: 'Maria Garcia', revenue: 78000, percentOfTarget: 98 },
                { name: 'Kevin Park', revenue: 75000, percentOfTarget: 94 }
            ],
            topProgress: [
                { name: 'Alex Turner', previousWeek: 75000, current: 95000, progress: 26.7, percentOfTarget: 119 },
                { name: 'Jessica Lee', previousWeek: 70000, current: 88000, progress: 25.7, percentOfTarget: 110 },
                { name: 'Robert Chen', previousWeek: 65000, current: 82000, progress: 26.2, percentOfTarget: 103 },
                { name: 'Maria Garcia', previousWeek: 62000, current: 78000, progress: 25.8, percentOfTarget: 98 },
                { name: 'Kevin Park', previousWeek: 60000, current: 75000, progress: 25, percentOfTarget: 94 }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 75,
                    revenue: 600000,
                    target: 800000,
                    reps: [
                        { name: 'Alex Turner', revenue: 95000, target: 80000, percentOfTarget: 119, progress: 26.7, status: 'excellent' },
                        { name: 'Jessica Lee', revenue: 88000, target: 80000, percentOfTarget: 110, progress: 25.7, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 70,
                    revenue: 560000,
                    target: 800000,
                    reps: [
                        { name: 'Robert Chen', revenue: 82000, target: 80000, percentOfTarget: 103, progress: 26.2, status: 'excellent' },
                        { name: 'Maria Garcia', revenue: 78000, target: 80000, percentOfTarget: 98, progress: 25.8, status: 'good' }
                    ]
                },
                'Team Sophie': {
                    percentage: 71,
                    revenue: 568000,
                    target: 800000,
                    reps: [
                        { name: 'Kevin Park', revenue: 75000, target: 80000, percentOfTarget: 94, progress: 25, status: 'good' },
                        { name: 'Nina Patel', revenue: 72000, target: 80000, percentOfTarget: 90, progress: 22.5, status: 'good' }
                    ]
                }
            }
        },
        cap: {
            percentage: 95,
            target: 1200000,
            topRevenue: [
                { name: 'Daniel Kim', revenue: 145000, percentOfTarget: 121 },
                { name: 'Sophie Martinez', revenue: 138000, percentOfTarget: 115 },
                { name: 'James Taylor', revenue: 132000, percentOfTarget: 110 },
                { name: 'Linda White', revenue: 128000, percentOfTarget: 107 },
                { name: 'Ryan Moore', revenue: 125000, percentOfTarget: 104 }
            ],
            topProgress: [
                { name: 'Daniel Kim', previousWeek: 120000, current: 145000, progress: 20.8, percentOfTarget: 121 },
                { name: 'Sophie Martinez', previousWeek: 115000, current: 138000, progress: 20, percentOfTarget: 115 },
                { name: 'James Taylor', previousWeek: 110000, current: 132000, progress: 20, percentOfTarget: 110 },
                { name: 'Linda White', previousWeek: 107000, current: 128000, progress: 19.6, percentOfTarget: 107 },
                { name: 'Ryan Moore', previousWeek: 105000, current: 125000, progress: 19, percentOfTarget: 104 }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 97,
                    revenue: 1164000,
                    target: 1200000,
                    reps: [
                        { name: 'Daniel Kim', revenue: 145000, target: 120000, percentOfTarget: 121, progress: 20.8, status: 'excellent' },
                        { name: 'Sophie Martinez', revenue: 138000, target: 120000, percentOfTarget: 115, progress: 20, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 93,
                    revenue: 1116000,
                    target: 1200000,
                    reps: [
                        { name: 'James Taylor', revenue: 132000, target: 120000, percentOfTarget: 110, progress: 20, status: 'excellent' },
                        { name: 'Linda White', revenue: 128000, target: 120000, percentOfTarget: 107, progress: 19.6, status: 'excellent' }
                    ]
                },
                'Team Sophie': {
                    percentage: 95,
                    revenue: 1140000,
                    target: 1200000,
                    reps: [
                        { name: 'Ryan Moore', revenue: 125000, target: 120000, percentOfTarget: 104, progress: 19, status: 'excellent' },
                        { name: 'Emma Clark', revenue: 122000, target: 120000, percentOfTarget: 102, progress: 18.5, status: 'excellent' }
                    ]
                }
            }
        },
        recovery: {
            percentage: 68,
            target: 600000,
            topRevenue: [
                { name: 'Brian Foster', revenue: 72000, percentOfTarget: 120 },
                { name: 'Amanda Scott', revenue: 68000, percentOfTarget: 113 },
                { name: 'George Hill', revenue: 65000, percentOfTarget: 108 },
                { name: 'Patricia Young', revenue: 62000, percentOfTarget: 103 },
                { name: 'Steven Adams', revenue: 60000, percentOfTarget: 100 }
            ],
            topProgress: [
                { name: 'Brian Foster', previousWeek: 55000, current: 72000, progress: 30.9, percentOfTarget: 120 },
                { name: 'Amanda Scott', previousWeek: 52000, current: 68000, progress: 30.8, percentOfTarget: 113 },
                { name: 'George Hill', previousWeek: 50000, current: 65000, progress: 30, percentOfTarget: 108 },
                { name: 'Patricia Young', previousWeek: 48000, current: 62000, progress: 29.2, percentOfTarget: 103 },
                { name: 'Steven Adams', previousWeek: 47000, current: 60000, progress: 27.7, percentOfTarget: 100 }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 70,
                    revenue: 420000,
                    target: 600000,
                    reps: [
                        { name: 'Brian Foster', revenue: 72000, target: 60000, percentOfTarget: 120, progress: 30.9, status: 'excellent' },
                        { name: 'Amanda Scott', revenue: 68000, target: 60000, percentOfTarget: 113, progress: 30.8, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 66,
                    revenue: 396000,
                    target: 600000,
                    reps: [
                        { name: 'George Hill', revenue: 65000, target: 60000, percentOfTarget: 108, progress: 30, status: 'excellent' },
                        { name: 'Patricia Young', revenue: 62000, target: 60000, percentOfTarget: 103, progress: 29.2, status: 'excellent' }
                    ]
                },
                'Team Sophie': {
                    percentage: 68,
                    revenue: 408000,
                    target: 600000,
                    reps: [
                        { name: 'Steven Adams', revenue: 60000, target: 60000, percentOfTarget: 100, progress: 27.7, status: 'good' },
                        { name: 'Nancy Baker', revenue: 58000, target: 60000, percentOfTarget: 97, progress: 26.5, status: 'good' }
                    ]
                }
            }
        },
        'support-offering': {
            percentage: 78,
            target: 900000,
            hasSubOfferings: true,
            offerings: {
                'extended-support': {
                    percentage: 82,
                    target: 300000,
                    topRevenue: [
                        { name: 'Christopher Lee', revenue: 105000, percentOfTarget: 117 },
                        { name: 'Michelle Wong', revenue: 98000, percentOfTarget: 109 },
                        { name: 'Andrew Nelson', revenue: 92000, percentOfTarget: 102 }
                    ],
                    topProgress: [
                        { name: 'Christopher Lee', previousWeek: 85000, current: 105000, progress: 23.5, percentOfTarget: 117 },
                        { name: 'Michelle Wong', previousWeek: 80000, current: 98000, progress: 22.5, percentOfTarget: 109 },
                        { name: 'Andrew Nelson', previousWeek: 75000, current: 92000, progress: 22.7, percentOfTarget: 102 }
                    ],
                    teams: {
                        'Team Ryan': {
                            percentage: 85,
                            revenue: 255000,
                            target: 300000,
                            reps: [
                                { name: 'Christopher Lee', revenue: 105000, target: 100000, percentOfTarget: 105, progress: 23.5, status: 'excellent' },
                                { name: 'Michelle Wong', revenue: 98000, target: 100000, percentOfTarget: 98, progress: 22.5, status: 'good' }
                            ]
                        },
                        'Team Emily': {
                            percentage: 80,
                            revenue: 240000,
                            target: 300000,
                            reps: [
                                { name: 'Andrew Nelson', revenue: 92000, target: 100000, percentOfTarget: 92, progress: 22.7, status: 'good' },
                                { name: 'Jennifer Carter', revenue: 88000, target: 100000, percentOfTarget: 88, progress: 22.2, status: 'good' }
                            ]
                        },
                        'Team Sophie': {
                            percentage: 78,
                            revenue: 234000,
                            target: 300000,
                            reps: [
                                { name: 'Paul Mitchell', revenue: 85000, target: 100000, percentOfTarget: 85, progress: 21.4, status: 'good' },
                                { name: 'Karen Roberts', revenue: 82000, target: 100000, percentOfTarget: 82, progress: 20.8, status: 'good' }
                            ]
                        }
                    }
                },
                'sustained-support': {
                    percentage: 75,
                    target: 300000,
                    topRevenue: [
                        { name: 'David Martinez', revenue: 95000, percentOfTarget: 106 },
                        { name: 'Lisa Thompson', revenue: 88000, percentOfTarget: 98 },
                        { name: 'Robert Chang', revenue: 82000, percentOfTarget: 91 }
                    ],
                    topProgress: [
                        { name: 'David Martinez', previousWeek: 75000, current: 95000, progress: 26.7, percentOfTarget: 106 },
                        { name: 'Lisa Thompson', previousWeek: 70000, current: 88000, progress: 25.7, percentOfTarget: 98 },
                        { name: 'Robert Chang', previousWeek: 65000, current: 82000, progress: 26.2, percentOfTarget: 91 }
                    ],
                    teams: {
                        'Team Ryan': {
                            percentage: 77,
                            revenue: 231000,
                            target: 300000,
                            reps: [
                                { name: 'David Martinez', revenue: 95000, target: 90000, percentOfTarget: 106, progress: 26.7, status: 'excellent' },
                                { name: 'Lisa Thompson', revenue: 88000, target: 90000, percentOfTarget: 98, progress: 25.7, status: 'good' }
                            ]
                        },
                        'Team Emily': {
                            percentage: 73,
                            revenue: 219000,
                            target: 300000,
                            reps: [
                                { name: 'Robert Chang', revenue: 82000, target: 90000, percentOfTarget: 91, progress: 26.2, status: 'good' },
                                { name: 'Maria Santos', revenue: 78000, target: 90000, percentOfTarget: 87, progress: 24.8, status: 'good' }
                            ]
                        },
                        'Team Sophie': {
                            percentage: 75,
                            revenue: 225000,
                            target: 300000,
                            reps: [
                                { name: 'James Wilson', revenue: 80000, target: 90000, percentOfTarget: 89, progress: 23.5, status: 'good' },
                                { name: 'Patricia Brown', revenue: 75000, target: 90000, percentOfTarget: 83, progress: 22.8, status: 'good' }
                            ]
                        }
                    }
                },
                'advanced-support': {
                    percentage: 76,
                    target: 300000,
                    topRevenue: [
                        { name: 'Michael Chen', revenue: 98000, percentOfTarget: 109 },
                        { name: 'Sarah Johnson', revenue: 92000, percentOfTarget: 102 },
                        { name: 'Thomas Anderson', revenue: 85000, percentOfTarget: 94 }
                    ],
                    topProgress: [
                        { name: 'Michael Chen', previousWeek: 78000, current: 98000, progress: 25.6, percentOfTarget: 109 },
                        { name: 'Sarah Johnson', previousWeek: 74000, current: 92000, progress: 24.3, percentOfTarget: 102 },
                        { name: 'Thomas Anderson', previousWeek: 68000, current: 85000, progress: 25, percentOfTarget: 94 }
                    ],
                    teams: {
                        'Team Ryan': {
                            percentage: 78,
                            revenue: 234000,
                            target: 300000,
                            reps: [
                                { name: 'Michael Chen', revenue: 98000, target: 90000, percentOfTarget: 109, progress: 25.6, status: 'excellent' },
                                { name: 'Sarah Johnson', revenue: 92000, target: 90000, percentOfTarget: 102, progress: 24.3, status: 'excellent' }
                            ]
                        },
                        'Team Emily': {
                            percentage: 74,
                            revenue: 222000,
                            target: 300000,
                            reps: [
                                { name: 'Thomas Anderson', revenue: 85000, target: 90000, percentOfTarget: 94, progress: 25, status: 'good' },
                                { name: 'Emily Davis', revenue: 80000, target: 90000, percentOfTarget: 89, progress: 23.5, status: 'good' }
                            ]
                        },
                        'Team Sophie': {
                            percentage: 76,
                            revenue: 228000,
                            target: 300000,
                            reps: [
                                { name: 'Daniel Kim', revenue: 82000, target: 90000, percentOfTarget: 91, progress: 22.8, status: 'good' },
                                { name: 'Rachel Green', revenue: 78000, target: 90000, percentOfTarget: 87, progress: 21.5, status: 'good' }
                            ]
                        }
                    }
                }
            }
        }
    },
    acv: {
        'S&S': {
            percentage: 88,
            target: 2000000,
            topRevenue: [
                { name: 'William Turner', revenue: 225000, percentOfTarget: 113 },
                { name: 'Elizabeth Hall', revenue: 218000, percentOfTarget: 109 },
                { name: 'Richard Allen', revenue: 212000, percentOfTarget: 106 },
                { name: 'Barbara King', revenue: 208000, percentOfTarget: 104 },
                { name: 'Joseph Wright', revenue: 205000, percentOfTarget: 103 }
            ],
            topProgress: [
                { name: 'William Turner', previousWeek: 180000, current: 225000, progress: 25, percentOfTarget: 113 },
                { name: 'Elizabeth Hall', previousWeek: 175000, current: 218000, progress: 24.6, percentOfTarget: 109 },
                { name: 'Richard Allen', previousWeek: 170000, current: 212000, progress: 24.7, percentOfTarget: 106 },
                { name: 'Barbara King', previousWeek: 168000, current: 208000, progress: 23.8, percentOfTarget: 104 },
                { name: 'Joseph Wright', previousWeek: 165000, current: 205000, progress: 24.2, percentOfTarget: 103 }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 90,
                    revenue: 1800000,
                    target: 2000000,
                    reps: [
                        { name: 'William Turner', revenue: 225000, target: 200000, percentOfTarget: 113, progress: 25, status: 'excellent' },
                        { name: 'Elizabeth Hall', revenue: 218000, target: 200000, percentOfTarget: 109, progress: 24.6, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 86,
                    revenue: 1720000,
                    target: 2000000,
                    reps: [
                        { name: 'Richard Allen', revenue: 212000, target: 200000, percentOfTarget: 106, progress: 24.7, status: 'excellent' },
                        { name: 'Barbara King', revenue: 208000, target: 200000, percentOfTarget: 104, progress: 23.8, status: 'excellent' }
                    ]
                },
                'Team Sophie': {
                    percentage: 88,
                    revenue: 1760000,
                    target: 2000000,
                    reps: [
                        { name: 'Joseph Wright', revenue: 205000, target: 200000, percentOfTarget: 103, progress: 24.2, status: 'excellent' },
                        { name: 'Dorothy Lopez', revenue: 202000, target: 200000, percentOfTarget: 101, progress: 23.5, status: 'excellent' }
                    ]
                }
            }
        },
        SL: {
            percentage: 76,
            target: 1500000,
            topRevenue: [
                { name: 'Thomas Green', revenue: 165000, percentOfTarget: 110 },
                { name: 'Susan Baker', revenue: 158000, percentOfTarget: 105 },
                { name: 'Charles Evans', revenue: 152000, percentOfTarget: 101 },
                { name: 'Margaret Collins', revenue: 148000, percentOfTarget: 99 },
                { name: 'Donald Stewart', revenue: 145000, percentOfTarget: 97 }
            ],
            topProgress: [
                { name: 'Thomas Green', previousWeek: 130000, current: 165000, progress: 26.9, percentOfTarget: 110 },
                { name: 'Susan Baker', previousWeek: 125000, current: 158000, progress: 26.4, percentOfTarget: 105 },
                { name: 'Charles Evans', previousWeek: 122000, current: 152000, progress: 24.6, percentOfTarget: 101 },
                { name: 'Margaret Collins', previousWeek: 120000, current: 148000, progress: 23.3, percentOfTarget: 99 },
                { name: 'Donald Stewart', previousWeek: 118000, current: 145000, progress: 22.9, percentOfTarget: 97 }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 78,
                    revenue: 1170000,
                    target: 1500000,
                    reps: [
                        { name: 'Thomas Green', revenue: 165000, target: 150000, percentOfTarget: 110, progress: 26.9, status: 'excellent' },
                        { name: 'Susan Baker', revenue: 158000, target: 150000, percentOfTarget: 105, progress: 26.4, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 74,
                    revenue: 1110000,
                    target: 1500000,
                    reps: [
                        { name: 'Charles Evans', revenue: 152000, target: 150000, percentOfTarget: 101, progress: 24.6, status: 'excellent' },
                        { name: 'Margaret Collins', revenue: 148000, target: 150000, percentOfTarget: 99, progress: 23.3, status: 'good' }
                    ]
                },
                'Team Sophie': {
                    percentage: 76,
                    revenue: 1140000,
                    target: 1500000,
                    reps: [
                        { name: 'Donald Stewart', revenue: 145000, target: 150000, percentOfTarget: 97, progress: 22.9, status: 'good' },
                        { name: 'Carol Morris', revenue: 142000, target: 150000, percentOfTarget: 95, progress: 22.1, status: 'good' }
                    ]
                }
            }
        },
        SaaS: {
            percentage: 92,
            target: 2500000,
            topRevenue: [
                { name: 'Matthew Rogers', revenue: 285000, percentOfTarget: 114 },
                { name: 'Betty Reed', revenue: 278000, percentOfTarget: 111 },
                { name: 'Anthony Cook', revenue: 272000, percentOfTarget: 109 },
                { name: 'Sandra Morgan', revenue: 268000, percentOfTarget: 107 },
                { name: 'Mark Bell', revenue: 265000, percentOfTarget: 106 }
            ],
            topProgress: [
                { name: 'Matthew Rogers', previousWeek: 225000, current: 285000, progress: 26.7, percentOfTarget: 114 },
                { name: 'Betty Reed', previousWeek: 220000, current: 278000, progress: 26.4, percentOfTarget: 111 },
                { name: 'Anthony Cook', previousWeek: 218000, current: 272000, progress: 24.8, percentOfTarget: 109 },
                { name: 'Sandra Morgan', previousWeek: 215000, current: 268000, progress: 24.7, percentOfTarget: 107 },
                { name: 'Mark Bell', previousWeek: 212000, current: 265000, progress: 25, percentOfTarget: 106 }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 94,
                    revenue: 2350000,
                    target: 2500000,
                    reps: [
                        { name: 'Matthew Rogers', revenue: 285000, target: 250000, percentOfTarget: 114, progress: 26.7, status: 'excellent' },
                        { name: 'Betty Reed', revenue: 278000, target: 250000, percentOfTarget: 111, progress: 26.4, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 90,
                    revenue: 2250000,
                    target: 2500000,
                    reps: [
                        { name: 'Anthony Cook', revenue: 272000, target: 250000, percentOfTarget: 109, progress: 24.8, status: 'excellent' },
                        { name: 'Sandra Morgan', revenue: 268000, target: 250000, percentOfTarget: 107, progress: 24.7, status: 'excellent' }
                    ]
                },
                'Team Sophie': {
                    percentage: 92,
                    revenue: 2300000,
                    target: 2500000,
                    reps: [
                        { name: 'Mark Bell', revenue: 265000, target: 250000, percentOfTarget: 106, progress: 25, status: 'excellent' },
                        { name: 'Helen Murphy', revenue: 262000, target: 250000, percentOfTarget: 105, progress: 24.5, status: 'excellent' }
                    ]
                }
            }
        }
    }
};

const slogans = {
    50: "Warming up!",
    60: "Getting moving!",
    70: "Keep pushing!",
    80: "Nearly there!",
    90: "Strong finish!",
    100: "Target smashed!"
};

// Made with Bob
