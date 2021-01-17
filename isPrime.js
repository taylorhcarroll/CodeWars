//1st draft
function isPrime(num) {
  //starts at 2 because 1 would give us a false positive
  for(let i = 2; i < num; i++)
  //this says return false IF the remainder is 0 after dividing num by i
    if(num % i === 0) return false;
  //this line returns true as long as the num is greater than 1
  return num > 1;
}

//optimized
//how can we improve this?
//a fancy man named euler once told me we could stop at the sqrt of the num and not have to loop through so much
const isPrime = num => {
  //sets up the square root of the num rounding down to nearest int
  var sqrtnum=Math.floor(Math.sqrt(num));
   //truefalse statement saying it can be prime if it makes it through the loop below and is greater than 1 (this takes care of negatives, 0 and 1) 
    var prime = num > 1;
  //for loop that starts at 2 to avoid 1 and stops when i gets to the sqrtNum + 1
    for(var i=2; i<sqrtnum+1; i++) {
      //if leftovers of num divided by i is 0, it is not prime, set prime to false and break out of loop
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
   //else return prime number if it is greater than 1
    return prime;
}
