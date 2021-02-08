<script>
	import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon } from 'fontawesome-svelte';
	var sudoku = [
        [null, 3, null, 6, null, 5],
        [null, 4, null, null, null, null],
        [3, null, null, null, null, null],
        [null, null, null, 3, 6, null],
        [5, null, 2, null, null, 6],
        [null, null, null, 5, null, 1]
    ];
    import SudokuCell from "./SudokuCell.svelte";
    
	var ansHashed = "359c74260eeec18bfcccc039831d128d3d484a64b8a1dd1c53bc8d0a3ec89f0c";

	async function encrypt(input){
		const msgBuffer = new TextEncoder().encode(input);
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
		const hashArray=Array.from(new Uint8Array(hashBuffer));
		const hashHex=hashArray.map(b=>('00'+b.toString(16)).slice(-2)).join('');
		return hashHex;
	}

	async function checkAns(){
		if((await encrypt(document.getElementsByName("ans")[0].value)) == ansHashed)
			alert("Congrats");
		else
			alert("Try Again");
	}

</script>


<div id="sudoku-wrap" class="p-4 text-lg text-center">
	<h1>Puzzle Heading</h1>
	<div id="content" class="m-2 p-2">
		<p>Phone number is of format XXXXXX1234</p>
		<p>XXXXXX is the first row of the Sudoku</p>	
	</div>

	<table cellpadding="0" cellspacing="0" align="center" class="border-collapse border-black border-2">
		{#each {length: sudoku.length} as _, i}
			<tr>
				{#each {length: sudoku.length} as _,j}
					<SudokuCell 
						index_i={i} 
						index_j={j} 
						num={sudoku[i][j]}/>
				{/each}
			</tr>
		{/each}
	</table>

	<div id="ans" class="m-2 p-2 flex items-center justify-center">
		<input class="mt-0 mb-0 mr-4 p-2" type="text" placeholder="Enter Phone Number" name="ans">
		<span style="color: green" class="cursor-pointer text-5xl" id="call-icon" on:click={() => checkAns()}><FontAwesomeIcon icon={faPhoneSquareAlt}/></span>
	</div>
</div>

