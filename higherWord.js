function high(x){
  // 1. split x by ' ' to an array.
  const wordList = x.split(' ');
  
  // 2. calculate each word score to another array.
  //this splits the word into an array of letters, then we use the reduce function to calc score. Use charCodeAt to calc the score easily. Because 'a' starts at value of 97 we minus by 96 to give 'a' a value of 1
  //to achieve predictable results we format our string using toLowerCase to give us only lowercase letter before splitting into an array
  const getScore = (word) => {
    return word.toLowerCase().split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
  }
  const scoreList = wordList.map(word => getScore(word));

  // 3. get the highest score and index
  let highestIndex = 0;
  let highestScore = 0;
  scoreList.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });
  
  // 4. return the string of the highest score index of wordList
  return wordList[highestIndex];
}


//other ways this could be accomplished
function high(x){
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function(word){
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}

//and another
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
