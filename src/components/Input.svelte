<script>
  import Solved from "./Solved.svelte";
  import Button from "../shared/Button.svelte";
  import Card from "../shared/Card.svelte";

  let numberOfNumbers = 2;
  let numbers = getNewNumbers(numberOfNumbers);
  let equationType = "+";
  let result;
  let isCorrect = true;
  let answers = [];
  let answer;

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

  function compareEquationHandler() {
    switch (equationType) {
      case "+":
        isCorrect = numbers.reduce((sum, a) => sum + a, 0) === result;
        break;
      case "-":
        isCorrect = numbers.reduce((sum, a) => sum - a) === result;
        break;
      default:
        break;
    }
    answer = `${numbers.join(` ${equationType} `)} = ${result} is ${
      isCorrect ? "correct" : "incorrect"
    }!`;
    if (isCorrect) {
      equationType = equationType === "+" ? "-" : "+";
      numbers = getNewNumbers(numberOfNumbers);
    }
    answers = [...answers, answer];
    result = undefined;
  }
  function emptyMessageHandler() {
    isCorrect = false;
  }
</script>

<Card>
  <h1>
    {numbers.join(` ${equationType} `)} =
  </h1>
  <form
    on:submit|preventDefault={result
      ? compareEquationHandler
      : emptyMessageHandler}
  >
    <input
      class="inputField"
      type="number"
      placeholder="answer"
      bind:value={result}
    />
    <Button type="submit">Submit</Button>
  </form>

  {#if !isCorrect}
    <h1 class="red-flag">incorrect</h1>
  {/if}
</Card>
<Solved {answer} />

<style>
  .red-flag {
    color: red;
    margin: 10px;
  }
  .inputField {
    width: 10.2em;
    height: 3.2em;
  }
</style>
