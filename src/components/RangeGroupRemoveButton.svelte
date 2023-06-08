<script>
  import { IconTrashX } from "@tabler/icons-svelte";
  import { presetOptions } from "../stores/presetOptions";
  export let type;
  export let index;

  $: hide = $presetOptions[type].rangeGroups.length <= 1;

  const clickHandler = () => {
    navigator.vibrate?.(50);
    presetOptions.removeRangeGroup(type, index);
  };
</script>

<div class="button-container">
  <button class="icon" on:click={clickHandler} class:hide>
    <IconTrashX color="red" />
  </button>
</div>

<style>
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button.hide {
    display: none;
  }
</style>
