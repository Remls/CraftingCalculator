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
    }
}