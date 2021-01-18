import App from './App.svelte';

var sudoku = [
	[null, 3, null, 6, null, 5],
	[null, 4, null, null, null, null],
	[3, null, null, null, null, null],
	[null, null, null, 3, 6, null],
	[5, null, 2, null, null, 6],
	[null, null, null, 5, null, 1]
];    

const app = new App({
	target: document.body,
	props: {"sudoku": sudoku}
});

export default app;