type PartialRecord<K extends keyof any, T> =  Partial<Record<K, T>>;

type PresetType =
  | "characterAscension"
  | "talents"
  | "weaponAscension5"
  | "weaponAscension4"
  | "hsrCharacterAscension5"
  | "hsrCharacterAscension4"
  | "hsrBasicAtkTrace5"
  | "hsrOtherTraces5"
  | "hsrBasicAtkTrace4"
  | "hsrOtherTraces4"
  | "hsrLightConeAscension5"
  | "hsrLightConeAscension4";
type DropType =
  | "gemstones"
  | "mobDrops"
  | "talentBooks"
  | "weaponDomainDrops"
  | "eliteMobDrops"
  | "hsrMobDrops"
  | "hsrCrimsonCalyxDrops";
type Rarity = "five" | "four" | "three" | "two" | "one";

type Calculator = {
  name: string;
  url: string;
  image: string;
};

type Craftable = Record<Rarity, number | null>;

type CraftableDisabled = Record<Rarity, boolean>;

type RarityKey = {
  id: number;
  name: Rarity;
  label: string;
};

type PresetData = Record<PresetType, {
  min: number;
  max: number;
  drops: PartialRecord<DropType, Partial<Craftable>[]>;
  disabledKeys: PartialRecord<DropType, Rarity[]>;
}>;

type PresetImage = {
  src: string;
  alt: string;
};

type DropGroups = PartialRecord<DropType, Craftable>;

type PresetOptions = PartialRecord<PresetType, {
  rangeGroups: {
    id: string;
    from: number;
    to: number;
  }[];
  drops: DropGroups;
}>;

export {
  type PresetType,
  type DropType,
  type Rarity,
  type Calculator,
  type Craftable,
  type CraftableDisabled,
  type RarityKey,
  type PresetData,
  type PresetImage,
  type DropGroups,
  type PresetOptions,
};
