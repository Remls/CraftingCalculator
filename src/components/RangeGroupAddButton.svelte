<script>
  import { presetOptions } from "../stores/presetOptions";
  export let type;
</script>

<div class="button-container">
  <button
    class="button"
    on:click={() => presetOptions.addRangeGroup(type)}
  >
    +
  </button>
</div>

<style>
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 8px;
  }
  .button {
    color: var(--txt-color);
    background-color: #89c23a;
    border-color: #89c23a;
    aspect-ratio: 1;
    border-radius: 50%;
    display: grid;
    place-items: center;
    padding: 0 12px;
  }
</style>
