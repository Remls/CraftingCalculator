<script>
  import {
    getPresetImages,
    craftableToStr,
    camelCaseToSentenceCase,
  } from "../helpers/functions";
  import { presetOptions } from "../stores/presetOptions";

  export let type;
  export let drop;
</script>

<button class="preset-button" on:click>
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
