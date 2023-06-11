<script lang="ts">
  import Modal from "./Modal.svelte";

  export let showModal: boolean;
</script>

<Modal bind:showModal>
  <div>
    <p>
      These simplified values boil down your <strong>Have</strong> and
      <strong>Need</strong> values into a single comparable number. Each rarity is
      3 times more valuable than the previous one (because you need 3 of the previous
      rarity to craft the next one).
    </p>
    <p>
      Usually this means that ★ is worth 1, ★★ is worth 3, ★★★ is worth 9, etc.
      However, presets can disable some input boxes (because those rarities are
      impossible to obtain for the selected preset). In this case, the lowest
      <em>obtainable</em> rarity will be worth 1, then 3, then 9, etc. up to the
      largest
      <em>obtainable</em> rarity.
    </p>
    <p>
      If you specify that you only <strong>Need</strong> up to a certain rarity,
      then any value larger than that that you may <strong>Have</strong> will not
      factor in to the calculation. This is because you can't use those extra drops
      to craft anyway.
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
