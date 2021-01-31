<script>
  import { Router, Route } from "svelte-routing";
  import Main from "./routes/Main.svelte";
  import Another from "./routes/Another.svelte";
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
  <a href="/another">Another</a>
  <div>
    <Route path="/" component="{Main}" />
    <Route path="/another" component="{Another}" />
  </div>
</Router>
