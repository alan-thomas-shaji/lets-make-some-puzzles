<script>
  export let id;
  export let images;
  export let clues;
  export let identifyHashedAnswer;
  export let description;
  export let nextPuzzle;
  export let lastAns;

  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import {
    getNextUrl,
    verifyHash,
    verifyPreviousAns,
    updateProgress,
  } from "../../common";
  import Button from "../../components/button.svelte";

  function identifyOnError(image) {
    image.onerror = "";
    image.src = "image.alt";
  }

  onMount(async () => {
    await verifyPreviousAns(window.location, lastAns);
    updateProgress(id);
  });

  async function identifyCheckAns() {
    let val = document.getElementById("identifyInput").value;
    val = val.replaceAll(" ", "").toLocaleLowerCase();
    if (await verifyHash(val, identifyHashedAnswer))
      navigate(getNextUrl(nextPuzzle, val));
    else alert("Try Again");
  }
</script>

<div class="text-center text-orange">
  <h1 class="text-4xl p-4 font-bold">Identify The Personality</h1>
  <span class="p-2 text-lg">{description ?? ""}</span>
  <div id="clues" class="p-4">
    <img
      src={images[0]}
      alt={clues[0]}
      class="inline"
      style="height: 400px;width: 666px"
      on:error={identifyOnError(this)}
    />
    <img
      src={images[1]}
      alt={clues[1]}
      class="inline"
      style="height: 400px; width: 184px"
      on:error={identifyOnError(this)}
    /><br />
    <img
      src={images[2]}
      alt={clues[2]}
      class="inline"
      style="height: 300px;width: 854px"
      on:error={identifyOnError(this)}
    />
  </div>
  <div>
    <input
      id="identifyInput"
      class="p-2 m-2 bg-transparent"
      name="ans"
      type="text"
      placeholder="Who is he?"
    />
    <Button color="orange" handlerFunction={identifyCheckAns} text="Go" />
  </div>
</div>
