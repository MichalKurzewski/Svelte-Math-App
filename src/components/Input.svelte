<script>
  import Button from "../shared/Button.svelte";
let firstNumber;
let secondNumber;
  let result;
  let isCorrect = true;
  let correctAnswers = [];
  getNewNumbers();
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getNewNumbers() {
    firstNumber = getRandomIntInclusive(50,1000);
    secondNumber = getRandomIntInclusive(10, 100);
  }
  function compareHandler() {
    console.log(
      "%c [  ]-16",
      "font-size:13px; background:pink; color:#bf2c9f;",
      result
    );
    if (firstNumber + secondNumber === result) {
      isCorrect = true;
      let correctAnswer = `${firstNumber} + ${secondNumber} = ${result} is correct!`;
      correctAnswers = [...correctAnswers, correctAnswer];
      getNewNumbers();
      result=undefined;
    }
    else{
      isCorrect = false;
    }
  }
</script>

{#each correctAnswers as correctAnswer}
  <div>{correctAnswer}</div>
{/each}
<span>
  <h1>
    {firstNumber} + {secondNumber} =
    <form on:submit|preventDefault = {compareHandler}>
      <input type="number" placeholder="answer" bind:value={result} />
      <Button type="submit">Submit</Button>
    </form>
  </h1>
  {#if !isCorrect}
    <div>incorrect</div>
  {/if}
</span>

<style>
</style>
