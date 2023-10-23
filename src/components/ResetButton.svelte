<script lang="ts">
  import { have, need, isDisabled } from "../stores/base";
  import { fullReset } from "../helpers/functions";
  export let type: "have" | "need" | "all" = "all";
  export let size: number = 12;

  const clickHandler = () => {
    if (type === "have") {
      navigator.vibrate?.(50);
      have.reset();
    } else if (type === "need") {
      navigator.vibrate?.(50);
      need.reset();
    } else {
      navigator.vibrate?.([150, 50, 150]);
      fullReset();
    }
  };
</script>

<div class="button-container">
  <button class="button" on:click={clickHandler} style="font-size: {size}px;">
    <slot />
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
    height: 32px;
  }
</style>
