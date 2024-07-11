// //constant : Block scoped, and immuatble . Also must be initialized when declared

// const a = 1;
// console.log("a before scope", a);

// {
//     const a ="new variable"
//     console.log("a within scope:",a);
// }
// console.log("a after scope", a);
 

//let : Block scopped but mutable

let a = 1;
console.log("a before scope", a);

{
    let a = 5;
    console.log(a);
    a ="new variable"
    console.log("a within scope:","",a);
}
console.log("a after scope", a);
 
// var : global scoped and mutable.

var b = "outer scope";
console.log(b);

{
    var b = 'inner scope';
    console.log(b);
}
console.log(b);

//      Statement vs Expression
// Every line is a statement in JS but not expression i.e const a= 1;
// Expression is a statement where logic is there or returns something : const a = a+1;

// Template Strings
let name = "Faraz";
{`Hello ${name}`}
