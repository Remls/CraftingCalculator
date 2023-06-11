<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { have, need, isDisabled } from "../stores/base";
  import { type Craftable, type Rarity } from "../types";
  import { keyNames, keyNamesReversed, keys } from "../helpers/constants";
  import { IconHelpCircle } from "@tabler/icons-svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  
  $: highestNeed = (() => {
    for (let i = 0; i < keyNames.length; i++) {
      if ($isDisabled[keyNames[i]]) continue;
      if ($need[keyNames[i]] > 0) {
        return {
          rarity: keyNames[i],
          limit: $need[keyNames[i]],
        };
      }
    }
    return {
      rarity: "one" as Rarity,
      limit: 0,
    };
  })();

  const simplify = (input: Craftable, limitHighestRarity = false) => {
    let power = 0;
    let sum = 0;
    keyNamesReversed.forEach((key) => {
      if ($isDisabled[key]) return;
      if (limitHighestRarity) {
        const current = keyNamesReversed.indexOf(key);
        const highest = keyNamesReversed.indexOf(highestNeed.rarity);
        if (current > highest) {
          // None of this rarity can be used
          sum += 0;
        } else if (current == highest) {
          // This rarity can be used, only up to the limit
          sum += Math.min(input[key], highestNeed.limit) * Math.pow(3, power);
        } else {
          // This rarity can be used, all of it
          sum += input[key] * Math.pow(3, power);
        }
      } else {
        // No limit
        sum += input[key] * Math.pow(3, power);
      }
      power++;
    });
    return sum;
  };

  const progressValue = tweened(0, {
    duration: 1000,
    easing: cubicOut,
  });

  $: simplifiedValues = (() => {
    const haveSm = simplify($have, true);
    const needSm = simplify($need);
    let diff = needSm - haveSm;
    if (diff < 0) diff = 0;
    return {
      have: haveSm,
      need: needSm,
      diff,
    };
  })();
  $: if (simplifiedValues.need == 0) {
    progressValue.set(0);
  } else {
    progressValue.set((simplifiedValues.have / simplifiedValues.need) * 100);
  }
</script>

<div>
  <strong>PROGRESS</strong>
  <button class="icon help-button" on:click={() => dispatch('help')}>
    <IconHelpCircle size={14} />
  </button>
  <br />
  <progress
    max="100"
    value={$progressValue}
    class:full={$progressValue >= 100}
  />
  <br />
  {simplifiedValues.have} / {simplifiedValues.need}
  {#if simplifiedValues.diff > 0}
    ({simplifiedValues.diff} remaining)
  {/if}
  <br />
  {$progressValue.toFixed(2)}%
</div>

<style>
  .help-button {
    display: inline-flex;
  }
  progress {
    accent-color: #287ee1;
  }
  progress.full {
    accent-color: green;
  }
</style>
