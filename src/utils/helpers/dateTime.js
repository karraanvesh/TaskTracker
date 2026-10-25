export function getTimestamp() {
    /**
     * Date is a class in JS , When we create an object to it returns the 
     * current date and time ( in UTC )
     * 
     * now object gives the below output
     * 
     * Ex : 2026-10-20T17:12:30.243Z
     * 
     * getFullYear() , getMonth() , getDate() etc , are the methods which we can use 
     * on the date object to get the year , month , date , hours , minutes , seconds etc.
     */
    const now = new Date();

    // console.log("now contains : " , now);

    const year = now.getFullYear(); // gives the year
    const month = String(now.getMonth() + 1); // gives the month
    const date = String(now.getDate()); // gives the date

    const hours = String(now.getHours()); // gives the hour in local time 
    const minutes = String(now.getMinutes()); // gives the minutes in local time
    const seconds = String(now.getSeconds()); // gives the seconds
    const ms = String(now.getMilliseconds()); // gives the milliseconds 

    const result = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}.${ms}`; // formatting as per our requirement

    return result;
}