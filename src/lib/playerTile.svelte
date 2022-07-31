<script>
  import { onMount } from 'svelte';

  export let playerName = '';
  export let playerId = 0;
  let count = 0;
  let currentCountKey = `current-count-${playerId}`;
  let fetchingScore = true;

  const INCREMENT = 1;
  const DECREMENT = -1;

  function modifyCount(modifier) {
    // once a backend is implemented then we could add a auto save feature possibly...
    console.log(`${currentCountKey} has been modified`);

    if (modifier == DECREMENT && count == 0) return;

    count += modifier;
    localStorage.setItem(currentCountKey, count);
  }

  onMount(() => {
    let currentCountFromLocalStorage = localStorage.getItem(currentCountKey);

    if (currentCountFromLocalStorage) {
      setTimeout(() => {
        count = +currentCountFromLocalStorage;
        fetchingScore = false;
      }, 500);
    }
  });
</script>

<div>
  <div class="player-name-label">
    <p>{playerName}</p>
  </div>
  <div class="counter-wrapper">
    {#if fetchingScore}
      <p>Fetching score...</p>
    {:else}
      <button
        class="count-modifyer-button"
        on:click={() => modifyCount(DECREMENT)}
      >
        -
      </button>
      <p class="count">{count}</p>
      <button
        class="count-modifyer-button"
        on:click={() => modifyCount(INCREMENT)}
      >
        +
      </button>
    {/if}
  </div>
</div>

<style>
  .player-name-label {
    font-weight: 600;
    font-size: 28px;
    padding: 5px;
    background: #ffeba3;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;
    width: fit-content;
  }
  .player-name-label p {
    margin: 0px;
    display: inline-block;
  }
  .counter-wrapper {
    border: 2px solid black;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    align-items: center;
    background: white;
  }

  .count-modifyer-button {
    border: 2px solid black;
    border-radius: 20px;
    background: #ffeba3;
    font-size: 2rem;
    padding: 0 10px 0 10px;
    height: fit-content;
  }

  .count {
    font-size: 4rem;
    margin: 0;
  }
</style>
