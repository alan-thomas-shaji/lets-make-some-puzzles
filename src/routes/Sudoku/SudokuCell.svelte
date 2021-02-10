<script>
    export let num;
    export let index_i;
    export let index_j;

    function getStyle(){
        var style = "";
        if(index_i == 1 || index_i == 3){
            style += "border-bottom: 3px solid black;";
        }
        if(index_j == 2){
            style += "border-right: 3px solid black;";
        }
        return style;
    }
</script>

<td class="m-0 border-2 border-black">
    <input id="x783264874325" type="text" maxlength="1" disabled={num != null} 
        value="{(num == null) ? "" : num}" 
        style={getStyle()}
        class="border-0 p-2 m-0 text-center text-black h-16 w-16 text-2xl bg-indigo-500"
    />
</td>

<style>
    #x783264874325:disabled{
        background-color:white;
        color: black;
    }
    #x783264874325:focus{
        border: none;
        outline: none;
    }
    #x783264874325:hover{
        background-color: azure;
    }
</style>