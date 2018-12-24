var testArray = [2,3,5,8,23,54,9,12];
//solution1
var array1 = testArray.map((currentValue) => {
    if (currentValue % 2 === 1) {
        return currentValue;
    } 
});
var sortedArray = array1.sort();
console.log(sortedArray);
console.log('solution1 result', sortedArray.slice(0, sortedArray.indexOf(undefined)));

//solution2
var array2 = testArray.reduce(function(arr, num) { 
    if (num % 2 === 1) arr.push(num); 
    return arr; 
}, []);
console.log('solution2 result', array2)