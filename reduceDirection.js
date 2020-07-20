/*
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountain desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or

{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or

[North, South, South, East, West, North, West]
You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or

{ "WEST" }
or

[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

*/

function dirReduc(arr){
  
  //this is a key value pair object that shows what the opposites are
    const opposite = {
    'NORTH': 'SOUTH',
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  }
  
//example syntax
//arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
//or
//arr.reduce(( accumulator, currentValue) => {}, initialValue)
    
  return arr.reduce((accumulator, currentValue) => {
    //checks condition if top of stack is equal to opposite. it knows the opposite by using the current value
    //as a key to check for the value of the opposite 
    if (accumulator[accumulator.length - 1] === opposite[currentValue]) {
      //if it is the opposite it, take the top of the stack off
      accumulator.pop();
    } else {
      //if current value isn't the opposite, put it on top of the stack
      accumulator.push(currentValue);
    }
      return accumulator;
    }, []);
  //the empty array is to provide the initial value
}
