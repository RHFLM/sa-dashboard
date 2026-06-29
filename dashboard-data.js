// ============================================
// DATA CONFIGURATION - Populated from CEDP ISC Data (Won deals, 2026FY)
// Last extracted: 2026-06-23
// ============================================
const dashboardData = {
    growth: {
        upgrade: {
            percentage: Math.round((7935268 / 12000000) * 100),
            target: 12000000,
            current: 7935268,
            topRevenue: [
                { name: 'Danilo Giordano',       revenue: 1495567, percentOfTarget: Math.round((1495567/400000)*100) },
                { name: 'Eoin Macentee',          revenue: 2579000, percentOfTarget: Math.round((2579000/400000)*100) },
                { name: 'Catherine Hoey',         revenue: 671963,  percentOfTarget: Math.round((671963/400000)*100)  },
                { name: 'Mohit Kapoor',           revenue: 297000,  percentOfTarget: Math.round((297000/400000)*100)  },
                { name: 'Pawel Herda',            revenue: 448992,  percentOfTarget: Math.round((448992/400000)*100)  }
            ],
            topProgress: [
                { name: 'Eoin Macentee',          previousWeek: 0, current: 2579000, progress: 100, percentOfTarget: Math.round((2579000/400000)*100) },
                { name: 'Danilo Giordano',        previousWeek: 0, current: 1495567, progress: 100, percentOfTarget: Math.round((1495567/400000)*100) },
                { name: 'Pawel Herda',            previousWeek: 0, current: 448992,  progress: 100, percentOfTarget: Math.round((448992/400000)*100)  },
                { name: 'Catherine Hoey',         previousWeek: 0, current: 671963,  progress: 100, percentOfTarget: Math.round((671963/400000)*100)  },
                { name: 'Ouafaa Lebbat',          previousWeek: 0, current: 314424,  progress: 100, percentOfTarget: Math.round((314424/400000)*100)  }
            ],
            teams: {
                'UKI — Malin Manning': {
                    percentage: Math.round((1170054/2000000)*100),
                    revenue: 1170054,
                    target: 2000000,
                    reps: [
                        { name: 'Catherine Hoey',  revenue: 671963, target: 400000, percentOfTarget: Math.round((671963/400000)*100), progress: 100, status: 'excellent' },
                        { name: 'Mohit Kapoor',    revenue: 297000, target: 400000, percentOfTarget: Math.round((297000/400000)*100), progress: 100, status: 'good'      },
                        { name: 'Clifford Codd',   revenue: 201091, target: 400000, percentOfTarget: Math.round((201091/400000)*100), progress: 100, status: 'good'      }
                    ]
                },
                'DACH — Data Withheld Mgr': {
                    percentage: Math.round((2620837/3000000)*100),
                    revenue: 2620837,
                    target: 3000000,
                    reps: [
                        { name: 'Eoin Macentee',          revenue: 2579000, target: 2000000, percentOfTarget: Math.round((2579000/2000000)*100), progress: 100, status: 'excellent' },
                        { name: 'Data Withheld Rep',       revenue: 41837,   target: 500000,  percentOfTarget: Math.round((41837/500000)*100),    progress: 100, status: 'good'      }
                    ]
                },
                'DACH — Bettina Curran': {
                    percentage: Math.round((486424/1000000)*100),
                    revenue: 486424,
                    target: 1000000,
                    reps: [
                        { name: 'Ouafaa Lebbat',     revenue: 314424, target: 600000, percentOfTarget: Math.round((314424/600000)*100), progress: 100, status: 'good' },
                        { name: 'Norbert Fehrenbach', revenue: 172000, target: 400000, percentOfTarget: Math.round((172000/400000)*100), progress: 100, status: 'good' }
                    ]
                },
                'DACH — David Linnie': {
                    percentage: Math.round((448992/800000)*100),
                    revenue: 448992,
                    target: 800000,
                    reps: [
                        { name: 'Pawel Herda', revenue: 448992, target: 800000, percentOfTarget: Math.round((448992/800000)*100), progress: 100, status: 'good' }
                    ]
                },
                'Italy — Luca Cialdella': {
                    percentage: Math.round((1495567/2000000)*100),
                    revenue: 1495567,
                    target: 2000000,
                    reps: [
                        { name: 'Danilo Giordano', revenue: 1495567, target: 2000000, percentOfTarget: Math.round((1495567/2000000)*100), progress: 100, status: 'good' }
                    ]
                },
                'NCEE — Ryan Hughes': {
                    percentage: Math.round((515120/800000)*100),
                    revenue: 515120,
                    target: 800000,
                    reps: [
                        { name: 'Nohelia Vargas Lopez', revenue: 515120, target: 800000, percentOfTarget: Math.round((515120/800000)*100), progress: 100, status: 'good' }
                    ]
                },
                'NCEE — Sofie Van Acker': {
                    percentage: Math.round((261636/500000)*100),
                    revenue: 261636,
                    target: 500000,
                    reps: [
                        { name: 'Urska Bricelj', revenue: 261636, target: 500000, percentOfTarget: Math.round((261636/500000)*100), progress: 100, status: 'good' }
                    ]
                },
                'NCEE — Emilie Peloille': {
                    percentage: Math.round((187000/400000)*100),
                    revenue: 187000,
                    target: 400000,
                    reps: [
                        { name: 'Beatriz Donnelly', revenue: 187000, target: 400000, percentOfTarget: Math.round((187000/400000)*100), progress: 100, status: 'good' }
                    ]
                },
                'MEA — Mohamed El-hussein': {
                    percentage: Math.round((400000/600000)*100),
                    revenue: 400000,
                    target: 600000,
                    reps: [
                        { name: 'Younes Meskini', revenue: 400000, target: 600000, percentOfTarget: Math.round((400000/600000)*100), progress: 100, status: 'good' }
                    ]
                },
                'MEA — Mennatullah Abdel-Hamid': {
                    percentage: Math.round((210139/400000)*100),
                    revenue: 210139,
                    target: 400000,
                    reps: [
                        { name: 'Amina Khomsi Zobkhi', revenue: 210139, target: 400000, percentOfTarget: Math.round((210139/400000)*100), progress: 100, status: 'good' }
                    ]
                },
                'France — Gregori Lafont': {
                    percentage: Math.round((64023/200000)*100),
                    revenue: 64023,
                    target: 200000,
                    reps: [
                        { name: 'Charlene Charrier', revenue: 64023, target: 200000, percentOfTarget: Math.round((64023/200000)*100), progress: 100, status: 'good' }
                    ]
                },
                'SPGI — Isabel Sanz': {
                    percentage: Math.round((36476/200000)*100),
                    revenue: 36476,
                    target: 200000,
                    reps: [
                        { name: 'Vera Costa', revenue: 36476, target: 200000, percentOfTarget: Math.round((36476/200000)*100), progress: 100, status: 'good' }
                    ]
                }
            }
        },
        'trade-up': {
            percentage: Math.round((7822438 / 12000000) * 100),
            target: 12000000,
            current: 7822438,
            topRevenue: [
                { name: 'Sana Bhagat',         revenue: 2417058, percentOfTarget: Math.round((2417058/500000)*100) },
                { name: 'Beatriz Donnelly',     revenue: 1745083, percentOfTarget: Math.round((1745083/500000)*100) },
                { name: 'Younes Meskini',       revenue: 1513773, percentOfTarget: Math.round((1513773/500000)*100) },
                { name: 'Nohelia Vargas Lopez', revenue: 790810,  percentOfTarget: Math.round((790810/500000)*100)  },
                { name: 'Urska Bricelj',        revenue: 488332,  percentOfTarget: Math.round((488332/500000)*100)  }
            ],
            topProgress: [
                { name: 'Sana Bhagat',         previousWeek: 0, current: 2417058, progress: 100, percentOfTarget: Math.round((2417058/500000)*100) },
                { name: 'Beatriz Donnelly',     previousWeek: 0, current: 1745083, progress: 100, percentOfTarget: Math.round((1745083/500000)*100) },
                { name: 'Younes Meskini',       previousWeek: 0, current: 1513773, progress: 100, percentOfTarget: Math.round((1513773/500000)*100) },
                { name: 'Nohelia Vargas Lopez', previousWeek: 0, current: 790810,  progress: 100, percentOfTarget: Math.round((790810/500000)*100)  },
                { name: 'Danilo Giordano',      previousWeek: 0, current: 382929,  progress: 100, percentOfTarget: Math.round((382929/500000)*100)  }
            ],
            teams: {
                'MEA — Mennatullah Abdel-Hamid': {
                    percentage: Math.round((2417058/3000000)*100),
                    revenue: 2417058,
                    target: 3000000,
                    reps: [
                        { name: 'Sana Bhagat', revenue: 2417058, target: 3000000, percentOfTarget: Math.round((2417058/3000000)*100), progress: 100, status: 'good' }
                    ]
                },
                'NCEE — Emilie Peloille': {
                    percentage: Math.round((1745083/2000000)*100),
                    revenue: 1745083,
                    target: 2000000,
                    reps: [
                        { name: 'Beatriz Donnelly', revenue: 1745083, target: 2000000, percentOfTarget: Math.round((1745083/2000000)*100), progress: 100, status: 'good' }
                    ]
                },
                'MEA — Mohamed El-hussein': {
                    percentage: Math.round((1513773/2000000)*100),
                    revenue: 1513773,
                    target: 2000000,
                    reps: [
                        { name: 'Younes Meskini', revenue: 1513773, target: 2000000, percentOfTarget: Math.round((1513773/2000000)*100), progress: 100, status: 'good' }
                    ]
                },
                'NCEE — Ryan Hughes': {
                    percentage: Math.round((790810/1200000)*100),
                    revenue: 790810,
                    target: 1200000,
                    reps: [
                        { name: 'Nohelia Vargas Lopez', revenue: 790810, target: 1200000, percentOfTarget: Math.round((790810/1200000)*100), progress: 100, status: 'good' }
                    ]
                },
                'NCEE — Sofie Van Acker': {
                    percentage: Math.round((488332/800000)*100),
                    revenue: 488332,
                    target: 800000,
                    reps: [
                        { name: 'Urska Bricelj', revenue: 488332, target: 800000, percentOfTarget: Math.round((488332/800000)*100), progress: 100, status: 'good' }
                    ]
                },
                'Italy — Luca Cialdella': {
                    percentage: Math.round((382929/600000)*100),
                    revenue: 382929,
                    target: 600000,
                    reps: [
                        { name: 'Danilo Giordano', revenue: 382929, target: 600000, percentOfTarget: Math.round((382929/600000)*100), progress: 100, status: 'good' }
                    ]
                },
                'UKI — Malin Manning': {
                    percentage: Math.round((131000/400000)*100),
                    revenue: 131000,
                    target: 400000,
                    reps: [
                        { name: 'Ciaran Lonergan', revenue: 131000, target: 400000, percentOfTarget: Math.round((131000/400000)*100), progress: 100, status: 'good' }
                    ]
                },
                'France — Gregori Lafont': {
                    percentage: Math.round((134213/300000)*100),
                    revenue: 134213,
                    target: 300000,
                    reps: [
                        { name: 'Charlene Charrier', revenue: 134213, target: 300000, percentOfTarget: Math.round((134213/300000)*100), progress: 100, status: 'good' }
                    ]
                },
                'DACH — Data Withheld Mgr': {
                    percentage: Math.round((117327/300000)*100),
                    revenue: 117327,
                    target: 300000,
                    reps: [
                        { name: 'Thomas Devlin',       revenue: 72455, target: 200000, percentOfTarget: Math.round((72455/200000)*100),  progress: 100, status: 'good' },
                        { name: 'Data Withheld Rep',   revenue: 44872, target: 100000, percentOfTarget: Math.round((44872/100000)*100),  progress: 100, status: 'good' }
                    ]
                },
                'DACH — David Linnie': {
                    percentage: Math.round((18574/100000)*100),
                    revenue: 18574,
                    target: 100000,
                    reps: [
                        { name: 'Silvia Habova', revenue: 15130, target: 60000, percentOfTarget: Math.round((15130/60000)*100), progress: 100, status: 'good' },
                        { name: 'Mark Bohan',    revenue: 3444,  target: 40000, percentOfTarget: Math.round((3444/40000)*100),  progress: 100, status: 'good' }
                    ]
                },
                'SPGI — Isabel Sanz': {
                    percentage: Math.round((83339/200000)*100),
                    revenue: 83339,
                    target: 200000,
                    reps: [
                        { name: 'Vera Costa',     revenue: 50199, target: 100000, percentOfTarget: Math.round((50199/100000)*100), progress: 100, status: 'good' },
                        { name: 'Rui Carvalho',   revenue: 28352, target: 70000,  percentOfTarget: Math.round((28352/70000)*100),  progress: 100, status: 'good' },
                        { name: 'Donato Moscato', revenue: 4788,  target: 30000,  percentOfTarget: Math.round((4788/30000)*100),   progress: 100, status: 'good' }
                    ]
                }
            }
        },
        cap: {
            percentage: Math.round((54731 / 2000000) * 100),
            target: 2000000,
            current: 54731,
            topRevenue: [
                { name: 'Soufiane Azzane', revenue: 54731, percentOfTarget: Math.round((54731/200000)*100) }
            ],
            topProgress: [
                { name: 'Soufiane Azzane', previousWeek: 0, current: 54731, progress: 100, percentOfTarget: Math.round((54731/200000)*100) }
            ],
            teams: {
                'France — Gregori Lafont': {
                    percentage: Math.round((54731/500000)*100),
                    revenue: 54731,
                    target: 500000,
                    reps: [
                        { name: 'Soufiane Azzane', revenue: 54731, target: 200000, percentOfTarget: Math.round((54731/200000)*100), progress: 100, status: 'good' }
                    ]
                }
            }
        },
        recovery: {
            percentage: Math.round((55509560 / 70000000) * 100),
            target: 70000000,
            current: 55509560,
            topRevenue: [
                { name: 'Clifford Codd',    revenue: 33853756, percentOfTarget: Math.round((33853756/5000000)*100) },
                { name: 'Shahd Hesham',     revenue: 6058764,  percentOfTarget: Math.round((6058764/2000000)*100)  },
                { name: 'Danilo Giordano',  revenue: 3283738,  percentOfTarget: Math.round((3283738/2000000)*100)  },
                { name: 'Moshibudi B Mahlo',revenue: 966582,   percentOfTarget: Math.round((966582/500000)*100)    },
                { name: 'Hussein M El-assiouty', revenue: 494199, percentOfTarget: Math.round((494199/300000)*100) }
            ],
            topProgress: [
                { name: 'Clifford Codd',         previousWeek: 0, current: 33853756, progress: 100, percentOfTarget: Math.round((33853756/5000000)*100) },
                { name: 'Shahd Hesham',           previousWeek: 0, current: 6058764,  progress: 100, percentOfTarget: Math.round((6058764/2000000)*100)  },
                { name: 'Danilo Giordano',        previousWeek: 0, current: 3283738,  progress: 100, percentOfTarget: Math.round((3283738/2000000)*100)  },
                { name: 'Moshibudi B Mahlo',      previousWeek: 0, current: 966582,   progress: 100, percentOfTarget: Math.round((966582/500000)*100)    },
                { name: 'Beatriz Donnelly',       previousWeek: 0, current: 1173660,  progress: 100, percentOfTarget: Math.round((1173660/500000)*100)   }
            ],
            teams: {
                'UKI — Malin Manning': {
                    percentage: Math.round((34037445/40000000)*100),
                    revenue: 34037445,
                    target: 40000000,
                    reps: [
                        { name: 'Clifford Codd',   revenue: 33853756, target: 35000000, percentOfTarget: Math.round((33853756/35000000)*100), progress: 100, status: 'excellent' },
                        { name: 'Brian Dowling',   revenue: 78052,    target: 2000000,  percentOfTarget: Math.round((78052/2000000)*100),    progress: 100, status: 'good'      },
                        { name: 'Mohit Kapoor',    revenue: 38669,    target: 1000000,  percentOfTarget: Math.round((38669/1000000)*100),    progress: 100, status: 'good'      },
                        { name: 'Catherine Hoey',  revenue: 36448,    target: 1000000,  percentOfTarget: Math.round((36448/1000000)*100),    progress: 100, status: 'good'      },
                        { name: 'Lilia Solodcaia', revenue: 26582,    target: 500000,   percentOfTarget: Math.round((26582/500000)*100),     progress: 100, status: 'good'      },
                        { name: 'AIDAN HOOLAHAN',  revenue: 3937,     target: 500000,   percentOfTarget: Math.round((3937/500000)*100),      progress: 100, status: 'good'      }
                    ]
                },
                'UKI — Giuseppe Aurilia': {
                    percentage: Math.round((169881/500000)*100),
                    revenue: 169881,
                    target: 500000,
                    reps: [
                        { name: 'Claire Dunne',               revenue: 103694, target: 200000, percentOfTarget: Math.round((103694/200000)*100), progress: 100, status: 'good' },
                        { name: 'Ladislav Michalek',          revenue: 33725,  target: 100000, percentOfTarget: Math.round((33725/100000)*100),  progress: 100, status: 'good' },
                        { name: 'Gloria Joshy',               revenue: 21000,  target: 80000,  percentOfTarget: Math.round((21000/80000)*100),   progress: 100, status: 'good' },
                        { name: 'Christopher Verdelli-mason', revenue: 7463,   target: 80000,  percentOfTarget: Math.round((7463/80000)*100),    progress: 100, status: 'good' },
                        { name: "David O'brien",              revenue: 4000,   target: 40000,  percentOfTarget: Math.round((4000/40000)*100),    progress: 100, status: 'good' }
                    ]
                },
                'MEA — Charbel Antonios': {
                    percentage: Math.round((7390035/10000000)*100),
                    revenue: 7390035,
                    target: 10000000,
                    reps: [
                        { name: 'Shahd Hesham',     revenue: 6058764, target: 7000000, percentOfTarget: Math.round((6058764/7000000)*100), progress: 100, status: 'excellent' },
                        { name: 'Moshibudi B Mahlo', revenue: 966582,  target: 2000000, percentOfTarget: Math.round((966582/2000000)*100),  progress: 100, status: 'good'      },
                        { name: 'Manal Algarni',    revenue: 279690,  target: 600000,  percentOfTarget: Math.round((279690/600000)*100),   progress: 100, status: 'good'      },
                        { name: 'Mai Ahmad',        revenue: 85000,   target: 400000,  percentOfTarget: Math.round((85000/400000)*100),    progress: 100, status: 'good'      }
                    ]
                },
                'MEA — Mohamed El-hussein': {
                    percentage: Math.round((1487893/2000000)*100),
                    revenue: 1487893,
                    target: 2000000,
                    reps: [
                        { name: 'Marie Shawky',              revenue: 464389, target: 500000, percentOfTarget: Math.round((464389/500000)*100), progress: 100, status: 'good' },
                        { name: 'Daniel Gajek',              revenue: 415057, target: 500000, percentOfTarget: Math.round((415057/500000)*100), progress: 100, status: 'good' },
                        { name: 'Tamer Mohamed Bahaa Eldin',  revenue: 263836, target: 400000, percentOfTarget: Math.round((263836/400000)*100), progress: 100, status: 'good' },
                        { name: 'Sajid Ali Khan',            revenue: 219435, target: 400000, percentOfTarget: Math.round((219435/400000)*100), progress: 100, status: 'good' },
                        { name: 'Yasir Saleem',              revenue: 125175, target: 200000, percentOfTarget: Math.round((125175/200000)*100), progress: 100, status: 'good' }
                    ]
                },
                'MEA — Mennatullah Abdel-Hamid': {
                    percentage: Math.round((1435019/2000000)*100),
                    revenue: 1435019,
                    target: 2000000,
                    reps: [
                        { name: 'Hussein M El-assiouty', revenue: 494199, target: 600000, percentOfTarget: Math.round((494199/600000)*100), progress: 100, status: 'good' },
                        { name: 'Tania Scheepers',       revenue: 423915, target: 500000, percentOfTarget: Math.round((423915/500000)*100), progress: 100, status: 'good' },
                        { name: 'Amina Khomsi Zobkhi',   revenue: 183998, target: 400000, percentOfTarget: Math.round((183998/400000)*100), progress: 100, status: 'good' },
                        { name: 'Cagla Seher Gurer',     revenue: 121800, target: 300000, percentOfTarget: Math.round((121800/300000)*100), progress: 100, status: 'good' },
                        { name: 'Isil Baygan',           revenue: 108000, target: 200000, percentOfTarget: Math.round((108000/200000)*100), progress: 100, status: 'good' },
                        { name: 'Rima Alsunaid',         revenue: 103107, target: 200000, percentOfTarget: Math.round((103107/200000)*100), progress: 100, status: 'good' }
                    ]
                },
                'Italy — Luca Cialdella': {
                    percentage: Math.round((3614471/5000000)*100),
                    revenue: 3614471,
                    target: 5000000,
                    reps: [
                        { name: 'Danilo Giordano',   revenue: 3283738, target: 4000000, percentOfTarget: Math.round((3283738/4000000)*100), progress: 100, status: 'good' },
                        { name: 'Massimo Giannetta', revenue: 330733,  target: 1000000, percentOfTarget: Math.round((330733/1000000)*100),  progress: 100, status: 'good' }
                    ]
                },
                'NCEE — Ryan Hughes': {
                    percentage: Math.round((1505779/2000000)*100),
                    revenue: 1505779,
                    target: 2000000,
                    reps: [
                        { name: 'Nohelia Vargas Lopez', revenue: 1505779, target: 1900000, percentOfTarget: Math.round((1505779/1900000)*100), progress: 100, status: 'good' },
                        { name: 'Katarina Lancz',       revenue: 0,       target: 100000,  percentOfTarget: 0, progress: 0, status: 'good' }
                    ]
                },
                'NCEE — Sofie Van Acker': {
                    percentage: Math.round((1481223/2000000)*100),
                    revenue: 1481223,
                    target: 2000000,
                    reps: [
                        { name: 'Urska Bricelj', revenue: 1481223, target: 2000000, percentOfTarget: Math.round((1481223/2000000)*100), progress: 100, status: 'good' }
                    ]
                },
                'NCEE — Emilie Peloille': {
                    percentage: Math.round((1173660/2000000)*100),
                    revenue: 1173660,
                    target: 2000000,
                    reps: [
                        { name: 'Beatriz Donnelly', revenue: 1173660, target: 2000000, percentOfTarget: Math.round((1173660/2000000)*100), progress: 100, status: 'good' }
                    ]
                },
                'France — Frederic Derieux': {
                    percentage: Math.round((272901/500000)*100),
                    revenue: 272901,
                    target: 500000,
                    reps: [
                        { name: 'Andre Laposi',        revenue: 144150, target: 200000, percentOfTarget: Math.round((144150/200000)*100), progress: 100, status: 'good' },
                        { name: 'Philippe Toy Riont',  revenue: 123000, target: 200000, percentOfTarget: Math.round((123000/200000)*100), progress: 100, status: 'good' },
                        { name: 'Andre Deville',       revenue: 5751,   target: 100000, percentOfTarget: Math.round((5751/100000)*100),   progress: 100, status: 'good' }
                    ]
                },
                'France — Gregori Lafont': {
                    percentage: Math.round((667499/1000000)*100),
                    revenue: 667499,
                    target: 1000000,
                    reps: [
                        { name: 'Charlene Charrier',         revenue: 264028, target: 300000, percentOfTarget: Math.round((264028/300000)*100), progress: 100, status: 'good' },
                        { name: "Guillaume T'kint",          revenue: 78316,  target: 100000, percentOfTarget: Math.round((78316/100000)*100),  progress: 100, status: 'good' },
                        { name: 'David Rudd',                revenue: 74202,  target: 100000, percentOfTarget: Math.round((74202/100000)*100),  progress: 100, status: 'good' },
                        { name: 'Nathan Carton',             revenue: 68972,  target: 100000, percentOfTarget: Math.round((68972/100000)*100),  progress: 100, status: 'good' },
                        { name: 'Ahlonko Komla',             revenue: 60303,  target: 100000, percentOfTarget: Math.round((60303/100000)*100),  progress: 100, status: 'good' },
                        { name: 'Loic Etienne',              revenue: 41681,  target: 100000, percentOfTarget: Math.round((41681/100000)*100),  progress: 100, status: 'good' },
                        { name: 'Christopher Ammar',         revenue: 41033,  target: 100000, percentOfTarget: Math.round((41033/100000)*100),  progress: 100, status: 'good' },
                        { name: 'Maxime Garcia',             revenue: 25000,  target: 100000, percentOfTarget: Math.round((25000/100000)*100),  progress: 100, status: 'good' },
                        { name: 'Nader (Nader) Farag',       revenue: 13965,  target: 100000, percentOfTarget: Math.round((13965/100000)*100),  progress: 100, status: 'good' }
                    ]
                },
                'SPGI — Isabel Sanz': {
                    percentage: Math.round((907575/1500000)*100),
                    revenue: 907575,
                    target: 1500000,
                    reps: [
                        { name: 'Liat Shoshani',                       revenue: 341688, target: 300000, percentOfTarget: Math.round((341688/300000)*100), progress: 100, status: 'excellent' },
                        { name: 'Silvia Garcia Sanchez',               revenue: 233722, target: 300000, percentOfTarget: Math.round((233722/300000)*100), progress: 100, status: 'good'      },
                        { name: 'Liene Korsiete',                      revenue: 156000, target: 200000, percentOfTarget: Math.round((156000/200000)*100), progress: 100, status: 'good'      },
                        { name: 'Antonio Scarfato',                    revenue: 54720,  target: 150000, percentOfTarget: Math.round((54720/150000)*100),  progress: 100, status: 'good'      },
                        { name: 'Adrian Alvarez Troncoso',             revenue: 53625,  target: 150000, percentOfTarget: Math.round((53625/150000)*100),  progress: 100, status: 'good'      },
                        { name: 'Evangelos (Vagelis) Papaioannou',     revenue: 40436,  target: 150000, percentOfTarget: Math.round((40436/150000)*100),  progress: 100, status: 'good'      },
                        { name: 'Rui Carvalho',                        revenue: 22307,  target: 100000, percentOfTarget: Math.round((22307/100000)*100),  progress: 100, status: 'good'      },
                        { name: 'Silvia Demontis',                     revenue: 5077,   target: 150000, percentOfTarget: Math.round((5077/150000)*100),   progress: 100, status: 'good'      }
                    ]
                },
                'DACH — Data Withheld Mgr': {
                    percentage: Math.round((154247/400000)*100),
                    revenue: 154247,
                    target: 400000,
                    reps: [
                        { name: 'Data Withheld Rep', revenue: 154247, target: 400000, percentOfTarget: Math.round((154247/400000)*100), progress: 100, status: 'good' }
                    ]
                },
                'DACH — Bettina Curran': {
                    percentage: Math.round((158958/400000)*100),
                    revenue: 158958,
                    target: 400000,
                    reps: [
                        { name: 'Data Withheld Rep', revenue: 158958, target: 400000, percentOfTarget: Math.round((158958/400000)*100), progress: 100, status: 'good' }
                    ]
                },
                'DACH — David Linnie': {
                    percentage: Math.round((8967/200000)*100),
                    revenue: 8967,
                    target: 200000,
                    reps: [
                        { name: 'Ciaran Mcguinness', revenue: 6733, target: 130000, percentOfTarget: Math.round((6733/130000)*100), progress: 100, status: 'good' },
                        { name: 'Mark Bohan',        revenue: 2235, target: 70000,  percentOfTarget: Math.round((2235/70000)*100),  progress: 100, status: 'good' }
                    ]
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
                { name: 'Richard Allen',  revenue: 212000, percentOfTarget: 106 },
                { name: 'Barbara King',   revenue: 208000, percentOfTarget: 104 },
                { name: 'Joseph Wright',  revenue: 205000, percentOfTarget: 103 }
            ],
            topProgress: [
                { name: 'William Turner', previousWeek: 180000, current: 225000, progress: 25,   percentOfTarget: 113 },
                { name: 'Elizabeth Hall', previousWeek: 175000, current: 218000, progress: 24.6, percentOfTarget: 109 },
                { name: 'Richard Allen',  previousWeek: 170000, current: 212000, progress: 24.7, percentOfTarget: 106 },
                { name: 'Barbara King',   previousWeek: 168000, current: 208000, progress: 23.8, percentOfTarget: 104 },
                { name: 'Joseph Wright',  previousWeek: 165000, current: 205000, progress: 24.2, percentOfTarget: 103 }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 90, revenue: 1800000, target: 2000000,
                    reps: [
                        { name: 'William Turner', revenue: 225000, target: 200000, percentOfTarget: 113, progress: 25,   status: 'excellent' },
                        { name: 'Elizabeth Hall', revenue: 218000, target: 200000, percentOfTarget: 109, progress: 24.6, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 86, revenue: 1720000, target: 2000000,
                    reps: [
                        { name: 'Richard Allen', revenue: 212000, target: 200000, percentOfTarget: 106, progress: 24.7, status: 'excellent' },
                        { name: 'Barbara King',  revenue: 208000, target: 200000, percentOfTarget: 104, progress: 23.8, status: 'excellent' }
                    ]
                },
                'Team Sophie': {
                    percentage: 88, revenue: 1760000, target: 2000000,
                    reps: [
                        { name: 'Joseph Wright',  revenue: 205000, target: 200000, percentOfTarget: 103, progress: 24.2, status: 'excellent' },
                        { name: 'Dorothy Lopez',  revenue: 202000, target: 200000, percentOfTarget: 101, progress: 23.5, status: 'excellent' }
                    ]
                }
            }
        },
        SL: {
            percentage: 76,
            target: 1500000,
            topRevenue: [
                { name: 'Thomas Green',     revenue: 165000, percentOfTarget: 110 },
                { name: 'Susan Baker',      revenue: 158000, percentOfTarget: 105 },
                { name: 'Charles Evans',    revenue: 152000, percentOfTarget: 101 },
                { name: 'Margaret Collins', revenue: 148000, percentOfTarget: 99  },
                { name: 'Donald Stewart',   revenue: 145000, percentOfTarget: 97  }
            ],
            topProgress: [
                { name: 'Thomas Green',     previousWeek: 130000, current: 165000, progress: 26.9, percentOfTarget: 110 },
                { name: 'Susan Baker',      previousWeek: 125000, current: 158000, progress: 26.4, percentOfTarget: 105 },
                { name: 'Charles Evans',    previousWeek: 122000, current: 152000, progress: 24.6, percentOfTarget: 101 },
                { name: 'Margaret Collins', previousWeek: 120000, current: 148000, progress: 23.3, percentOfTarget: 99  },
                { name: 'Donald Stewart',   previousWeek: 118000, current: 145000, progress: 22.9, percentOfTarget: 97  }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 78, revenue: 1170000, target: 1500000,
                    reps: [
                        { name: 'Thomas Green', revenue: 165000, target: 150000, percentOfTarget: 110, progress: 26.9, status: 'excellent' },
                        { name: 'Susan Baker',  revenue: 158000, target: 150000, percentOfTarget: 105, progress: 26.4, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 74, revenue: 1110000, target: 1500000,
                    reps: [
                        { name: 'Charles Evans',    revenue: 152000, target: 150000, percentOfTarget: 101, progress: 24.6, status: 'excellent' },
                        { name: 'Margaret Collins', revenue: 148000, target: 150000, percentOfTarget: 99,  progress: 23.3, status: 'good'      }
                    ]
                },
                'Team Sophie': {
                    percentage: 76, revenue: 1140000, target: 1500000,
                    reps: [
                        { name: 'Donald Stewart', revenue: 145000, target: 150000, percentOfTarget: 97, progress: 22.9, status: 'good' },
                        { name: 'Carol Morris',   revenue: 142000, target: 150000, percentOfTarget: 95, progress: 22.1, status: 'good' }
                    ]
                }
            }
        },
        SaaS: {
            percentage: 92,
            target: 2500000,
            topRevenue: [
                { name: 'Matthew Rogers', revenue: 285000, percentOfTarget: 114 },
                { name: 'Betty Reed',     revenue: 278000, percentOfTarget: 111 },
                { name: 'Anthony Cook',   revenue: 272000, percentOfTarget: 109 },
                { name: 'Sandra Morgan',  revenue: 268000, percentOfTarget: 107 },
                { name: 'Mark Bell',      revenue: 265000, percentOfTarget: 106 }
            ],
            topProgress: [
                { name: 'Matthew Rogers', previousWeek: 225000, current: 285000, progress: 26.7, percentOfTarget: 114 },
                { name: 'Betty Reed',     previousWeek: 220000, current: 278000, progress: 26.4, percentOfTarget: 111 },
                { name: 'Anthony Cook',   previousWeek: 218000, current: 272000, progress: 24.8, percentOfTarget: 109 },
                { name: 'Sandra Morgan',  previousWeek: 215000, current: 268000, progress: 24.7, percentOfTarget: 107 },
                { name: 'Mark Bell',      previousWeek: 212000, current: 265000, progress: 25,   percentOfTarget: 106 }
            ],
            teams: {
                'Team Ryan': {
                    percentage: 94, revenue: 2350000, target: 2500000,
                    reps: [
                        { name: 'Matthew Rogers', revenue: 285000, target: 250000, percentOfTarget: 114, progress: 26.7, status: 'excellent' },
                        { name: 'Betty Reed',     revenue: 278000, target: 250000, percentOfTarget: 111, progress: 26.4, status: 'excellent' }
                    ]
                },
                'Team Emily': {
                    percentage: 90, revenue: 2250000, target: 2500000,
                    reps: [
                        { name: 'Anthony Cook',  revenue: 272000, target: 250000, percentOfTarget: 109, progress: 24.8, status: 'excellent' },
                        { name: 'Sandra Morgan', revenue: 268000, target: 250000, percentOfTarget: 107, progress: 24.7, status: 'excellent' }
                    ]
                },
                'Team Sophie': {
                    percentage: 92, revenue: 2300000, target: 2500000,
                    reps: [
                        { name: 'Mark Bell',    revenue: 265000, target: 250000, percentOfTarget: 106, progress: 25,   status: 'excellent' },
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
