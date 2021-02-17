<script>
    export let handlerFunction;
    export let text;
</script>

<button class="border border-orange bg-orange text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline" on:click={() => handlerFunction()}>{text}</button>