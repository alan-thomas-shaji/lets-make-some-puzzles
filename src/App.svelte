<script>
  import { Router, Route } from "svelte-routing";  // Import your files
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
    cipherUrl
  } from "./constants"
  import DevCredits from "./routes/DevCredits/DevCredits.svelte";
import Link from "svelte-routing/src/Link.svelte";
  
  export let url = "";
</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

  body{
    padding: 0;
    background-color: #3e3939;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  body, html{
    margin: 0;
  }
  </style>

<Router url={url}>
  <div class="flex h-screen flex-col">
    <div class="flex-1 overflow-y-auto">
      <Route path={sudokuUrl} component={Sudoku}
        nextPuzzle={identifyYUrl}
      />
      <Route path={picrossUrl} component={Picross}
        nextPuzzle="http://uknowwhoim.github.io"
        lastAns={identifyXHashed}
      />
      <Route path={cipherUrl} component={Cipher}
        nextPuzzle={identifyXUrl}
        lastAns={identifyYHashed}
      />
      <Route path="bomb" component={Bomb}
        nextPuzzle=""
      />
      
      <Route path={identifyXUrl} component={Identify} 
        identifyHashedAnswer={identifyXHashed}
        images={["IdentifyX/_.jpg", "IdentifyX/__.jpg", "IdentifyX/___.png"]}
        clues={["DeHavillandussMoth", "FrenchLegionOfHonour", "Taglines"]}
        nextPuzzle={picrossUrl}
        lastAns={cipherHashed}
      />
      
      <Route path={identifyYUrl} component={Identify}
        identifyHashedAnswer={identifyYHashed}
        images={["IdentifyY/_.jpg", "IdentifyY/__.jpg", "IdentifyY/___.jpg"]}
        clues={["IdentifyY/extraClue", "IdentifyY/additionalClue", "IdentifyY/moreClues"]}
        description="(Provide full name starting with A)"
        nextPuzzle={cipherUrl}
        lastAns={sudokuHashed}
      />
      <Route path="devCredits" component={DevCredits}/>
    </div>
  <footer class="py-5 p-4 w-full bg-black text-center">
    <Link to="/devCredits" class="text-light">Contributors</Link>
  </footer>
  </div>
</Router>
