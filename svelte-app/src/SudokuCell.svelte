<script>
    export let num;
    export let index_i;
    export let index_j;

    function getStyle(){
        var style = "";
        if(index_i == 1 || index_i == 3){
            style += "border-bottom: 3px solid rgb(1, 119, 255);";
            console.log(index_i, index_j);
        }
        if(index_j == 2){
            style += "border-right: 3px solid rgb(1, 119, 255);";
            console.log(index_i, index_j);
        }
        return style;
    }
</script>

<td>
    <input type="text" maxlength="1" disabled={num != null} 
        value="{(num == null) ? "" : num}" 
        style={getStyle()}
    />
</td>

<style>
    td input:disabled{
        background-color: aquamarine;
        color: black;
    }
    td input:disabled:hover{
        background-color:aquamarine;
    }
    input:focus{
        border: none;
    }
    td input{
        background-color: black;
        color: white;
        margin: 0;
        border: none;
        width: 50px;
        height: 50px;
        text-align: center;
        padding: 5px;
    }
    td input:hover{
        cursor: pointer;
        background-color: azure;
    }
    td{
        margin: 0;
        border: 1px solid rgb(1, 119, 255);
    }
</style>