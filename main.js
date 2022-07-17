//  // 1) Make an array of numbers that are doubles of the first array
// /*
// let array = [5, 10, 7];

// let doublNum = arr => arr.map(item => item * 2);

// console.log(doublNum(array)); */


// // 2) Take an array of numbers and make them strings
// /*
// let array1 = [23, 77, 100];

// let toString = param => param.map(item => item + '');

// console.log(toString(array1)); */


// // 3) Capitalize each of an array of names
// /*
// let names = ['John', 'JACOB', 'jinGLeHeimer', 'schmitd'];

//   function capitalizeNames(arr) {
//     return arr.map(item => {
//        return item[0].toUpperCase() + item.slice(1).toLowerCase();
//      })
//   }

//   console.log(capitalizeNames(names)); */


//   // 4) Make an array of strings of the names
// /*
//   let persons = [
//     {
//         name: 'Angelina Jolie',
//         age: 80
//     },

//     {
//         name: 'Eric Jones',
//         age: 2
//     },

//     {
//         name: 'Paris Hilton',
//         age: 5
//     },

//     {
//         name: 'Kayne West',
//         age: 16
//     },

//     {
//         name: 'Bob Ziroll',
//         age: 100
//     }
//   ];

//   function namesOnly(arr) {
//     let names = [];
//     arr.map(objec => {
//        names.push(objec.name); 
//     })
//     return names;
//   }

//   console.log(namesOnly(persons)); */


//   // 5) Make an array of strings of the names saying whether or not theey can go to the Matrix
// /*
//  let persons = [
//     {
//         name: 'Angelina Jolie',
//         age: 80
//     },

//     {
//         name: 'Eric Jones',
//         age: 2
//     },

//     {
//         name: 'Paris Hilton',
//         age: 5
//     },

//     {
//         name: 'Kayne West',
//         age: 16
//     },

//     {
//         name: 'Bob Ziroll',
//         age: 100
//     }
//   ];

//   function makeStrings(arr) {
//     let res = [];
//       let name = arr.filter(objec => {
//         let str = objec.age >= 18 ? ' can go to The Matrix' : ' is under age!!';
//         res.push(objec.name + str);
//       })
//     return res;
//   }

//   console.log(makeStrings(persons)); */

 
// // 6) If the given input is an array of numbers, return the sum of all the positives ones. 
//   // If the array is empty or there aren't any positive numbers, return 0.
// /*
//   const input = [1, -4, 12, 0, -3, 29, -150];

// function numPos(arr) {
//     if(arr.length){
//         let num = arr.filter(n => n >= 0);
//          return num.reduce((n1, n2) => {
//             return n1 + n2;
//       }, 0);
//     }
//     return 0;
// }
//   console.log(numPos(input)); */


// // 7) Find the difference in age between the oldest and youngest family members,
//   // and return their respective ages and the age difference.
// /*
//   const input7 = [
//     {
//         name: 'John',
//         age: 13
//     },
//     {
//         name: 'Mark',
//         age: 56,
//     },
//     {
//         name: 'Rachel',
//         age: 45,
//     },
//     {
//         name: 'Nate',
//         age: 67,
//     },
//     {
//         name: 'Jeniffer',
//         age: 65,
//     }
// ];

// function difer(arr) {
//   let small = arr[0].age;
//   let big = arr[0].age;
//   arr.map(obj => {
//    if(obj.age < small) { 
//      small = obj.age;
//    }
//   else if(obj.age > big) 
//       big = obj.age;
//   })
//   return [small, big, big - small] 
// }

// console.log(difer(input7));  */


// // 8) //Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// // the elements of which are arrays of strings. The result is an object whose
// // property names are the values from the arrays and their value is the number of their occurrences.
// /*
// const input8 = [
//   ['a', 'b', 'c'],
//   ['c', 'd', 'f'],
//   ['d', 'f', 'g'],
// ];

