import { navigate } from "svelte-routing";
import { cheaterUrl, mazeUrl, serverUrl } from "./constants";

async function encrypt(input) {
  const msgBuffer = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => ("00" + b.toString(16)).slice(-2))
    .join("");
  return hashHex;
}

function findGetParameter(parameterName, location) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

export function getNextUrl(urlCallable, lastAns, multiple = false) {
  let url = urlCallable();
  if (!multiple) return String(url) + "?lastAns=" + String(lastAns);
  return String(url) + "&&lastAns=" + String(lastAns);
}

export async function verifyHash(userAns, realHashedAns) {
  let hashedInput = await encrypt(userAns);
  return hashedInput == realHashedAns;
}

export function getPreviousAnswer(location) {
  return findGetParameter("lastAns", location);
}

export async function verifyPreviousAns(location, lastAns){
    if(!(await verifyHash(getPreviousAnswer(location), lastAns)))
        navigate(cheaterUrl);
}

export async function updateProgress(id){
    let uuid = localStorage.getItem("UUID");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", serverUrl + "updateProgress?puzzleId="+id+"&&UUID="+uuid, true);
    xhttp.send();
}

export function generateMazeUrl(){
    let uuid = localStorage.getItem("UUID");
    return mazeUrl + "?UUID=" + uuid;
}
