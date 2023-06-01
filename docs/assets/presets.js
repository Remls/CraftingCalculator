const presets = {
    characterAscension: {
        min: 0,
        max: 6,
        drops: {
            gemstones: [
                { five: 0, four: 0, three: 0, two: 1, one: 0 },
                { five: 0, four: 0, three: 3, two: 0, one: 0 },
                { five: 0, four: 0, three: 6, two: 0, one: 0 },
                { five: 0, four: 3, three: 0, two: 0, one: 0 },
                { five: 0, four: 6, three: 0, two: 0, one: 0 },
                { five: 6, four: 0, three: 0, two: 0, one: 0 },
            ],
            mobDrops: [
                { five: 0, four: 0, three: 0, two: 0, one: 3 },
                { five: 0, four: 0, three: 0, two: 0, one: 15 },
                { five: 0, four: 0, three: 0, two: 12, one: 0 },
                { five: 0, four: 0, three: 0, two: 18, one: 0 },
                { five: 0, four: 0, three: 12, two: 0, one: 0 },
                { five: 0, four: 0, three: 24, two: 0, one: 0 },
            ]
        },
        disabledKeys: {
            gemstones: ['one'],
            mobDrops: ['five', 'four'],
        }
    },
    talents: {
        min: 1,
        max: 10,
        drops: {
            talentBooks: [
                {}, // skip 0
                { five: 0, four: 0, three: 0, two: 3, one: 0 },
                { five: 0, four: 0, three: 2, two: 0, one: 0 },
                { five: 0, four: 0, three: 4, two: 0, one: 0 },
                { five: 0, four: 0, three: 6, two: 0, one: 0 },
                { five: 0, four: 0, three: 9, two: 0, one: 0 },
                { five: 0, four: 4, three: 0, two: 0, one: 0 },
                { five: 0, four: 6, three: 0, two: 0, one: 0 },
                { five: 0, four: 12, three: 0, two: 0, one: 0 },
                { five: 0, four: 16, three: 0, two: 0, one: 0 },
            ],
            mobDrops: [
                {}, // skip 0
                { five: 0, four: 0, three: 0, two: 0, one: 6 },
                { five: 0, four: 0, three: 0, two: 3, one: 0 },
                { five: 0, four: 0, three: 0, two: 4, one: 0 },
                { five: 0, four: 0, three: 0, two: 6, one: 0 },
                { five: 0, four: 0, three: 0, two: 9, one: 0 },
                { five: 0, four: 0, three: 4, two: 0, one: 0 },
                { five: 0, four: 0, three: 6, two: 0, one: 0 },
                { five: 0, four: 0, three: 9, two: 0, one: 0 },
                { five: 0, four: 0, three: 12, two: 0, one: 0 },
            ],
            // Everything multiplied by 2
            talentBooksX2: [
                {}, // skip 0
                { five: 0, four: 0, three: 0, two: 6, one: 0 },
                { five: 0, four: 0, three: 4, two: 0, one: 0 },
                { five: 0, four: 0, three: 8, two: 0, one: 0 },
                { five: 0, four: 0, three: 12, two: 0, one: 0 },
                { five: 0, four: 0, three: 18, two: 0, one: 0 },
                { five: 0, four: 8, three: 0, two: 0, one: 0 },
                { five: 0, four: 12, three: 0, two: 0, one: 0 },
                { five: 0, four: 24, three: 0, two: 0, one: 0 },
                { five: 0, four: 32, three: 0, two: 0, one: 0 },
            ],
            mobDropsX2: [
                {}, // skip 0
                { five: 0, four: 0, three: 0, two: 0, one: 12 },
                { five: 0, four: 0, three: 0, two: 6, one: 0 },
                { five: 0, four: 0, three: 0, two: 8, one: 0 },
                { five: 0, four: 0, three: 0, two: 12, one: 0 },
                { five: 0, four: 0, three: 0, two: 18, one: 0 },
                { five: 0, four: 0, three: 8, two: 0, one: 0 },
                { five: 0, four: 0, three: 12, two: 0, one: 0 },
                { five: 0, four: 0, three: 18, two: 0, one: 0 },
                { five: 0, four: 0, three: 24, two: 0, one: 0 },
            ],
            // Everything multiplied by 3
            talentBooksX3: [
                {}, // skip 0
                { five: 0, four: 0, three: 0, two: 9, one: 0 },
                { five: 0, four: 0, three: 6, two: 0, one: 0 },
                { five: 0, four: 0, three: 12, two: 0, one: 0 },
                { five: 0, four: 0, three: 18, two: 0, one: 0 },
                { five: 0, four: 0, three: 27, two: 0, one: 0 },
                { five: 0, four: 12, three: 0, two: 0, one: 0 },
                { five: 0, four: 18, three: 0, two: 0, one: 0 },
                { five: 0, four: 36, three: 0, two: 0, one: 0 },
                { five: 0, four: 48, three: 0, two: 0, one: 0 },
            ],
            mobDropsX3: [
                {}, // skip 0
                { five: 0, four: 0, three: 0, two: 0, one: 18 },
                { five: 0, four: 0, three: 0, two: 9, one: 0 },
                { five: 0, four: 0, three: 0, two: 12, one: 0 },
                { five: 0, four: 0, three: 0, two: 18, one: 0 },
                { five: 0, four: 0, three: 0, two: 27, one: 0 },
                { five: 0, four: 0, three: 12, two: 0, one: 0 },
                { five: 0, four: 0, three: 18, two: 0, one: 0 },
                { five: 0, four: 0, three: 27, two: 0, one: 0 },
                { five: 0, four: 0, three: 36, two: 0, one: 0 },
            ],
        },
        disabledKeys: {
            talentBooks: ['five', 'one'],
            mobDrops: ['five', 'four'],
            talentBooksX2: ['five', 'one'],
            mobDropsX2: ['five', 'four'],
            talentBooksX3: ['five', 'one'],
            mobDropsX3: ['five', 'four'],
        }
    }
}