<script lang="ts">
  import hoyolabImg from "../assets/hoyolab.png";
  import paimonImg from "../assets/paimon.png";
  import { type Calculator } from "../types";

  const calculators: Calculator[] = [
    {
      name: "Hoyolab",
      url: "https://act.hoyolab.com/ys/event/calculator-sea/index.html",
      image: hoyolabImg,
    },
    {
      name: "Paimon.moe",
      url: "https://paimon.moe/calculator",
      image: paimonImg,
    },
  ];
  const goToCalculator = (calculator: Calculator) => {
    window.location.href = calculator.url;
  };
</script>

<section>
  <h2>Other calculators</h2>

  <div class="button-group">
    {#each calculators as calculator}
      <button class="link-button" on:click={() => goToCalculator(calculator)}>
        <div class="images">
          <img src={calculator.image} alt="{calculator.name} icon" />
        </div>
        {calculator.name}
      </button>
    {/each}
  </div>
</section>

<style>
  .button-group {
    flex-direction: row;
  }
  button {
    flex-grow: 1;
    color: var(--txt-color);
    background-color: #cca9d3;
    border-color: #cca9d3;
  }
  button > div.images > img {
    width: 20px;
    height: 20px;
  }
</style>
