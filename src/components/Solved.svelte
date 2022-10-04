<script>
  import Button from "../shared/Button.svelte";
  export let correctAnswers = [];
</script>

{#each correctAnswers as correctAnswer}
  <div>{correctAnswer}</div>
{/each}

<style>
</style>

