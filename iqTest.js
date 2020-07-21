//A Dude is taking an iq test, based on what we know you will be given a STRING of numbers and have to find the one that is different from all the others.
//According to the instructions the major difference between the numbers is ONE will be even or odd in that set, the rest will be the opposite.
//You need to give the position of the answer in real human language. If the third one in the set is the answer return the numerical value of "3".

function iqTest(numbers){
  //my initial thought is to iterate through array and if num is even push to even array if num is odd push to odd array
  //take length of both arrays, whichever is smaller, define that as unique
  //return the index of the unique item +1 to give an index that is usable to humans
  let numArray = numbers.split(' ')
  console.log("numarray" , numArray)
  let evenAccu = []
  let oddAccu = []
  for (const number of numArray) {
    if (number % 2 == 0 && number != ' ') {
      evenAccu.push(number)
      console.log("adding to evenAccu", number)
    } else if (number != ' ') {
      oddAccu.push(number)
      console.log("adding to oddAccu", number)
    }
  }
  
  console.log("evenAccu", evenAccu)
  console.log("oddAccu", oddAccu)
  
  let unique = []  
  
  if (evenAccu.length < oddAccu.length) {
    unique = evenAccu
    console.log("unique is" , unique)
  } else {
    unique = oddAccu
    console.log("unique is" , unique)
  }
  let result = numArray.indexOf(unique[0])
  console.log("result", result)
  return result + 1
  //result should return the index + 1 to make it readable to humans
}
