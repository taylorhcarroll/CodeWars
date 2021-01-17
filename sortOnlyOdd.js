function sortArray(array) {
//set up array of just the odd items, this is accomplished by filtering to only odds, then sort order desc
  const odds = array
 //this say to filter only values that return a 1 from the modulus statement x%2, which by default means true
        .filter(x => x%2)
 //this sorts the list
 /* The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:

if it returns a negative value, the value in a will be ordered before b.
if it returns 0, the ordering of a and b won’t change.
if it returns a positive value, the value in b will be ordered before a.
When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order. */
        .sort((a, b) => a - b);
        
    return array
  //Any number other than 0 is considered as true for boolean.
  //therefore we combine our modulus statement with a ternary
  //if it is odd meaning the return value from x%2 is 1, remove the first num from the odds array
  //and return it. array.shift() removes the first item in the array and returns that value.
  //if it is even return the actual item. Since we are mapping over the original array we are saying
  //if the item is odd, return the next odd number from our sorted array, else if it's even just return the
  //number at that position in the array.
        .map(item => item % 2 ? odds.shift() : item);
}


//this was kinda complicated surprisingly, so I had to add a lot of comments of my research to figure out how to put this together
//here it is without the comments

/*
function sortArray(array) {
  const odds = array
        .filter(x => x%2)
        .sort((a, b) => a - b);

    return array
        .map(item => item % 2 ? odds.shift() : item);
}
*/
