<script>
  import Grid from "./Grid.svelte";

  import { solutionGrid, rowHints, colHints } from "./utils";

  let grid = solutionGrid;
  let hRow = rowHints;
  let hCol = colHints;

  async function encrypt(input) {
    const msgBuffer = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => ("00" + b.toString(16)).slice(-2))
      .join("");
    return hashHex;
  }

  async function submit() {
    let userAnswer = await encrypt(
      document.getElementsByName("answer")[0].value
    );
    let f = true;
    let hashedAnswer = [
      "b27fb38ba323745c91fe7fd9021605430d43bdb7d3be765266e29364d103e26f",
      "877c3aec832cd41012590679bdb84ebe25e5ebbd71b6b81722b48b129feb76ae",
      "2cfe0127b72cebdb976f754268702f3e04b9acb39d1cff2c76e0e171f34801b0",
    ];
    hashedAnswer.forEach(function (ans) {
      if (userAnswer == ans && f == true) {
        f = false;
        alert("Congrats");
      }
    });

    if (f) alert("Try Again");

    console.log("submit");
  }
</script>

<main>
  <h1>Nonogram</h1>
  <br />
  <div id="content">
    <p>Complete the puzzle and identify the logo thats generated.</p>
  </div>
  <br />

  <table id="hint" cellpadding="0" cellspacing="0" align="center">
    {#each { length: hRow.length } as _, i}
      <tr>
        {#each { length: hRow[0].length } as _, j}
          <td>{hRow[i][j] == 0 ? "" : hRow[i][j]}</td>
        {/each}
      </tr>
    {/each}
  </table>
  <div class="row">
    <div class="column">
      <table id="hint" cellpadding="0" cellspacing="0" align="center">
        {#each { length: hCol.length } as _, i}
          <tr>
            {#each { length: hCol[0].length } as _, j}
              <td>{hCol[i][j] == 0 ? "" : hCol[i][j]}</td>
            {/each}
          </tr>
        {/each}
      </table>
    </div>
    <div class="column">
      <table cellpadding="0" cellspacing="0" align="center">
        {#each { length: grid.length } as _, i}
          <tr>
            {#each { length: grid.length } as _, j}
              <Grid index_i={i} index_j={j} />
            {/each}
          </tr>
        {/each}
      </table>
    </div>
  </div>
  <div id="answer">
    <input type="text" placeholder="Whose logo is it?" name="answer" />
    <button on:click={() => submit()}>Submit</button>
  </div>
</main>

<style>
  /*
  :global(body) {
    background-color: black;
  }
  */
  main {
    color: blue;
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    display: inline;
    position: relative;
    text-transform: uppercase;
    font-size: 100px;
    letter-spacing: -5px;
    color: rgba(0, 0, 255, 0.5);
  }

  h1:after {
    content: "NONOGRAM";
    position: absolute;
    left: 10px;
    top: 5px;
    color: rgba(255, 0, 0, 0.5);
  }

  table {
    border-collapse: collapse;
    border: 3px solid rgba(0, 0, 255, 1);
  }

  td {
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(255, 0, 0, 0.75);
    border: none;
    width: 22px;
    height: 22px;
    padding: 5px;
  }

  button {
    border-radius: 10;
    background-color: rgba(255, 0, 0, 0.5);
    border: 2px solid rgba(255, 0, 0, 0.5);
    vertical-align: middle;
    margin: 0;
    font-weight: normal;
    font-size: 1.2em;
    color: #fff;
    padding: 0.3em 0.5em;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(0, 0, 255, 0.5);
    border: 2px solid rgba(0, 0, 255, 0.5);
  }

  button:focus {
    outline: none;
    transform: scale(1.08);
  }

  input {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 15px;
    color: #fff;
    background-color: rgba(255, 0, 0, 0.5);
    border: 2px solid rgba(255, 0, 0, 0.5);
    transition: all 0.3s ease;
  }

  input:hover {
    background-color: rgba(0, 0, 255, 0.5);
    border: 2px solid rgba(0, 0, 255, 0.5);
  }

  input:focus {
    outline: none;
    transform: scale(1.08);
  }

  div {
    margin: 10px;
    padding: 0px;
  }

  #answer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #hint {
    border: 0px;
    text-align: left;
  }
  .row {
    display: flex;
    justify-content: center;
  }
  .column {
    flex: 0;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
    .column {
      width: 100%;
    }
  }
</style>
