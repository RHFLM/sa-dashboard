// ============================================
// DATA CONFIGURATION - Populated from CEDP ISC Data (Won deals, 2026FY)
// Last extracted: 2026-06-23
// Quarter ranges: Q1=Jan-Mar, Q2=Apr-Jun, Q3=Jul-Sep, Q4=Oct-Dec
// ============================================
const dashboardData = {
    growth: {
        upgrade: {
            percentage: 66,
            target: 12000000,
            current: 7935268,
            topRevenue: [
                { name: 'Eoin Macentee', revenue: 2579000, percentOfTarget: 21 },
                { name: 'Danilo Giordano', revenue: 1495567, percentOfTarget: 12 },
                { name: 'Catherine Hoey', revenue: 671963, percentOfTarget: 6 },
                { name: 'Nohelia Vargas Lopez', revenue: 515120, percentOfTarget: 4 },
                { name: 'Pawel Herda', revenue: 448992, percentOfTarget: 4 }
            ],
            topProgress: [
                { name: 'Eoin Macentee', previousWeek: 0, current: 2579000, progress: 2579000, percentOfTarget: 21 },
                { name: 'Danilo Giordano', previousWeek: 0, current: 1495567, progress: 1495567, percentOfTarget: 12 },
                { name: 'Catherine Hoey', previousWeek: 0, current: 671963, progress: 671963, percentOfTarget: 6 },
                { name: 'Nohelia Vargas Lopez', previousWeek: 0, current: 515120, progress: 515120, percentOfTarget: 4 },
                { name: 'Pawel Herda', previousWeek: 0, current: 448992, progress: 448992, percentOfTarget: 4 }
            ],
            teams: {
                'DACH — Data Withheld Data Withheld': {
                    percentage: 53,
                    revenue: 2620837,
                    target: 4950000,
                    market: 'dach',
                    reps: [
                        { name: 'Eoin Macentee', revenue: 2579000, target: 5360000, percentOfTarget: 48, progress: 2579000, region: 'dach', q1: 2579000, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Data Withheld Data Withheld', revenue: 41837, target: 90000, percentOfTarget: 46, progress: 41837, region: 'dach', q1: 0, q2: 41837, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'Italy — Luca Cialdella': {
                    percentage: 52,
                    revenue: 1495567,
                    target: 2850000,
                    market: 'italy',
                    reps: [
                        { name: 'Danilo Giordano', revenue: 1495567, target: 3140000, percentOfTarget: 48, progress: 1495567, region: 'italy', q1: 1495567, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'UKI — Malin Manning': {
                    percentage: 53,
                    revenue: 1170054,
                    target: 2200000,
                    market: 'uki',
                    reps: [
                        { name: 'Catherine Hoey', revenue: 671963, target: 1390000, percentOfTarget: 48, progress: 671963, region: 'uki', q1: 671963, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Mohit Kapoor', revenue: 297000, target: 610000, percentOfTarget: 49, progress: 297000, region: 'uki', q1: 0, q2: 297000, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Clifford Codd', revenue: 201091, target: 420000, percentOfTarget: 48, progress: 201091, region: 'uki', q1: 201091, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Ryan Hughes': {
                    percentage: 54,
                    revenue: 515120,
                    target: 950000,
                    market: 'ncee',
                    reps: [
                        { name: 'Nohelia Vargas Lopez', revenue: 515120, target: 1050000, percentOfTarget: 49, progress: 515120, region: 'ncee', q1: 515120, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'DACH — BETTINA CURRAN': {
                    percentage: 54,
                    revenue: 486424,
                    target: 900000,
                    market: 'dach',
                    reps: [
                        { name: 'Ouafaa Lebbat', revenue: 314424, target: 640000, percentOfTarget: 49, progress: 314424, region: 'dach', q1: 0, q2: 314424, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Norbert Fehrenbach', revenue: 172000, target: 350000, percentOfTarget: 49, progress: 172000, region: 'dach', q1: 172000, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'DACH — David Linnie': {
                    percentage: 53,
                    revenue: 448992,
                    target: 850000,
                    market: 'dach',
                    reps: [
                        { name: 'Pawel Herda', revenue: 448992, target: 940000, percentOfTarget: 48, progress: 448992, region: 'dach', q1: 0, q2: 448992, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'MEA — Mohamed El-hussein': {
                    percentage: 53,
                    revenue: 400000,
                    target: 750000,
                    market: 'mea',
                    reps: [
                        { name: 'Younes Meskini', revenue: 400000, target: 830000, percentOfTarget: 48, progress: 400000, region: 'mea', q1: 400000, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Sofie Van Acker': {
                    percentage: 52,
                    revenue: 261636,
                    target: 500000,
                    market: 'ncee',
                    reps: [
                        { name: 'Urska Bricelj', revenue: 261636, target: 550000, percentOfTarget: 48, progress: 261636, region: 'ncee', q1: 187500, q2: 74136, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'MEA — Mennatullah Abdel-Hamid': {
                    percentage: 53,
                    revenue: 210139,
                    target: 400000,
                    market: 'mea',
                    reps: [
                        { name: 'Amina Khomsi Zobkhi', revenue: 210139, target: 440000, percentOfTarget: 48, progress: 210139, region: 'mea', q1: 210139, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Emilie Peloille': {
                    percentage: 53,
                    revenue: 187000,
                    target: 350000,
                    market: 'ncee',
                    reps: [
                        { name: 'Beatriz Donnelly', revenue: 187000, target: 390000, percentOfTarget: 48, progress: 187000, region: 'ncee', q1: 0, q2: 187000, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'France — Gregori Lafont': {
                    percentage: 64,
                    revenue: 64023,
                    target: 100000,
                    market: 'france',
                    reps: [
                        { name: 'Charlene Charrier', revenue: 64023, target: 110000, percentOfTarget: 58, progress: 64023, region: 'france', q1: 64023, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Anne-sophie Verdonck': {
                    percentage: 39,
                    revenue: 39000,
                    target: 100000,
                    market: 'ncee',
                    reps: [
                        { name: 'Bart Dekempe', revenue: 39000, target: 110000, percentOfTarget: 35, progress: 39000, region: 'ncee', q1: 39000, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'SPGI — Isabel Sanz': {
                    percentage: 36,
                    revenue: 36476,
                    target: 100000,
                    market: 'spgi',
                    reps: [
                        { name: 'Vera Costa', revenue: 36476, target: 110000, percentOfTarget: 33, progress: 36476, region: 'spgi', q1: 36476, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                }
            }
        },
        'trade-up': {
            percentage: 65,
            target: 12000000,
            current: 7822438,
            topRevenue: [
                { name: 'Sana Bhagat', revenue: 2417058, percentOfTarget: 20 },
                { name: 'Beatriz Donnelly', revenue: 1745083, percentOfTarget: 15 },
                { name: 'Younes Meskini', revenue: 1513773, percentOfTarget: 13 },
                { name: 'Nohelia Vargas Lopez', revenue: 790810, percentOfTarget: 7 },
                { name: 'Urska Bricelj', revenue: 488332, percentOfTarget: 4 }
            ],
            topProgress: [
                { name: 'Sana Bhagat', previousWeek: 0, current: 2417058, progress: 2417058, percentOfTarget: 20 },
                { name: 'Beatriz Donnelly', previousWeek: 0, current: 1745083, progress: 1745083, percentOfTarget: 15 },
                { name: 'Younes Meskini', previousWeek: 0, current: 1513773, progress: 1513773, percentOfTarget: 13 },
                { name: 'Nohelia Vargas Lopez', previousWeek: 0, current: 790810, progress: 790810, percentOfTarget: 7 },
                { name: 'Urska Bricelj', previousWeek: 0, current: 488332, progress: 488332, percentOfTarget: 4 }
            ],
            teams: {
                'MEA — Mennatullah Abdel-Hamid': {
                    percentage: 52,
                    revenue: 2417058,
                    target: 4650000,
                    market: 'mea',
                    reps: [
                        { name: 'Sana Bhagat', revenue: 2417058, target: 5120000, percentOfTarget: 47, progress: 2417058, region: 'mea', q1: 1859729, q2: 557329, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Emilie Peloille': {
                    percentage: 52,
                    revenue: 1745083,
                    target: 3350000,
                    market: 'ncee',
                    reps: [
                        { name: 'Beatriz Donnelly', revenue: 1745083, target: 3690000, percentOfTarget: 47, progress: 1745083, region: 'ncee', q1: 1745083, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'MEA — Mohamed El-hussein': {
                    percentage: 52,
                    revenue: 1513773,
                    target: 2900000,
                    market: 'mea',
                    reps: [
                        { name: 'Younes Meskini', revenue: 1513773, target: 3190000, percentOfTarget: 47, progress: 1513773, region: 'mea', q1: 706773, q2: 807000, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Ryan Hughes': {
                    percentage: 53,
                    revenue: 790810,
                    target: 1500000,
                    market: 'ncee',
                    reps: [
                        { name: 'Nohelia Vargas Lopez', revenue: 790810, target: 1650000, percentOfTarget: 48, progress: 790810, region: 'ncee', q1: 348721, q2: 442090, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Sofie Van Acker': {
                    percentage: 51,
                    revenue: 488332,
                    target: 950000,
                    market: 'ncee',
                    reps: [
                        { name: 'Urska Bricelj', revenue: 488332, target: 1050000, percentOfTarget: 47, progress: 488332, region: 'ncee', q1: 430608, q2: 57724, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'Italy — Luca Cialdella': {
                    percentage: 51,
                    revenue: 382929,
                    target: 750000,
                    market: 'italy',
                    reps: [
                        { name: 'Danilo Giordano', revenue: 382929, target: 830000, percentOfTarget: 46, progress: 382929, region: 'italy', q1: 382929, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'France — Gregori Lafont': {
                    percentage: 54,
                    revenue: 134213,
                    target: 250000,
                    market: 'france',
                    reps: [
                        { name: 'Charlene Charrier', revenue: 134213, target: 280000, percentOfTarget: 48, progress: 134213, region: 'france', q1: 0, q2: 134213, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'UKI — Malin Manning': {
                    percentage: 52,
                    revenue: 131000,
                    target: 250000,
                    market: 'uki',
                    reps: [
                        { name: 'Ciaran Lonergan', revenue: 131000, target: 280000, percentOfTarget: 47, progress: 131000, region: 'uki', q1: 0, q2: 131000, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'DACH — Data Withheld Data Withheld': {
                    percentage: 59,
                    revenue: 117327,
                    target: 200000,
                    market: 'dach',
                    reps: [
                        { name: 'Thomas Devlin', revenue: 72455, target: 140000, percentOfTarget: 52, progress: 72455, region: 'dach', q1: 0, q2: 72455, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Data Withheld Data Withheld', revenue: 44872, target: 80000, percentOfTarget: 56, progress: 44872, region: 'dach', q1: 5500, q2: 39372, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'SPGI — Isabel Sanz': {
                    percentage: 56,
                    revenue: 83339,
                    target: 150000,
                    market: 'spgi',
                    reps: [
                        { name: 'Vera Costa', revenue: 50199, target: 100000, percentOfTarget: 50, progress: 50199, region: 'spgi', q1: 50199, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Rui Carvalho', revenue: 28352, target: 60000, percentOfTarget: 47, progress: 28352, region: 'spgi', q1: 2678, q2: 25673, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Donato Moscato', revenue: 4788, target: 50000, percentOfTarget: 10, progress: 4788, region: 'spgi', q1: 0, q2: 4788, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'DACH — David Linnie': {
                    percentage: 19,
                    revenue: 18574,
                    target: 100000,
                    market: 'dach',
                    reps: [
                        { name: 'Silvia Habova', revenue: 15130, target: 90000, percentOfTarget: 17, progress: 15130, region: 'dach', q1: 15130, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Mark Bohan', revenue: 3444, target: 50000, percentOfTarget: 7, progress: 3444, region: 'dach', q1: 3444, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                }
            }
        },
        cap: {
            percentage: 3,
            target: 2000000,
            current: 54731,
            topRevenue: [
                { name: 'Soufiane Azzane', revenue: 54731, percentOfTarget: 0 }
            ],
            topProgress: [
                { name: 'Soufiane Azzane', previousWeek: 0, current: 54731, progress: 54731, percentOfTarget: 3 }
            ],
            teams: {
                'France — Gregori Lafont': {
                    percentage: 2,
                    revenue: 54731,
                    target: 2500000,
                    market: 'france',
                    reps: [
                        { name: 'Soufiane Azzane', revenue: 54731, target: 2750000, percentOfTarget: 2, progress: 54731, region: 'france', q1: 54731, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                }
            }
        },
        recovery: {
            percentage: 79,
            target: 70000000,
            current: 55509561,
            topRevenue: [
                { name: 'Clifford Codd', revenue: 33853756, percentOfTarget: 282 },
                { name: 'Shahd Hesham', revenue: 6058764, percentOfTarget: 50 },
                { name: 'Danilo Giordano', revenue: 3283738, percentOfTarget: 27 },
                { name: 'Nohelia Vargas Lopez', revenue: 1505779, percentOfTarget: 13 },
                { name: 'Urska Bricelj', revenue: 1481223, percentOfTarget: 12 }
            ],
            topProgress: [
                { name: 'Clifford Codd', previousWeek: 0, current: 33853756, progress: 33853756, percentOfTarget: 48 },
                { name: 'Shahd Hesham', previousWeek: 0, current: 6058764, progress: 6058764, percentOfTarget: 9 },
                { name: 'Danilo Giordano', previousWeek: 0, current: 3283738, progress: 3283738, percentOfTarget: 5 },
                { name: 'Nohelia Vargas Lopez', previousWeek: 0, current: 1505779, progress: 1505779, percentOfTarget: 2 },
                { name: 'Urska Bricelj', previousWeek: 0, current: 1481223, progress: 1481223, percentOfTarget: 2 }
            ],
            teams: {
                'UKI — Malin Manning': {
                    percentage: 63,
                    revenue: 34037445,
                    target: 53650000,
                    market: 'uki',
                    reps: [
                        { name: 'Clifford Codd', revenue: 33853756, target: 58700000, percentOfTarget: 58, progress: 33853756, region: 'uki', q1: 33853756, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Brian Dowling', revenue: 78052, target: 140000, percentOfTarget: 56, progress: 78052, region: 'uki', q1: 78052, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Mohit Kapoor', revenue: 38669, target: 70000, percentOfTarget: 55, progress: 38669, region: 'uki', q1: 38669, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Catherine Hoey', revenue: 36448, target: 60000, percentOfTarget: 61, progress: 36448, region: 'uki', q1: 36448, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Lilia Solodcaia', revenue: 26582, target: 50000, percentOfTarget: 53, progress: 26582, region: 'uki', q1: 0, q2: 26582, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'AIDAN HOOLAHAN', revenue: 3937, target: 50000, percentOfTarget: 8, progress: 3937, region: 'uki', q1: 3937, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'MEA — Charbel Antonios': {
                    percentage: 63,
                    revenue: 7390035,
                    target: 11650000,
                    market: 'mea',
                    reps: [
                        { name: 'Shahd Hesham', revenue: 6058764, target: 10510000, percentOfTarget: 58, progress: 6058764, region: 'mea', q1: 1059759, q2: 4999005, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Moshibudi B Mahlo', revenue: 966582, target: 1680000, percentOfTarget: 58, progress: 966582, region: 'mea', q1: 0, q2: 966582, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Manal Algarni', revenue: 279690, target: 490000, percentOfTarget: 57, progress: 279690, region: 'mea', q1: 279690, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Mai Ahmad', revenue: 85000, target: 150000, percentOfTarget: 57, progress: 85000, region: 'mea', q1: 0, q2: 85000, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'Italy — Luca Cialdella': {
                    percentage: 63,
                    revenue: 3614471,
                    target: 5700000,
                    market: 'italy',
                    reps: [
                        { name: 'Danilo Giordano', revenue: 3283738, target: 5700000, percentOfTarget: 58, progress: 3283738, region: 'italy', q1: 406896, q2: 2876842, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Massimo Giannetta', revenue: 330733, target: 570000, percentOfTarget: 58, progress: 330733, region: 'italy', q1: 0, q2: 330733, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Ryan Hughes': {
                    percentage: 64,
                    revenue: 1505779,
                    target: 2350000,
                    market: 'ncee',
                    reps: [
                        { name: 'Nohelia Vargas Lopez', revenue: 1505779, target: 2580000, percentOfTarget: 58, progress: 1505779, region: 'ncee', q1: 231694, q2: 1274085, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Katarina Lancz', revenue: 0, target: 50000, percentOfTarget: 0, progress: 0, region: 'ncee', q1: 0, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'MEA — Mohamed El-hussein': {
                    percentage: 63,
                    revenue: 1487893,
                    target: 2350000,
                    market: 'mea',
                    reps: [
                        { name: 'Marie Shawky', revenue: 464389, target: 810000, percentOfTarget: 57, progress: 464389, region: 'mea', q1: 464389, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Daniel Gajek', revenue: 415057, target: 720000, percentOfTarget: 58, progress: 415057, region: 'mea', q1: 161271, q2: 253786, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Tamer Mohamed Bahaa Eldin', revenue: 263836, target: 460000, percentOfTarget: 57, progress: 263836, region: 'mea', q1: 0, q2: 263836, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Sajid Ali Khan', revenue: 219435, target: 380000, percentOfTarget: 58, progress: 219435, region: 'mea', q1: 0, q2: 219435, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Yasir Saleem', revenue: 125175, target: 220000, percentOfTarget: 57, progress: 125175, region: 'mea', q1: 0, q2: 125175, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Sofie Van Acker': {
                    percentage: 63,
                    revenue: 1481223,
                    target: 2350000,
                    market: 'ncee',
                    reps: [
                        { name: 'Urska Bricelj', revenue: 1481223, target: 2580000, percentOfTarget: 57, progress: 1481223, region: 'ncee', q1: 457903, q2: 1023321, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'MEA — Mennatullah Abdel-Hamid': {
                    percentage: 64,
                    revenue: 1435019,
                    target: 2250000,
                    market: 'mea',
                    reps: [
                        { name: 'Hussein M El-assiouty', revenue: 494199, target: 850000, percentOfTarget: 58, progress: 494199, region: 'mea', q1: 136858, q2: 357341, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Tania Scheepers', revenue: 423915, target: 730000, percentOfTarget: 58, progress: 423915, region: 'mea', q1: 0, q2: 423915, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Amina Khomsi Zobkhi', revenue: 183998, target: 320000, percentOfTarget: 57, progress: 183998, region: 'mea', q1: 96860, q2: 87139, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Cagla Seher Gurer', revenue: 121800, target: 210000, percentOfTarget: 58, progress: 121800, region: 'mea', q1: 0, q2: 121800, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Isil Baygan', revenue: 108000, target: 190000, percentOfTarget: 57, progress: 108000, region: 'mea', q1: 108000, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Rima Alsunaid', revenue: 103107, target: 180000, percentOfTarget: 57, progress: 103107, region: 'mea', q1: 0, q2: 103107, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Emilie Peloille': {
                    percentage: 63,
                    revenue: 1173660,
                    target: 1850000,
                    market: 'ncee',
                    reps: [
                        { name: 'Beatriz Donnelly', revenue: 1173660, target: 2040000, percentOfTarget: 58, progress: 1173660, region: 'ncee', q1: 492892, q2: 680768, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'UKI — Danny Rowark': {
                    percentage: 62,
                    revenue: 1000000,
                    target: 1600000,
                    market: 'uki',
                    reps: [
                        { name: 'Mark Smith', revenue: 1000000, target: 1760000, percentOfTarget: 57, progress: 1000000, region: 'uki', q1: 1000000, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'SPGI — Isabel Sanz': {
                    percentage: 63,
                    revenue: 907575,
                    target: 1450000,
                    market: 'spgi',
                    reps: [
                        { name: 'Liat Shoshani', revenue: 341688, target: 600000, percentOfTarget: 57, progress: 341688, region: 'spgi', q1: 32340, q2: 309348, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Silvia Garcia Sanchez', revenue: 233722, target: 410000, percentOfTarget: 57, progress: 233722, region: 'spgi', q1: 0, q2: 233722, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Liene Korsiete', revenue: 156000, target: 270000, percentOfTarget: 58, progress: 156000, region: 'spgi', q1: 50000, q2: 106000, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Antonio Scarfato', revenue: 54720, target: 100000, percentOfTarget: 55, progress: 54720, region: 'spgi', q1: 54720, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Adrian Alvarez Troncoso', revenue: 53625, target: 90000, percentOfTarget: 60, progress: 53625, region: 'spgi', q1: 13124, q2: 40501, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Evangelos (Vagelis) Papaioannou', revenue: 40436, target: 70000, percentOfTarget: 58, progress: 40436, region: 'spgi', q1: 0, q2: 40436, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Rui Carvalho', revenue: 22307, target: 50000, percentOfTarget: 45, progress: 22307, region: 'spgi', q1: 22307, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Silvia Demontis', revenue: 5077, target: 50000, percentOfTarget: 10, progress: 5077, region: 'spgi', q1: 2235, q2: 2842, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'France — Gregori Lafont': {
                    percentage: 64,
                    revenue: 667499,
                    target: 1050000,
                    market: 'france',
                    reps: [
                        { name: 'Charlene Charrier', revenue: 264028, target: 460000, percentOfTarget: 57, progress: 264028, region: 'france', q1: 223695, q2: 40333, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Guillaume T`kint', revenue: 78316, target: 140000, percentOfTarget: 56, progress: 78316, region: 'france', q1: 0, q2: 78316, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'David Rudd', revenue: 74202, target: 130000, percentOfTarget: 57, progress: 74202, region: 'france', q1: 62720, q2: 11482, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Nathan Carton', revenue: 68972, target: 120000, percentOfTarget: 57, progress: 68972, region: 'france', q1: 2995, q2: 65977, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Ahlonko Komla', revenue: 60303, target: 100000, percentOfTarget: 60, progress: 60303, region: 'france', q1: 0, q2: 60303, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Loic Etienne', revenue: 41681, target: 70000, percentOfTarget: 60, progress: 41681, region: 'france', q1: 41681, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Christopher Ammar', revenue: 41033, target: 70000, percentOfTarget: 59, progress: 41033, region: 'france', q1: 28222, q2: 12811, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Maxime Garcia', revenue: 25000, target: 50000, percentOfTarget: 50, progress: 25000, region: 'france', q1: 0, q2: 25000, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Nader (Nader) Farag', revenue: 13965, target: 50000, percentOfTarget: 28, progress: 13965, region: 'france', q1: 0, q2: 13965, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'France — Frederic Derieux': {
                    percentage: 61,
                    revenue: 272901,
                    target: 450000,
                    market: 'france',
                    reps: [
                        { name: 'Andre Laposi', revenue: 144150, target: 260000, percentOfTarget: 55, progress: 144150, region: 'france', q1: 0, q2: 144150, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Philippe Toy Riont', revenue: 123000, target: 220000, percentOfTarget: 56, progress: 123000, region: 'france', q1: 123000, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Andre Deville', revenue: 5751, target: 50000, percentOfTarget: 12, progress: 5751, region: 'france', q1: 5751, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'UKI — Giuseppe Aurilia': {
                    percentage: 68,
                    revenue: 169881,
                    target: 250000,
                    market: 'uki',
                    reps: [
                        { name: 'Claire Dunne', revenue: 103694, target: 170000, percentOfTarget: 61, progress: 103694, region: 'uki', q1: 103694, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Ladislav Michalek', revenue: 33725, target: 50000, percentOfTarget: 67, progress: 33725, region: 'uki', q1: 0, q2: 0, q3: 0, q4: 33725, status: 'needs-improvement' },
                        { name: 'Gloria Joshy', revenue: 21000, target: 50000, percentOfTarget: 42, progress: 21000, region: 'uki', q1: 0, q2: 21000, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Christopher Verdelli-mason', revenue: 7463, target: 50000, percentOfTarget: 15, progress: 7463, region: 'uki', q1: 7463, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'David O`brien', revenue: 4000, target: 50000, percentOfTarget: 8, progress: 4000, region: 'uki', q1: 0, q2: 4000, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'DACH — BETTINA CURRAN': {
                    percentage: 64,
                    revenue: 158958,
                    target: 250000,
                    market: 'dach',
                    reps: [
                        { name: 'Data Withheld Data Withheld', revenue: 158958, target: 280000, percentOfTarget: 57, progress: 158958, region: 'dach', q1: 0, q2: 158958, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'DACH — Data Withheld Data Withheld': {
                    percentage: 62,
                    revenue: 154247,
                    target: 250000,
                    market: 'dach',
                    reps: [
                        { name: 'Data Withheld Data Withheld', revenue: 154247, target: 280000, percentOfTarget: 55, progress: 154247, region: 'dach', q1: 97000, q2: 57247, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'UKI — Dushmanta Roy': {
                    percentage: 33,
                    revenue: 33007,
                    target: 100000,
                    market: 'uki',
                    reps: [
                        { name: 'Julian Perkins', revenue: 33007, target: 110000, percentOfTarget: 30, progress: 33007, region: 'uki', q1: 33007, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'Italy — Maria Antonietta (Antonella) Tartaglia': {
                    percentage: 10,
                    revenue: 10000,
                    target: 100000,
                    market: 'italy',
                    reps: [
                        { name: 'Raffaella Serioli', revenue: 10000, target: 110000, percentOfTarget: 9, progress: 10000, region: 'italy', q1: 10000, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'DACH — David Linnie': {
                    percentage: 9,
                    revenue: 8967,
                    target: 100000,
                    market: 'dach',
                    reps: [
                        { name: 'Ciaran Mcguinness', revenue: 6733, target: 80000, percentOfTarget: 8, progress: 6733, region: 'dach', q1: 6733, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' },
                        { name: 'Mark Bohan', revenue: 2235, target: 50000, percentOfTarget: 4, progress: 2235, region: 'dach', q1: 2235, q2: 0, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                },
                'NCEE — Lars Lindegaard': {
                    percentage: 1,
                    revenue: 1000,
                    target: 100000,
                    market: 'ncee',
                    reps: [
                        { name: 'Christian Ladefoged', revenue: 1000, target: 110000, percentOfTarget: 1, progress: 1000, region: 'ncee', q1: 0, q2: 1000, q3: 0, q4: 0, status: 'needs-improvement' }
                    ]
                }
            }
        }
    },
    acv: {
        'S&S': {
            percentage: 88, target: 2000000,
            topRevenue: [
                { name: 'Placeholder Rep', revenue: 200000, percentOfTarget: 100 }
            ],
            topProgress: [
                { name: 'Placeholder Rep', previousWeek: 0, current: 200000, progress: 200000, percentOfTarget: 100 }
            ],
            teams: {
                'Team Placeholder': { percentage: 88, revenue: 1760000, target: 2000000, market: 'all',
                    reps: [{ name: 'Placeholder', revenue: 200000, target: 200000, percentOfTarget: 100, progress: 200000, region: 'all', q1: 50000, q2: 50000, q3: 50000, q4: 50000, status: 'good' }]
                }
            }
        }
    }
};

const slogans = {
    50: 'Warming up!',
    60: 'Getting moving!',
    70: 'Keep pushing!',
    80: 'Nearly there!',
    90: 'Strong finish!',
    100: 'Target smashed!'
};

// Made with Bob
