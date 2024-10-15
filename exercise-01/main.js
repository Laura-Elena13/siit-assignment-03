console.log('Functions - Array Algorithms');

let array = [313, -1007, 441, 789, -1139, 0, 369, 558, -3103, 1313, 223];
let maxInArray = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > maxInArray) {
        maxInArray = array[i];
    }
}

console.log(array);

console.log(maxInArray); 
