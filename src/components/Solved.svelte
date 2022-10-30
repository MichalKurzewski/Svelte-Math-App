<script>
  import Totals from "../shared/Totals.svelte";
  import Button from "../shared/Button.svelte";
  import { storedAnswers } from "./store.js";
  export let answer;

  $: storedAnswers.update((arr) => (answer ? [...arr, answer] : arr));
  const clearHandler = () => {
    storedAnswers.update(() => []);
  };
  $: correctCount = $storedAnswers.reduce(
    (count, answer) => (answer.includes("is correct") ? count + 1 : count),
    0
  );
  $: incorrectCount = $storedAnswers.reduce(
    (count, answer) => (answer.includes("is incorrect") ? count + 1 : count),
    0
  );
</script>

<Totals {incorrectCount} {correctCount} />
{#each $storedAnswers as answer}
  <div>{answer}</div>
{/each}
{#if $storedAnswers.length > 0}
  <Button on:click={clearHandler}>Clear</Button>
{/if}

<style>
  div {
    margin: 10px;
  }
</style>
