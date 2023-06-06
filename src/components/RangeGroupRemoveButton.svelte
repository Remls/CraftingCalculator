<script>
  import { presetOptions } from "../stores/presetOptions";
  export let type;
  export let index;
</script>

<div class="button-container">
  <button
    class="button"
    on:click={() => presetOptions.removeRangeGroup(type, index)}
    class:hide={$presetOptions[type].rangeGroups.length === 1}
  >
    -
  </button>
</div>

<style>
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button {
    color: white;
    background-color: #c23a3a;
    border-color: #c23a3a;
    aspect-ratio: 1;
    border-radius: 50%;
    display: grid;
    place-items: center;
    padding: 0 12px;
  }
  .button.hide {
    display: none;
  }
</style>
