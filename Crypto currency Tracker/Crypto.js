/**
 * The following program contains the source code for get the current price of BitCoin using Axios.
 */

const axios = require('axios');            //import axios 
require("dotenv").config();                //import dotenv
const apiKey = process.env.KEY;            //get api key from .env file

//Call getCurrentPriceBTC function every second
setInterval(function () {
    getCurrentPriceBTC();
}, 1000);

/**
* Function that retrive the current price of BitCoin from API and print data to console
* @author   Ashwag Zabani
*/
function getCurrentPriceBTC() {
    axios({
        url: `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=BTC&start=2021-03-05T00%3A00%3A00Z&end=2021-03-05T00%3A00%3A00Z`,
        method: 'get'
    })
        .then(response => {// code for if the request succeeds
            //Print response data to console
            console.log(response.data);
        })
        .catch(error => {// code for if the request fails
            //Print error to console
            console.log(error);
        });//end axios

}//end getCurrentPriceBTC function
