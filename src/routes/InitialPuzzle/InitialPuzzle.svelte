<script>
    import { navigate } from "svelte-routing";
    import { getNextUrl } from "../../common";

    import Button from "../../components/button.svelte";

    export let nextPuzzle;

    function checkAnswer(){
        if(document.getElementsByName("ans")[0].value == "test")
            navigate(getNextUrl(nextPuzzle, "test"));
        else
            alert("Try Again");
    }
</script>

<div>
    <h1>Are you watching closely</h1>
    <input name="ans" placeholder="Answer" class="p-2" id="identifyInput"/>
    <input type="hidden" value="test" name="answer"/>
    <Button handlerFunction={checkAnswer} text="Go"/>
</div>