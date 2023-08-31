<script lang="ts">
  import { IconPlus, IconMinus } from "@tabler/icons-svelte";

  export let value = 0;
  export let disabled = false;
  export let tabindex = 0;
  const clearValueIfZero = () => {
    if (value === 0) {
      value = null;
    }
  };
  const increment = () => {
    navigator.vibrate?.(50);
    value++;
  };
  const decrement = () => {
    if (value === 0 || value === null) {
      return;
    }
    navigator.vibrate?.(50);
    value--;
  };
</script>

<div>
  {#if disabled}
    <button class="icon" disabled></button>
  {:else}
    <button class="icon" on:click={decrement}>
      <IconMinus size={12} />
    </button>
  {/if}
  <input
    type="number"
    bind:value
    min="0"
    placeholder="0"
    {disabled}
    {tabindex}
    on:focus={clearValueIfZero}
    on:change
  />
  {#if disabled}
    <button class="icon" disabled></button>
  {:else}
    <button class="icon" on:click={increment}>
      <IconPlus size={12} />
    </button>
  {/if}
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
  
  input[type="number"] {
    width: 3rem;
  }

  input[type="number"]:disabled {
    color: var(--txt-secondary-color);
    cursor: not-allowed;
  }

  button:disabled {
    cursor: not-allowed;
  }
</style>
