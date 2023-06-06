<div class="button-container">
  <button class="button" on:click>
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
  }
</style>
