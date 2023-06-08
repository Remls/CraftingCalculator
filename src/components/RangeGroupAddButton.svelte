<script>
  import { IconPlus } from "@tabler/icons-svelte";
  import { presetOptions } from "../stores/presetOptions";
  export let type;

  $: hide = $presetOptions[type].rangeGroups.length >= 3;

  const clickHandler = () => {
    navigator.vibrate?.(50);
    presetOptions.addRangeGroup(type);
  };
</script>

<div class="button-container">
  <button class="button" on:click={clickHandler} class:hide>
    <IconPlus size={12} />
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
  .button.hide {
    display: none;
  }
</style>
