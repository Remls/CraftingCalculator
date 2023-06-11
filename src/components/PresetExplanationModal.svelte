<script lang="ts">
  export let showModal: boolean;

  let dialog: HTMLDialogElement;

  $: if (dialog && showModal) dialog.showModal();

  const clickHandler = () => {
    navigator.vibrate?.(50);
    dialog.close();
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <div on:click|stopPropagation>
    <p>
      Use the sliders to select From and To, then click one of the buttons to
      apply the preset. Applying a preset will overwrite any existing value in
      the Need column.
    </p>
    <p>
      If a preset is selected, the simplified value (under the progress bar)
      will be calculated based only on the available rarities of your selected
      preset (with the lowest rarity taking a value of 1, then 3, then 9, etc.).
      Also, input boxes for rarities that are impossible to obtain for the
      selected preset will be disabled.
    </p>
    <p>
      To clear the preset and re-enable all inputs, click the "Full Reset"
      button.
    </p>
  </div>
  <div class="actions">
    <!-- svelte-ignore a11y-autofocus -->
    <button autofocus on:click={clickHandler}>Close</button>
  </div>
</dialog>

<style>
  dialog {
    max-width: 32em;
    border-radius: 0.2em;
    border: none;
    padding: 0;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog > div {
    padding: 2em;
    text-align: justify;
  }
  dialog > div.actions {
    display: flex;
    justify-content: flex-end;
    padding: 0 2em 2em;
  }
  dialog > div > p {
    margin: 0 0 1em;
  }
  dialog > div > p:last-child {
    margin: 0;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
