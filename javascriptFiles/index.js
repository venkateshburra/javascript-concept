/*
console.log("i like pizza");
console.log("its really good");
window.alert("i really love pizza");
//this is a comment
/*
 this
 is
 a
 multiple
 comment

 //variables

let firstname="bro";//string
let age=19; //numbers
age=age+1;
let student=false; //booleans
console.log("hello", firstname);
console.log("you are",age,"Old");
console.log("enrolled",student);

document.getElementById("p1").innerHTML="hi" +firstname;
document.getElementById("p2").innerHTML="you are "+age + " years old";
document.getElementById("p3").innerHTML="enrolled "+student;
 
*/
//arithmatic
//let student=20;
//student=student+1;
///student=student-1;
//student=student*2;
//student=student%3;
//student=student/2;
//console.log(student);

//userinput
//let username=window.prompt("what is your name");
//console.log(username);
/*let username;
document.getElementById("mybutton").onclick=function(){
username=document.getElementById("mytext").value;
console.log(username);
}
*/
//alert('hello,world');
//console.log(1);
//console.log(2);
/*let age=20;
let year=2023;
console.log(age,year);
const point=100;
console.log(point);
var score=200;
console.log(score);

//strings
console.log('hello,world');
let email='burravenkatesh284@gmail.com';
console.log(email);
//string concatenation
let firstname='venky';
let lastname='burra';

// let fullname=firstname +' '+lastname;
// console.log(fullname);
//getting characters
console.log(fullname[2]);
//string length
console.log(fullname.length);
//string methods
console.log(fullname.toLocaleUpperCase());
console.log(fullname.toLowerCase());
let result=fullname.toUpperCase();
console.log(result);
console.log(result,fullname);
let index=email.indexOf('@');
console.log(index);
*/
//common string method
//let email="burravenkatesh284@gmail.com";
//let result=email.lastIndexOf('@');
//let result=email.slice(0,10);
//let result=email.replace('b','r');
//console.log(result);

//const title='best reads of 2019';
//const author='mario';
//const likes=30;
//concatenation way
//let result='the blog called ' +title+' by ' +author+ ' has ' +likes+ ' likes';
//console.log(result);

//template string way
//let result=`the blog called ${title} by ${author} has ${likes} likes`;
//console.log(result);
//creating html template

//let ninjas=['venky','mahesh','navya'];
//ninjas[1]='laxmi';
//console.log(ninjas[1]);
//let result=ninjas.join('-');
//console.log(result);
//let age=null;
//console.log(age,age+3,`the age is ${age}`);
/*
console.log(true,false);
let email='burravenkataesh284@gmail.com';
let result=email.includes('!');
let age=20;
console.log(result);
console.log(age==20);
*/
//type conversion
//for loop
//for(let i=0;i<10;i++)
//{
  //  console.log('in loop',i);
//}
//console.log('loop finished')
//const names=['venky','mahesh','navya','laxmi'];
//names[1]='raju';
//for(let i=0; i<names.length; i++)
//{
  // let result=`<div>${names[i]}</div>`;
   //console.log(result);
//}

//while loop
//const names=['venky','mahesh','navya','laxmi'];
//let i=0;
//while(i<names.length)
//{
//    console.log(names[i])
//    i++;
//}

//do while


//if statement
/**const age=20;
if(age>30)
{
  console.log('your age is grater than 10');
}
else
{
   console.log('hello');
}

const names='hello';
if(names.length>10)
{
  console.log('venky');
}
else if(names.length>5)
{
  console.log('mahesh');
}
else{
  console.log('navya');
}
//switch statement
const grade='d';
switch(grade)
{
    case'a':
      console.log('you got A');
      break;
    case'b':
      console.log('you got B');
      break;
    case'c':
      console.log('you got C');
      break;
    case'd':
      console.log('you got D');
      break;
    case'e':
      console.log('you got E');
      break;
      default:
        console.log('enter correct age');
}
let age=[10,12,13,14,15];
for(i=0;i<age.length;i++)
{
  if(age[i]==13)
  continue;
  console.log(age[i]);
}

if(true)
{
  let age=30;
  console.log(age);
}
console.log(age);
//function declaration
//function venky()
//{
//   console.log('hello world');
//}
//venky();

//function expression
const speak=function(name,day='evening'){

  //console.log('good',day,name);
  console.log(`good`,day,name);

};

speak('mahesh');

//arrow function
const colcarea=radius=>20*radius;
const area=colcarea(5)
console.log(area);
const name='shawn';

//functions


const area=()=>'hello';
let resultone=area();
console.log(resultone);
let resultTwo=nam

//methods

//foreach loop
let people=['venky','mahesh','navya','laxmi'];
people.forEach(person => {
  console.log(person);
});
//objects

let user={
  firstname:'venkatesh',
  middlename:'mahesh',
  lastname:'navya',
  age:19,
  email:'burravenkatesh284@gmail.com',
  login:function()
  {
    console.log('user logged in');
  },
  logout:function()
  {
    console.log('user logged out');
  },
};
console.log(user);
console.log(user.firstname);
console.log(user.middlename);
console.log(user.lastname);
console.log(user.age);
console.log(user.email);
user.age=35;
console.log(user.age);
console.log(user['firstname']);
console.log(typeof user);

//maths object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area=7.7;
console.log(math.round(area));

 */

