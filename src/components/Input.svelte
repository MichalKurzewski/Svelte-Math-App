<script>
let firstNumber = getRandomIntInclusive(50,1000);
let secondNumber = getRandomIntInclusive(10,100);
let result;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}
</script>
<span>
    <h1>{firstNumber} + {secondNumber} = </h1>
    <input value={result}/>
</span>
<style>

</style>