import { type PresetData, type RarityKey } from "../types";

export const keys: RarityKey[] = [
  { id: 5, name: "five", label: "★★★★★" },
  { id: 4, name: "four", label: "★★★★" },
  { id: 3, name: "three", label: "★★★" },
  { id: 2, name: "two", label: "★★" },
  { id: 1, name: "one", label: "★" },
];

export const keyNames = keys.map((key) => key.name);

export const keyNamesReversed = [...keyNames].reverse();

export const presets: PresetData = {
  characterAscension: {
    min: 0,
    max: 6,
    drops: {
      gemstones: [
        { two: 1 },
        { three: 3 },
        { three: 6 },
        { four: 3 },
        { four: 6 },
        { five: 6 },
      ],
      mobDrops: [
        { one: 3 },
        { one: 15 },
        { two: 12 },
        { two: 18 },
        { three: 12 },
        { three: 24 },
      ],
    },
    disabledKeys: {
      gemstones: ["one"],
      mobDrops: ["five", "four"],
    },
  },
  talents: {
    min: 1,
    max: 10,
    drops: {
      talentBooks: [
        {}, // skip 0
        { two: 3 },
        { three: 2 },
        { three: 4 },
        { three: 6 },
        { three: 9 },
        { four: 4 },
        { four: 6 },
        { four: 12 },
        { four: 16 },
      ],
      mobDrops: [
        {}, // skip 0
        { one: 6 },
        { two: 3 },
        { two: 4 },
        { two: 6 },
        { two: 9 },
        { three: 4 },
        { three: 6 },
        { three: 9 },
        { three: 12 },
      ],
    },
    disabledKeys: {
      talentBooks: ["five", "one"],
      mobDrops: ["five", "four"],
    },
  },
  weaponAscension5: {
    min: 0,
    max: 6,
    drops: {
      weaponDomainDrops: [
        { two: 5 },
        { three: 5 },
        { three: 9 },
        { four: 5 },
        { four: 9 },
        { five: 6 },
      ],
      eliteMobDrops: [
        { two: 5 },
        { two: 18 },
        { three: 9 },
        { three: 18 },
        { four: 14 },
        { four: 27 },
      ],
      mobDrops: [
        { one: 3 },
        { one: 12 },
        { two: 9 },
        { two: 14 },
        { three: 9 },
        { three: 18 },
      ],
    },
    disabledKeys: {
      weaponDomainDrops: ["one"],
      eliteMobDrops: ["five", "one"],
      mobDrops: ["five", "four"],
    },
  },
  weaponAscension4: {
    min: 0,
    max: 6,
    drops: {
      weaponDomainDrops: [
        { two: 3 },
        { three: 3 },
        { three: 6 },
        { four: 3 },
        { four: 6 },
        { five: 4 },
      ],
      eliteMobDrops: [
        { two: 3 },
        { two: 12 },
        { three: 6 },
        { three: 12 },
        { four: 9 },
        { four: 18 },
      ],
      mobDrops: [
        { one: 2 },
        { one: 8 },
        { two: 6 },
        { two: 9 },
        { three: 6 },
        { three: 12 },
      ],
    },
    disabledKeys: {
      weaponDomainDrops: ["one"],
      eliteMobDrops: ["five", "one"],
      mobDrops: ["five", "four"],
    },
  },
  hsrCharacterAscension5: {
    min: 0,
    max: 6,
    drops: {
      hsrMobDrops: [
        { two: 5 },
        { two: 10 },
        { three: 6 },
        { three: 9 },
        { four: 6 },
        { four: 9 },
      ],
    },
    disabledKeys: {
      hsrMobDrops: ["five", "one"],
    },
  },
  hsrCharacterAscension4: {
    min: 0,
    max: 6,
    drops: {
      hsrMobDrops: [
        { two: 4 },
        { two: 8 },
        { three: 5 },
        { three: 8 },
        { four: 5 },
        { four: 7 },
      ],
    },
    disabledKeys: {
      hsrMobDrops: ["five", "one"],
    },
  },
  hsrBasicAtkTrace5: {
    min: 1,
    max: 6,
    drops: {
      hsrMobDrops: [
        {}, // skip 0
        { two: 6 },
        { three: 3 },
        { three: 4 },
        { four: 3 },
        { four: 4 },
      ],
      hsrCrimsonCalyxDrops: [
        {}, // skip 0
        { two: 3 },
        { three: 3 },
        { three: 5 },
        { four: 3 },
        { four: 8 },
      ]
    },
    disabledKeys: {
      hsrMobDrops: ["five", "one"],
      hsrCrimsonCalyxDrops: ["five", "one"],
    },
  },
  hsrOtherTraces5: {
    min: 1,
    max: 10,
    drops: {
      hsrMobDrops: [
        {}, // skip 0
        { two: 3 },
        { two: 6 },
        { three: 3 },
        { three: 4 },
        { three: 6 },
        { four: 3 },
        { four: 4 },
        {}, // mob drops not required
        {}, // mob drops not required
      ],
      hsrCrimsonCalyxDrops: [
        {}, // skip 0
        {}, // crimson calyx drops not required
        { two: 3 },
        { three: 3 },
        { three: 5 },
        { three: 7 },
        { four: 3 },
        { four: 5 },
        { four: 8 },
        { four: 14 },
      ]
    },
    disabledKeys: {
      hsrMobDrops: ["five", "one"],
      hsrCrimsonCalyxDrops: ["five", "one"]
    },
  },
  hsrBasicAtkTrace4: {
    min: 1,
    max: 6,
    drops: {
      hsrMobDrops: [
        {}, // skip 0
        { two: 4 },
        { two: 2 },
        { two: 3 },
        { two: 2 },
        { four: 3 },
      ],
      hsrCrimsonCalyxDrops: [
        {}, // skip 0
        { two: 2 },
        { three: 2 },
        { three: 4 },
        { four: 2 },
        { four: 6 },
      ]
    },
    disabledKeys: {
      hsrMobDrops: ["five", "one"],
      hsrCrimsonCalyxDrops: ["five", "one"],
    },
  },
  hsrOtherTraces4: {
    min: 1,
    max: 10,
    drops: {
      hsrMobDrops: [
        {}, // skip 0
        { two: 2 },
        { two: 4 },
        { two: 2 },
        { two: 3 },
        { two: 5 },
        { two: 2 },
        { two: 3 },
        {}, // mob drops not required
        {}, // mob drops not required
      ],
      hsrCrimsonCalyxDrops: [
        {}, // skip 0
        {}, // crimson calyx drops not required
        { two: 2 },
        { three: 2 },
        { three: 4 },
        { three: 6 },
        { four: 2 },
        { four: 4 },
        { four: 6 },
        { four: 11 },
      ]
    },
    disabledKeys: {
      hsrMobDrops: ["five", "four", "three", "one"],
      hsrCrimsonCalyxDrops: ["five", "one"]
    },
  },
  hsrLightConeAscension5: {
    min: 0,
    max: 6,
    drops: {
      hsrMobDrops: [
        { two: 8 },
        { two: 12 },
        { three: 8 },
        { three: 12 },
        { four: 6 },
        { four: 8 },
      ],
      hsrCrimsonCalyxDrops: [
        {}, // crimson calyx drops not required
        { two: 4 },
        { three: 4 },
        { three: 8 },
        { four: 5 },
        { four: 10 },
      ]
    },
    disabledKeys: {
      hsrMobDrops: ["five", "one"],
      hsrCrimsonCalyxDrops: ["five", "one"],
    },
  },
  hsrLightConeAscension4: {
    min: 0,
    max: 6,
    drops: {
      hsrMobDrops: [
        { two: 5 },
        { two: 10 },
        { three: 6 },
        { three: 9 },
        { four: 5 },
        { four: 7 },
      ],
      hsrCrimsonCalyxDrops: [
        {}, // crimson calyx drops not required
        { two: 3 },
        { three: 3 },
        { three: 6 },
        { four: 4 },
        { four: 8 },
      ]
    },
    disabledKeys: {
      hsrMobDrops: ["five", "one"],
      hsrCrimsonCalyxDrops: ["five", "one"],
    },
  },
};
