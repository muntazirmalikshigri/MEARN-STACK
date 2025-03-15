let url = "https://catfact.ninja/fact";

fetch(url)
.then((response)=>{
console.log(response)
// console.log(response.json());
return response.json()
})
.then((data)=>{
    console.log(data.fact);
})
.catch((error)=>{
console.log("Error is ",error);
})