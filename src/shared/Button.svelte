<script>
  export let className = "primary";
  export let type = "button";
  export let flat = false;
  export let inverse = false;
</script>

<button class={className} class:flat={flat} class:inverse={inverse} type={type} on:click>
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    box-shadow: 0.1rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
    transition-duration: 60ms;
  }
button.primary:active{
    background:  #ec7070;
    box-shadow: none;
}
.primary{
    background-color: #df6767;
    color: white;
}
.secondary{
    background-color: #f5f5f5;
    color: #0070f3;
}
.flat{
    box-shadow: none;
}
.primary.inverse{
    background-color: white;
    color: #df6767;
    border: 2px solid #df6767;
}
.secondary.inverse{
    background-color: white;
    color: #0070f3;
    border: 2px solid #0070f3;
}
</style>
