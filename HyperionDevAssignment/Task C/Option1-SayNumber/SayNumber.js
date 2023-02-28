function sayNumber(num) {
    //unique case for zero
    if (num == 0) {
        return "zero";
    }
    //Check that user entered a number.

    if (!Number.isInteger(num) || num < 0 || num > 999999999999999) {
        return "Please make sure to enter an integer from 0-999999999999999 without punctuation or spaces.(commas,full stops etc.)";

    }
    //Convert integer into array
    let nums = Array.from(String(num), Number);

    //find number length entered by user. Important for getting our thousands.
    const numsLength = nums.length;

    //define our strings
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];

    //array to store our result in a string.
    const result = [];
    //Now we are going to iterate through the users number array and transform it into a string using our rules for pronunciation 
    for (i = 0; i < numsLength; i++) {
        //start with hundred
        if ((numsLength - i) % 3 == 0) {
            result.push(units[nums[i]]);
            if (nums[i] != 0) {
                result.push("hundred");
                if ((nums[i + 1] != 0 || nums[i + 2] != 0)) {
                    result.push("and");
                }
            } else if (numsLength - i == 3) {
                result.push("and");
            }
        }

        //now for our tens and teens. Note I put them in one variable, so also see the extra math in the push().
        if ((numsLength - i) % 3 == 2) {
            if (nums[i] == 1) {
                result.push(units[nums[i + 1] + 10]);
            } else {
                result.push(tens[nums[i]]);
            }
        }
        //now onto our units. We simply push the unit string unless it is zero.if 0, we go onto our thousands/joiner.
        if ((numsLength - i) % 3 == 1) {
            if (nums[i] != 0) {
                result.push(units[nums[i]]);
            }
        }
        // now we deal with our joiners/thousands.
        //We need a while(). This is because rules for pronunciation are different for thousands and the last 3 digits of a number.
        if ((numsLength - i) % 3 == 1) {
            while ((numsLength - i) > 3) {

                if (nums[i] != 0 && nums[i - 1] != 0) {
                    result.push(thousands[Math.floor((numsLength - i) / 3)]);
                    result.push(",");
                }

                break;
            }//end of while

        }

    }//end of for loop.



    //filter function to get rid of all empty spaces "".
    result.push(".");
    const newResult = result.filter(e => {
        return e != "";
    });
    //Now to join the array items and capitlize the string(first letter upperCase).
    numString = newResult.join(" ");
    answer = numString.charAt(0).toUpperCase() + numString.slice(1);

    //logs the answer onto the console for the user when the function is called with an integer as a parameter.
    console.log(answer);
}
