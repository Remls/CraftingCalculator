<script lang="ts">
  export let value = 0;
  export let disabled = false;
  export let tabindex = 0;
  const clearValueIfZero = () => {
    if (value === 0) {
      value = null;
    }
  };
</script>

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

<style>
  input[type="number"] {
    width: 3rem;
  }

  input[type="number"]:disabled {
    color: var(--txt-secondary-color);
    cursor: not-allowed;
  }
</style>
