<script lang="ts">
  import { IconCirclePlus } from "@tabler/icons-svelte";
  import { presetOptions } from "../stores/presetOptions";
  import { type PresetType } from "../types";
  
  export let type: PresetType;
  export let maxRangeGroupLength = 3;

  $: hide = $presetOptions[type].rangeGroups.length >= maxRangeGroupLength;

  const clickHandler = () => {
    navigator.vibrate?.(50);
    presetOptions.addRangeGroup(type);
  };
</script>

<div class="button-container">
  <button class="icon" on:click={clickHandler} class:hide>
    <IconCirclePlus color="green" />
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
