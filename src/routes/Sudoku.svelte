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
    import SudokuCell from "./components/SudokuCell.svelte";
    
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


<div id="sudoku-wrap">
	<h1>Puzzle Heading</h1>
	<div id="content">
		<p>Phone number is of format XXXXXX1234</p>
		<p>XXXXXX is the first row of the Sudoku</p>	
	</div>

	<table cellpadding="0" cellspacing="0" align="center">
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

	<div id="ans">
		<input type="text" placeholder="Enter Phone Number" name="ans">
		<span id="call-icon" on:click={() => checkAns()}><FontAwesomeIcon icon={faPhoneSquareAlt}/></span>
	</div>
</div>

<style>
	#sudoku-wrap {
		color: black;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-size: 18px;
	}

	#call-icon{
		font-size: 38px;
		color: green;
	}

	#call-icon:hover{
		cursor: pointer;
	}

	#ans{
		display: flex;
		align-items: center;
		justify-content: center;
	}

	table{
		border: 3px solid black;
		border-collapse:collapse;
	}

	input{
		margin-top: 0;
		margin-bottom: 0;
		margin-right: 5px;
	}

	div{
		margin: 10px;
		padding: 20px;
	}

	@media (min-width: 640px) {
		#sudoku-wrap {
			max-width: none;
		}
	}
</style>
