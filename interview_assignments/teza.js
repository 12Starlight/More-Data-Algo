/*
Teza Programming Assignment - Offsite

Given a list of information about fills for different stocks, calculate the total
profit or loss accrued for each symbol.

The attached text file contains the following columns:
  * time: Date and time of fill
  * symbol: Symbol of product
  * price: Price of fill
  * buy_sell: Side of fill
  * qty: Qty of fill


Write a script in the language of your choice that calculates total PNL per
symbol. You may ignore any trading costs (just calculate Gross PNL). The output
should be a csv with just two columns: symbol, total_pnl, and one row per 
symbol.

Important: You may assume/confirm that positions are flat after totaling all buys
and sells (both on a per-symbol basis, subsequently overall). In other words,
you only need to worry about realized PNL - there should be no open positions
with unrealized pnl left to mark to any particular price.


For example, given the csv:

time, symbol, buy_sell, price, qty
7/1/2019 9:30:13 AM,A,B,1.0,100
7/1/2019 9:30:15 AM,A,S,2.0,100
7/1/2019 9:30:19 AM,B,S,3.0,1000
7/1/2019 9:30:20 AM,B,B,4.0,1000
7/1/2019 9:30:21 AM,B,B,5.0,100
7/1/2019 9:30:23 AM,B,S,5.0,100


Your output would be:
symbol, total_pnl
A, 100
B, -1000


Please return a copy of the source code and file with the output produced. Feel
free to follow up with us, if there are any questions.


Additional things to ask for more difficulty:

The table should clearly display the following statistics for each symbol 
traded:
  * Product symbol
  * Total valume traded
  * Total gross P&L
  * Statistics summarizing 'flat to flat' trades (see below for definition)
    * Number of trades
    * Percent Winners (count of winning trades/number of total trades)
    * Median Trade P&L
    * Average Trade P&L
    * Max Trade P&L
    * Min Trade P&L
    * Median Trade length (in seconds)
    * Average Trade length (in seconds)
    * Max Trade length (in seconds)
    * Min Trade length (in seconds)


*/

/*
11/28/2021
Teza Assignment


Concept:

Create server that reads the csv file. Then create a function that transforms the 
csv file into a JavaScript data object. This will allow me to easily access the 
data using property keys. Then create a function that stores the data required 
in another data object. This required information will be the symbol of the 
company traded and it's P&L profit calculated at the end of the trading session. 
This function then returns a string representing the data requested.


Pseudo:

Install npm i csvtojson

Create function that transforms csv file into a JavaScript data object.
  First split the csv into an array containing all the rows as a string.
  Then sepearate the headers and push it into a JavaScript object.

Create variable and assign output file.

Create main function that takes in csv input JSON data object.
  Create object data structure to store data.

  Iterate through JSON object.
    Create condition that checks, if data object does NOT have the property key 
    of the iterated JSON object.
      If true, create condition to check, if the property key for buy_sell is
      'B' representing buy.
        If true, assign the data object to have the property key of that 
        iterated JSON object property 'symbol', then assign it to have the 
        property value of the parseInt JSON object price multiplied by the
        parseInt JSON object qty multiplied by 1 for positive values.

        Else, assign the data object to have the property key of that iterated
        JSON object property 'symbol', then assign it to have the property value
        of the parseInt JSON object price multiplied by the parseInt JSON object
        qty multiplied by -1 for negative values.
      
    Else, the data object DOES have the property key of the iterated JSON 
    object.
      Create a condition to check, if the property key for buy_sell is 'B'
      representing buy.
        If true, add the new value to the property value of the parseInt JSON 
        object price multiplied by the parseInt JSON object qty multiplied by 1
        for positive values to the previous value of the data property key's
        value.

        Else, add the new value to the property value of the parseInt JSON 
        object price multiplied by the parseInt JSON object qty multiplied by -1
        for negative values to the previous value of the data property key's 
        value.

Return the output of the formmated function.


Create a helper function keysSorted.
  Pull the keys from the object and sort them.

Create a helper function formmated.
  Using the helper function keysSorted, use the keys to pull the keys from the
  data object and formatt the output into a string.

*/

const csvtojson = require('csvtojson');
const fs = require('fs');
const csvfilepath = 'teza_fills.csv';
// const csvfilepath = 'teza_test.csv';

csvtojson()
  .fromFile(csvfilepath)
  .then((json) => {
    // console.log(json)

    fs.writeFileSync('output.json', JSON.stringify(json), 'utf-8', (err) => {
      if (err) console.log(err);
    })
  });


const file = require('./output.json');

const totalProfit = (csv) => {
  const data = {};

  for (const stock of csv) {
    if (!data.hasOwnProperty([stock.symbol])) {
      if (stock.buy_sell === "B") {
        data[stock.symbol] = parseInt(stock.price) * parseInt(stock.qty) * (1);
        // console.log(stock.price, stock.qty);
      } else {
        data[stock.symbol] = parseInt(stock.price) * parseInt(stock.qty) * (-1);
      }
    } else {
      if (stock.buy_sell === "B") {
        data[stock.symbol] += parseInt(stock.price) * parseInt(stock.qty) * (1);
      } else {
        data[stock.symbol] += parseInt(stock.price) * parseInt(stock.qty) * (-1);
      }
    }
  }

  return formatted(data);
}

const keysSorted = (obj) => {
  const keys = Object.keys(obj);
  const sorted = keys.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  });
  return sorted;
}

const formatted = (obj) => {
  const keys = keysSorted(obj);
  
  for (const key of keys) {
    console.log(key + ", " + obj[key]);
  }

  return "";
}

// Test
console.log(totalProfit(file));

// In Terminal
// node teza.js > solution.csv 