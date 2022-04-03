<script>
    import '../app.css';
</script>

<main>
    <slot />
</main>

<footer>
    <p>v0.0.1</p>
</footer>

<style>
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        box-sizing: border-box;
        font-family: 'Courier New', Courier, monospace;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px;
        font-family: 'Courier New', Courier, monospace;
    }

    @media (min-width: 480px) {
        footer {
            padding: 40px 0;
        }
    }
</style>
