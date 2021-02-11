<script>
    import Box from './Box.svelte';
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
        "651b365d831f5fb13e03d33f41eb021c98f18ddfb10982fdf47f31cb7e6b9638",
        "785afb7d32885e0a2dfd79ddb2e7fa303bd033958d28bfa060d81b8d962bb4ec",
        "13dec5158d2ff742951586a5cde11ebbbed0e08539365dcc99b1c5872c7126e1",
      ];
      hashedAnswer.forEach(function (ans) {
        if (userAnswer == ans && f == true) {
          f = false;
          alert("Congrats");
        }
      });
      if (f) alert("Incorrect Answer. Try Again");
      console.log("submit");
    }
    
  
  </script>
  
  <style>
  
      /* h1 {
          
           text-align: center;
          text-transform: uppercase; 
          font-size: 75px; 
          letter-spacing: -5px; 
          color: aquamarine; 
          animation: text 5s 1;
      }	 */
      #cipherxyz {
        animation: text 5s 1;
      }
     @keyframes text {
       0%{
         color : #193806;;
         margin-bottom: -40px;
       }
       30%{
         letter-spacing: 25px;
         margin-bottom: -40px;
       }
       85%{
         letter-spacing: 8px;
         margin-bottom: -40px;
       }
     }
      
      h2{
      color: rgb(15, 233, 160);
        text-align: center;
      font-family: "Roboto Mono";
      
      }
    p {
      font-family: "mono";
      font-style: normal;
      
    }
       
    
    
     /* :global(body) {
          position:relative;
          font-size:1.5rem;
          font-family:"Roboto Mono", sans-serif;
          color:#78899A;
          font-style:normal;
          font-weight:400;
          line-height:1.4;
          -webkit-font-smoothing:subpixel-antialiased;
          min-height:100%;
          background: linear-gradient(-45deg, #050705, #0c2c0c)
          
      }  */
   
      
      
      .loader {
        position: absolute;
        top: 50%;
        left: 22%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 200px;
        box-sizing: border-box;
      }
      .container {
        position: absolute;
        bottom: 50%;
        right: 22%;
        transform: translate(50%, 50%);
        width: 200px;
        height: 200px;
        box-sizing: border-box;
      }
      .loader:before {
        content: '';
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        box-sizing: border-box;
        animation: animate 2s linear infinite;
      }
      .loader:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing: border-box;
        animation: animate 2s linear infinite;
        animation-delay: 1s;
      }
      .container:before {
        content: '';
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, 50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        box-sizing: border-box;
        animation: animate 2s linear infinite;
      }
      .container:after {
        content: '';
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(50%, 50%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing: border-box;
        animation: animate 2s linear infinite;
        animation-delay: 1s;
      }
      @keyframes animate {
        0%{
          width: 0;
          height: 0;
          border: 4px solid #00e250;
          box-shadow: 0 0 10px #00e250;
          opacity: 1;
        }
        70%{
          opacity: 1;
        }
        100%{
          width: 100%;
          height: 100%;
          border: 4px solid #00e250;
          box-shadow: 0 0 100px #00e250;
          opacity: 0;
        }
      }
      
      
      
  </style>
  <p id="cipherxyz" class="text-center uppercase text-6xl font-mono text-green-100">cipher</p>
  <main>
  <Box>
    <h2 class="text-3xl">Break the Code</h2> 
    <br>
    
      <p>"He was HOPEFUL.
  
          EDABHDTEB  ITYEINHRC  HGNTOSOGE  AIETGGNIE   OOGHFAOES  POMETNDVA  SHBSNOIDD"
  
      </p>
      <br>
      <p>
          Who is he?
      </p>
      <br>
      
      <div id="answer">
      <input class="bg-transparent rounded border-2 m-0 font-normal text-lg p-1.5" type="text" placeholder="Enter the answer..." name="answer" />
      <button class="rounded border-2 align-middle m-0 font-normal text-lg p-1.5 cursor-pointer object-center transition duration-500 ease-in-out bg-transparent hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" on:click={() => submit()}>Submit</button>
       
    </div>
      
  </Box>
  <div class="loader">
    
  </div>
  <div class="container">
  
  </div>
  </main>    
  
  