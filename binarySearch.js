/**
 * The following program contains the source code for a search algorithm called Binary Search.
 * It's a simple approach is to do linear search. 
 */

//Used variables 
const sortedArray = [1, 3, 4, 5, 7, 9, 14, 16];     //Assign a sorted integer array to sortedArray
const keyValue = 14;                                //Assign a key value to keyValue
let low = 0,                                        //Assign the first index in sortedArray to low
    high = sortedArray.length - 1,                  //Assign the last index in sortedArray to high
    middle = 0;                                     //Declartion a variable to uses in assign the middle index in sortedArray to middle

//Print the result of binarySearch function to console
console.log(binarySearch(low, high, middle));

/**
* Function that search about key value using binary search approach
* @author   Ashwag Zabani
* @param    {int} low       First index in sortedArray
* @param    {int} high      Last index in sortedArray
* @param    {int} middle    middle index in sortedArray
* @return   {String}        Result message
*/
function binarySearch(low, high, middle) {

    //check if low value is less than or equal high
    if (low <= high) {
        middle = Math.floor((high + low) / 2);             //Assign the sum of high, low with divied by 2 to middle

        //check if middle value in sortedArray is equal key value
        if (sortedArray[middle] == keyValue)
            return 'The value is ' + keyValue + ' is found at index = ' + middle;

        else if (sortedArray[middle] > keyValue)
            return binarySearch(low, middle - 1, middle);

        else
            return binarySearch(middle + 1, high, middle);
    }//end if

    //return a string result message if the key value not found
    return 'The value is not found';

}//end binarySearch function