// function func(array) {
//   let obj = {};
  
// array.map(nersiArr => nersiArr.map(element => {
//    if(obj[element]) {
//       obj[element] += 1;
//    }else {
//       obj[element] = 1;
//    }
// }))
//   return obj;
// }

// console.log(func(input8));*/


// // 9) Given an array nums of size n, return the majority element.
// // The majority element is the element that appears more than ⌊n / 2⌋ times.
// // You may assume that the majority element always exists in the array.
// /*
// let nums = [2,2,1,1,1,2,2];

// function majority(arr) {
//   let obj = {};

//   arr.map(el => obj[el] ? obj[el] += 1 : obj[el] = 1)
//   for (key in obj) {
//       if (obj[key] > arr.length / 2) {
//           return key;
//       }  
//   }
// }

// console.log(majority(nums)); */

// // 10) gtnel trvats array i miji 3rd amenashate krknvox tive;

// /*let reapeated = [4, 5, 4, 2, 5, 5, 7, 2, 4, 4];

// function fined(arr) {
//   let obj = {}
//   arr.map(el => obj[el] ? obj[el] += 1 : obj[el] = 1)
//   let arrCount = Object.entries(obj)
//   console.log(arrCount)
//   arrCount.sort((a, b) => b[1] - a[1])
//   return arrCount[2][0];
// }
// console.log(fined(reapeated));*/


// // 11) //Given a string s and an array of strings words, determine whether s is a prefix string of words.
// // A string s is a prefix string of words if s can be made by concatenating the first
// // k strings in words for some positive k no larger than words.length.
// // Return true if s is a prefix string of words, or false otherwise.
// /*
// let array = ["i", "love", "leetcode", "apples"];
// let text = 'iloveleetcode';

// function preefix(str, arr) {
//   return arr.join('').includes(str)
// }
// console.log(preefix(text, array)); */// 1)



// /*      Homerwork 3
// // 1)as you can see toyota2 does not have a logModel function
// // borrow that function from toyota1 and call i, so it console.logs "Toyota Rav4"
// /*

// const toyota1 = {
//   model: 'Toyota',
//   type: 'Camry',
//   logModel(){
//       console.log(this.model, this.type);
//   }
// }

// const toyota2 = {
//   model: 'Toyota',
//   type: 'Rav4',
// }

 //toyota1.logModel.bind(toyota2)();
// toyota2.__proto__.logModel = toyota1.logModel;
// toyota2.logModel();



// // 2)

// // The following code does not work turn it into working code


// const flights = {

//     flights: [],

//     priorityFlights: [],

//     scheduleFlight(flight){
//         this.flights.push(flight);
//     },

//     removeFlight(flight){
//         this.flights = this.flights.filter(flightFilter.bind(flights));
//         function flightFilter(f){
//             if (flight === f){
//                 return this.priorityFlights.includes(flight);
//             }
//             return true
//         }
//     },

//     makePriorityFlight(flight){
//         this.priorityFlights.push(flight);
//     }

// }


// flights.scheduleFlight('1');

// flights.makePriorityFlight('1');

// flights.removeFlight('1')

// console.log(flights.flights);




// // 3)

// CarConstructor creates cars but what if someone decides to call it without new keyword,
// write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
// new keyword it logs "please call me with new keyword" if not it creates a car

// function CarConstructor(model, year){
//     this.mode = model;
//     this.year = year;

//   if(!new.target) {
//     console.log("please call me with new keyword");
//   }
//   }

// //new CarConstructor();
// CarConstructor();


// 4)

//make a new array out of objArr so that every object has the same logName function that is declared below
//use logName function do not create your own

//  const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }];
// objArr.map(obj => {
//     obj.key = logName; 
// })

// function logName(){
//     console.log(this.name);
// }
// console.log(objArr[1].key());

// // 5

// // use foreach method and use arrayOfObjectNames function to log the fallowing objects names from the array;


//  const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

