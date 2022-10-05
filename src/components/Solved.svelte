<script>
  import Button from "../shared/Button.svelte";
  export let answers = [];
</script>

{#each answers as answer}
  <div>{answer}</div>
{/each}

<style>
  div {
    margin: 10px;
  }
</style>
