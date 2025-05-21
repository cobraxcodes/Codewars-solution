// // Prompt: Input: Array of elements
// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.

const delimited = (arr) =>{
    return arr.splice("").join(',')
}

console.log(delimited(["h", "e", "l", "l", "o"]))