<script>
  import Link from "svelte-routing/src/Link.svelte";
  import { sudokuUrl } from "../../constants";
</script>

<div class="m-2 p-2 text-5xl flex text-center justify-center text-orange">
  <h2>
    Nah, you can't do that! <br />
    <Link to={sudokuUrl}>Try Again</Link>
  </h2>
</div>
