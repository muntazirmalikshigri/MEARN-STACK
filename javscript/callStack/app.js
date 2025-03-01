function hello(){
    console.log("Inside hello");
    console.log("hello");
};


function demo(){
    console.log("Calling hello fnx");
    hello();
};

console.log("calling hello fnx");
demo();
console.log("done bye!");


function one(){
    // console.log("one")
    return 1;

};

function two(){
    return one() + one();
};

function three(){
    let ans = two()+one();
    console.log(ans);
};
console.log(one());
console.log(two());
three();



