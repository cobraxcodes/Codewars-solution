// // PROMPT: 
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.


const isVowel = (arr) => {
let newArr = []
let values = [97, 101, 105, 111, 117]

for(let i=0; i<arr.length; i++){
    if(values.includes(arr[i])){
        newArr.push(String.fromCharCode(arr[i]))
    }else{
        newArr.push(arr[i])
    }
}
return newArr
};

console.log(isVowel([100, 100, 116, 105, 117, 121])); 
