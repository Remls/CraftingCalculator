<script lang="ts">
  import Modal from "./Modal.svelte";

  export let showModal: boolean;
</script>

<Modal bind:showModal>
  <div>
    <p>
      Use the sliders to select From and To, then click one of the buttons to
      apply the preset. Applying a preset will overwrite any existing value in the
      Need column.
    </p>
    <p>
      If a preset is selected, the simplified value (under the progress bar) will
      be calculated based only on the available rarities of your selected preset
      (with the lowest rarity taking a value of 1, then 3, then 9, etc.). Also,
      input boxes for rarities that are impossible to obtain for the selected
      preset will be disabled.
    </p>
    <p>
      To clear the preset and re-enable all inputs, click the "Full Reset" button.
    </p>
  </div>
</Modal>

<style>
  p {
    margin: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>