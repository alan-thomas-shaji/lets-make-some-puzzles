<script>
	import {onMount} from 'svelte';
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

<main class="text-3xl">


	<h1>Hello Player! Welcome to level <strong class="text-black">{level}</strong></h1>
	<h2 class="text-purple-900 bg-blue-100 p-4">Let's test your skill to the next level! Let's see if you can diffuse this bomb before it explodes.</h2>
	<br>
	<center>
        <img src="Bomb/main-bomb.jpg" width=400 alt="front-bomb">
        <br>
	<button class="start text-grey-800 text-center p-2 m-2 block rounded-lg" style="background-color: greenyellow" id="start-button" on:click="{handleClick}">Start diffusing!</button>
	<div class="App">
		You have {count} seconds left
	</div>
	<br>
	{#if count === 0}
		{pop()};
	{/if}

	<div id="gamebar" style="display:none;">
		<div class="game bg-red-100">
		<h1 class="game">Here's the bomb, diffuse it before the timer goes off! Cutting one wire from this bomb can result in it defusing... Hold up, cutting the wrong wire would result in the timer going off faster! Let's see if you're lucky enough, OR, if you're skilled enough to go down deep into seeing how the bomb works!</h1>
		<center><img class="main-bomb" src="Bomb/gameplay.jpg" alt="bg" width="500"></center>
		<h1>Which wire would you cut?</h1>
		<button style="background-color: green" class="bt-1 text-center p-2 m-2 rounded-lg text-grey-800" id="green1" on:click="{handleClick}">Green1</button>
		<button style="background-color: yellow" class="bt-5 text-center p-2 m-2 rounded-lg text-grey-800" id="yellow1" on:click="{handleClick}">Yellow1</button>
		<button style="background-color: blue" class="bt-2 text-center p-2 m-2 rounded-lg text-grey-800" id="blue1" on:click="{handleClick}">Blue1</button>
		<button style="background-color: orange" class="bt-4 text-center p-2 m-2 rounded-lg text-grey-800" id="orange1" on:click="{handleClick}">Orange1</button>
		<button style="background-color: red" class="bt-3 text-center p-2 m-2 rounded-lg text-grey-800" id="red1" on:click="{() => (open = !open)}">Red1</button>
		<button style="background-color: green" class="bt-1 text-center p-2 m-2 rounded-lg text-grey-800" id="green2" on:click="{handleClick}">Green2</button>
		<button style="background-color: yellow" class="bt-5 text-center p-2 m-2 rounded-lg text-grey-800" id="yellow2" on:click="{handleClick}">Yellow2</button>
		<button style="background-color: blue" class="bt-2 text-center p-2 m-2 rounded-lg text-grey-800" id="blue2" on:click="{handleClick}">Blue2</button>
		<button style="background-color: red" class="bt-3 text-center p-2 m-2 rounded-lg text-grey-800" id="red2" on:click="{handleClick}">Red2</button>
		<button style="background-color: orange" class="bt-4 text-center p-2 m-2 rounded-lg text-grey-800" id="orange2" on:click="{handleClick}">Orange2</button>
	</div>
	
	</div>


	{#if open}

	{popup()};

	  <div class="popup" style="position:absolute" use:closeOnClickOutside>

		<h1>YAAAY!! YOU WON!</h1>

	  </div>

	{/if}


</main>
