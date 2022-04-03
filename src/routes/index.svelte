<script>
    import Counter from '../lib/counter.svelte';
</script>

<div class="home-wrapper">
    <h1>Cheese on Wheels</h1>
    <div>
        <Counter playerName="Player 1" />
        <Counter playerName="Player 2" />
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
        gap: 100px;
        flex-direction: column;
        height: 100%;
    }
</style>
