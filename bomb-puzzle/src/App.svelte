<script>
	import {onMount} from 'svelte';
	export let name;
	let level = 10;
	let count = 100;
	let colour;

	onMount(async() => {
		if(localStorage.getItem('counter') === null)
		{
			localStorage.setItem('counter', count);
		}
		else
		{
			count = localStorage.getItem('counter');
		}
		return() => {
			localStorage.setItem('counter', count);
		}
	})
	
  function pop()
  {
	  alert("Your time is over. The bomb went off! Woops");
	  document.getElementById("gamebar").style.display = "none";
	  this.style.visibility = "hidden";
  }



  function handleClick()
  {
    document.getElementById("gamebar").style.display = "block";
    const interval = setInterval(() => (count > 0) ? count-- : count, 1000);
    return () => {
      clearInterval(interval);
    }; 
  }



  function getcolour()
    {
        colour = button.id;
    }



    let open = false;
    function closeOnClickOutside(node) {
      const handleClick = (event) => {
        if(!node.contains(event.target)) {
          open = false;
          // If you want to prevent the outside click from doing anything else.
          event.stopImmediatePropagation();
        }
      };

      document.addEventListener('click', handleClick, { capture: true });
      return {
        destroy() {
          document.removeEventListener(
              'click',
              handleClick,
              { capture: true }
            );
        }
      }
    }




    function popup()
  {
	  alert("Yaaayyy!!!!You Won");
  }



</script>

<main>


	<h1>Hello {name}! Welcome to level <strong class="text-black">{level}</strong></h1>
	<h2 class="text-purple-900 bg-blue-100 p-4">Let's test your skill to the next level! Let's see if you can diffuse this bomb before it explodes.</h2>
	<br>
	<center>
        <img src="images/main-bomb.jpg" width=400 alt="front-bomb">
        <br>
	<button class="start" id="start-button" on:click="{handleClick}">Start diffusing!</button>
	<div class="App">
		You have {count} seconds left
	</div>
	<br>
	{#if count === 0}
		{pop()};
	{/if}

	<div id="gamebar">
		<div class="game bg-red-100">
		<h1 class="game">Here's the bomb, diffuse it before the timer goes off! Cutting one wire from this bomb can result in it defusing... Hold up, cutting the wrong wire would result in the timer going off faster! Let's see if you're lucky enough, OR, if you're skilled enough to go down deep into seeing how the bomb works!</h1>
		<center><img class="main-bomb" src="images/gameplay.jpg" alt="bg" width="500"></center>
		<h1>Which wire would you cut?</h1>
		<button class="bt-1" id="green1" on:click="{handleClick}">Green1</button>
		<button class="bt-5" id="yellow1" on:click="{handleClick}">Yellow1</button>
		<button class="bt-2" id="blue1" on:click="{handleClick}">Blue1</button>
		<button class="bt-4" id="orange1" on:click="{handleClick}">Orange1</button>
		<button class="bt-3" id="red1" on:click="{() => (open = !open)}">Red1</button>
		<button class="bt-1" id="green2" on:click="{handleClick}">Green2</button>
		<button class="bt-5" id="yellow2" on:click="{handleClick}">Yellow2</button>
		<button class="bt-2" id="blue2" on:click="{handleClick}">Blue2</button>
		<button class="bt-3" id="red2" on:click="{handleClick}">Red2</button>
		<button class="bt-4" id="orange2" on:click="{handleClick}">Orange2</button>
	</div>
	
	</div>


	{#if open}

	{popup()};

	  <div class="popup" style="position:absolute" use:closeOnClickOutside>

		<h1>YAAAY!! YOU WON!</h1>

	  </div>

	{/if}


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

	button.start{
        text-align: center;
        font-size: 2em;
        background-color: greenyellow;
        margin: 10px;
        padding: 10px;
        color: rgb(41, 41, 41);
        border-radius: 15px;
		display: block;
    }
    button.start:hover{
        background-color: rgb(59, 243, 13);
    }

	.App{
		font-size: 2em;
	}
	
	.game {
    width: auto;
    height: auto;
}

h1.game{
    font-size: 2em;
    font-weight: 100;
	color: black;
	text-transform: none;
}

.bt-1 {
    text-align: center;
        font-size: 2em;
        background-color: green;
        margin: 10px;
        padding: 10px;
        color: rgb(41, 41, 41);
        border-radius: 15px;
}

.bt-2 {
    text-align: center;
        font-size: 2em;
        background-color: blue;
        margin: 10px;
        padding: 10px;
        color: rgb(41, 41, 41);
        border-radius: 15px;
}

.bt-3 {
    text-align: center;
        font-size: 2em;
        background-color: red;
        margin: 10px;
        padding: 10px;
        color: rgb(41, 41, 41);
        border-radius: 15px;
}

.bt-4 {
    text-align: center;
        font-size: 2em;
        background-color: orange;
        margin: 10px;
        padding: 10px;
        color: rgb(41, 41, 41);
        border-radius: 15px;
}

.bt-5 {
    text-align: center;
        font-size: 2em;
        background-color: yellow;
        margin: 10px;
        padding: 10px;
        color: rgb(41, 41, 41);
        border-radius: 15px;
}

#gamebar{
	display: none;
}

</style>