//    todo app

let todo =[];
let req = prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }

    if(req == "list"){
        console.log("-------");
        for(task of todo){
            console.log(task);
        }
        console.log("------")
    }else if(req == "add"){
        let task=prompt("Please enter task you want add");
        todo.push(task);
        console.log("task added");
    }else if(req == "delete"){
        let idx = prompt("Please enter a task index");
        todo.splice(idx,1)
        console.log("task deleted")
    }
    req = prompt("please enter your request");
}