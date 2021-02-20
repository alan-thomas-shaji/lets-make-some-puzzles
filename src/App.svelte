<script>
  import { Router, Route } from "svelte-routing"; // Import your files
  import Bomb from "./routes/Bomb/App.svelte";
  import Cipher from "./routes/Cipher/Cipher.svelte";
  import Identify from "./routes/Identify/Identify.svelte";
  import Picross from "./routes/Picross/Puzzle.svelte";
  import Sudoku from "./routes/Sudoku/Sudoku.svelte";
  import {
    picrossUrl,
    sudokuHashed,
    sudokuUrl,
    identifyXHashed,
    identifyXUrl,
    identifyYHashed,
    identifyYUrl,
    cipherHashed,
    cipherUrl,
    detailsUrl,
    cheaterUrl,
    idiotTestHashed,
    idiotTestUrl,
    bombHashed,
    bombUrl,
  } from "./constants";
  import DevCredits from "./routes/DevCredits/DevCredits.svelte";
  import Link from "svelte-routing/src/Link.svelte";
  import Details from "./routes/Details/Details.svelte";
  import Cheater from "./routes/Cheater/Cheater.svelte";
  import { generateMazeUrl } from "./common";
  import InitialPuzzle from "./routes/InitialPuzzle/InitialPuzzle.svelte";

  export let url = "";
</script>

<Router {url}>
  <div class="flex h-screen flex-col">
    <header
      class="py-5 bg-black text-white text-center"
      id="headerForBomb"
      style="display: none"
    />
    <div class="flex-1 overflow-y-auto pt-2">
      <Route
        path={idiotTestUrl}
        component={InitialPuzzle}
        id="1"
        nextPuzzle={() => sudokuUrl}
      />
      <Route
        path={sudokuUrl}
        component={Sudoku}
        id="2"
        lastAns={idiotTestHashed}
        nextPuzzle={() => bombUrl}
      />
      <Route
        path={bombUrl}
        component={Bomb}
        id="3"
        nextPuzzle={() => identifyYUrl}
        lastAns={sudokuHashed}
      />
      <Route
        path={cipherUrl}
        component={Cipher}
        id="5"
        nextPuzzle={() => identifyXUrl}
        lastAns={identifyYHashed}
      />
      <Route
        path={picrossUrl}
        component={Picross}
        id="7"
        nextPuzzle={generateMazeUrl}
        lastAns={identifyXHashed}
      />
      <Route
        path={identifyXUrl}
        component={Identify}
        id="6"
        identifyHashedAnswer={identifyXHashed}
        images={["IdentifyX/_.jpg", "IdentifyX/__.jpg", "IdentifyX/___.png"]}
        clues={["DeHavillandussMoth", "FrenchLegionOfHonour", "Taglines"]}
        nextPuzzle={() => picrossUrl}
        lastAns={cipherHashed}
      />

      <Route
        path={identifyYUrl}
        component={Identify}
        id="4"
        identifyHashedAnswer={identifyYHashed}
        images={["IdentifyY/_.jpg", "IdentifyY/__.jpg", "IdentifyY/___.jpg"]}
        clues={[
          "IdentifyY/extraClue",
          "IdentifyY/additionalClue",
          "IdentifyY/moreClues",
        ]}
        description="(Provide full name starting with A)"
        nextPuzzle={() => cipherUrl}
        lastAns={bombHashed}
      />
      <Route path="devCredits" component={DevCredits} />
      <Route path={detailsUrl} component={Details} />
      <Route path={cheaterUrl} component={Cheater} />
    </div>
    <footer class="py-5 p-4 w-full bg-black text-center">
      <Link to="/devCredits" class="text-light">Contributors</Link>
    </footer>
  </div>
</Router>

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
