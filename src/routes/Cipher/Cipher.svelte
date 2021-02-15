<script>
    export let nextPuzzle;
    export let lastAns;
    import { onMount } from "svelte";
    import Button from "../../components/button.svelte";
    import Box from './Box.svelte';
    import {navigate} from "svelte-routing";
    import { getNextUrl, verifyHash, verifyPreviousAns } from '../../common';
    import { cipherHashed } from "../../constants";

    async function submit() {
        let val = document.getElementsByName("answer")[0].value.replace(" ", "").toLocaleLowerCase();

        if (await verifyHash(val, cipherHashed))
            navigate(getNextUrl(nextPuzzle, val));
        else 
            alert("Try Again");
    }
    
    onMount(() => verifyPreviousAns(window.location, lastAns));
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
         color : #f6f4f4;;
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
   
      input:focus{
        outline:none;
      }
      
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
          border: 4px solid #ff7417e0;
          box-shadow: 0 0 10px #ff7417e0;
          opacity: 1;
        }
        70%{
          opacity: 1;
        }
        100%{
          width: 100%;
          height: 100%;
          border: 4px solid #ff7417e0;
          box-shadow: 0 0 100px #ff7417e0;
          opacity: 0;
        }
      }
      
      
      
  </style>
  <p id="cipherxyz" class="text-center uppercase text-6xl font-mono text-orange">cipher</p>
  <main>
  <Box>
    <p class=" text-3xl text-orange">Break the Code</p> 
    <br>
    
      <p class="text-light">"He was HOPEFUL.
  
          EDABHDTEB  ITYEINHRC  HGNTOSOGE  AIETGGNIE   OOGHFAOES  POMETNDVA  SHBSNOIDD"
  
      </p>
      <br>
      <p class="text-orange">
          Who is he?
      </p>
      <br>
      
      <div id="answer">
      <input class="bg-transparent text-orange rounded border-2 m-0 font-normal p-1.5 p-2" type="text" placeholder="Enter the answer..." name="answer" />
      <Button handlerFunction={submit} text="Go"/>
      <!-- <button class="rounded border-2 align-middle m-0 font-normal text-lg p-1.5 cursor-pointer object-center transition duration-500 ease-in-out bg-transparent hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110" on:click={() => submit()}>Submit</button> -->
       
    </div>
      
  </Box>
  <div class="loader">
    
  </div>
  <div class="container">
  
  </div>
  </main>    
  
  