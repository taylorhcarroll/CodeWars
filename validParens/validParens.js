// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, 
// and false if it's invalid.

parens = "())"

function validParentheses(parens) {
    //TODO 
    regEx = /\(\)/g;

    while (regEx.test(parens)) {
        parens = parens.replace(regEx, '')
    }

    return parens === '';

}