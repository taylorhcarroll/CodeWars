// Write a function called that takes a string of parentheses,
// and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, 
// and false if it's invalid.

parens = "())"

//fancy shamncy regEx version

function validParentheses(parens) {
    //TODO
    regEx = /\(\)/g;

    while (regEx.test(parens)) {
        parens = parens.replace(regEx, '')
    }

    return parens === '';

}

//my initial attempt

function validParentheses(parens) {
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n == 0;
}