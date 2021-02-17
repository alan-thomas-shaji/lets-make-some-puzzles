import {navigate} from "svelte-routing";

async function encrypt(input){
    const msgBuffer = new TextEncoder().encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray=Array.from(new Uint8Array(hashBuffer));
    const hashHex=hashArray.map(b=>('00'+b.toString(16)).slice(-2)).join('');
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

export function getNextUrl(url, lastAns){
    return String(url) + "?lastAns=" + String(lastAns);
}

export async function verifyHash(userAns, realHashedAns){
    let hashedInput = await encrypt(userAns);
    return hashedInput == realHashedAns;
}

export function getPreviousAnswer(location){
    return findGetParameter("lastAns", location);
}

export async function verifyPreviousAns(location, lastAns){
    console.log(lastAns);
    if(!(await verifyHash(getPreviousAnswer(location), lastAns)))
        navigate("/");
}