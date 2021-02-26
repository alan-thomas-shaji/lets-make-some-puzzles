<script>
  import DevCredit from "./DevCredit.svelte";
</script>

<main>
  <h1 class="text-6xl text-center text-orange">Contributors</h1>
  <div
    class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-5 gap-5"
  >
    <DevCredit
      name="Sidharth"
      imgLink="https://avatars.githubusercontent.com/u/51323747?s=400&u=5bb4a7711d50190051763508fe98589d599f2feb&v=4"
      githubUrl="https://github.com/UKnowWhoIm/"
      puzzles="Maze | Sudoku"
    />
    <DevCredit
      name="Irene"
      imgLink="https://avatars.githubusercontent.com/u/56882021?s=460&u=055b756f84164c7e1a5f7ba38e7db3b1799057ca&v=4"
      githubUrl="https://github.com/irenekurien"
      puzzles="Picross"
    />
    <DevCredit
      name="Alan"
      imgLink="https://avatars.githubusercontent.com/u/50659499?s=460&u=a497cdf221498eb6a1ff167dc6b682799904f490&v=4"
      githubUrl="https://github.com/shaji-stark"
      puzzles="Bomb"
    />
    <DevCredit
      name="Ardra"
      imgLink="https://avatars.githubusercontent.com/u/71830284?s=460&u=eca1fc78a180eaf2d798f075d1c3e566d64bcf36&v=4"
      githubUrl="https://github.com/ardra31"
      puzzles="Cipher"
    />
    <DevCredit
      name="Rashid"
      imgLink="https://avatars.githubusercontent.com/u/74090888?s=460&u=a970d70928c0e0e971af25694596211c17555eeb&v=4"
      githubUrl="https://github.com/codeklada"
      puzzles="Identify"
    />
  </div>
  <div class="p-4 text-center text-orange" id="thenks">
    <h2 class="text-4xl mb-10">Special Thenks</h2>
    <center><img src="Fun/Bhavani.jpeg" height="300" width="400"/></center>
    <div
      class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-3"
    >
      <DevCredit
        name="Akhil"
        imgLink="https://avatars.githubusercontent.com/u/31166322?s=460&u=a3402882c53a14b80c36e9cfb4abe52742c3a6c5&v=4"
        githubUrl="https://github.com/akhilmhdh"
      />
      <DevCredit
        name="Yarbash"
        imgLink="Fun/Yarbash.jpeg"
        githubUrl="https://github.com/yarbashsaleem"
      />
      <DevCredit
        name="John"
        imgLink="https://avatars.githubusercontent.com/u/31211464?s=460&u=04b83e4be0b137a36006d7d57e3e063a1d605ca8&v=4"
        githubUrl="https://github.com/dravog7"
      />
  </div>
</main>
