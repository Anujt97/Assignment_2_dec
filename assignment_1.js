console.log("welcome to js");

let calc={
    'add':function(){
        let sum = this.num1 + this.num2;
        return sum
    },
    'substract':function(){
        res=this.num3 - this.num4;
        console.log(res);
    },
    'multiplication':function(a,b){
        let mul=this.num5[0] * this.num5[1];
        return mul
    },
    'devide':function(){
        res=this.num7 / this.num8;
        console.log(res);
    }
};

let set1={
    'num1':10,
    'num2':20
}
let set2={
    'num3':10,
    'num4':20
}
let set3={
     num5:[10,40]
}
let set4={
    'num7':10,
    'num8':20
}
let arr=[];
let result = calc.add.call(set1);
console.log(result);

let mul=calc.multiplication.apply(set3,arr);
console.log(mul);

let new_div=calc.devide.bind(set4);
new_div();


