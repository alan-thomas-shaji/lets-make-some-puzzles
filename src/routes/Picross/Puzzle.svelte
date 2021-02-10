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
  <div class="p-4 text-lg font-mono text-center">
    <p class="text-3xl">Nonogram</p>
    <br />
    <div id="content">
      <p>Complete the puzzle and identify the logo thats generated.</p>
    </div>
    <br />

    <table id="hint" cellpadding="0" cellspacing="0" align="center">
      {#each { length: hRow.length } as _, i}
        <tr>
          {#each { length: hRow[0].length } as _, j}
            <td class="h-8 w-8">{hRow[i][j] == 0 ? "" : hRow[i][j]}</td>
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
                <td class="h-8 w-8">{hCol[i][j] == 0 ? "" : hCol[i][j]}</td>
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
      <input
        class="mt-0 mb-0 mr-4 p-2"
        type="text"
        placeholder="Whose logo is it?"
        name="answer"
      />
      <button
        class="px-5 py-2 m-2 border border-green-800 text-white transition duration-500 ease select-none bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800 focus:outline-none focus:shadow-outline"
        on:click={() => submit()}>Check</button
      >
    </div>
  </div>
</main>

<style>
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
