import { writable } from "svelte/store";
import { type Craftable, type CraftableDisabled } from "../types";

const haveLS = JSON.parse(localStorage.getItem("have")) as Craftable;
export const have = writable(
  haveLS || {
    five: null,
    four: null,
    three: null,
    two: null,
    one: null,
  }
);
have.subscribe((value) => {
  localStorage.setItem("have", JSON.stringify(value));
});

const needLS = JSON.parse(localStorage.getItem("need")) as Craftable;
export const need = writable(
  needLS || {
    five: null,
    four: null,
    three: null,
    two: null,
    one: null,
  }
);
need.subscribe((value) => {
  localStorage.setItem("need", JSON.stringify(value));
});

const isDisabledLS = JSON.parse(localStorage.getItem("isDisabled")) as CraftableDisabled;
export const isDisabled = writable(
  isDisabledLS || {
    five: false,
    four: false,
    three: false,
    two: false,
    one: false,
  }
);
isDisabled.subscribe((value) => {
  localStorage.setItem("isDisabled", JSON.stringify(value));
});
