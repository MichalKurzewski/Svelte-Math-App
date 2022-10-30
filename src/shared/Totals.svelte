<script>
  export let incorrectCount = 0;
  export let correctCount = 0;
</script>

{#if correctCount > 0}
  <div class="left">Correct: {correctCount}</div>
{/if}
{#if incorrectCount > 0}
  <div class="right">Incorrect: {incorrectCount}</div>
{/if}

<style>
  .left {
    color: blue;
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 5px;
  }
  .right {
    color: red;
    position: fixed;
    top: 0px;
    right: 0px;
    padding: 5px;
  }
</style>
