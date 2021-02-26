<script>
  export let nextPuzzle;
  export let lastAns;
  export let id;
  import { onMount } from "svelte";
  import Grid from "./Grid.svelte";
  import { navigate } from "svelte-routing";
  import { solutionGrid } from "./utils";
  import {
    getNextUrl,
    verifyHash,
    verifyPreviousAns,
    updateProgress,
  } from "../../common";
  import { picrossHashed } from "../../constants";
  import Button from "../../components/button.svelte";

  let grid = solutionGrid;

  const clue = "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?";

  async function submit() {
    let val = document.getElementsByName("answer")[0].value.toLocaleLowerCase();

    if (await verifyHash(val, picrossHashed))
      navigate(getNextUrl(nextPuzzle, val, true));
    else alert("Try Again");

    console.log("submit");
  }

  onMount(() => {
    verifyPreviousAns(window.location, lastAns);
    updateProgress(id);
    console.log(clue);
  });
</script>

<main>
  <div class="p-4 text-lg text-center text-orange">
    <p class="text-5xl leading-normal mt-0 mb-2">Nonogram</p>
    <div>
      <p
        class="text-lg inline-block py-1 px-2 uppercase rounded-full text-orange uppercase last:mr-0 mr-1"
      >
        Complete the puzzle and identify the logo thats generated.
      </p>
    </div>
    <br />

    <div>
      <table cellpadding="0" cellspacing="0" align="center">
        {#each { length: grid.length } as _, i}
          <tr>
            {#each { length: grid.length } as _, j}
              <Grid index_i={i} index_j={j} val={grid[i][j]} />
            {/each}
          </tr>
        {/each}
      </table>
    </div>
    <br />
    <div class="mb-3 pt-0">
      <input
        class="p-2 m-2 bg-transparent"
        name="answer"
        type="text"
        placeholder="Whose logo is it?"
      />
      <Button color="orange" handlerFunction={submit} text="Check" />
      <button
        class="invisible cursor: default;"
        on:click={() => {
          window.location.href = "https://slack.com/intl/en-in/";
        }}
      />
    </div>
  </div>
</main>
