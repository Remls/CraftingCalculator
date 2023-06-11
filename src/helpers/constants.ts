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
};