// let user={
//   fname:'venky',
//   lname:'mahesh',
//   age:20
// }
// console.log(typeof(user));
// console.log(typeof(user.));
// console.log(typeof(user.age));
// console.log(user);
// console.log(user['fname']);
// console.log(user.fname);

// function myfun(cbf)
// {
//   console.log('venky');
//     cbf();
// }
// function myfun2()
// {
//   console.log('hello');
// }

// myfun(myfun2);


//querySelector

// const paragraph=document.querySelector('#page-title');
// console.log(paragraph);

//querySelectorAll

// const paragraph=document.querySelectorAll('p');
// paragraph.forEach(function(para)
//  {
//   console.log(para);
// });

//const para = document.querySelector('body > div:nth-child(2) > p:nth-child(1)');
//console.log(para);

//const para = document.querySelectorAll('p');
//const errors = document.querySelectorAll('.error');
//console.log(errors);

// const para=document.querySelectorAll('.error');
// para.forEach(paras => {
//   console.log(paras);
// });


//getting an element by ID

// const title=document.getElementById('page-title');
// console.log(title);

//get an element by class name

// const errors=document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

//get element by their tag name

// const paras=document.getElementsByTagName('h4');
// console.log(paras);
// console.log(paras[0]);

//get text inside the element

// const para=document.querySelectorAll('p');
// para.forEach(paras => {
//    console.log(paras.innerText);
// });


//chaning text inside the element

// const para=document.querySelectorAll('p');
// para.forEach(paras => {
//     paras.innerText+=' ninjas are good';
//     console.log(paras.innerText);
// });

// const content=document.querySelector('.content');
// //console.log(content.innerHTMLL);
//  content.innerHTML='<h2>this is new text</h2>'

//setting and getting
// const link=document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute('href','venkateshburra.com');
// link.innerText='venkatesh website';

//attribute getting setting

// const msg=document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','success');
// msg.setAttribute('style','color:yellow');

//const title=document.querySelector('h1')
// // title.setAttribute('style','margin:40px');
// console.log(title.style);
// console.log(title.style.color);
// // title.setAttribute('style','color:red');
// title.style.color='red';
// title.style.backgroundColor='powderblue';
// title.style.textAlign='center';
// title.innerText='venky';
// title.setAttribute('style','black');
// title.style.fontSize='70px';

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// const area=7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //rondom

// const random=Math.random();
// console.log(random);
// console.log(Math.round(random*100));
// let arr=[1,2,3,{a:1,b:[{q:[4,[5]]}]}];
// arr.forEach(result => {
//   let mult=1;
//   mult=result*2;
//   console.log(mult);
// });

//filter array
//const scores=[10,30,15,25,40,5];
// const scorearray=scores.filter(score=>{
//   return score>20;
// });
// console.log(scorearray);

// const users=[
//   {name:'venky',premium:true},
//   {name:'mahesh',premium:false},
//   {name:'navya',premium:false},
//   {name:'laxmi',premium:true}
// ];
// const premiumuser=users.filter(user=>user.premium);
// console.log(premiumuser);

//array map

// const prices=[20,10,30,25,15,40,80,5];
// const saleprice=prices.map(price=>price/2);
    
// console.log(saleprice);
// const products=[
//   {name:'venky',price:20},
//   {name:'sahul',price:40},
//   {name:'mahesh',price:30},
//   {name:'sohel',price:10},
//   {name:'navya',price:50},
// ];
// const saleproduct=products.map((product)=>{
//   if(product.price>30)
//   {
//     product.price=product.price/2;
//     return product;
//   } else{
//     return product;
//   }
// });
// console.log(saleproduct);
// const scores=[10,20,60,40,70,90,30];

// const result=scores.reduce((acc,curr)=>{
//   if(curr>50)
//   {
//     acc++;
//   }
//   return acc;
// },0);
// console.log(result);

// var a = 15;
// let b = 15
// function myfun()
// {
//  var a = 10;
//   b = 20;
  
 
//   console.log(a);
//   console.log(b);
// }
// myfun();
// console.log(a);
// console.log(b);

