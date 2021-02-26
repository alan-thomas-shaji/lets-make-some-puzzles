const hint = [230935911207, 276061319144, 268098011861, 302605676754, 268098011861, 84941944352, 230935911207, 294642369471, 302605676754, 284024626427,
    84941944352, 191119374792, 257480268817, 297296805232, 297296805232, 268098011861, 291987933710, 305260112515];

const val = 2654435761;

function encode(i){
    return i*(val%Math.pow(2, 32));
}

function decode(i) {
    return (i/val-97);
}

function TheHiddenTreasure()    {
    for(let j=0; j<18; j++)     {
        for(let i=32; i<118;i++)    {
        let k = encode(i);
            if(hint[j]==k)
                console.log(String.fromCharCode(97+decode(k)));
        }
    }    
}
