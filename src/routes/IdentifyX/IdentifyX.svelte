<script>
    let identifyHashed = "10280d2a462632de4ed1327d190d955b0ec6726b14635d4bb6eddb8de0821343";
    
    async function sudokuEncrypt(input){
		const msgBuffer = new TextEncoder().encode(input);
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
		const hashArray=Array.from(new Uint8Array(hashBuffer));
		const hashHex=hashArray.map(b=>('00'+b.toString(16)).slice(-2)).join('');
		return hashHex;
	}

    function identifyCheckAns(){
        let val = document.getElementById("identifyInput").value;
        val = val.replace(" ", '').toLocaleLowerCase();
        sudokuEncrypt(val).then(
            hash => {
                if(hash == identifyHashed) 
                    alert("Correct");
                else
                    alert("Wrong");
            }
        );
    }
</script>

<div class="text-center">
    <h1 class="text-3xl p-4">Identify The Personality</h1>
    <div id="clues" class="p-4">
        <img src="IdentifyX/_.jpg" alt="DeHavillandPussMoth" class="inline" style="height: 400px"/>
        <img src="IdentifyX/__.jpg" alt="FrenchLegionOfHonour" class="inline" style="height: 400px"/><br/>
        <img src="IdentifyX/___.png" alt="TagLines" class="inline" style="height: 300px"/>
    </div>
    <div>
        <input name="ans" placeholder="Answer" class="p-2" id="identifyInput"/>
        <button class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" on:click="{() => identifyCheckAns()}">Go</button>
    </div>
</div>