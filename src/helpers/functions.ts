import { presets, keys } from "./constants";
import {
  type Craftable,
  type DropType,
  type PresetType,
  type Rarity,
  type PresetImage,
  type DropGroups,
} from "../types";
import nonePng from "../assets/none.png";

export const createEmptyPresets = (type: PresetType) => {
  const returnObj: DropGroups = {};
  for (let drop in presets[type].drops) {
    drop = drop as DropType;
    const dropObj: Craftable = {};
    ["five", "four", "three", "two", "one"].forEach((key) => {
      dropObj[key] = 0;
    });
    presets[type].disabledKeys[drop].forEach((key: Rarity) => {
      dropObj[key] = null;
    });
    returnObj[drop] = dropObj;
  }
  return returnObj;
};

export const craftableToStr = (craftable: Craftable) => {
  let returnStr: string[] = [];
  ["five", "four", "three", "two", "one"].forEach((key) => {
    if (craftable[key] !== null) {
      returnStr.push(craftable[key]);
    } else {
      returnStr.push("-");
    }
  });
  return returnStr.join("/");
};

export const camelCaseToSentenceCase = (str: string) => {
  let result = str.replace(/([A-Z])/g, " $1");
  result = result.toLowerCase();
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
};

export const getPresetImages = (type: PresetType, drop: DropType) => {
  const images: PresetImage[] = [];
  keys.forEach((key) => {
    if (presets[type].disabledKeys[drop].includes(key.name)) {
      images.push({
        src: nonePng,
        alt: "Drop unavailable",
      });
    } else {
      images.push({
        src: new URL(
          `../assets/${drop}-${key.id}.png`,
          import.meta.url
        ) as unknown as string,
        alt: `${drop}, rarity level ${key.name}`,
      });
    }
  });
  return images;
};
