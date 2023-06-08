<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { have, need, isDisabled } from "../stores/base";

  const simplify = (input) => {
    let power = 0;
    let sum = 0;
    ["one", "two", "three", "four", "five"].forEach((key) => {
      if ($isDisabled[key]) return;
      sum += input[key] * Math.pow(3, power);
      power++;
    });
    return sum;
  };

  const progressValue = tweened(0, {
    duration: 1000,
    easing: cubicOut,
  });

  $: haveSimplified = simplify($have);
  $: needSimplified = simplify($need);
  $: diff = (() => {
    if (needSimplified == 0) return 0;
    if (needSimplified < haveSimplified) return 0;
    return needSimplified - haveSimplified;
  })();
  $: if (needSimplified == 0) {
    progressValue.set(0);
  } else {
    progressValue.set((haveSimplified / needSimplified) * 100);
  }
</script>

<div>
  <progress max="100" value={$progressValue} class:full={$progressValue >= 100} />
  <br />
  {haveSimplified} / {needSimplified}
  {#if diff > 0}
    ({diff} remaining)
  {/if}
  <br />
  {$progressValue.toFixed(2)}%
</div>

<style>
  progress {
    accent-color: #287ee1;
  }
  progress.full {
    accent-color: green;
  }
</style>
