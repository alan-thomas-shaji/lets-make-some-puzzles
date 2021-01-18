<script>
    export let num;
    export let index_i;
    export let index_j;
    export let changed;
    export let enabled;
</script>

<td>
    <input type="text" maxlength="1" disabled={!enabled} value="{(num == null) ? "" : num}" on:change={(val) => changed(index_i, index_j, val.target.value)}/>
</td>

<style>
    td input:disabled{
        color: white;
        background-color: black;
    }
    input:focus{
        border: none;
    }
    td input{
        margin: 0;
        border: none;
        width: 50px;
        height: 50px;
        text-align: center;
        padding: 5px;
    }
    td{
        border: 1px solid black;
    }
</style>