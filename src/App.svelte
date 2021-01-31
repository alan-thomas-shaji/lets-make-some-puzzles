<script>
  import { Router, Link, Route } from "svelte-routing";  // Import your files
  import Sudoku from "./routes/Sudoku.svelte";
  import Home from "./routes/Home.svelte";
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
  </nav>
  <div>
    <Route path="sudoku" component={Sudoku}/>
  </div>
</Router>