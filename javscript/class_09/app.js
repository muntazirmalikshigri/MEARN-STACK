//     nested loops with nested arrays

let heros = [["ironman","fakhar","sohail"],["shakeel","aqeel","shabbir"]];
//console.log(heros)
for(let i=0;i<heros.length;i++){
    console.log(heros[i])
    for(let j=0;j<heros[i].length;j++){
        console.log(heros[i][j])
    }
}

// for of loop
for(list of heros){
    for(name of list){
        console.log(name);
    }
}