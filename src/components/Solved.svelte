<script>
  import Button from "../shared/Button.svelte";
  import { storedAnswers } from "./store.js";
  export let answer;

  $: storedAnswers.update((arr) => (answer ? [...arr, answer] : arr));
  const clearHandler = () => {
    storedAnswers.update(() => []);
  };
</script>

{#each $storedAnswers as answer}
  <div>{answer}</div>
{/each}
{#if $storedAnswers.length>0}
  <Button on:click={clearHandler}>Clear</Button>
{/if}

<style>
  div {
    margin: 10px;
  }
</style>
