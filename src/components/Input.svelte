<script>
  import Solved from "./Solved.svelte";
  import Button from "../shared/Button.svelte";
  import Card from "../shared/Card.svelte";

  let numberOfNumbers = 2;
  let numbers = getNewNumbers(numberOfNumbers);

  let result;
  let isCorrect = true;
  let answers = [];

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getNewNumbers(numberCount) {
    let arr = [];
    for (let index = 0; index < numberCount; index++) {
      const min = 10 ** (numberCount - index);
      const max = 10 * 10 ** (numberCount - index);
      arr[index] = getRandomIntInclusive(min, max);
    }
    return arr;
  }
  function compareHandler() {
    isCorrect = numbers.reduce((sum, a) => sum + a, 0) === result;
    let answer = `${numbers.join(" + ")} = ${result} is ${
      isCorrect ? "correct" : "incorrect"
    }!`;
    numbers = isCorrect? getNewNumbers(numberOfNumbers):numbers;
    answers = [...answers, answer];
    result = undefined;
  }
  function emptyMessage() {
    isCorrect = false;
  }
</script>

<Card class="container">

    <h1>
      {numbers.join(" + ")} =
    </h1>
    <form on:submit|preventDefault={result ? compareHandler : emptyMessage}>
      <input
        class="inputField"
        type="number"
        placeholder="answer"
        bind:value={result}
      />
      <Button type="submit">Submit</Button>
    </form>
 
  {#if !isCorrect}
    <div>incorrect</div>
  {/if}
</Card>
<Solved {answers} />

<style>
  div {
    margin: 10px;
  }
  .inputField {
    width: 10.2em;
    height: 3.2em;
  }
</style>
