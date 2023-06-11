<script lang="ts">
  import { presets } from "../helpers/constants";
  import { presetOptions } from "../stores/presetOptions";
  import { type PresetType } from "../types";

  export let type: PresetType;
  export let index = 0;
  let min = presets[type].min;
  let max = presets[type].max;
  let from = min;
  let to = max;
  $: error = from > to;

  function valueChanged() {
    if (!error) {
      presetOptions.updateDrops(type, index, from, to);
    }
  }
</script>

<div class="range-group" class:error>
  <input type="range" {min} {max} bind:value={from} on:change={valueChanged} />
  <div>
    <slot {from} {to}>
      {from} ✦ to {to} ✦
    </slot>
    {#if error}
      <span style="color: red;">
        <br />
        Invalid selection
      </span>
    {/if}
  </div>
  <input type="range" {min} {max} bind:value={to} on:change={valueChanged} />

  {#if $$slots.after}
    <slot name="after" />
  {/if}
</div>

<style>
  .range-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.125rem;
    padding: 0.5rem 0;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
  .range-group.error {
    animation: blink 1s;
    animation-iteration-count: 3;
  }
  @keyframes blink {
    50% {
      border-color: red;
    }
  }
  .range-group > input[type="range"] {
    width: 4rem;
    flex-grow: 2;
    accent-color: #287ee1;
  }
  .range-group > div {
    text-align: center;
    flex-grow: 0.5;
  }
</style>
