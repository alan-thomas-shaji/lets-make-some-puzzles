<script>
  export let name;
  export let githubUrl;
  export let imgLink;
  export let puzzles;
</script>

<div
  class="p-4 flex items-center cursor-pointer w-64"
  on:click={window.open(githubUrl)}
>
  <img
    class="w-16 h-16 rounded-full mr-4"
    src={imgLink}
    alt="Avatar of Writer"
  />
  <div class="text-xl">
    <p class="text-orange leading-none">{name}</p>
    {#if puzzles}
      <p class="text-gray-600 text-lg">{puzzles}</p>
    {/if}
  </div>
</div>
