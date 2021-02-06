<script>
	import Bomb from "./Bomb.svelte";
	import Game from "./Game.svelte";
	export let name;
	let level = 10;
	import { onMount } from 'svelte';
	let count = 100;
	let res = count;
    onMount(() => {
    const interval = setInterval(() => (count > 0) ? count-- : count, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<main>
	<h1>Hello {name}! Welcome to level <strong class="text-black">{level}</strong></h1>
	<h2 class="text-purple-900 bg-blue-100 p-4">Let's test your skill to the next level! Let's see if you can diffuse this bomb before it explodes.</h2>
	<br>
	<Bomb />
	<br>
	<Game />
	<div class="App">
		<header class="Timer">
			You have <code>{count}</code> seconds
			{#if {count} === 0 }
				Your time has exceeded!!!	
			{/if}
		</header>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		font-size: 1.5em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.Timer {
		text-transform: uppercase;
		color: black;
		font-size: 3em;
	}
</style>