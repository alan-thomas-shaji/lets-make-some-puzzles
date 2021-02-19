<script>	
	import SudokuCell from "./SudokuCell.svelte";
	import {navigate} from "svelte-routing";
	import { getNextUrl, updateProgress, verifyHash, verifyPreviousAns } from "../../common";
	import { sudokuHashed } from "../../constants";
	import Button from "../../components/button.svelte";
	import { onMount } from "svelte";
	export let id;
	export let nextPuzzle;
	export let lastAns;
	var sudoku = [
        [5, null, 6, null, null, null],
        [null, null, null, null, 2, null],
        [null, 6, null, null, null, null],
        [null, null, null, 5, null, 1],
        [null, null, 4, null, null, null],
        [null, null, null, 1, null, 3]
    ];
    
	async function sudokuCheckAns(){
		let val = document.getElementsByName("ans")[0].value;
		if(await verifyHash(val, sudokuHashed))
			navigate(getNextUrl(nextPuzzle, val))
		else
			alert("Try Again");
	}
	onMount(async () => {
		await verifyPreviousAns(location, lastAns);
		updateProgress(id);
	});
</script>

<div id="sudoku-wrap" class="p-4 text-lg text-center text-orange">
  <h1 class="text-5xl">Sudoku</h1>
  <div id="content" class="m-2 p-2">
    <p>Find the first row of the sudoku</p>
  </div>

  <table
    cellpadding="0"
    cellspacing="0"
    align="center"
    class="border-collapse border-4"
  >
    {#each { length: sudoku.length } as _, i}
      <tr>
        {#each { length: sudoku.length } as _, j}
          <SudokuCell index_i={i} index_j={j} num={sudoku[i][j]} />
        {/each}
      </tr>
    {/each}
  </table>
  <div id="ans" class="m-2 p-2 flex items-center justify-center">
    <input
      class="mt-0 mb-0 mr-4 p-2"
      type="text"
      placeholder="Enter Answer"
      name="ans"
    />
    <Button color="orange" handlerFunction={sudokuCheckAns} text="Go" />
  </div>
</div>
