<script>
  import { Router, Route } from "svelte-routing";
  // Import your file
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
  <div>
    <!--
      Add Routes here
    <Route path="/" component="{Main}" />
    -->
  </div>
</Router>