//  arrayOfObjectNames.forEach(obj => logArrayObjectNames.bind(obj)())

//  function logArrayObjectNames(){
//      console.log(this.name);
//  }


// 6) for above mentioned arrayOfObjectNames Return an array of functions that when called would log each objects name
// use Array.map and logArrayObjectNames function


// const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

// function logArrayObjectNames(){
//         console.log(this.name);
//     }

// const mappedFunc = arrayOfObjectNames.map( (item) => {
//     return logArrayObjectNames.bind(item)
// } );

// mappedFunc.forEach(i => i()); // this would print 1, 2, 3




// //7 please take a look at the following


// this is just an example of object that you will still need to create by calling CreateCar constructor

// const exampleOfAlreadyCreatedObject = {
//        id: 1,
//     model: 'Toyota',
//     year: '1996',
//     color: 'red',
//     driveTrain: '4x4',
// }


// function CreateCar(id, model, year, color, driveTrain){
//      //please implement CreateCar function so it creates cars with properties
//         this.id = id
//       this.model= model
//       this.year = year
//        this.color = color
//       this.driveTrain = driveTrain
// }

// // please take a look at the the inventory object and implement the missing methods

// const inventory = {

//     cars: [],

//     addCar(car) {
//         this.cars.push(car)
//     },

//     removeCar(id) {
//       this.cars = this.cars.filter(car=>car.id !== id)
//     },

//     listCars(){
//        this.cars.forEach(car => console.log(car))
//     },

//     listCarsByConditionCallback(conditionCallback){
//        this.cars.map(car => {
//         if(conditionCallback(car))
//           console.log(car)
//        })
//     }

// }


// inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4'));
// inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
// inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
// inventory.removeCar(2);
// inventory.listCars();
//  inventory.listCarsByConditionCallback( (car) => car.model === 'BMW' && car.year === '2020' );

// 8)

// Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be
// added as properties when the Song constructor function is used. The Song function should also have a method called
// play When called, the play function should console.log the name of that specific song preceded by the
// word 'Playing:'.
// NOTE that play function should be the same for all instances of the Song constructor

// function Song(title, artist) {
//      this.title = title;
//      this.artist = artist;
//      this.play=() => {
//      console.log(`${title} playing ${artist}`)
//      } 
// }

// let obj = new Song('Ann', 'music');
// console.log(obj.play());

// // 9)

// // 1. Create a folder called Workshop_4 make a git repository inside.
// //mkdir Workshop_4//sarqecinq papka
// //git init// papken sarqecinq git papka 
// // 2. without navigating to a different branch create a branch named x_branch
// // git branch x_branch// sarqecinq branch bayc mnacinq masteri vra




// // 10)
// // 1. Make a new folder called 'Workshop_4'
// //   mkdir workshop_4
// // 2. make that folder into git repo
// //   git init
// // 2. create a branch called rename_me
// //git branch rename_me || git chekcout -b rename_me
// // 3. create a branch called delete_me
// //git checkout -b delete_me
// // 4. rename the branch rename_me to renamed_branch
// // git branch -m rename_me renamed_branch
// // 5. delete the branch delete_me
// // git branch -d delete_me

// // 11)


// const checkKnow = {
//     surname: 'surname',
//     name: 'checkKnow',
//     foo: {
//         name: 'foo',
//         logName(){
//             console.log(this.surname);
//         }
//     },
//     boo(){
//         const obj = {
//             name: 'boo method',
//             check: () => {
//                 console.log(this.name);
//             }
//         }
//         obj.check();
//     }
// }


// checkKnow.foo.logName();  //checkKnow -i  foo object@ chuni surname property, => undefined

// checkKnow.boo(); // checkKnow_i boo functioni check @ this chuni , vercnuma motaka function_i 
//this_@ vor@ vor@ boo-na , vori this-nel chekKnow object -na

// // with a few words explain why this is happening Armenian or English.


// */



