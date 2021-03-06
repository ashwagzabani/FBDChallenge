/**
 * The following program contains the source code for a new version of replace algorithm called replaceAll.
 * It's a simple approach is to replace all occurance in a string . 
 */

//Used variables 
const oldText = "Dog Cat Monkey Dog Dog";           //Assign a literal string value to oldText
let oldWord = "Dog";                                //Assign a literal string value to which is need to replacement to oldWord
let newWord = "Lion";                               //Assign a literal string value to which is need to replace it with oldWord to NewWord
let newText = "";                                   //Declaration a variable to assign the new text after replacement to newText

//Print the old text before replacement process to console
console.log("The old text: ", oldText);

//Print the new text after replacement process to console
console.log("The new text: ", replaceAll());

/**
* Function that replace all target word by new word
* @author   Ashwag Zabani
* @return   {String}        Result of replacement process 
*/
function replaceAll() {

    newText = oldText.split(" ").map(word => {
        if (oldWord == word)
            word = newWord
        return word 
        
    });//end map function

    return newText.join(' ');

}//end replaceAll function
