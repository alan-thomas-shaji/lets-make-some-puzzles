<script>
  export let nextPuzzle;
  export let lastAns;
  import { onMount } from "svelte";
  import Grid from "./Grid.svelte";
  import {navigate} from "svelte-routing";
  import { solutionGrid } from "./utils";
  import { getNextUrl, verifyHash, verifyPreviousAns } from "../../common";
  import { picrossHashed } from "../../constants";
import Button from "../../components/button.svelte";
  
  let grid = solutionGrid;


  async function submit() {
    let val = document.getElementsByName("answer")[0].value.toLocaleLowerCase();
    
    if (await verifyHash(val, picrossHashed))
        navigate(getNextUrl(nextPuzzle, val));
    else 
        alert("Try Again");

    console.log("submit");
  }

  onMount(() => verifyPreviousAns(window.location, lastAns));
</script>

<main>
  <div class="p-4 text-lg font-mono text-center">
    <p class="text-6xl leading-normal mt-0 mb-2 text-pink-800">Nonogram</p>
    <div>
      <p
        class="text-lg inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 uppercase last:mr-0 mr-1"
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
        class="mt-0 mb-0 px-3 py-3 mr-4 p-2 placeholder-grey-400 text-grey-700 relative bg-white bg-white rounded text-sm border border-grey-400 outline-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Whose logo is it?"
        name="answer"
      />
      <Button handlerFunction={submit} text="Check"/>
    </div>
  </div>
</main>
