import { writable } from "svelte/store";
import { type Craftable, type CraftableDisabled } from "../types";

/**
 * Creates a writable store that is synced with localStorage.
 * @template T - The type of the store value.
 * @param {string} key - The key to use for the localStorage.
 * @param {T} startValue - The initial value of the store, if no value is found in localStorage.
 * @returns {Writable<T>} - The writable store.
 */
function createSyncedStore<T>(key: string, startValue: T) {
  const saved = JSON.parse(localStorage.getItem(key)) as T;
  const { subscribe, set, update } = writable(saved || startValue);
  subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  const reset = () => set(startValue);
  const updateKey = (key: keyof T, value: T[keyof T]) => {
    update((v) => {
      v[key] = value;
      return v;
    });
  };
  return { subscribe, set, update, updateKey, reset };
}

export const have = createSyncedStore<Craftable>("have", {
  five: null,
  four: null,
  three: null,
  two: null,
  one: null,
});
export const need = createSyncedStore<Craftable>("need", {
  five: null,
  four: null,
  three: null,
  two: null,
  one: null,
});
export const isDisabled = createSyncedStore<CraftableDisabled>("isDisabled", {
  five: false,
  four: false,
  three: false,
  two: false,
  one: false,
});
