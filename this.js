
const user = this;

function something(a,b){
    let sum = a+b;
    console.log(sum);
    return this.sum;

};

something(2,4);

setTimeout(()=>{
    console.log("Set Interval");
},2000)

let firstName = "faraz";
let lastName = "maq";

console.log(this.firstName); 

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());