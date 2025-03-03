function savetoDb(data,success,failuer){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed > 4){
        success();
        console.log(data)

    } else{
        failuer();
        console.log(data)

    }
    
};
savetoDb(
    'muntazir',
    ()=>{
        console.log("Your data was saved");
        savetoDb("malik",
            ()=>{
                console.log("data2 saved")
            },
            ()=>{
                console.log("failure 2 ")
            }
        )
    },
    ()=>{
        console.log("weak connection")
    }
);
