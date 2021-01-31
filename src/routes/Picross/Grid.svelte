<script>
  import { solutionGrid, userGrid, resetGrid } from "./utils";

  export let index_i;
  export let index_j;

  let className = "black";

  function getStyle() {
    let style = "";
    if ((index_i + 1) % 5 == 0 && index_i != 19)
      style += "border-bottom: 3px solid rgba(255, 0, 0, 0.5);";

    if ((index_j + 1) % 5 == 0 && index_j != 19)
      style += "border-right: 3px solid rgba(255, 0, 0, 0.5);";

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
    updateClass("black", "white");
    updateClass("black", "red");
    updateClass("black", "blue");
    updateClass("black", "green");
    updateClass("black", "yellow");

    console.log("reset");
  }

  function updateUserGrid(i, j) {
    userGrid[i][j] = solutionGrid[i][j];
    let element = document.getElementById(i + "," + j);

    switch (userGrid[i][j]) {
      case "_0x2323bb2323bb":
        let ele = document.getElementsByClassName("white");
        if (ele.length == 5) reset();
        else {
          element.classList.add("white");
          element.classList.remove("black");
        }
        break;
      case "_0x2333bb2353bb":
        element.classList.add("green");
        element.classList.remove("black");
        break;
      case "_0x3323bb2323bb":
        element.classList.add("blue");
        element.classList.remove("black");
        break;
      case "_0x2333bb2323bb":
        element.classList.add("red");
        element.classList.remove("black");
        break;
      case "_0x2343bb2323bb":
        element.classList.add("yellow");
        element.classList.remove("black");
        break;
    }
    let equals = JSON.stringify(userGrid) === JSON.stringify(solutionGrid);

    if (equals) {
      updateClass("white", "black");
    }
  }
</script>

<td>
  <div style={getStyle()}>
    <button
      class={className}
      id={index_i + "," + index_j}
      on:click={() => updateUserGrid(index_i, index_j)}
    />
  </div>
</td>

<style>
  td button:disabled:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }

  td button:focus {
    border: none;
  }

  td button:hover {
    cursor: pointer;
    background-color: rgba(255, 0, 0, 0.5);
  }

  td {
    border: 1px solid blue;
  }

  button {
    margin: 0;
    border: none;
    width: 30px;
    height: 30px;
  }

  .black {
    background-color: black;
  }
  .red {
    background-color: #e0475a;
  }
  .blue {
    background-color: #51c5f1;
  }
  .green {
    background-color: #5bb77f;
  }
  .yellow {
    background-color: #ebb235;
  }

  .white {
    background-color: #ffffff;
  }
</style>
