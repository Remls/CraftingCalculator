import { writable } from "svelte/store";

const haveLS = JSON.parse(localStorage.getItem("have"));
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

const needLS = JSON.parse(localStorage.getItem("need"));
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

const isDisabledLS = JSON.parse(localStorage.getItem("isDisabled"));
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