// const arr = [1,2,3,{a : 1,b : [{q : [4,[5]]}]}];
// console.log(typeof arr)
// const b = [];
// let a = arr.map(item=>{
//  if(typeof item === 'number'){
//   b.push(item);
//  }else if(typeof item === 'object'){
//   Object.keys(item).map((key) =>{
//     if(typeof item[key] === 'number'){
//       b.push(item[key]);
//     }
//   })
//  }
 
//  else  {
//   if(Array.isArray(item)){
//     item.map(arr=>{
//       b.push(arr);
//     });
//   }
//   else if (typeof item ==='object'){
//     Object.keys(item).map((key) =>{
//       if(typeof item[key] === 'number'){
//         b.push(item[key]);
//       }
//     })
//   }
//   else if(typeof item === 'number'){
//     b.push(item);
//   }
  
//  }
// });
// console.log(b)
// const arr = [1,2,3,{a : 1,b : [{q : [4,[5]]}]}];
// console.log(Array.isArray(arr));
// function convert (a){
//   if(Array.isArray(a)){
//     return a.map(convert);
//   }
// }
// let arr=[1,2,3,4,5];
// const result=arr.reduce((acc,cur)=>{
//     if(cur>2)
//     acc++;
//     return acc;
// },0);
// console.log(result)

// let arr=[1,2,3,4,5];
// const result=arr.find(area=>{
//    // return area>3;
//    if(area>3)
//     return area;
// });
// console.log(result);

// let arr=[11,2,32,4,23];
// let result=arr.sort((a,b)=>{
//     return a-b;
// });
// console.log(result)


// function myfun()
// {
//   var b=40;
//  if(true){
//   var b=20;
  
//    console.log(b);
//   } 

//   console.log(b);
// }
// let b=40;
// console.log(b);
// if(true)
// {
//   console.log(b);
//   let b=100;
//   console.log(b);
  
// }
// console.log(b);
// // myfun();
// const arr=[1,[2],[3],4,[5],6];
// const arr2=arr.flat();
// console.log(arr2)

//rest parameter

// function myfun(...a)
// {
//     console.log(a);
// }

// myfun(1,2,3,4,5,6,7,8,9);

// function sum(...numbers) {
//   let total = 0;
//   for (let i=0;i<numbers.length;i++) {
//     total += numbers[i];
//   }

//   console.log(total);
// }

// sum(1, 2, 3, 4); // Output: 10
// const double=(...nums)=>{
//   console.log(nums);
// };

// double(1,2,4,5,67,8,9);

// //spread
// const people=[1,2,3];
// const members=['sahul','sohel','rakesh'];

// const b =people.map(item=>{
//   return item+5 ;
// })
// console.log(b);
// console.log(people);
//spread
// const person= {name:'venky',age:19,job:'software'};

// const personclone={...person,location:'hyd'};
// console.log(personclone);

//sets
// const namesarray=['sahul','sohel','rakesh','sohel'];
// console.log(namesarray);

//  const nameset=new Set(['sahul','sohel','rakesh','sohel'])
// console.log(nameset);
// const uniq=[...nameset];
// console.log(uniq);
//sets
// const age=new Set();
// age.add(12);
// age.add(20).add(30).add(20).add(50);
// age.delete(20);
// console.log(age);
// console.log(age)
// console.log(age,age.size);
// age.clear();
// console.log(age);

///symbols

// const symbolone=Symbol('hello venkatesh');
// const symboltwo=Symbol('hello venkatesh');
// console.log(symbolone,symboltwo,typeof symbolone);
// const ninja={};

// ninja.age=19;
// ninja['belt']='black';
// ninja[symbolone]='venky';
// ninja[symboltwo]='mahesh';
// console.log(ninja);
// console.log(Boolean(10<20));
// const person={
//   firstname:'venky',
//   lastName:'burra',
//   age:19,
//   location:'hyd',
//   study:'degree',
//   veg:function(){
//     console.log('hello');
//     return this.lastName;
//   }
// };

// person.fruits=function(){
//   console.log('world');
//   return this.age;
// }
// console.log(JSON.stringify(person));

// console.log(person.veg());
// console.log(person.fruits());
// // person.firstname='mahesh'; 
// // delete person.lastName 
// // console.log(person.firstname);
// // console.log(person.lastName);


// const names=new Object();
// names.village='ramajapur';
// names.name='navya';
// console.log(names.village+' is '+ names.name)

// const obj={};
// obj.car='bmw';
// obj.ages=19;
// console.log(obj.car)

// // for(let x in person){
// // if(person.hasOwnproperty(x))
// // {
// //   console.log(x+':'+person[x]);
// // }
// // }
// // var obj = {
// //   name: 'John',
// //   age: 25,
// //   city: 'New York'
// // };

// // for (var key in obj) {
 
// //     console.log( obj[key]);
// //   }


