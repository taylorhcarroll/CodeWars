let test1 = ['aabb', 'abba', 'bbaa']
let word1 = 'baba'

function anagrams(word, words) {
  let baseString = sortString(word)
  console.log("baseString " , baseString)
  
 words.every(singleWord => {
    let testString = sortString(singleWord)
    console.log("testString " , testString)
    console.log("this is the answer " , testString === baseString)
   
   let answer = (testString === baseString)
   console.log("answer" , answer)
   
   if (baseString == testString) {
      console.log("it passes")
      return true;
    } else {
      console.log("it fails")
      return false;
    } 
  })
  
  
  function sortString(string) {
    return (string.split('').sort().join(''))
  }
}

console.log("word " , word1)
console.log("array " , test1)
console.log(anagrams(word1, test1))
