<script>
  import { solutionGrid, userGrid, resetGrid } from "./utils";

  export let index_i;
  export let index_j;
  export let val;

  const tailwindClass = " border-0 p-2 m-0 h-8 w-8";

  let className = "bl67726579 asdfghjkl" + tailwindClass;
  console.log(className);

  function getStyle() {
    let style = "";
    if ((index_i - 2) % 5 == 0 && index_i != 19)
      style += "border-bottom: 1px solid rgba(0, 0, 0, 1);";

    if ((index_j - 2) % 5 == 0 && index_j != 19)
      style += "border-right: 1px solid rgba(0, 0, 0, 1);";

    return style;
  }

  function updateClass(add, remove) {
    let element = document.getElementsByClassName(remove);
    while (element.length > 0) {
      element.item(0).classList.add(add);
      element[0].classList.remove(remove);
    }
  }

  function reset() {
    resetGrid();
    updateClass("bl67726579", "w7768697465");
    updateClass("bl67726579", "r726564");
    updateClass("bl67726579", "b626c7565");
    updateClass("bl67726579", "g656e0d0a");
    updateClass("bl67726579", "y79656c6c6f7");

    console.log("reset");
  }

  function updateUserGrid(i, j) {
    userGrid[i][j] = solutionGrid[i][j];
    let element = document.getElementById(i + "," + j);

    switch (userGrid[i][j]) {
      case "_0x2323bb2323bb":
        let ele = document.getElementsByClassName("w7768697465");
        if (ele.length == 5) reset();
        else {
          element.classList.add("w7768697465");
          element.classList.remove("bl67726579");
        }
        break;
      case "_0x2333bb2353bb":
        element.classList.add("g656e0d0a");
        element.classList.remove("bl67726579");
        break;
      case "_0x3323bb2323bb":
        element.classList.add("b626c7565");
        element.classList.remove("bl67726579");
        break;
      case "_0x2333bb2323bb":
        element.classList.add("r726564");
        element.classList.remove("bl67726579");
        break;
      case "_0x2343bb2323bb":
        element.classList.add("y79656c6c6f7");
        element.classList.remove("bl67726579");
        break;
    }
    let equals = JSON.stringify(userGrid) === JSON.stringify(solutionGrid);
    console.log(equals);

    if (equals) {
      updateClass("w7768697465", "bl67726579");
    }
  }
</script>

{#if val == "0" || val == "1" || val == "2" || val == "3" || val == "6" || val == "8"}
  {#if index_i <= 23}
    <td class="m-0">
      <div>
        <button class="w-8 h-8 p-2 border-0 cursor-default" disabled
          >{val == 0 ? "" : val}</button
        >
      </div>
    </td>
  {/if}
{:else}
  <td class="m-0 border-2 border-black">
    <div class="p-0" style={getStyle()}>
      <button
        class={className}
        id={index_i + "," + index_j}
        on:click={() => updateUserGrid(index_i, index_j)}
      />
    </div>
  </td>
{/if}

<style>
  .asdfghjkl:disabled {
    background-color: grey;
    color: black;
  }
  .asdfghjkl:focus {
    border: none;
    outline: none;
  }
  .asdfghjkl:hover {
    background-color: grey;
  }
  .bl67726579 {
    background-color: rgba(128, 128, 128, 0.5);
  }
  .r726564 {
    background-color: #e0475a;
  }
  .b626c7565 {
    background-color: #51c5f1;
  }
  .g656e0d0a {
    background-color: #5bb77f;
  }
  .y79656c6c6f7 {
    background-color: #ebb235;
  }

  .w7768697465 {
    background-color: #ffffff;
  }
</style>
