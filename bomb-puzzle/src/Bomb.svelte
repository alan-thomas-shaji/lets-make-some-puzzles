<script>
	let count = 100;
	let res = count;
  function handleClick()
  {
    
    const interval = setInterval(() => (count > 0) ? count-- : count, 1000);
    return () => {
      clearInterval(interval);
    }; 
  }
</script>


<div class="bomb">
    <center>
        <img src="https://play-lh.googleusercontent.com/hOJIe8VrvSTdJ02L2GoFSeopQh_BIfKS4bb3HjqPq_8aAjAPZkfyCY6Mk7MaCJuv8Vs" width=400 alt="">
        <br>
        <button class="start" on:click="{handleClick}">Start diffusing!</button>
        <div class="App">
            <h1>You have {count} seconds left</h1>
        </div>
    </center>
</div>



<style>

    button.start{
        text-align: center;
        font-size: 2em;
        background-color: greenyellow;
        margin: 10px;
        padding: 10px;
        color: rgb(41, 41, 41);
        border-radius: 15px;
    }
    button.start:hover{
        background-color: rgb(59, 243, 13);
    }

    h1{
        font-size: 2em;
    }

</style>