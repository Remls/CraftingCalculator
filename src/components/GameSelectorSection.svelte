<script lang="ts">
  import genshinImg from "../assets/genshin.png";
  import hsrImg from "../assets/hsr.png";
  
  const games = [
    { game: "Genshin Impact", img: genshinImg },
    { game: "Honkai: Star Rail", img: hsrImg },
  ];
  export let currentlySelectedGame;
  const setGame = (game) => {
    navigator.vibrate?.(50);
    currentlySelectedGame = game;
  };
</script>

<div class="helptext">
  Select a game to view presets for:
</div>
<div class="button-group">
  {#each games as { game, img }}
    <button
      class="link-button { currentlySelectedGame === game ? 'active' : '' }"
      on:click={() => setGame(game)}
    >
      <div class="images">
        <img src={img} alt={game} />
      </div>
      {game}
    </button>
  {/each}
</div>

<style>
  div.helptext {
    margin-block-start: 1rem;
    margin-block-end: 0.5rem;
    text-align: center;
  }
  .button-group {
    flex-direction: row;
  }
  button {
    flex: 1 1 0; /* equal width */
    color: var(--txt-color);
    background-color: transparent;
    border-color: transparent;
    justify-content: center;
  }
  button.active {
    background-color: #a6f528;
    border-color: #a6f528;
    text-transform: uppercase;
    font-weight: bold;
  }
  button > div.images > img {
    width: 20px;
    height: 20px;
  }
</style>
