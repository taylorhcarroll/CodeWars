function createPhoneNumber(numbers) {


    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

let example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

createPhoneNumber(example1)

//above my was quick and dirty attempt

//I like this better as it shows off more

function createPhoneNumber2(numbers) {
    //converts array to string
    numbers = numbers.join('');
    //substring takes from the position of the characters in the converted string
    return '(' + numbers.substring(0, 3) + ') '
        + numbers.substring(3, 6)
        + '-'
        + numbers.substring(6);
}