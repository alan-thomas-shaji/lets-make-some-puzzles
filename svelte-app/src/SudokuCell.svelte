<script>
    export let num;
    export let index_i;
    export let index_j;
    export let changed;
    export let enabled;

    function getStyle(){
        var style = "";
        if(index_i == 2){
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
    <input type="text" maxlength="1" disabled={!enabled} 
        value="{(num == null) ? "" : num}" 
        style={getStyle()}
        on:change={(val) => changed(index_i, index_j, val.target.value)}/>
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