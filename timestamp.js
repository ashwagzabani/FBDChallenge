/**
 * The following program contains the source code for retrive current date and calculate the current week.
 */


const today = new Date();                       //Assign the today date to today
let firstDayOfYear,                             //Declaration a variable to assign the first day in year to firstDayOfYear
    oneDay,                                     //Declaration a variable to assign the sum of hours, minutes, seconds and miliseconds at one day to oneDay
    numberOfDays,                               //Declaration a variable to assign the number of days to numberOfDays
    timestamp;                                  //Declaration a variable to assign the current date to timestamp


function getWeek(todayDate) {
    //Assign the first day of year to firstDayOfYear
    //0 => means first month in year (Jan), 1 => means first day of month (1th)
    firstDayOfYear = new Date(todayDate.getFullYear(), 0, 1);

    //Assign the sum of 24 hours, 60 minutes , 60 seconds and 1000 miliseconds to oneDay
    oneDay = Math.floor(1000 * 60 * 60 * 24);

    //Assign the sum of days from first day in year to today day to numberOfDays
    numberOfDays = Math.floor((todayDate - firstDayOfYear) / oneDay);
    console.log(todayDate - firstDayOfYear);
    return Math.ceil((todayDate.getDay() + 1 + numberOfDays) / 7);
};

//Assign current Year, Month, Day and Week to timestamp
timestamp = {
    "Year": today.getFullYear(),
    "Month": today.getMonth(),
    "Day": today.getDay(),
    "Week": getWeek(today)
};

//Print current Year, Month, Day and Week to console
console.log('timestamp : ', timestamp);
