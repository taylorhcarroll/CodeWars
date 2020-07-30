 function deleteNth(arr,n){
   
  //create a new array to push your values into
   let newArr = []
  //look through your new array and add to the count each time it sees that the i
   function countDupes(item) {
     let count = 0
     for (let i = 0; i < newArr.length; i++) {
       //if the item we fed to the function earlier matches an item in the newArray, add to count
       if (item === newArr[i]) {
         count++;
       }
     }
     return count;
   }
   
   
   //loop through original array to grab nums to push to new array
   for (let i = 0; i < arr.length; i++) {
   //check the num against the dupeChecker function, if the count is under the limit n, push to new array
    if (countDupes(arr[i]) < n) {
      newArr.push(arr[i]);
    }
   }
  return newArr;
}
