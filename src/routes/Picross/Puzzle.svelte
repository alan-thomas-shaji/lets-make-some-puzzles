<script>
  import Grid from "./Grid.svelte";

  import { solutionGrid } from "./utils";

  let grid = solutionGrid;

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
    <p class="text-6xl leading-normal mt-0 mb-2 text-pink-800">Nonogram</p>
    <div>
      <p
        class="text-lg inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200 uppercase last:mr-0 mr-1"
      >
        Complete the puzzle and identify the logo thats generated.
      </p>
    </div>
    <br />

    <div>
      <table cellpadding="0" cellspacing="0" align="center">
        {#each { length: grid.length } as _, i}
          <tr>
            {#each { length: grid.length } as _, j}
              <Grid index_i={i} index_j={j} val={grid[i][j]} />
            {/each}
          </tr>
        {/each}
      </table>
    </div>
    <br />
    <div class="mb-3 pt-0">
      <input
        class="mt-0 mb-0 px-3 py-3 mr-4 p-2 placeholder-grey-400 text-grey-700 relative bg-white bg-white rounded text-sm border border-grey-400 outline-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Whose logo is it?"
        name="answer"
      />
      <button
        class="px-5 py-2 m-2 border border-teal-800 text-white transition duration-500 ease select-none bg-teal-600 rounded-lg focus:shadow-outline hover:bg-teal-800 focus:outline-none focus:shadow-outline"
        on:click={() => submit()}>Check</button
      >
    </div>
  </div>
</main>
