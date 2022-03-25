<script>
  import underConstructionImage from "$lib/assets/undraw_under_construction.svg";
</script>

<div class="home-wrapper">
  <h1>Cheese on Wheels</h1>
  <div>
    <img alt="Under Construction" src={underConstructionImage} />
    <p>Website is currently under construction.</p>
  </div>
</div>

<style>
  h1 {
    font-family: "Courier New", Courier, monospace;
    text-align: center;
    font-weight: 600;
  }
  img {
    width: 100%;
  }

  p {
    font-family: "Courier New", Courier, monospace;
    text-align: center;
  }

  .home-wrapper {
    display: flex;
    justify-content: start;
    gap: 200px;
    flex-direction: column;
    height: 100%;
  }
</style>
