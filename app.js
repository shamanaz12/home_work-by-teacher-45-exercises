// //===========QNO 2===================
// //let personName :string = '';
// var personName = prompt("what is your name?") || "";
// if (personName !== null && personName !== "") {
//   alert(
//     "Hello ".concat(personName, ", would you like to learn some python today?")
//   );
// } else {
//   alert("you have to fil your name !");
// }
//============= qno 3
// let personName: string = "";
// personName = prompt(`What is your name?`) || "";
// let lowercase: string = personName.toLowerCase();
// let uppercase: string = personName.toUpperCase();
// let titlecase: string = personName
//   .split(``)
//   .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//   .join(``);

// if (personName !== null && personName !== ``) {
//   alert(`Hello ${personName}, here are your name in:
//     Lowercase: ${lowercase}
//     Uppercase: ${uppercase}
//     Titlecase: ${titlecase}`);
// }
//===========qno 04
// "use strict";
// console.log(`Quaid e Azam once said, "doing work" youth are future us,`);

//==============qno 05==================
// "use strict";
// console.log(`Quaid e Azam once said, "doing work" youth are future us,`);

//======================qno ===============06
// "use strict";
// console.log(`Quaid e Azam once said, "doing work" youth are future us,`);

//=========================qno 07, 08====================
// /"use strict";
// console.log(6 + 2);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);

//==================qno 09=====================

// "use strict";
// const favouriteNumber = 7;
// const message = `Here is your favourite number ` + favouriteNumber;
// console.log(message);

//==================qno =10==================
// use strict";
// //programme 2
// // This programme has been held between into two categories.
// //current date 19 feb 2020
// console.log(2 + 2);

// ====================qno 11=======================

// let names : string [] = [`Afshan`,`Amber`,`Arsalan`,`Rizwan`];
// for (let i =0; i<names.length; i++){
//     console.log(names[])
// }

//=====================qno 12===================

// let names: string[] = [`Afshan`, `Amber`, `Arsalan`, `Rizwan`];
// const message: string = `Welcome to Typescript Class: `;
// for (let i = 0; i < names.length; i++) {
//   console.log(message + names[i]);
// }
//=====================qno 13=============

// let transportation: string[] = [`motorcycle`, `car`, `train`, `cycle`];
// for (let i = 0; i < transportation.length; i++) {
//   console.log("I would like to own a " + transportation[i]);
// }

//============qno 14=====================

// let Guest_list = [`Imran Khan`, `Nawaz Shareef`, `Asif Ali Zardari`];
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     `Dear Mr.` +
//       Guest_list[i] +
//       `,\n\nIt is our pleasure to invite you in our party.\n\n Thank You!`
//   );
// }
//====================qno 15=======================

