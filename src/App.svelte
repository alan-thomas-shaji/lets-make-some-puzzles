<script>
    import { onMount } from "svelte";

    import TimerComponent from "./TimerComponent.svelte";
    const time = 1614353400867;
    let minutes = "00";
    let hours = "00";
    let seconds = "00";
    let days = "00";

    function padLeft(x){
        if(Math.floor(x/10) == 0)
            return "0" + String(x);
        return String(x);
    }

    function update(){
        let secondsLeft = Math.floor((time - new Date())/1000);
        days = padLeft(Math.floor(secondsLeft/(60*60*24)));
        secondsLeft = secondsLeft % (60*60*24);
        hours = padLeft(Math.floor(secondsLeft/(60*60)));
        secondsLeft = secondsLeft % (60*60);
        minutes = padLeft(Math.floor(secondsLeft/60));
        seconds = padLeft(secondsLeft % 60);
    }

    onMount(() => setInterval(update, 1000));
</script>

<div class="text-center text-light text-6xl">
    <h1 class="text-orange">Nine pieces of Eight</h1>
    <p class="p-6 text-4xl mt-12">We go live in</p>
    <div class="">
        <TimerComponent num={days}/>
        <TimerComponent num={hours}/>
        <TimerComponent num={minutes}/>
        <TimerComponent num={seconds}/>
    </div>
</div>

<style global>
    /* purgecss start ignore */
    @tailwind base;
    @tailwind components;
    /* purgecss end ignore */

    @tailwind utilities;

    body {
      padding: 0;
      background-color: #3e3939;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
        "Liberation Mono", "Courier New", monospace;
    }
</style>
