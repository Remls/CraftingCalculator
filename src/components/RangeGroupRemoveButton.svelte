<script>
  import { presetOptions } from "../stores/presetOptions";
  export let type;
  export let index;

  $: hide = $presetOptions[type].rangeGroups.length <= 1;

  const clickHandler = () => {
    navigator.vibrate(50);
    presetOptions.removeRangeGroup(type, index);
  };
</script>

<div class="button-container">
  <button class="button" on:click={clickHandler} class:hide> - </button>
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
