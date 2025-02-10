//  methods

let calculator = {
    add:function(a,b){
        return a+b;
    },
    mul:function(a,b){
        return a*b;

    },
    sub:function(a,b){
        return a-b;
    }
}
console.log(calculator.add(2,4));

let arr = [33,22,55,66,11,23,43,10]
 function filterNums(arr,num){
   return arr.filter(elemet =>elemet > num)
 };
 filterNums(arr,20)