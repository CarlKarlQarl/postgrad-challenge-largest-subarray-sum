// returns the largest subarray sum for an array of all-positive integers
// function largestSubarraySum(array){
//     return array.reduce((num, memo) => {
//         return num + memo
//     })
// }

// returns the largest subarray sum when the array has some negative numbers at the end
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

// returns the largest subarray sum when there are negatives at the beginning and end of the array
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

// full passing solution
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