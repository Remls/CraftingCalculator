import { presets, keys } from "./constants";
import { isDisabled } from "../stores/base";
import nonePng from "../assets/none.png";

export const simplify = (input) => {
  let power = 0;
  let sum = 0;
  ["one", "two", "three", "four", "five"].forEach((key) => {
    if (isDisabled[key]) return;
    sum += input[key] * Math.pow(3, power);
    power++;
  });
  return sum;
};

export const createEmptyPresets = (type) => {
  const returnObj = {};
  for (let drop in presets[type].drops) {
    const dropObj = {};
    ["five", "four", "three", "two", "one"].forEach((key) => {
      dropObj[key] = 0;
    });
    presets[type].disabledKeys[drop].forEach((key) => {
      dropObj[key] = null;
    });
    returnObj[drop] = dropObj;
  }
  return returnObj;
};

export const craftableToStr = (craftable) => {
  let str = [];
  ["five", "four", "three", "two", "one"].forEach((key) => {
    if (craftable[key] !== null) {
      str.push(craftable[key]);
    } else {
      str.push("-");
    }
  });
  return str.join("/");
};

export const camelCaseToSentenceCase = (str) => {
  let result = str.replace(/([A-Z])/g, " $1");
  result = result.toLowerCase();
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}

export const getPresetImages = (type, drop) => {
  const images = [];
  keys.forEach((key) => {
    if (presets[type].disabledKeys[drop].includes(key.name)) {
      images.push({
        src: nonePng,
        alt: "Drop unavailable",
      });
    } else {
      images.push({
        src: new URL(`../assets/${drop}-${key.id}.png`, import.meta.url),
        alt: `${drop}, rarity level ${key.name}`,
      });
    }
  });
  return images;
};
