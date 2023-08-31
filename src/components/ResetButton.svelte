<script lang="ts">
  import { have, need, isDisabled } from "../stores/base";
  export let type: "have" | "need" | "all" = "all";
  export let size: number = 12;

  const resetHave = () => {
    have.set({
      five: null,
      four: null,
      three: null,
      two: null,
      one: null,
    });
  };
  const resetNeed = () => {
    need.set({
      five: null,
      four: null,
      three: null,
      two: null,
      one: null,
    });
  };
  const resetAll = () => {
    localStorage.clear();
    resetHave();
    resetNeed();
    isDisabled.set({
      five: false,
      four: false,
      three: false,
      two: false,
      one: false,
    });
  };

  const clickHandler = () => {
    if (type === "have") {
      navigator.vibrate?.(50);
      resetHave();
    } else if (type === "need") {
      navigator.vibrate?.(50);
      resetNeed();
    } else {
      navigator.vibrate?.([150, 50, 150]);
      resetAll();
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
