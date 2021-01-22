// 1. KILOMETER To METER

function kilometerToMeter(input) {
    let meter;
    /* used if condition to check type of input
    if condition failed it will return input number only.
    */

    if (typeof(input) == "number") {
        meter = input * 1000;
    } else {
        return "Input Number Only"
    }
    return Math.abs(meter);
    // use Math.abs for absolute value incase of negative input
}
// ******End Of First Problem***********

// 2. BUDGET CALCULATOR

function budgetCalculator(watchQty, phoneQty, laptopQty) {
    let watchPrice = 50;
    let phonePrice = 100;
    let laptopPrice = 500;
    // totalWatchPrice = watchPrice * watchQty;
    let totalWatchPrice;
    // totalPhonePrice = phonePrice * phoneQty;
    let totalPhonePrice;
    // totalLaptopPrice = laptopPrice * laptopQty;
    let totalLaptopPrice;

    /* By using if condition check input quantity type of number && check input > zero. 
      If number is zero,negative or string 
      console log show quantity invalid,zero or undefined
      invalid input price will be 0
     */
    if (typeof(watchQty) == "number" && watchQty > 0) {
        totalWatchPrice = watchPrice * watchQty;
    } else {
        totalWatchPrice = 0;
        console.log("Watch quantity invalid,zero or undefined ")
    }
    if (typeof(phoneQty) == "number" && phoneQty > 0) {
        totalPhonePrice = phonePrice * phoneQty;
    } else {
        totalPhonePrice = 0;
        console.log("Phone quantity invalid,zero or undefined ")
    }
    if (typeof(laptopQty) == "number" && laptopQty > 0) {
        totalLaptopPrice = laptopPrice * laptopQty;
    } else {
        totalLaptopPrice = 0;
        console.log("Laptop quantity invalid,zero or undefined ")
    }

    // final calculation of budget
    let totalBudgetNeed = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return totalBudgetNeed;
}
/*NOTE******
 use console log inside of instead of return because of input
one invalid function is stop working
*/
// ******End Of Second Problem***********

// 3.Hotel Cost

function hotelCost(numberOfDay) {
    let totalCost;
    let totalDay;
    /*
    First if condition used to justify valid input
    if input is not valid console show invalid message
    */
    if (typeof(numberOfDay) == "number" && numberOfDay > 0) {
        totalDay = numberOfDay;
    } else {

        return "Number of day invalid,zero or undefined ";
    }
    if (totalDay <= 10) {
        let costOfFirstPeriod = totalDay * 100;
        totalCost = costOfFirstPeriod;
    } else if (totalDay <= 20) {
        let costOfFirstPeriod = 10 * 100;
        let daySecondPeriod = totalDay - 10;
        let costOfSecondPeriod = daySecondPeriod * 80;
        totalCost = costOfSecondPeriod + costOfFirstPeriod;
    } else {
        let costOfFirstPeriod = 10 * 100;
        let costSecondPeriod = 10 * 80;
        let dayOfThirdPeriod = totalDay - 20;
        let costOfThirdPeriod = dayOfThirdPeriod * 50;
        totalCost = costOfThirdPeriod + costSecondPeriod + costOfFirstPeriod;

    }
    return totalCost;
}

/*******************End of Hotel Cost **************************/

// 4.Mega Friend

function megaFriend(arr) {

    let largestName = "";
    // if input not array it willbe converted into array
    if (typeof(arr) == "string") {
        arr = arr.split(", ");
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > largestName.length) {
            largestName = arr[i]
        }
    }
    return largestName;
}

/************End of Mega Friend****************/