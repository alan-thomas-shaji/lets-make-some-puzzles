<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";
  import { getNextUrl, updateProgress } from "../../common";
  import Button from "../../components/button.svelte";

  export let id;
  export let nextPuzzle;

  function checkAnswer() {
    if (document.getElementsByName("ans")[0].value == "test")
      navigate(getNextUrl(nextPuzzle, "test"));
    else alert("Try Again");
  }
  onMount(() => updateProgress(id));
</script>

<div class="text-center text-orange">
  <h1 class="text-6xl">Are you watching closely?</h1>
  <div class="m-16">
    <input
      name="ans"
      placeholder="Answer"
      class="p-2 bg-transparent placeholder-orange"
      id="identifyInput"
    />
    <input type="hidden" value="test" name="answer" />
    <Button color="orange" handlerFunction={checkAnswer} text="Go" />
  </div>
</div>
