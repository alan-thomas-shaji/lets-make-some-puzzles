<script>
  export let handlerFunction;
  export let text;
  export let color;

  let hover = color;

  if (color == "orange") hover = "red-700";

  let className =
    "text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline border border-" +
    color +
    " bg-" +
    color +
    " hover:bg-" +
    hover;

  console.log(className);
</script>

<button class={className} on:click={() => handlerFunction()}>{text}</button>
