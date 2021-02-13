<script>
  import { Router, Link, Route } from "svelte-routing";  // Import your files
  import Bomb from "./routes/Bomb/App.svelte";
  import Cipher from "./routes/Cipher/Cipher.svelte";
  import Identify from "./routes/Identify/Identify.svelte";
  import Picross from "./routes/Picross/Puzzle.svelte";
  import Sudoku from "./routes/Sudoku/Sudoku.svelte";
  export let url = "";

  const sudokuUrl = "";
  const sudokuAnsHashed = "8d2cbaf16d573434b9776abf73a1ae5ab0b7295a2449f3c469d76ccc66162173";
  
  const identifyYUrl = "/identifyY";
  const identifyYHashed = "912b92939e8104d9be991887e236602a6e37925111684bd5aba981f1376ce6d1"
  
  const cipherUrl = "/cipher";
  const cipherHashed = "1fb61bae29f70edd6b6aecd631f671ef597a176800830f6cd7321e0df7ee9eee";

  const identifyXUrl = "/identifyX";
  const identifyXHashed = "1a644df7bbbbf33492bf976bd1009d7440623b354c2ea46c73d8612156255e29";

  const picrossUrl = "/picross";
  const picrossAns = "877c3aec832cd41012590679bdb84ebe25e5ebbd71b6b81722b48b129feb76ae"
</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  
  @tailwind utilities;
  </style>

<Router url={url}>
  <div>
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
      identifyHashedAnswer="1a644df7bbbbf33492bf976bd1009d7440623b354c2ea46c73d8612156255e29"
      images={["IdentifyX/_.jpg", "IdentifyX/__.jpg", "IdentifyX/___.png"]}
      clues={["DeHavillandPussMoth", "FrenchLegionOfHonour", "Taglines"]}
      nextPuzzle={picrossUrl}
      lastAns={cipherHashed}
    />
    
    <Route path={identifyYUrl} component={Identify}
      identifyHashedAnswer="912b92939e8104d9be991887e236602a6e37925111684bd5aba981f1376ce6d1"
      images={["IdentifyY/_.jpg", "IdentifyY/__.jpg", "IdentifyY/___.jpg"]}
      clues={["IdentifyY/extraClue", "IdentifyY/additionalClue", "IdentifyY/moreClues"]}
      description="(Provide full name starting with A)"
      nextPuzzle={cipherUrl}
      lastAns={sudokuAnsHashed}
    />
  </div>
</Router>