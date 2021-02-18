<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import Button from "../../components/button.svelte";
    import { serverUrl, sudokuUrl } from "../../constants";

    onMount(() => {
        if(localStorage.getItem("phoneNo") !== null)
            navigate(sudokuUrl);
    });

    function verifyForm(){
        let phone = document.getElementsByName("phone")[0].value;
        let email = document.getElementsByName("email")[0].value;
        let pName = document.getElementsByName("name")[0].value;
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                localStorage.setItem("phoneNo", document.getElementsByName("phone")[0].value);
                navigate(sudokuUrl);
            }
        }
        console.log(serverUrl+"createProgress");
        xhttp.open("POST", serverUrl+"createProgress", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("phone="+ phone + "&email=" + email + "&name=" + pName); 
    }
</script>
<div class="text-center text-orange">
    <h1 class="text-5xl">Enter your Details</h1>
    <div class="p-4">
        <input class="p-2 m-2" name="name" type="text" placeholder="Name"/><br/>
        <input class="p-2 m-2" name="email" type="text" placeholder="Email" required/><br/>
        <input class="p-2 m-2" name="phone" type="text" placeholder="Phone No" required/><br/>
        <Button handlerFunction={verifyForm} text="Go"/>
    </div>
</div>