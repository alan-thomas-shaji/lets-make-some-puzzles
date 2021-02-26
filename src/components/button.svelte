<script>
  export let handlerFunction;
  export let text;
</script>

<button
  class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline border border-orange bg-orange hover:bg-red-700"
  on:click={() => {
    handlerFunction();
  }}>{text}</button
>
