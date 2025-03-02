function one(){
    two();
    console.log("function one");
   
};
function two(){
    three();
console.log("function two");

};
function three(){
    console.log("function three");
};
one();