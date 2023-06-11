<script lang="ts">
  import Modal from "./Modal.svelte";

  export let showModal: boolean;
</script>

<Modal bind:showModal>
  <div>
    <p>
      Use the sliders to select From and To, then click one of the buttons to
      apply the preset. Applying a preset will <span class="underline">
        overwrite any existing value
      </span>
      in the
      <strong>Need</strong> column.
    </p>
    <p>
      If a preset is selected, input boxes for rarities that are impossible to
      obtain for the selected preset will be disabled. To clear the preset and
      re-enable all inputs, click the "Full Reset" button.
    </p>
  </div>
</Modal>

<style>
  p {
    margin: 0;
  }
  .underline {
    text-decoration: underline;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
