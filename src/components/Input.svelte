<script>
  import Solved from "./Solved.svelte";
  import Button from "../shared/Button.svelte";

  let numberOfNumbers = 2;
  let numbers = getNewNumbers(numberOfNumbers);

  let result;
  let isCorrect = true;
  let correctAnswers = [];

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getNewNumbers(numberCount) {
    let arr = [];
    arr[0] = getRandomIntInclusive(50, 1000);
    for (let index = 1; index < numberCount; index++) {
      arr[index] = getRandomIntInclusive(10, 100);
    }
    return arr;
  }
  function compareHandler() {
    if (numbers.reduce((sum, a) => sum + a, 0) === result) {
      isCorrect = true;
      let correctAnswer = `${numbers.join(" + ")} = ${result} is correct!`;
      correctAnswers = [...correctAnswers, correctAnswer];
      numbers = getNewNumbers(numberOfNumbers);
      result = undefined;
    } else {
      isCorrect = false;
    }
  }
</script>

<Solved {correctAnswers} />
<div class="container">
  <h1>
    {numbers.join(" + ")} =
  </h1>
  <form on:submit|preventDefault={compareHandler}>
    <input
      class="inputField"
      type="number"
      placeholder="answer"
      bind:value={result}
    />
    <Button type="submit">Submit</Button>
  </form>
</div>
{#if !isCorrect}
  <div>incorrect</div>
{/if}

<style>
  .inputField {
    width: 10.2em;
    height: 3.2em;
  }
</style>
