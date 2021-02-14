<script>
    export let num;
    export let index_i;
    export let index_j;

    function sudokuGetStyle(){
        var style = "";
        if(index_i == 1 || index_i == 3)
            style += "border-bottom: 3px solid #f6f4f4;";
        
        if(index_j == 2)
            style += "border-right: 3px solid #f6f4f4;";
        
        return style;
    }
</script>

<td class="m-0 border-2 border-light">
    <input id="x783264874325" type="text" maxlength="1" disabled={num != null} 
        value="{(num == null) ? "" : num}" 
        style={sudokuGetStyle()}
        class="border-0 font-bold p-2 m-0 text-center text-white h-16 w-16 text-2xl bg-dark"
    />
</td>

<style>
    #x783264874325:disabled{
        background-color: #ff7417e0;
        color: white;
    }
    #x783264874325:focus{
        border: none;
        outline: none;
    }
    #x783264874325:hover:enabled{
        background-color: azure;
    }
</style>