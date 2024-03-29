import { presets, keys, keyNames, keyNamesReversed } from "./constants";
import { have, need, isDisabled } from "../stores/base";
import {
  type Craftable,
  type DropType,
  type PresetType,
  type Rarity,
  type PresetImage,
  type DropGroups,
} from "../types";
import nonePng from "../assets/drops/none.png";

export const createEmptyPresets = (type: PresetType) => {
  const returnObj: DropGroups = {};
  for (let drop in presets[type].drops) {
    drop = drop as DropType;
    const dropObj: Partial<Craftable> = {};
    keyNames.forEach((key) => {
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

export const getDropNameForDisplay = (str: string) => {
  // Remove HSR prefix
  if (str.startsWith("hsr")) {
    str = str.slice(3);
    str = str.charAt(0).toLowerCase() + str.slice(1);
  }
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
          `../assets/drops/${drop}-${key.id}.png`,
          import.meta.url
        ) as unknown as string,
        alt: `${drop}, rarity level ${key.name}`,
      });
    }
  });
  return images;
};

export const parseQueryParams = (key: string) => {
  const urlParams = new URLSearchParams(window.location.search);
  const craftable = key === "have" ? have : need;
  if (urlParams.has(key)) {
    const valueList = urlParams
      .get(key)
      .split(",")
      .filter((v) => v.match(/\d+/))
      .reverse();
    if (valueList) {
      valueList.forEach((value, index) => {
        if (index >= keyNamesReversed.length) return;
        craftable.updateKey(keyNamesReversed[index], parseInt(value));
      });
    }
  }
};
