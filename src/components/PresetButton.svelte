<script lang="ts">
  import {
    getPresetImages,
    craftableToStr,
    getDropNameForDisplay,
  } from "../helpers/functions";
  import { presetOptions } from "../stores/presetOptions";
  import { have, need, isDisabled } from "../stores/base";
  import { type PresetType, type DropType, type Craftable } from "../types";
  import { keyNames } from "../helpers/constants";

  export let type: PresetType;
  export let drop: DropType;

  const clickHandler = () => {
    navigator.vibrate?.(50);
    loadPresetFromSelection(type, drop);
  };

  const loadPresetFromSelection = (type: PresetType, drop: DropType) => {
    const selection: Craftable = $presetOptions[type].drops[drop];
    isDisabled.set({
      five: selection.five === null,
      four: selection.four === null,
      three: selection.three === null,
      two: selection.two === null,
      one: selection.one === null,
    });
    need.set({ ...selection });
    keyNames.forEach((key) => {
      if ($isDisabled[key]) {
        $have[key] = 0;
      }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
</script>

<button class="preset-button" on:click={clickHandler}>
  <div class="images">
    {#each getPresetImages(type, drop) as { src, alt }}
      <img {src} {alt} />
    {/each}
  </div>
  {getDropNameForDisplay(drop)}
  <div class="preview">
    {craftableToStr($presetOptions[type].drops[drop])}
  </div>
</button>

<style>
  .preset-button {
    color: var(--txt-color);
    background-color: #dcf2b9;
    border-color: #dcf2b9;
  }
  .preset-button > div.preview {
    flex-grow: 1;
    text-align: end;
  }
  .preset-button > div.images {
    display: flex;
  }
  .preset-button > div.images > img {
    width: 12px;
    height: 12px;
  }
</style>
