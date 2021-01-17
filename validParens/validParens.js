// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, 
// and false if it's invalid.


function validParentheses(parens) {
    //TODO 

    numParens = 0;

    for (i = 0; i < parens.length; i++) {
        numParens += 1;
    }

    if (numParens % 2 == 0) {
        return true
    } else {
        return false
    }
}