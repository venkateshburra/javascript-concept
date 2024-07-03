console.log('1');
console.log('2');

// this doesnot blocks the code
setTimeout(() => {
  console.log('3 callback function fired');
},2000)
 
console.log('4');
console.log('5');
