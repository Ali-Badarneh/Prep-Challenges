"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the reversed array.
//  Without using built-in methods.
//  Input: ['C#', 'JS', 'Ruby','Python']
//  Output: ['Python','Ruby','JS','C#']

function reverseArray(array){
  var output = [];
  for (var i = array.length - 1; i> -1; i--){
      output.push(array[i]);
  }

  return output;
}

console.log(reverseArray);


// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

//  Challenge 2:
// Required:

//  Write a function that takes an array of numbers and increases its values by 10
//
//  Input: [20, 54, 89, 41]
//  Output: [30, 64, 99, 51]

function arrInc(arr){
  var result = [];
  for (var i = 0 ; i < arr.length ; i ++)
  {
    result.push(arr[i] + 10);   
  }
  return result;

};

// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, arrInc };
