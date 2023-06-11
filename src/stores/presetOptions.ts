import { writable } from "svelte/store";
import { presets } from "../helpers/constants";
import { createEmptyPresets } from "../helpers/functions";
import {
  type Craftable,
  type DropType,
  type PresetType,
  type PresetOptions,
} from "../types";

function recomputeDrops(opt: PresetOptions, type: PresetType) {
  for (let drop in presets[type].drops) {
    drop = drop as DropType;
    const preset: Craftable = { five: 0, four: 0, three: 0, two: 0, one: 0 };
    opt[type].rangeGroups.forEach((rangeGroup) => {
      for (let i = rangeGroup.from; i < rangeGroup.to; i++) {
        ["five", "four", "three", "two", "one"].forEach((key) => {
          if (key in presets[type].drops[drop][i]) {
            preset[key] += presets[type].drops[drop][i][key];
          }
        });
      }
    });
    presets[type].disabledKeys[drop].forEach((key) => {
      preset[key] = null;
    });
    opt[type].drops[drop] = preset;
  }
  return opt;
}

function getRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

function createPresetOptions() {
  let opt: PresetOptions = {};
  for (let type in presets) {
    type = type as PresetType;
    const from: number = presets[type].min;
    const to: number = presets[type].max;
    opt[type] = {
      rangeGroups: [
        {
          id: getRandomId(),
          from,
          to,
        },
      ],
      drops: createEmptyPresets(type as PresetType),
    };
  }
  for (let type in presets) {
    opt = recomputeDrops(opt, type as PresetType);
  }

  const { subscribe, set, update } = writable(opt);

  return {
    subscribe,
    addRangeGroup: (type: PresetType) => {
      update((opt) => {
        const from = presets[type].min;
        const to = presets[type].max;
        opt[type].rangeGroups.push({
          id: getRandomId(),
          from,
          to,
        });
        opt = recomputeDrops(opt, type);
        return opt;
      });
    },
    removeRangeGroup: (type: PresetType, index: number) => {
      update((opt) => {
        opt[type].rangeGroups.splice(index, 1);
        opt = recomputeDrops(opt, type);
        return opt;
      });
    },
    updateDrops: (type: PresetType, index = 0, from?: number, to?: number) => {
      update((opt) => {
        // Update from and to for that specific rangeGroup, if provided
        if (typeof from !== 'undefined') {
          opt[type].rangeGroups[index].from = from;
        }
        if (typeof to !== 'undefined') {
          opt[type].rangeGroups[index].to = to;
        }

        // ... then recalculate drop values for all rarities
        opt = recomputeDrops(opt, type);
        return opt;
      });
    },
  };
}

export const presetOptions = createPresetOptions();
