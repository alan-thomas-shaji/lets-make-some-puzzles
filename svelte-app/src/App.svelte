<script>
	import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
	import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'fontawesome-svelte';
	export let sudoku;
	import SudokuCell from "./SudokuCell.svelte";

	var ansHashed = "231645"; // TODO: store hash

	function changed(i, j, val){
		sudoku[i][j] = val;
	}

	var enabled = [];
	for(var i=0; i< sudoku.length; i++){
		enabled.push([]);
		for(var j=0; j < sudoku[i].length; j++)
			enabled[i].push(sudoku[i][j] == null);
	}

	function encrypt(str){
		return str;
	}

	function checkAns(){
		if(encrypt(document.getElementsByName("ans")[0].value) == ansHashed)
			alert("Congrats");
		else
			alert("Try Again");
	}
</script>


<main>
	<h1>Puzzle Heading</h1>
	<div id="content">
		<p>Phone number is of format XXXXXX1234</p>
		<p>XXXXXX is the first row of the Sudoku</p>	
	</div>

	<table align="center">
		{#each {length: sudoku.length} as _, i}
			<tr>
				{#each {length: sudoku.length} as _,j}
					<SudokuCell enabled={enabled[i][j]} changed={changed} index_i={i} index_j={j} num={sudoku[i][j]}/>
				{/each}
			</tr>
		{/each}
	</table>

	<div id="ans">
		<input type="text" placeholder="Enter Phone Number" name="ans">
		<span id="call-icon" on:click={() => checkAns()}><FontAwesomeIcon icon={faPhoneSquareAlt}/></span>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		font-size: 18px;
	}

	#call-icon{
		vertical-align: center!important;
		padding: 0;
		font-size: 38px;
		color: green;
	}

	table{
		border: 2px solid black;
		border-collapse: collapse;
	}

	div{
		margin: 10px;
		padding: 20px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>