/**
 * The following program contains the source code for a algorithm called unique.
 * It's a simple approach is to retrive a unique value in an existing array . 
 */

//Used variables 
const arrayOfNumer = [1, 2, 3, 3, 4, 5, 6, 6, 1];               //Assign an array of number to arrayOfNumer
let duplicateValues = [];                                       //Declaration a variable to assign the duplicate numbers in arrayOfNumer to duplicateValues
let uniqueValues = [];                                          //Declaration a variable to assign the unique numbers in arrayOfNumer to uniqueValues

//Print the existing array to console
console.log("The existing array: ", arrayOfNumer);

//Print unique numbers in the array to console
console.log("The unique numbers in the array are: ", unique());


/**
* Function that retrive the unique numbers in an existing array
* @author   Ashwag Zabani
* @return   {Array}        The unique numbers
*/
function unique() {

    //check if the existing array values are number
    if (isArrayAreNumbers) {
        //get the duplicate numbers in arrayOfNumer
        duplicateValues = arrayOfNumer.sort().filter((number, index, array) => {
            if (number == array[index - 1])
                return number
        })

        //get the unique numbers in arrayOfNumer
        uniqueValues = arrayOfNumer.filter(number => {
            if (!duplicateValues.includes(number))
                return number
        })
        return uniqueValues;
    }
    return "The array values must be number";

}//end unique function

/**
* Function that check if the existing array values are numbers
* @author   Ashwag Zabani
* @return   {Boolean}        The check result
*/
function isArrayAreNumbers() {
    arrayOfNumer.every((number) => {
        return typeof number === 'number';
    });
}//end isArrayAreNumbers function