// const person={
//      firstname:'venky',
//      lastName:'burra',
//      age:19,
//      location:'hyd',
//      study:'',
//     //  get lang(){
//     //     return this.location;
//     //  }
//      set lang(value){
//         this.study=value;
//      }
// };
// person.lang='degree';
// console.log(person.study);
// // console.log(person.location);

// const arr=[1,2,3,{a : 1,b : [{q : [4,[5]]}]}];
// const newarr=[];
// if(typeof ar=Number)
// {

// }

// const person={
//         firstname:'venky',
//         lastName:'burra',
//         age:19,
        
//         location:'hyd',
// };


//   const newperson=Object.values(person);
// const a=newperson. filter(result=>{
//     return typeof result==='string'});   
//      // console.log(a);
// const list={
//   firstname:'venky',
//   lastname:'burra',
//   village:'hyd',
//   age:19,
//   car:{
//     car1:'bmw',
//   },
//   study:'degree',
// };
// delete list.firstname
// list.newname='navya';
// console.log(list.car.car1)
// console.log(list.newname);
// for(let x in list)
// {
//   console.log(x,list[x]);
 
// }

//objects method

// const person={
//   firstname:'venky',
//   lastName:'burra',
//   age:19,
//   study:'degree',
//   funame:function(){
//     console.log('hello');
//     return this.firstname+" is your "+this.lastName+" is mine".toUpperCase();},
//   location:'hyd',
// };
// console.log(person.funame());

// //displaying the objects
// console.log(person.firstname);
// console.log(Object.values(person));

// for(var x in person)
// console.log(x,person[x]);

// conpersonsole.log(JSON.stringify());

//getters and setters

// const person={
//      firstname:'venky',
//      lastName:'burra',
//      age:19,
//      study:'degree',
//      location:'',
//     //  get last(){
//     //   return this.lastName;
//     //  },
//       set last(name){
//         return this.location=name;
//       },
// };
// person.last='ramanjapur';
// //console.log(person.last);
// console.log(person.location);

// function mycon(first,last,age,study,location)
// {
//   this.firstname=first;
//   this.lastname=last;
//   this.age=age;
//   this.study=study;
//   this.location=location;
//     console.log('hello world');
//     this.newname='tharun';
//     this.myfun=function(){
//        return this.location;
//     };
// }
// //prototype
// mycon.prototype.country='india';
// mycon.prototype.mymethod=function(){
//   return this.study;
// }
// const myobj=new mycon('venky','mahesh',19,'degree','hyd');
// const myobj2=new mycon('sahul','sohel',25,'btech','vizag');
// myobj.area='bhel';
// myobj.fun=function(){
//   return this.firstname+" and "+this.lastname;
// }
// console.log(myobj.mymethod());
// console.log(myobj2.country);
// console.log(myobj.myfun());
// console.log(myobj2.newname);
// console.log(myobj.fun());
// console.log(myobj.area);
// console.log(myobj.firstname);
// console.log(myobj.lastname);
// console.log(myobj.age);
// console.log(myobj.study);
// console.log(myobj.location);
// console.log(myobj2.firstname);


//sets
 //const letters=new  Set(['venky','mahesh','navya']);
// letters.add('laxmi');
// letters.delete('venky');
// //letters.clear();
 //console.log(letters.entries())
  //console.log(letters.values());
// console.log(letters);
// console.log(letters.has('mahesh'));
// console.log(typeof letters);
// console.log(letters);

// // console.log(letters.size);
// console.log(letters.entries());
// console.log(letters.values())
// console.log(letters.keys());
// letters.forEach(result => {
//   console.log(result);
// });

//maps

// const fruits=new Map([
//   ['apples','hello'],
//   ['bananas',200],
//   ['mangoes','hii'],
// ]);
// fruits.set('orange',400),
// fruits.set('apples',500),

// console.log(fruits.get('mangoes'));
// console.log(fruits.get('bananas'))
// console.log(fruits.get('orange'));
// console.log(fruits.get('apples'));
// // fruits.delete('bananas')
// // fruits.delete('mangoes');
// console.log(fruits.has('apples'))
// //fruits.clear();
// // console.log(fruits.clear())
// console.log(fruits.size);
// fruits.forEach((my,ny) => {
//   console.log(ny,my);
// });

// console.log(fruits.keys());
//  console.log(fruits.values());
// console.log(fruits.entries());



// function myfun()
// {
//   for(let i=0;i<5;i++)
//     {
//       console.log(i);
   
//     }
//   //  console.log(i);
  
// }
// myfun();

// const person={
//   name:'venky',
//   walk(){
//     console.log(this);
//   }
// };
// const walk= person.walk;
// walk();

// class person
// {
//   constructor(name)
//   {
//       this.name=name;
//       // this.age=age;
//       // this.location=location;
//   }
//   walk(){
//          console.log('hello');
//       }
// }

// class teacher extends person{

