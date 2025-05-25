// //Prompt:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.split("").filter(x => x !== "!").join("")
}

console.log(removeExclamationMarks("H!llo World!"))