// "use strict";
// let Guest_list = [`Imran Khan`, `Nawaz Shareef`, `Asif Ali Zardari`];
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(
//     `Dear Mr.` +
//       Guest_list[i] +
//       `,\n\nIt is our pleasure to invite you in our party.\n\n Thank You!\n\n`
//   );
// }
// let absent_Guest = `Imran Khan`;
// let new_Guest = `Kamran Tessori`;
// Guest_list[0] = new_Guest;
// for (let i = 0; i < Guest_list.length; i++) {
//   console.log(`Dear Mr.` + Guest_list[i]) +
//     `,\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n`;
// }

//========================qno 16===========================

// let absent_Guest = `Imran Khan`;
// let new_Guest = `Kamran Tessori`;
// let Guest_List = [absent_Guest];
// Guest_List[0] = new_Guest;
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     `Dear Mr. ` +
//       Guest_List[i] +
//       `\n\nIt is our pleasure to invite you to our party\n\nThank you!\n\n`
//   );
// }
// console.log(
//   `Good News! We have found a bigger table, so we are inviting 3 more guests.`
// );
// Guest_List.unshift(`Sir Zia Khan`);
// Guest_List.splice(2, 0, `Maryam Nawaz`);
// Guest_List.push(`Bilawal Bhutto Zardari`);
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     `Dear Mr. ` +
//       Guest_List[i] +
//       `\n\nIt is our pleasure to invite you to our party\n\nThank you!\n\n`
//   );
// }

//===============qno 17================================
// let Guest_List = [`Imran Khan`, `Nawaz Shareef`, `Asif Ali Zardari`];
// let absent_Guest = `Imran Khan`;
// let new_Guest = `Kamran Tessori`;
// Guest_List[0] = new_Guest;
// console.log(`Mr.${absent_Guest} is not coming to the party`);
// console.log(
//   `Good News! We found a big table, so we are inviting 3 more guests`
// );
// Guest_List.unshift(`Sir Zia Khan`);
// Guest_List.splice(2, 0, `Maryam Nawaz`);
// Guest_List.push(`Bilawal Bhutto Zardari`);
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     `Dear Mr. ` +
//       Guest_List[i] +
//       `\n\nIt is our pleasure to invite you to our party\n\nThank you!\n\n`
//   );
// }
// console.log(
//   `\nSorry, we cannot arrange a big table; only two people will be invited`
// );
// while (Guest_List.length > 2) {
//   let remove_Guest = Guest_List.pop();
//   console.log(`Sorry Mr.${remove_Guest}, you are not invited for dinner.`);
// }
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     `Dear Mr. ` +
//       Guest_List[i] +
//       `,\n\nYou are still invited.\n\nThank you!\n\n`
//   );
// }
// Guest_List.splice(0, 2);
// console.log(Guest_List);

//=====================qno 18============================

// let placesToVisit = [`Tokyo`, `Pakistan`, `America`, `China`, `Japan`];
// console.log(`Original Order:`, placesToVisit);
// console.log(`Alphabetical Order:`, [...placesToVisit].sort());
// console.log(`Original Order after sorting:`, placesToVisit);
// console.log(`Alphabetical Order:`, [...placesToVisit].sort().reverse());
// console.log(`Original Order after reverse sorting:`, placesToVisit);
// placesToVisit.reverse();
// console.log("Reversed Order:", placesToVisit);
// placesToVisit.reverse();
// console.log("Back to Original Order:", placesToVisit);
// console.log("Sorted in alphabetical Order:", placesToVisit);
// placesToVisit();
// console.log("Sorted in alphabetical Order:");

//===========================qno 19=========================

// let invitation = ["ali", "bilal"];
// let count_invitations = invitation.length;
// console.log(`1${count_invitations} people will come to the dinner 1`);

//========================qno 20=================================

// let country: string[] = ["Pakistan", "India", "NewYork", "Japan", "China"];
// console.log("List of country");
// console.log(country);

//=====================qno 21===============================
// let person = {
//     name: "shama",
//     fname: "female",
//     age: 27,
//   };
//   console.log(person);

//====const days = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];
// console.log(days[6]);
// =====================qno 22===============================
// const days = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];
// console.log(days[6]);

//=======================qno 23==================================

// let car = "subaru";
// console.log("is car == 'subaru'? predict true");
// console.log(car == "subaru");
// console.log("is car != 'honda city'? predict true");
// console.log(car != "honda city");
// console.log("is car != 'SUBARU'? predict false");
// console.log(car != "SUBARU");
// console.log("is car.length == 6? predict true");
// console.log(car.length == 6);
// console.log("is car.length != 10? predict true");
// console.log(car.length !== 10);
// console.log("is 10 > 45? predict false");
// console.log(10 > 45);
// console.log("is 3 <= 2? predict false");
// console.log(3 <= 2);
// console.log("is 72 > 63? predict true");
// console.log(72 > 63);
// console.log("is 72 >= 83? predict false");
// console.log(72 >= 83);
// console.log("is car == 'subaru' && car.length == 6? predict true");
// console.log(car == "subaru" && car.length == 6);

//=============================qno 24===================================
// let name_1 = "Arsalan";
// let name_2 = "Arsalan Ansari";
// let name_3 = "Arsalan Ansari";
// // Check if name_1 is equal to name_3
// if (name_1 === name_3) {
//   console.log("Names are equal");
// } else {
//   console.log("Names are not equal");
// }
// // Check if name_1 is not equal to name_2
// if (name_1 !== name_2) {
//   console.log("Names are not equal");
// }
// // Check if name_1 is not equal to name_3
// if (name_1 !== name_3) {
//   console.log("Names are not equal");
//   let age_1 = 18;
//   let age_2 = 22;
//   // Check if age_1 is 18
//   if (age_1 === 18) {
//     console.log("Eligible for vote");
//   }
//   // Check if age_1 is 22
//   if (age_1 === 22) {
//     console.log("Eligible for vote in older category");
//   }
//   // Check if age_1 is younger than or equal to age_2
//   if (age_1 <= age_2) {
//     console.log("Younger");
//   }
//   // Check if age_2 is older than or equal to age_1
//   if (age_2 >= age_1) {
//     console.log("Older");
//   }
// }

//=============================qno 25=====================================
// let alien_color = "green";

// if (alien_color === "green") {
//   console.log("You earn 5 points");
// }
// let alien_color: string = "red";

// if (alien_color === "green") {
//   console.log("no output");
// }

//============================qno 26================================
// let alien_color = "green";
// if (alien_color == "green") {
//   console.log("player just earned 5 points for shooting the alien");
// } else {
//   console.log("player just earned 10 points");
// }

// let alien_color = "red";

// if (alien_color == "green") {
//   console.log("Player just earned 5 points for shooting the alien");
// } else {
//   console.log("Player just earned 10 points");
// }

//============================qno 27=====================================
// let alien_color = "red";
// if (alien_color == "green") {
//   console.log("Player just earned 5 points");
// } else if (alien_color == "yellow") {
//   console.log("Player just earned 10 points");
// } else {
//   console.log("Player just earned 15 points");
// }

//=========================qno 28==========================================

// let age: number = 100;
// if (age < 2) {
//   console.log("you are a baby");
// } else if (age < 4) {
//   console.log("you are a toddler");
// } else if (age < 13) {
//   console.log("you are a kid");
// } else if (age < 20) {
//   console.log("you are a teenager");
// } else if (age < 65) {
//   console.log("you are a adult");
// } else {
//   console.log("you are older");
// }

//================================qno 29=======================================
// let favourite_fruits = ["kivi", "orange", "apple", "berry", "peach"];
// if (favourite_fruits.includes("kivi")) {
//   console.log("You like kivi");
// }
// if (favourite_fruits.includes("apple")) {
//   console.log("You like apple");
// }
// if (favourite_fruits.includes("orange")) {
//   console.log("You like orange");
// }
// if (favourite_fruits.includes("berry")) {
//   console.log("You really like berries");
// }
//====================================qno 30==============================================
// let users = ["eric", "haseeb", "ali", "fatima", "admin"];
// for (let user of users) {
//   if (user === "admin") {
//     console.log("Hello admin, would you like to see a status report?");
//   } else {
//     console.log(`Hello ${user}, thank you for logging in again`);
//   }
// }
//==========================================qno 31================================
//let users: string[] = ["eric", "haseeb", "ali", "fatima", "admin"];

// if (users.length === 0) {
//   console.log("we need to find some users");
// } else {
//   for (let user of users) {
//     if (user === "admin") {
//       console.log("Hello admin, would you like to see a status report?");
//     } else {
//       console.log(`Hello ${user}, thank you for logging in again`);
//     }
//   }
// }
// let users: string[] = ["eric", "haseeb", "ali", "fatima", "admin"];

// if (users.length === 0) {
//   console.log("We need to find some users!");
// } else {
//   console.log("Existing users:");

//   for (let user of users) {
//     console.log(user);
//   }
// }
//================================qno 32====================================
// let current_users = ["admin", "eric", "ali", "hamza", "fatima"];
// let new_users = ["admin", "fatima", "aliza", "haseeb", "noor"];
// let current_users_lower = current_users.map(function (user) {
//   return user.toLowerCase();
// });
// for (let _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
//   let new_user = new_users_1[_i];
//   if (current_users_lower.includes(new_user.toLowerCase())) {
//     console.log("Sorry ".concat(new_user, ", that name is taken."));
//   } else {
//     console.log("Yes ".concat(new_user, ", is still in the available list."));
//   }
// }

//====================================qno 33=====================================
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
//   var number = numbers_1[_i];
//   if (number === 1) {
//     console.log("".concat(number, "st"));
//   } else if (number === 3) {
//     console.log("".concat(number, "rd"));
//   } else {
//     console.log("".concat(number, "th"));
//   }
// }
//================================qno 34=======================================
// var favourite_pizza = ["chicken", "pepperoni"];
// for (
//   var _i = 0, favourite_pizza_1 = favourite_pizza;
//   _i < favourite_pizza_1.length;
//   _i++
// ) {
//   var pizza = favourite_pizza_1[_i];
//   console.log(pizza);
// }
// console.log("\n");
// for (
//   var _a = 0, favourite_pizza_2 = favourite_pizza;
//   _a < favourite_pizza_2.length;
//   _a++
// ) {
//   var pizza = favourite_pizza_2[_a];
//   console.log("I really like  pizza!");
// }
// console.log("\nI really love pizza");

//==================================qno,35=======================================
// let animals: string[] = ["cat", "lion", "dog"];

// for (let animal of animals) {
//   console.log(animal);
// }

// console.log("\n");

// for (let animal of animals) {
//   console.log(`A ${animal} has a tail`);
// }
//=====================================qno 36=====================================================
// function makeShirt(size: string, text: string): void {
//   console.log(`You ordered a ${size} shirt that says ${text}`);
// }

// makeShirt("large", "I love TypeScript");
// makeShirt("medium", "I need a big shirt");
//===================================qno 37======================================
// function makeShirt(size, text) {
//   if (size === void 0) {
//     size = "large";
//   }
//   if (text === void 0) {
//     text = "i need a large shirt";
//   }
//   console.log(
//     "You have ordered a ".concat(size, ", shirt that says ").concat(text)
//   );
// }
// makeShirt("large", "I need a large shirt");
// makeShirt("medium", "I need a big shirt");
// makeShirt("small", "I need a big shirt to wear"); // Corrected the syntax in this line
//=====================================qno,38============================================
// function describe_city(city, country) {
//     if (country === void 0) {
//       country = "pakistan";
//     }
//     console.log("".concat(city, " is in ").concat(country));
//   }
//   describe_city("karachi");
//   describe_city("france", "europe");
//   describe_city("lahore", "punjab");
//==========================================qno,39=============================================
// function cityCountry(city, country) {
//   return `${city}, ${country}`;
// }
// let c1 = cityCountry("Lahore", "Pakistan");
// let c2 = cityCountry("Tokyo", "Pakistan");
// let c3 = cityCountry("Paris", "France");
// console.log(c1);
// console.log(c2);
// console.log(c3);
//=====================================qno 40==============================================
// function makeAlbum(artist, title) {
//   const dictionaries = {
//     artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//     title: title.charAt(0).toUpperCase() + title.slice(1),
//   };
//   return dictionaries;
// }
// let album = makeAlbum("ali", "light");
// console.log(album);
// album = makeAlbum("bilal", "red wave");
// console.log(album);
// album = makeAlbum("hamza", "seabreeze");
// console.log(album);
//==========================qno 41===============================================
// function show_magicians(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//       console.log(magicians[i].charAt(0).toUpperCase() + magicians[i].slice(1));
//     }
//   }
//   const magicians = ["ali", "hamza", "bilal"];
//   show_magicians(magicians);

//=================================qno 42================================================
// function make_great(magicians) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = "Great " + magicians[i];
//   }
// }
// const magicians2 = ["usman", "haseeb", "wajahat"];
// make_great(magicians2);
// // Now, let's display the modified magicians array
// for (let i = 0; i < magicians2.length; i++) {
//   console.log(magicians2[i]);
// }
//========================================qno 43=============================================
// function make_great2(magicians: string[]): string[] {
//   const greatMagicians: string[] = [];
//   for (let i = 0; i < magicians.length; i++) {
//     greatMagicians.push(magicians[i] + " the Great");
//   }
//   return greatMagicians;
// }

// const magicians3: string[] = ["usman", "haseeb", "wajahat"];
// const greatMagicians2: string[] = make_great2(magicians3);

// function show_magicians(magicians: string[]): void {
//   for (let i = 0; i < magicians.length; i++) {
//     console.log(magicians[i]);
//   }
// }

// // Show original magicians
// console.log("Original Magicians:");
// show_magicians(magicians3);

// // Show great magicians
// console.log("\nGreat Magicians:");
// show_magicians(greatMagicians2);
//=====================================qno 44=============================================
// function sandwich(...items) {
//   console.log("sandwich order:");
//   for (let i = 0; i < items.length; i++) {
//     console.log(`_ ${items[i]}`);
//   }
// }
// console.log("enjoy your sandwich with shama");
// sandwich(`capsicum`, `tomato`, `chicken`);
// sandwich(`beef`, `cheese`);
// sandwich(`garlic`, `chicken`, `mayo sauce`);
//===================================qno 45========================================================
// Define Car type
// type Car = {
//     manufacture: string;
//     model: string;
//     [key: string]: any;
//   };

//   // Create function to generate a Car
//   function createCar(
//     manufacture: string,
//     model: string,
//     options: Record<string, any>
//   ): Car {
//     return {
//       manufacture,
//       model,
//       ...options,
//     };
//   }

//   // Example usage
//   const myCar = createCar("Toyota", "Camry", { color: "blue", year: 2022 });

//   // Displaying the result
//   console.log("My Car:", myCar);
