<script>
    export let images;
    export let clues;
    export let identifyHashedAnswer;

    async function identifyEncrypt(input){
		const msgBuffer = new TextEncoder().encode(input);
		const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
		const hashArray=Array.from(new Uint8Array(hashBuffer));
		const hashHex=hashArray.map(b=>('00'+b.toString(16)).slice(-2)).join('');
		return hashHex;
	}

    function identifyCheckAns(){
        let val = document.getElementById("identifyInput").value;
        val = val.replaceAll(" ", '').toLocaleLowerCase();
        identifyEncrypt(val).then(
            hash => {
                if(hash == identifyHashedAnswer) 
                    alert("Correct");
                else
                    alert("Wrong");
            }
        );
    }

    function identifyOnError(image){
        image.onerror = "";
        image.src = "image.alt";
    }
</script>

<div class="text-center">
    <h1 class="text-3xl p-4">Identify The Personality</h1>
    <div id="clues" class="p-4">
        <img src="{images[0]}" alt="{clues[0]}" class="inline" style="height: 400px;width: 666px" on:error={identifyOnError(this)}/>
        <img src="{images[1]}" alt="{clues[1]}" class="inline" style="height: 400px; width: 184px" on:error={identifyOnError(this)}/><br/>
        <img src="{images[2]}" alt="{clues[2]}" class="inline" style="height: 300px;width: 854px" on:error={identifyOnError(this)}/>
    </div>
    <div>
        <input name="ans" placeholder="Answer" class="p-2" id="identifyInput"/>
        <button class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" on:click="{() => identifyCheckAns()}">Go</button>
    </div>
</div>
