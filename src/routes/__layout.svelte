<script>
  import '../app.css';
</script>

<main>
  <slot />
</main>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
  }
</style>
