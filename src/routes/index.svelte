<script>
  import PlayerTile from '../lib/playerTile.svelte';

  let players = [
    { name: 'Player 1', id: 0 },
    { name: 'Player 2', id: 1 },
  ];

  function resetScores() {
    // go through the localstorage and get all the entries that start with current-count-
  }
</script>

<div class="home-wrapper">
  <h1>Score keeper</h1>
  <div class="playerTiles">
    {#each players as player}
      <PlayerTile playerName={player.name} playerId={player.id} />
    {/each}
  </div>
  <div class="reset-button-wrapper">
    <button on:click={() => resetScores()}>Reset</button>
  </div>
</div>

<style>
  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 2.5em;
  }

  .home-wrapper {
    display: flex;
    justify-content: start;
    /* gap: 10%; */
    flex-direction: column;
    height: 100%;
  }

  .reset-button-wrapper button {
    font-size: 1.5rem;
    background: #ffeba3;
    width: fit-content;
    border: 2px solid black;
    padding: 10px 20px;
  }

  .reset-button-wrapper {
    display: flex;
    justify-content: center;
  }

  .playerTiles {
    height: 100%;
    display: flex;
    justify-content: start;
    gap: 5%;
    flex-direction: column;
  }
</style>
