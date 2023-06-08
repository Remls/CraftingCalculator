<script>
  import {
    getPresetImages,
    craftableToStr,
    camelCaseToSentenceCase,
  } from "../helpers/functions";
  import { presetOptions } from "../stores/presetOptions";
  import { have, need, isDisabled } from "../stores/base";

  export let type;
  export let drop;

  const clickHandler = () => {
    navigator.vibrate?.(50);
    loadPresetFromSelection(type, drop);
  };

  const loadPresetFromSelection = (type, drop) => {
    const selection = $presetOptions[type].drops[drop];
    isDisabled.set({
      five: selection.five === null,
      four: selection.four === null,
      three: selection.three === null,
      two: selection.two === null,
      one: selection.one === null,
    });
    need.set({ ...selection });
    ["five", "four", "three", "two", "one"].forEach((key) => {
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
  {camelCaseToSentenceCase(drop)}
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
