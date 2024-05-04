// fractions.js
// utility of conversion fraction number
//
// AUTHOR: Aryan Bhardwaj
// CREATED: 2024-02-06
// UPDATED: 2024-02-17
//

function toDecimal(fractionString) {
    let decimal = 0; // return value
    // Split fractionString by spaces into 2 tokens using regex
    let tokens = fractionString.trim().split(/\s+/);
    // If there is only one token, it contains either a decimal number or
    // fraction number, for example, 1.2, or 1/2
    if (tokens.length == 1) {
        // Split the token by “/” again into 2 parts
        let parts = tokens[0].split('/');
        // If there is only 1 part, the string is a decimal number (1.2)
        // Use parseFloat() to convert it to a number
        if (parts.length == 1) {
            decimal = parseFloat(parts[0]);
        }
        // If there are 2 parts, the string is a fraction number (1/2)
        // Parse each part as number, then divide the first part by the second
        else if (parts.length == 2) {
            decimal = parseFloat(parts[0]) / parseFloat(parts[1]);
        }
    }
    // If there are 2 tokens, it contains an integer and fraction, e.g. 1 2/3
    else if (tokens.length == 2) {
        // Parse the first token to an int and store it to the return var, decimal
        decimal = parseInt(tokens[0]);
        // Split the second token by “/” into 2 parts again
        // If it cannot be split to 2 parts, it is not a valid fraction format.
        // Skip the following steps, and return only decimal part or NaN.
        let parts = tokens[1].split('/');
        if (parts.length == 2) {
            // Parse 2 parts to integers and divide them
            // Add the division to number then return it
            decimal += parseFloat(parts[0]) / parseFloat(parts[1]);
        }
    }
    return decimal;
}


function toFraction(number) {
    // Check if the number is NaN first using isNaN().
    // If so, do nothing and return “NaN”
    if(isNaN(number))
        return "NaN";
    // Extract the integer part using Math.trunc() to a local variable integer
    let integer = Math.trunc(number);
    // Extract the numerator from the decimal part, (number - integer)
    // by multiplying the base 16. The numerator should be an integer as well.
    let numerator = Math.round((number - integer) * 16);
    // If the numerator is 16, then round up the integer by one and
    // set the numerator to 0
    if(numerator == 16) {
        integer += 1;
        numerator = 0;
    }
    // If the numerator is 0, then return the integer only after converting it
    // to a string
    if(numerator == 0) {
        return integer.toString();
    }
    // If the numerator is not 0, then construct the fraction format below
    else {
        // If the integer is 0, then the return string will be numerator + “/” + 16
        if(integer == 0) {
            return numerator + "/" + 16;
        }
        // If the integer is not zero, then the string will be
        // integer + “ “ + numerator + ”/” + 16
        else {
            return integer + " " + numerator + "/" + 16;
        }
    }
}