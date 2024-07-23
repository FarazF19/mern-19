
//Note : //In javascript only functions are pass by reference , and everything else is pass by copy.
//Arrow functions = anonymous functions



//Function declaration
function validatePalin(str) {  
  
    // get the total length of the words  
    const len = str.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (str[i] !== str[len - 1 - i]) {  
            console.log( 'It is not a palindrome');  
        }  
    }  
    console.log( 'It is a palindrome');  
}  

validatePalin("nitin");


//Function Expression
const palindrome = function validatePalin(str) {  
  
    // get the total length of the words  
    const len = str.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (str[i] !== str[len - 1 - i]) {  
            console.log( 'It is not a palindrome');  
        }  
    }  
    console.log( 'It is a palindrome');  
}  

palindrome("nitin");


//Arrow functions 
//Function Expression
const palindrom = (str) => {  
  
    // get the total length of the words  
    const len = str.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (str[i] !== str[len - 1 - i]) {  
            console.log( 'It is not a palindrome');  
        }  
    }  
    console.log( 'It is a palindrome');  
}  

palindrom("nitin");


//IIFF

( (str) => {  
  
    // get the total length of the words  
    const len = str.length;  
  
    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < len / 2; i++) {  
  
        // validate the first and last characters are same  
        if (str[i] !== str[len - 1 - i]) {  
            console.log( 'It is not a palindrome');  
        }  
    }  
    console.log( 'It is a palindrome');  
})(("racecar"));


