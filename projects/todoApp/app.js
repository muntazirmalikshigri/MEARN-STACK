let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    value = inp.value;
    li.innerText=value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    ul.appendChild(li);
    li.appendChild(delBtn);
    inp.value = ""
    li.style.color="magenta";
    li.style.listStyle ="none"
});
// let delBtns = document.querySelectorAll(".delete");
// for (let delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let para = this.parentElement; // "this" refers to the delete button
//     ul.removeChild(para); // Remove the <li> from the <ul>
//   });
// }
delBtn.addEventListener("click",function(){
    console.log(this.parenElement);
})
