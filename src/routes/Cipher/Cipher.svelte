<script>
  export let nextPuzzle;
  export let id;
  export let lastAns;
  import { onMount } from "svelte";
  import Button from "../../components/button.svelte";
  import Box from "./Box.svelte";
  import { navigate } from "svelte-routing";
  import {
    getNextUrl,
    updateProgress,
    verifyHash,
    verifyPreviousAns,
  } from "../../common";
  import { cipherHashed } from "../../constants";

  async function submit() {
    let val = document
      .getElementsByName("answer")[0]
      .value.replace(" ", "")
      .toLocaleLowerCase();

    if (await verifyHash(val, cipherHashed))
      navigate(getNextUrl(nextPuzzle, val));
    else alert("Try Again");
  }

  onMount(() => {
    verifyPreviousAns(window.location, lastAns);
    updateProgress(id);
  });
</script>

<h1 id="cipherxyz" class="text-center uppercase text-6xl text-orange">
  cipher
</h1>
<div class="text-2xl">
  <Box>
    <p class=" text-5xl text-orange">Break the Code</p>
    <br />

    <p class="text-light">
      "He was HOPEFUL. EDABHDTEB ITYEINHRC HGNTOSOGE AIETGGNIE OOGHFAOES
      POMETNDVA SHBSNOIDD"
    </p>
    <br />
    <p class="text-orange">Who is he?</p>
    <br />

    <div class="mt-12" id="answer">
      <input
        class="p-2 m-2 bg-transparent text-orange"
        name="answer"
        type="text"
        placeholder="Who is he?"
      />
      <Button color="orange" handlerFunction={submit} text="Go" />
    </div>
  </Box>
  <div class="loader" />
  <div class="container" />
</div>

<style>
  #cipherxyz {
    animation: text 5s 1;
  }
  @keyframes text {
    0% {
      color: #f6f4f4;
      margin-bottom: -40px;
    }
    30% {
      letter-spacing: 25px;
      margin-bottom: -40px;
    }
    85% {
      letter-spacing: 8px;
      margin-bottom: -40px;
    }
  }

  input:focus {
    outline: none;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 22%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    box-sizing: border-box;
  }
  .container {
    position: absolute;
    bottom: 50%;
    right: 22%;
    transform: translate(50%, 50%);
    width: 200px;
    height: 200px;
    box-sizing: border-box;
  }
  .loader:before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    box-sizing: border-box;
    animation: animate 2s linear infinite;
  }
  .loader:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    animation: animate 2s linear infinite;
    animation-delay: 1s;
  }
  .container:before {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    box-sizing: border-box;
    animation: animate 2s linear infinite;
  }
  .container:after {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(50%, 50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    animation: animate 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes animate {
    0% {
      width: 0;
      height: 0;
      border: 4px solid #ff7417e0;
      box-shadow: 0 0 10px #ff7417e0;
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      width: 100%;
      height: 100%;
      border: 4px solid #ff7417e0;
      box-shadow: 0 0 100px #ff7417e0;
      opacity: 0;
    }
  }
</style>
