//first attempt
function bouncingBall(h,  bounce,  window) {
  
  //take height h and multiple by bounce .66
  //if result is equal to or higher than window 1.5, do the first step again and add to bounceCount
  //take the number of times you did the first step and add to bounceCount
  
  //define the result and set it as a condition, check for all three conds
    let condition = h > 0 && (bounce > 0 && bounce < 1) && window < h;
    if (condition == true) {
      //if condition if met, ball is seen going up AND down,
      //hence return 2 from the ternerary,
      //but we also return the function itself, making it recursive
      //we check in the ternary if height is smaller than window, if it is return -1 else the aforementioned 2
      return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window)
    } else {
      //per instructions, return -1
      return -1
    }
}

//could also be solved this way:

function bouncingBall(h,  bounce,  window) {
//initial value of rebounds is -1
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}
