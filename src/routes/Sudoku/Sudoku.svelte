<script>
	var sudoku = [
        [5, null, 6, null, null, null],
        [null, null, null, null, 2, null],
        [null, 6, null, null, null, null],
        [null, null, null, 5, null, 1],
        [null, null, 4, null, null, null],
        [null, null, null, 1, null, 3]
    ];
    import SudokuCell from "./SudokuCell.svelte";
    
	var sudokuAnsHashed = "8d2cbaf16d573434b9776abf73a1ae5ab0b7295a2449f3c469d76ccc66162173";

	async function sudokuEncrypt(input){
		const msgBuffer = new TextEncoder().encode(input);
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
		const hashArray=Array.from(new Uint8Array(hashBuffer));
		const hashHex=hashArray.map(b=>('00'+b.toString(16)).slice(-2)).join('');
		return hashHex;
	}

	async function sudokuCheckAns(){
		if((await sudokuEncrypt(document.getElementsByName("ans")[0].value)) == sudokuAnsHashed)
			alert("Congrats");
		else
			alert("Try Again");
	}

</script>


<div id="sudoku-wrap" class="p-4 text-lg text-center">
	<h1 class="text-3xl">Puzzle</h1>
	<div id="content" class="m-2 p-2">
		<p>Find the first row of the sudoku</p>	
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
		<input class="mt-0 mb-0 mr-4 p-2" type="text" placeholder="Enter Answer" name="ans">
		<button class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" on:click={() => sudokuCheckAns()}>Go</button>
	</div>
</div>

