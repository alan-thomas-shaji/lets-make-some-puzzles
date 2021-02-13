<script>
  import { Router, Link, Route } from "svelte-routing";  // Import your files
  import Bomb from "./routes/Bomb/App.svelte";
  import Cipher from "./routes/Cipher/Cipher.svelte";
  import Identify from "./routes/Identify/Identify.svelte";
  import Picross from "./routes/Picross/Puzzle.svelte";
  import Sudoku from "./routes/Sudoku/Sudoku.svelte";
  export let url = "";

</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  
  @tailwind utilities;
  </style>

<Router url={url}>
  <nav>
    <Link to="sudoku">Sudoku</Link>
    <Link to="picross">Picross</Link>
    <Link to="cipher">Cipher</Link>
    <Link to="bomb">Bomb</Link>
    <Link to="identifyX">IdentifyX</Link>
    <Link to="identifyY">IdentifyY</Link>
  </nav>
  <div>
    <Route path="sudoku" component={Sudoku}/>
    <Route path="picross" component={Picross}/>
    <Route path="cipher" component={Cipher}/>
    <Route path="bomb" component={Bomb}/>
    
    <Route path="identifyX" component={Identify} 
      identifyHashedAnswer="1a644df7bbbbf33492bf976bd1009d7440623b354c2ea46c73d8612156255e29"
      images={["IdentifyX/_.jpg", "IdentifyX/__.jpg", "IdentifyX/___.png"]}
      clues={["DeHavillandPussMoth", "FrenchLegionOfHonour", "Taglines"]}
    />
    
    <Route path="identifyY" component={Identify}
      identifyHashedAnswer="912b92939e8104d9be991887e236602a6e37925111684bd5aba981f1376ce6d1"
      images={["IdentifyY/_.jpg", "IdentifyY/__.jpg", "IdentifyY/___.jpg"]}
      clues={["IdentifyY/extraClue", "IdentifyY/additionalClue", "IdentifyY/moreClues"]}
      description={"(Provide full name starting with A)"}
    />
  </div>
</Router>