//     constructor(name,degree){
//       super(name);
//       this.degree=degree;
//     }

//     teach(){
//       console.log('teach');
//     }
// }
// const teachers=new teacher('venky','hyd');
// console.log(teachers.name);
// console.log(teachers.degree);
//  console.log(teachers.walk());
// // console.log(teachers.location);

// function myfun(mystring)
// {
//   let firststring=mystring.slice(0,3);
//   // console.log(firststring);
//   let secondstring=mystring.slice(-3);
//   //console.log(secondstring);
//   let mynewstring=firststring.concat(secondstring);
//    //console.log(mynewstring);
    
//   if(mystring.length>=3){
//     console.log(mynewstring);
//   }
//   else{
//     console.log(mystring);
//   }
// }
// myfun("vehi");

// function myfun(mystring)
// {
//     let mynewstring=mystring.split('');
//     const myarr=[];
//     for(let i= mynewstring.length; i>=0;i--)
//     {
//       myarr.push(mynewstring[i]);    }
//     console.log(myarr.join(''));
    
// }
//myfun('venky');

// function fun(name)
// {
//   let arrayname=name.split('').reverse().join('');
//   console.log(arrayname);
// }
// fun('navya');

// const str = "Hello, World!";
// const reversed = str
//   .split('')               
//   .map((_, index, array) => array[array.length - index - 1]) 
//   .join('');             

// console.log(reversed);     



// const book1 = { id: 1 };
// const book2 = { id: 2 };
// // const book3 = { id: 3 };

// const bookMap = new Map();
// bookMap.set(book1, { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' });
// bookMap.set(book2, { title: 'To Kill a Mockingbird', author: 'Harper Lee' });
// bookMap.set(book3, { title: '1984', author: 'George Orwell' });

// console.log(bookMap.get(book1));  // Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
// console.log(bookMap.get(book2));  // Output: { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
// console.log(bookMap.get(book3));  // Output: { title: '1984', author: 'George Orwell' }
// const firstName = Symbol('first name');
// const person = {
//   [firstName]: 'John',
//   age: 30,
//   city: 'New York'
// };

// console.log(person[firstName]);  // Output: 'John'
// console.log(Object.keys(person));  // Output: ['age', 'city']
// console.log(Object.getOwnPropertySymbols(person));  // Output: [Symbol(first name)]

// let arr=Array.from('abcdef');
// console.log(arr);

// const fruits=['apple','banana','mango'].keys();
// for(let x of fruits)
// {
//   console.log(x);
// }
//let x=9.5;
// console.log(Math.trunc(9.8));
// console.log(Math.sign(-12));
// console.log(Math.cbrt(27));
// console.log(Math.log2(8));
// console.log(Math.log10(1000));

// let x=Number.EPSILON;
// console.log(x);
// let y=Number.MIN_SAFE_INTEGER;
// console.log(y);
// let z=Number.MAX_SAFE_INTEGER;
// console.log(z);

// console.log(Number.isInteger(10));
// console.log(Number.isSafeInteger(12345123467890123456789));

//callbacks

// function myfun(x,cbf)
// {
//     console.log("hello");
//     console.log(x);
//     cbf();

// }


// function myfun2()
// {
//   console.log("hii");
// }

// myfun('venky',myfun2);

// setTimeout(myfun2,5000);

// console.log('f1');

// setTimeout(()=>{
//   console.log('f2')
// },5000);

// function myfun(x)
// {
//     let reversestring=x.toString().split('').reverse().join('');
//     if(x==reversestring)
//     {
//       return true;
//     }
//     else{
//       return false;
//     }
// }

// // let z=myfun(1221);
// console.log(myfun(121));

// // program to display numbers
// let i = 1;
// const n = 5;

// // do...while loop from 1 to 5
// do {
//     console.log(i);
//     i++;
// } while(i <= n);


//async javascript

//callbackFunc

// let myfun1=()=>{
//   console.log('hello venkatesh');

// };

// let myfun2=(cbf)=>{
//   console.log('hello mahesh');
//   cbf();
// };

