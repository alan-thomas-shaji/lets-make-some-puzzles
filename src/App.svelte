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
  
  export let url = "";
</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  
  @tailwind utilities;

  body{
    background-color: #3e3939;

  }
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
      lastAns={sudokuHashed}
    />
  </div>
</Router>