<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import NProgress from "nprogress";
    import Button from "../../components/button.svelte";
    import { initialPuzzle, serverUrl } from "../../constants";

    onMount(() => {
        if(localStorage.getItem("UUID") !== null){
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(xhttp.readyState == 4 && xhttp.status == 200){
                    localStorage.setItem("UUID", JSON.parse(xhttp.response).id);
                    navigate(JSON.parse(xhttp.response).url);
                }
                else
                    localStorage.removeItem("UUID");
            }
            xhttp.open("GET", serverUrl + "getProgress?id="+localStorage.getItem("UUID"), false)
            xhttp.send();
        }
    });

    function verifyForm(){
        let phone = document.getElementsByName("phone")[0].value;
        let email = document.getElementsByName("email")[0].value;
        let pName = document.getElementsByName("name")[0].value;
        if(phone == "" || email == "")
            alert("Phone number and email are required");
        else{
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4)
                    NProgress.done();
                if(this.readyState == 4 && this.status == 200){
                    if(Number.parseInt(xhttp.response)){
                        localStorage.setItem("UUID", xhttp.response)
                        navigate(initialPuzzle);
                    }   
                    else{
                        localStorage.setItem("UUID", JSON.parse(xhttp.response).id)
                        navigate(JSON.parse(xhttp.response).url);
                    }

                }
                else if(this.readyState == 4 && this.status == 400){
                    alert("Phone number and email should be of the correct format");
                }
                
            }
            xhttp.open("POST", serverUrl+"createProgress", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send("phone="+ phone + "&email=" + email + "&name=" + pName);
            NProgress.start();            
        }
    }
</script>

<div class="text-orange">
  <div class="text-center">
    <h1 class="text-5xl">Welcome to Nine Piceces of Eight</h1>
    <p
      class="text-lg inline-block mt-8 py-1 px-2 uppercase rounded-full uppercase bg-light"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
      reprehenderit maxime, aperiam expedita, doloremque laborum sed consectetur
      consequatur.
    </p>
  </div>
  <br />
  <div class="flex items-center w-full mt-8">
    <div
      class="w-full bg-grey rounded shadow-2xl p-8 m-4 md:max-w-sm md:mx-auto"
    >
      <h1 class="text-center text-2xl mb-6">Register</h1>
      <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase tracking-wide font-bold text-lg" for="name"
          >Name</label
        >
        <input
          class="p-2 m-2 bg-transparent"
          name="name"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="flex flex-col mb-4 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg" for="email">Email</label
        >
        <input
          required
          class="p-2 m-2 bg-transparent"
          name="email"
          type="text"
          placeholder="Email"
        />
      </div>
      <div class="flex flex-col mb-6 md:w-full">
        <label class="mb-2 uppercase font-bold text-lg" for="contact"
          >Contact no.</label
        >
        <input
          required
          class="p-2 m-2 bg-transparent"
          name="phone"
          type="text"
          placeholder="Contact No"
        />
      </div>
      <div class="text-center">
        <Button color="orange" handlerFunction={verifyForm} text="Begin" />
      </div>
    </div>
  </div>
</div>
