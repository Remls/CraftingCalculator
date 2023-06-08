import { writable } from "svelte/store";
import { presets } from "../helpers/constants";
import { createEmptyPresets } from "../helpers/functions";

function recomputeDrops(opt, type) {
  for (let drop in presets[type].drops) {
    const preset = { five: 0, four: 0, three: 0, two: 0, one: 0 };
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
  let opt = {};
  for (let type in presets) {
    const from = presets[type].min;
    const to = presets[type].max;
    opt[type] = {
      rangeGroups: [
        {
          id: getRandomId(),
          from,
          to,
        },
      ],
      drops: createEmptyPresets(type),
    };
  }
  for (let type in presets) {
    opt = recomputeDrops(opt, type);
  }

  const { subscribe, set, update } = writable(opt);

  return {
    subscribe,
    addRangeGroup: (type) => {
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
    removeRangeGroup: (type, index) => {
      update((opt) => {
        opt[type].rangeGroups.splice(index, 1);
        opt = recomputeDrops(opt, type);
        return opt;
      });
    },
    updateDrops: (type, index = 0, from = null, to = null) => {
      update((opt) => {
        // Update from and to for that specific rangeGroup, if provided
        if (from !== null) {
          opt[type].rangeGroups[index].from = from;
        }
        if (to !== null) {
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
