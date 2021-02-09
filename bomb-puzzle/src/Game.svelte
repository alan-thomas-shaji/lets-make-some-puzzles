<script>

    let colour;

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
    
</script>

<section id="gamebar">
    <div class="game bg-red-100">
    <h1>Here's the bomb, diffuse it before the timer goes off! Cutting one wire from this bomb can result in it defusing... Hold up, cutting the wrong wire would result in the timer going off! Let's see if you're lucky enough, OR, if you're skilled enough to go down deep into seeing how the bomb works!</h1>
    <center><img class="main-bomb" src="images/gameplay.jpg" alt="bg" width="500"></center>
    <h1>Which wire would you cut?</h1>
    <button class="bt-1" id="green" on:click="{getcolour}">Green</button>
    <button class="bt-2" id="blue" on:click="{getcolour}">Blue</button>
    <button class="bt-3" id="red" on:click="{() => (open = !open)}">Red</button>
    <button class="bt-4" id="orange" on:click="{getcolour}">Orange</button>
    <button class="bt-5" id="yellow" on:click="{getcolour}">Yellow</button>
    </div>

</section>
{#if open}
  <!-- I usually use something like Tippy for any nontrivial
       popup management. The example at the end demonstrates this. -->
  <div class="popup" style="position:absolute" use:closeOnClickOutside>
    <h1>YAAAY!! YOU WON!</h1>
  </div>
{/if}
<style>

.game {
    width: auto;
    height: auto;
}

h1 {
    font-size: 2em;
    font-weight: bold;
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



</style>