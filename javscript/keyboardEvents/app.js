let inp = document.querySelector("input");


// btn.addEventListener("click",function(event){
// console.log(event);
// console.log("Button was clicked");
// });


// btn.addEventListener("dblclick",function(event){
    
//     console.log('You clicked the mouse')
// })
// btn.addEventListener("keydown",function(){
//     console.log(event.key);
//     console.log(event.code)
// })

inp.addEventListener("keydown",function(event){
    if(event.code =="ArrowUp"){
        console.log("Characters moves up")
    }else if(event.code=="ArrowDown"){
        console.log("characters moves down")
    }else if(event.code=="ArrowLeft"){
        console.log("characters moves left")
    }else if(event.code=="ArrowRight"){
        console.log("characters moves rigt")
    }
})
// let form = document.querySelector("form").addEventListener("input",function(event){
  
//     let inp = document.querySelector('input');
//     console.log(inp.value)
// })
inp.addEventListener("change",function(event){
console.log(inp.value);
})