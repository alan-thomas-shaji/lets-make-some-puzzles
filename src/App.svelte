<script>
  import { Router, Link, Route } from "svelte-routing";  // Import your files
  import Bomb from "./routes/Bomb/App.svelte";
  import Cipher from "./routes/Cipher/Cipher.svelte";
  import IdentifyX from "./routes/IdentifyX/IdentifyX.svelte";
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
    <Link to="identify">IdentifyX</Link>
  </nav>
  <div>
    <Route path="sudoku" component={Sudoku}/>
    <Route path="picross" component={Picross}></Route>
    <Route path="cipher" component={Cipher}></Route>
    <Route path="bomb" component={Bomb}/>
    <Route path="identify" component={IdentifyX}/>
  </div>
</Router>