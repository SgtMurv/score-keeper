<script>
  import { onMount } from 'svelte';

  export let playerName = '';
  export let playerId = 0;
  let count = 0;
  let currentCountKey = `current-count-${playerId}`;

  const INCREMENT = 1;
  const DECREMENT = -1;

  function modifyCount(modifier) {
    if (modifier == DECREMENT && count == 0) return;

    count += modifier;
    localStorage.setItem(currentCountKey, count);
  }

  onMount(() => {
    let currentCountFromLocalStorage = localStorage.getItem(currentCountKey);

    if (currentCountFromLocalStorage) {
      count = currentCountFromLocalStorage;
    }
  });
</script>

<!-- We have {playerName} {count} to display... -->
<div>
  <div class="player-name-label">
    <p>{playerName}</p>
  </div>
  <div class="counter-wrapper">
    <p>Put the counter in here...</p>
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
  }
</style>