// myfun2(myfun1);

      // let stocks={
      //   fruits:["strawberry","grapes","banana","apple"],
      //   liquid:["water","ice"],
      //   holder:["cone","cup","stick"],
      //   toppings:["peanuts","chacolate"]
      // };

      // let order=(first_name, call_production)=>{
        
      //     setTimeout(()=>{
      //     console.log(`${stocks.fruits[first_name]} was selected`);

      //     call_production();

      //   },2000)

          
      // };

      // let production=()=>{

      // setTimeout(()=>{
      //   console.log("production has started");

      //   setTimeout(()=>{
      //     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added to strawberry`);

      //     setTimeout(()=>{
      //         console.log("mission was started");

      //         setTimeout(()=>{
      //           console.log(`ice cream was placed on ${stocks.holder[0]}`);

      //           setTimeout(()=>{
      //               console.log(`${stocks.toppings[1]} was added to cone`);

      //           setTimeout(()=>{
      //             console.log(`serve ice cream`);
      //           },2000)
      //           },2000)
      //         },2000)
      //     },1000)
      //   },2000)
      // },0000)
      
      // };

      // order(0, production);



      // let stocks={
      //   fruits:["strawberry","grapes","banana","apple"],
      //   liquid:["water","ice"],
      //   holder:["cone","cup","stick"],
      //   toppings:["peanuts","chacolate"]
      // };
      // let is_shop_open=true;

      // let order=(time,work)=>{
      //   return new Promise((resolve,reject)=>{
      //     if(is_shop_open)
      //     {
      //       setTimeout(()=>{
      //         resolve( work() )
      //       },time);
      //     }
      //     else{
      //       reject(console.log("our shop is closed"));
      //     }
      //   });
      // };

      // order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))


      // .then(()=>{

      //   return order(0000, ()=>console.log('production has started'))
      // })

      // .then(()=>{

      //   return order(2000,()=>console.log('the fruits was chopped'));
      // })

      // .then(()=>{
      //   return order(1000,()=>{
      //     console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
      //   })
      // })

      // .then(()=>{
      //   return order(1000,()=>{
      //     console.log('mission was started');
      //   })
      // })

      // .then(()=>{
      //   return order(2000,()=>{
      //     console.log(`ice cream placed on ${stocks.holder[0]} `);
      //   })
      // })

      // .then(()=>{
      //   return order(3000,()=>{
      //     console.log(`${stocks.toppings[1]} was added to ice cream`);
      //   })
      // })

      // .then(()=>{
      //   return order(1000,()=>{
      //     console.log('serve the ice cream');
      //   })
      // })

      // .catch(()=>{
      //   console.log('costomer left');
      // })

      // .finally(()=>{
      //   console.log('day ended shop is closed');
      // })




      //call backfunctions

      // let myfun1=(value,cbf)=>{
      //   cbf(value+10);
      // }

      
      // let myfun2=(value,cbf)=>{
      //   cbf(value+10);
        
      // }

      
      // let myfun3=(value,cbf)=>{
      //   cbf(value+10);
      // }

      //     myfun1(10,(result1)=>{
      //       if(true)
      //       {
      //         myfun2(result1,(result2)=>{
      //             if(true)
      //             {
      //               myfun3(result2,(result3)=>{
      //                   if(true)
      //                   {
      //                     console.log(result3);
      //                   }
      //               })
      //             }
      //         })
      //       }
      //     })



      //promises

      // let myfun1=(value)=>{
      //   return new Promise((resolve,reject)=>{
      //     if(true)
      //     {
      //       resolve(value+10);
      //     }

      //     else{
      //       reject("something went wrong");
      //     }
      //   });
      // }


      // let myfun2=(value)=>{
      //   return new Promise((resolve,reject)=>{
      //     if(true)
      //     {
      //       resolve(value+10);
      //     }
      //     else{
      //       reject("something went wrong");
      //     }
      //   });
      // }

      
      // let myfun3=(value)=>{
      //   return new Promise((resolve,reject)=>{
      //     if(true)
      //     {
      //       resolve(value+10);
      //     }
      //     else{
      //       reject("something went wrong");
      //     }
      //   });
      // }

      // myfun1(10)

      // .then((res1)=>{
      //    myfun2(res1)
      //    .then((res2)=>{
      //     myfun3(res2)
      //     .then((res3)=>{
      //       console.log(res3);
      //     })
      //    })
      // })


        //  let myfun=(value)=>{
        //   return  new Promise((res,rej)=>{
        //     if(true)
        //     {
        //       let names={
        //         fname:"burra",
        //         lname:"venkatesh",
        //         fullname:"burravenkatesh"
        //       };
        //       res(value+10,names);
        //     }
        //     else{
        //       rej("something went wrong");
        //     }
        //   })
        // }
        //   async function result()
        //   {
        //     let result1=await myfun(10)
        //     console.log(result1);
        //     return result1
         // }
        







        
      // .then((result)=>{
      //   console.log(result);
      // })

      // .catch((result)=>{
      //   console.log("something went wrong")
      // })
           










      // let myfun2=(value)=>{
      //   return new Promise((res,rej)=>{
      //     if(false)
      //     {
      //       res(value+10);
      //     }
      //     else{
      //       rej("something went wrong");
      //     }
      //   })
      // }
      // myfun2(10)
      // .then((ress)=>{
      //   console.log(ress);
      // })

      // .catch((result)=>{
      //   console.log("something went wrong");
      // })


      // let myfun1=(value,cbf)=>{
      //   cbf(value+10);
      // }
      
      // let myfun2=(value,cbf)=>{
      //   cbf(value+10);
      // }

      
      // let myfun3=(value,cbf)=>{
      //   cbf(value+10);
      // }
      
      // let myfun4=(value,cbf)=>{
      //   cbf(value+10);
      // }
      
      // let myfun5=(value,cbf)=>{
      //   cbf(value+10);
      // }



      // myfun1(10,(result1)=>{
      //   console.log(result1)
      //   if(true){
      //     myfun2(result1,(result2)=>{
      //       console.log(result2);
      //       if(true){
      //         myfun3(result2,(result3)=>{
      //           console.log(result3);
      //           if(true){
      //             myfun4(result3,(result4)=>{
      //               console.log(result4);
      //               if(true){
      //                 myfun5(result4,(result5)=>{
      //                   console.log(result5);
      //                 })
      //               }
      //             })
      //           }
      //         })
      //       }
      //     })
      //   }
      // })


      
      // let myfun1=(value)=>{
      //   return new Promise((resolve,reject)=>{
      //     if(false){
      //       resolve(value+10);
      //     }
      //     else{
      //       reject("something went wrong");
      //     }
      //   });
      // };

      // async function opareat(){
      //   try{
      //     const result=await myfun1(10);
      //     console.log(result);
      //   }
      //  catch(error){
      //   console.log("error");
      //  }
      // }
      // opareat();
      
      
      // let myfun2=(value)=>{
      //   return new Promise((resolve,reject)=>{
      //     if(false){
      //       resolve(value+10);
      //     }
      //     else{
      //       reject("something went wrong");
      //     }
      //   });
      // }

      // async function process(){
      //   try{
      //   let res=await myfun2(50);
      //   console.log(res);
      //   }
      //   catch(error){
      //     console.log("something went wrong");
      //   }
      // }
      // process();
      
      
      // let myfun3=(value)=>{
      //   return new Promise((resolve,reject)=>{
      //     if(true){
      //       resolve(value+10);
      //     }
      //     else{
      //       reject("something went wrong");
      //     }
      //   });
      // }
      
      
      // let myfun4=(value)=>{
      //   return new Promise((resolve,reject)=>{
      //     if(true){
      //       resolve(value+10);
      //     }
      //     else{
      //       reject("something went wrong");
      //     }
      //   });
      // }
      
      
      // let myfun5=(value)=>{
      //   return new Promise((resolve,reject)=>{
      //     if(false){
      //       resolve(value+10);
      //     }
      //     else{
      //       reject("something went wrong");
      //     }
      //   });
      // }
      
      // myfun1(10)
      // .then((result1)=>{
      //  console.log(result1);
      // })
      
      // .catch((result)=>{
      //   console.log("error");
      // })

      // myfun2(20)
      // .then((result2)=>{
      //   console.log(result2);
      // })
      
      // .catch((result)=>{
      //   console.log("error");
      // })

      // myfun3(30)
      // .then((result3)=>{
      //   console.log(result3);
      // })
      
      // .catch((result)=>{
      //   console.log("error");
      // })

      // myfun4(40)
      // .then((result4)=>{
      //   console.log(result4);
      // })
      
      // .catch((result)=>{
      //   console.log("error");
      // })

      // myfun5(50)
      // .then((result5)=>{
      //   console.log(result5);
      // })
      
      // .catch((result)=>{
      //   console.log("error");
      // })





       
 





      // let myfun=(value)=>{
      //     return new Promise((resolve,reject)=>{
      //       if(false)
      //       {
      //         resolve(value+40);
      //       }

      //       else{
      //         reject("something went wrong");
      //       }
      //     });
      // }

      // myfun(10)
      // .then((result)=>{
      //   console.log(result);
      // })
      // .catch((result2)=>{
      //   console.log(result2);
      // })








      // const para=document.querySelectorAll('p');
      // para.forEach((paras)=>{
      //   console.log(paras);
      // })

      // const errors=document.querySelector('#unique');
      // console.log(errors);

      // const para=document.querySelectorAll('.error');
      // para.forEach((paras)=>{
      //   console.log(paras);
      // })

      //get an element by ID

      // const para=document.getElementById('unique');
      // console.log(para);

      //get an element by their class name

      // const para=document.getElementsByClassName('error');
      // console.log(para);
      // console.log(para[0]);
      // console.log(para[2]);

      //get an element by tagName

      // const para=document.getElementsByTagName('h1');
      // console.log(para);
      // console.log(para[0]);

      //adding and changing page content

      // const para=document.querySelectorAll('p');
      // console.log(para.innerText);
      // para.forEach(paras=>{
      //   console.log(paras.innerText)
      //   paras.innerText+=' inner text is modify';
      //   console.log(paras.innerText)
      // })
      
      // const para=document.querySelector('.error');
      // // para.forEach(paras=>{
       
      // //   paras.innerText='new text';
      // // })

      // const people=["venky","mahesh","navya"];
      // people.forEach(person=>{
      //   para.innerHTML+= `<p>${person}</p>`;
      // })

      // const para=document.querySelector('a');
      // console.log(para.getAttribute('href'));
      // para.setAttribute('href','www.com');
      // para.innerText='this is new link';
      // para.setAttribute('style','color:blue');
      // para.setAttribute('style','font-size:40px');


      // const paras=document.querySelector('p');
      // paras.setAttribute('class','myclass')
      // console.log(paras.getAttribute('class'))

      // const para=document.querySelector('h1');
      // // para.setAttribute('style','margin:30px');

      // para.style.margin='40px';
      // para.style.color='yellow';
      // para.style.textAlign='center';
      // para.style.textDecoration='underline';
      // para.style.backgroundColor='black';

      // const para=document.querySelector('p');
      // console.log(para.classList);
      // para.classList.add('venky');
      // para.classList.remove('venky');

      // const para=document.querySelectorAll('p');
      // para.forEach(paras=>{
      //   if(paras.textContent.includes('error'))
      //   {
      //     paras.classList.add('error');
      //   }
      //   else if(paras.textContent.includes('success'))
      //   {
      //     paras.classList.add('success');
      //   }

      // })

      // const tittle=document.querySelector('.tittle');
      // tittle.classList.toggle('text');

      // const title=document.querySelector('article');
      // console.log(title.children);
      // console.log(Array.from(title.children));
      // console.log(title.children);

      // Array.from(title.children).forEach(art=>{
      //   console.log(art);
      // })
      // const art=document.querySelector('h1')
      // console.log(art.parentElement.parentElement);
      // console.log(art.nextElementSibling)
      // console.log(art.previousElementSibling);

      // console.log(art.nextElementSibling.parentElement.children)

      //click events

      // const list=document.querySelector('button');
      // list.addEventListener('click',()=>{
      //   console.log('you clicked me!');
      // });
      //  const ul=document.querySelector('ul');
      // // h1.remove();
      // const lists=document.querySelectorAll('li');

      // const button=document.querySelector('button');
      // button.addEventListener('click',()=>{
      //   lists.forEach(item=>{
      //     item.remove();
      //   })
      // })
    

      // ul.innerHTML=ul.innerHTML+ '<li>something new</li>'
      // const li=document.createElement('li');
      // li.textContent='new li item';
      // ul.prepend(li);

    

      // const list=document.querySelectorAll('li');

      // list.forEach(item=>{
      //   item.addEventListener('click',()=>{
      //     item.remove();
      //   })
      // })
      //  list.addEventListener('click',()=>{
      //   console.log('li clicks me');
      // })

      
      //     // console.log('all list clicked me');
      //     // console.log(e.target);
      //     // console.log(items);

      //    // items.style.textDecoration='line-through';
      //   //  e.target.style.textDecoration='line-through'
      //   })
      // })


      //copy event

      // const coppy=document.querySelector('.copy');
      // coppy.addEventListener('copy',(e)=>{
      //   console.log('you copied some  lines');
      // })

      //mouse move click

      // const mouse=document.querySelector('.box');
      // mouse.addEventListener('mousemove',(e)=>{
      //   console.log(e);
      // })
      // document.addEventListener('wheel',(e)=>{
      //   console.log(e);
      // })
      const popclass=document.querySelector('.popup-wrapper');
      const pop=document.querySelector('button');
      pop.addEventListener('click',()=>{
          popclass.style.display='block';
      });

      const close=document.querySelector('.popup-close');
      close.addEventListener('click',()=>{
        popclass.style.display='none';
      });

      const clas=document.querySelector('.popup-wrapper');
      clas.addEventListener('click',()=>{
        clas.style.display='none';
      })
  //  fetch('https://jsonplaceholder.typicode.com/posts',{
  //     method:'POST',
  //     body:JSON.stringify({
  //       userId:1,
  //       id:100,
  //       title:'wwe',
  //       body:'api network',
  //     }),
  //     headers:{'Content-type': 'application/json; charset=utf-8'}
  //  })
  //  .then((res)=>{
  //    return res.json();
  //  })
  //  .then((ress)=>{
  //   console.log(ress);
  //  })


    // .then((res)=>{
    //   return res.json();
    // })
    // .then((ress)=>{
    //   console.log(ress)
    // })

    // const req=new XMLHttpRequest();
    // req.open('GET','https://jsonplaceholder.typicode.com/posts11');
    // req.send();
    // req.onload=()=>{
    //   console.log(req);
    //   if(req.status===200)
    //   {
    //     console.log(JSON.parse(req.response));
    //   }
    //   else{
    //     console.log('error ${req.status}');
    //   }
    // }
    


