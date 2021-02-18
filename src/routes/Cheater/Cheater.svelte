<script>
import Link from "svelte-routing/src/Link.svelte";
import { sudokuUrl } from "../../constants";

</script>
<div>
    That's not allowed, <Link to={sudokuUrl}>Try Again</Link>
</div>