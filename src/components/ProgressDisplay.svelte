<script>
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

  $: haveSimplified = simplify($have);
  $: needSimplified = simplify($need);
  $: diff = (() => {
    if (needSimplified == 0) return 0;
    if (needSimplified < haveSimplified) return 0;
    return needSimplified - haveSimplified;
  })();
  $: percent = (() => {
    if (needSimplified == 0) return 0;
    return (haveSimplified / needSimplified) * 100;
  })();
  $: percentText = (() => {
    if (needSimplified == 0) return "0.00%";
    return `${percent.toFixed(2)}%`;
  })();
</script>

<div>
  <progress max="100" value={percent} class:full={percent >= 100} />
  <br />
  {haveSimplified} / {needSimplified}
  {#if diff > 0}
    ({diff} remaining)
  {/if}
  <br />
  {percentText}
</div>

<style>
  progress {
    accent-color: #287ee1;
  }
  progress.full {
    accent-color: green;
  }
</style>
