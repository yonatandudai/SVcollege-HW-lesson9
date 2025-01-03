//Q3. Write yourself the indexOf function , that gets a string and a character
//  and returns the index of the character in the string.
//  If the character is not found, return -1. handle the error cases as well.
function customIndexOf(str, char) {
    try {
        // Error handling: Check if the inputs are valid
        if (typeof str !== 'string') {
            throw new TypeError('First argument must be a string');
        }
        if (typeof char !== 'string' || char.length !== 1) {
            throw new TypeError('Second argument must be a single character string');
        }
        // Iterate through the string to find the character
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                return i;
            }
        }
        return -1; // Return -1 if the character is not found
    } catch (error) {
        console.error(error.message);
        return -1; // Return -1 in case of an error
    }
}

// Example usage:
console.log(customIndexOf('hello', 'l')); // Output: 1
console.log(customIndexOf('hello', 'a')); // Output: -1
console.log(customIndexOf('hello', ''));  // Output: -1 and logs error message
console.log(customIndexOf(12345, '1'));   // Output: -1 and logs error message
