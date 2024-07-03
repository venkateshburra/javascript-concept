
/*1 ) write a javascript program to check two numbers 
and return true if one of the number is hundred or
if the sum of the two number is 100  */

// const myfun = ( x, y ) =>{

//     if( x == 100 || y == 100 || x + y == 100){
//         return true;
//     }

//     else{
//         return false;
//     }
// }

// console.log(myfun(60, 40));

// OR

// const myfun2 = ( x, y) => {
//     return x == 100 || y == 100 || x+y == 100;
// }

// console.log(myfun2(300, 200));


 
// 2)  write a javascript program to get the extension of a file name

// let GetFileExtension = 'venky.cs.vs';
// let GetFileExtension2 = GetFileExtension.split('.').pop()
// console.log(GetFileExtension2)

// OR

// const myfun = (GetFileExtension) => {
//     let GetFileExtension2 = GetFileExtension.split('.').pop();
//     return GetFileExtension2;
// }
// console.log(myfun('venky.cs'));

// OR

// const GetFileExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(GetFileExtension('venky.js.cs'));


//3)
//write a javascript program to replace every character in a given 
//string with the character following it in alphabet

// const moveCharForward = (str) => {
//     str.split('')
//     .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join('');

//     console.log(moveCharForward('abcd'))
// }



//4)
// write a javascript program to get the current data.
// expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// const formatDate = (date = new Date()) => {
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
// }

// console.log(formatDate());


//5)
// write a javaScript program to create a new string adding 'New' 
//in front of a given string. if the given string begins with 'New' 
//already then return the original string

// const addNew = (str) => {
//     if(str.startsWith('New')) {
//         return str;
//     } else {
//         return 'New' + str;
//     }
// }

// console.log(addNew(' venky'));

// const addNew = (str) => str.indexOf('New') === 0 ? str : `New! ${str}`;

// console.log(addNew('offers'));


//6)
// write a javascript program to create a new string from a given string taking the first 3 characters
//  and the last 3 characters of a string and adding them together. 
//  the string length must be 3 or more, if not, the original string is returned

// const makeNewString = (str) => 
// str.length < 3 ? str : str.slice(0,3) + str.slice(-3);

// console.log(makeNewString('abc'));


//7)
// write a javascript program to extract the first half of a string of even length.

// const firstHalf = (str) => str.slice(0, str.length/2);

// console.log(firstHalf('venkat'));


// 8)
//write a javascript program to concatenate two strings except their first CharacterData.

// const concatenate = (str1, str2) =>
// str1.slice(1) + str2.slice(1);

// console.log(concatenate('venkatesh', 'mahesh'));


// 9)
//given two values, write a javascript program to find out which one is nearest to 100

// const nearest100 = (a, b) => (100 - a) < (100 - b) ? a : b;

// console.log(nearest100(40, 50));


// 10
// write a javascript program to check a givem string contains 2 to 4 occurances of a specified character

// const countchars = (str, char) =>
// str.split('').filter(ch => ch === char).length;

// const contain2To4 = (str, char) =>
// countchars(str, char) >= 2 && countchars(str, char) <=4;

// console.log(contain2To4('ooh!', 'o'));


// 11 
//write a javascript program to find the number of even digits in a an array of integers

// const countEvenNumbers = (arr) => 
// arr.filter(num => num % 2 === 0).length;

// console.log(countEvenNumbers([1,2,3,4,5,6]));

// const numbers = [1, 2, 3, 4, 5, 6];
// let evenCount = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenCount++;
//     }
// }

// console.log(`The number of even digits in the array is: ${evenCount}`);
// const evenValues = (arr) => 
// arr.filter(evenNum => evenNum % 2 ===0)

// console.log(evenValues([1,2,3,4,5,6]));

// const evenNum = (arr) => {
//    return arr.filter(num => {
//         return num % 2 ===0;
//     })
// }

// console.log(evenNum([1,2,3,4,5,6]));