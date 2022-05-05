<script>
  import PlayerTile from '../lib/playerTile.svelte';

  let players = [
    { name: 'Player 1', id: 0 },
    { name: 'Player 2', id: 1 },
  ];
</script>

<div class="home-wrapper">
  <h1>Cheese on Wheels</h1>
  <div class="playerTiles">
    {#each players as player}
      <PlayerTile playerName={player.name} playerId={player.id} />
    {/each}
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

  .playerTiles {
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 5%;
    flex-direction: column;
  }
</style>
