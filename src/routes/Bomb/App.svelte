<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { getNextUrl, updateProgress, verifyPreviousAns } from "../../common";
  import Button from "../../components/button.svelte";

  export let nextPuzzle;
  export let lastAns;
  export let id;

  const timeLeft = 60;
  let timer = timeLeft;
  let flag = true;
  let interval;

  onMount(async () => {
    await verifyPreviousAns(window.location, lastAns);
    updateProgress(id);

    let item = localStorage.getItem("timeLeft");

    if (item == 0 || item === null) 
      localStorage.setItem("timeLeft", timeLeft);
    else{
      timer = Number.parseInt(item);
      handleClick();
    }
  });

  function toggleStyling() {
    document.getElementById("headerForBomb").style.display = "block";
    document.getElementById("startingMsge").style.display = "none";
    document.getElementById("gamebar").style.display = "block";
  }

  function revertStyling() {
    document.getElementById("headerForBomb").innerHTML = "";
    document.getElementById("gamebar").style.display = "none";
    document.getElementById("headerForBomb").style.display = "none";
    document.getElementById("startingMsge").style.display = "block";
  }

  function setCountdown() {
    interval = setInterval(() => {
      timer > 0 ? timer-- : timer;
      console.log(timer);

      localStorage.setItem("timeLeft", timer);
      document.getElementById("headerForBomb").innerHTML =
        "You have " + timer + " seconds left";

      if (timer == 0) retry();
    }, 1000);
    return () => {
      clearInterval(interval);
      retry();
    };
  }

  function handleClick() {
    if (!flag) flag = true;
    toggleStyling();
    setCountdown();
  }

  function luckyClick() {
    let element = document.getElementsByClassName("visible")[0];

    element.classList.remove("visible");
    element.classList.add("invisible");

    wrongClick();
  }

  function wrongClick() {
    for (let i = 0; i < 2; i++)
      setInterval(() => (timer > 0 ? timer-- : timer), 1000);

    if (timer == 0) retry();
    return () => {
      clearInterval(interval);
      retry();
    };
  }

  function victory() {
    revertStyling();
    clearInterval(interval);

    open = !open;
    navigate(getNextUrl(nextPuzzle, "red1"));
  }

  function retry() {
    if (flag) {
      alert("Woops, your time is over. The bomb exploded!");
      revertStyling();
      clearInterval(interval);
      flag = false;
    }

    localStorage.setItem("timeLeft", 0);
    timer = timeLeft;
  }
</script>

<div class="flex flex-col h-screen">
  <div class="p-4 text-lg text-center text-orange">
    <p class="text-5xl leading-normal mt-0 mb-2">
      Diffuse the Bomb before the timer goes off
    </p>
    <div id="startingMsge" style="display:block;">
      <center>
        <br />
        <img src="Bomb/main-bomb.jpg" width="400" alt="front-bomb" />
        <br />
        <Button
          color="orange"
          handlerFunction={handleClick}
          text="Start diffusing!"
        />
      </center>
    </div>
    <center>
      <br />

      <div id="gamebar" class="m-4" style="display:none;">
        <div class="game text-orange">
          <p
            class="text-lg inline-block mb-12 uppercase rounded uppercase shadow-lg game"
          >
            Here's the bomb, diffuse it before the timer goes off! <br />
            Cutting one wire from this bomb can result in it defusing...
            <br /><br />Hold up, cutting the wrong wire would result in the
            timer going off faster!<br />
            Let's see if you're lucky enough, OR, if you're skilled enough to go
            down deep into seeing how the bomb works!
          </p>
          <center
            ><img
              class="main-bomb"
              src="Bomb/gameplay.jpg"
              alt="bg"
              width="500"
            /></center
          >
          <br />
          <p class="text-2xl"><strong>Which wire would you cut?</strong></p>
          <br />
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-green-900 bg-green-900"
            on:click={wrongClick}>Green1</button>
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-yellow-400 bg-yellow-400"
            on:click={wrongClick}>Yellow1</button>
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-purple-500 bg-purple-500"
            on:click={wrongClick}>Purple1</button>
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-blue-500 bg-blue-500"
            on:click={wrongClick}>Blue1</button>
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-red-500 bg-red-500"
            on:click={victory}>Red1</button
          >
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-green-900 bg-green-900"
            on:click={wrongClick}>Green2</button>
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-yellow-400 bg-yellow-400"
            on:click={wrongClick}>Yellow2</button>
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-blue-500 bg-blue-500"
            on:click={luckyClick}>Blue2</button>
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-red-500 bg-red-500"
            on:click={wrongClick}>Red2</button>
          <button
            class="text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none visible focus:outline-none focus:shadow-outline border border-purple-500 bg-purple-500"
            on:click={wrongClick}>Purple2</button>
        </div>
      </div>
    </center>
  </div>
</div>
