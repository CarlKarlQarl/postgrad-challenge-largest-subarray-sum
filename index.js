// Dumb solution, just add everything together. Only passes if everything is positive.
// function largestSubarraySum(array){
//     return array.reduce((num, memo) => {
//         return num + memo
//     })
// }

// Adds up values until it runs into a negative number. Passes prior tests, and a few new ones.
// function largestSubarraySum(array){
//     let sum = 0;
//     for (let num of array){
//         if (num >= 0){
//             sum += num                       
//         } else {
//             return sum
//         }
//     }
//     return sum
// }

// Keeps a running total of positive numbers. When it encounters a negative number, it stores the running total in an array, and resets the running total to zero.
// Once every number has been processed, it looks through the array of stored running totals, and returns the largest one.
// function largestSubarraySum(array){
//     let sumsArray = []
//     let sum = 0
//     for (let num of array){
//         if (num >= 0){
//             sum += num
//         } else {
//             sumsArray.push(sum)
//             sum = 0
//         }
//     }
//     sumsArray.push(sum)
//     return sumsArray.reduce((num, memo) => {
//         return num > memo ? num : memo
//     })
// }

// Full passing solution
// Similar to last solution, but with a few changes to allow running totals to include negative numbers in the subarray sum.
// When a negative number is encountered, two things happen: 
// First, because the running total is about to go down, there is a chance that that is the last time the total will be that high, so it will get saved to the array as a possible largest sum.
// Second, if the negative number doesn't push the total below zero, it isn't ruining the running total completely, so there's no harm it letting it get added to the running total.
// Only when the negative number would set the running total to zero or negative will the running total get reset.
function largestSubarraySum(array){
    let sumsArray = []
    let sum = 0
    for (let num of array){
        if (num < 0){
            sumsArray.push(sum)
        }
        if (num + sum > 0){
            sum += num
        } else {
            sumsArray.push(sum)
            sum = 0
        }
    }
    sumsArray.push(sum)
    return max(sumsArray)
}

function max(array) {
    return array.reduce((num, memo) => num > memo ? num : memo)
}

// Challenge - Time Complexity
// Most of the heavy lifting is done in the for/of loop, and it only looks at each value once, so this is O(n).
// The second pass over the numbers is down in the max function, and it only looks at each value once, so this is also O(n).
// Together, they would be O(2n), but that should simplify down to O(n).
// For this style of solution, this is about as fast as it could go. 
// And with the way I look over the running total, and the way it goes up and down over time, you can't tell if it has hit it's largest value until everything has been examined.