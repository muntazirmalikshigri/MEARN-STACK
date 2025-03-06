let h1 = document.querySelector('h1');
function getNum(color , delay){
    return new Promise ((resolve,reject)=>{
       setTimeout(() => {
        // let num = Math.floor(Math.random()*10)+1;
        // console.log(num);
        // resolve();
        let num = Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("promise rejected");
        }
        h1.style.color = color;
        console.log(`color changed to ${color}`);
        resolve();
       },delay);
    })
};

async function demo() {
    try{
        await getNum("red",1000);
        await getNum("green",1000);
        await getNum("blue",1000);
    } catch(error){
        console.log("Error caught");
        console.log(error);
    }
  
     let a = 4;
      console.log(a);
    console.log("new number is ",a+3);
};
console.log(demo());


