

alert("Wellcome To Advance JavaScript Functions");

//recursion
function pow (x,n){
    if(n == 1){
        return x;
    }else
    {
        return x * pow(x, n-1);
        
    }
}

document.getElementById("pow").innerHTML = pow(5,5);
// Closure
var add = (function () {
var counter = 0;
return function () {counter += 1; 
    return counter}
})();
 // New function
add();
add();
document.getElementById("add").innerHTML = add();

let sum = new Function('a', 'b', 'return a + b');

document.getElementById("sum").innerHTML = sum(2,3);

// Arrow Functions
const Arrow = (q,w,e) =>{
    return q + w + e; 
};
document.getElementById("Arrow").innerHTML = Arrow(3,5,2);

// forEach function//Arrow Function:

let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}

//setTimeout(func)


const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("happy").innerHTML = "Happy Birthday!"
}
//map array

const number =[10,20,40,50];
const newArr = number.map(myFunctions);

document.getElementById("d1").innerHTML = newArr;
function myFunctions(num){
    return num * 10;
}

//rest operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [one, two, ...rest] = numbers;
document.getElementById("p").innerHTML = rest ;

//combine arry
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
document.getElementById("c").innerHTML = numbersCombined ;

//Spread Operator
const [firstName, lastName, ...otherInfo] = ["Sohail", "Ghafoor", "Lahore", "Blockchain Developer", "Male"];
document.getElementById("o").innerHTML = otherInfo ;
const myName ="SOHAIL GHAFOOR";
document.getElementById("u").innerHTML = [...myName] ;

//math.max
const array1=[22,44,51,99,10];

document.getElementById("max").innerHTML =(Math.max(...array1));
// function Binding

let c1 = {
    l: 75,
    k: 235
    };

    function func(t) {
        document.write(this.l  + this.k + t);
    }
    let c1_func = func.bind(c1,10);
  c1_func();
   // document.getElementById("bind").innerHTML = c1_func;
    //Prototypal Inheritance

  const F = function () {
    this.p = 1;
    this.i = 2;
 };
 const o = new F(); 
 F.prototype.i = 3;
 F.prototype.h = 4;
document.getElementById("proto").innerHTML = [(o.h),(o.p),(o.i)];
