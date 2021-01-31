<script>
  import { Router, Link, Route } from "svelte-routing";  // Import your files
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
  </nav>
  <div>
    <Route path="sudoku" component={Sudoku}/>
    <Route path="picross" component={Picross}></Route>
  </div>
</Router>