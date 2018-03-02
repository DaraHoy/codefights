/*
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.
*/

function firstDuplicate(a) {
    var index = [];
    a.forEach(function(num, i) {
        // Checks each array item for duplicates
        if (a.indexOf(num, i + 1) != -1) {
            // if found the index is stored in an array
            index.push(a.indexOf(num, i + 1))
        }
    })
    // checks if any duplicates found, if none found return -1
    if (index.length == 0) {
        return -1;
    }
    // index array is sorted to lowest value which returns the index position of the duplicate number in array a
    return a[index.sort().shift()];
}

/*This solution exceeds the execution time limit.
Sample tests: 11/11
Hidden tests: 7/11
Score: 91/300
*/

//For a = [2, 3, 3, 1, 5, 2], the output should be firstDuplicate(a) = 3
var a = [10, 6, 8, 4, 9, 1, 7, 2, 5, 3]
console.log(firstDuplicate(a))