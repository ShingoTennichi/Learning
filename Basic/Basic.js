// todo[remember]: JavaScript needs to add ";" at the end of line.;


// *print;
// console.log("This is print in python.");


// *variable-- "let" and "var" are same, but "let" is the newer command.;
// *const--is from "constant." It is not changed later.;
// let first_name;
// first_name = "Shingo";
// console.log(first_name);
//
// var last_name = "Tennichi";
// console.log(last_name);
//
// const full_name = "Shingo Tennichi";
// console.log(full_name);
// * This is going to be an Error.;
// const full_name;
// full_name = "Shingo Tennichi";
// console.log(full_name);
// * This is going to be an Error.;
// const full_name = "Shingo Tennichi";
// full_name = "Tennichi Shingo";
// console.log(full_name);


// * function-- "function" == "def", "function_name" and "arguments" are the same as Python function.;
// function function_name (arguments1=2, arguments2=5) {
//     return arguments1 * arguments2;
// }
// * This is how to run.;
// let answer = function_name();
// console.log(answer);


// * class-- "constructor" is "__init__."; "this" is "self.";
// class class_name{
//     constructor(arguments1, arguments2) {
//         this.arguments1 = arguments1;
//         this.arguments2 = arguments2;
//     }
//     method1() {
//         return this.name;
//     }
//
//     method2() {
//         return this.age;
//      }
// }
// * This is a sample of class;
// class a_man{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     show_name() {
//         return console.log(this.name);
//     }
//
//     show_age() {
//         return console.log(this.age);
//     }
// }
// * This is how to run.;
// * attention to "new" before assign class name.;
// let A_male1 = new a_man("Shingo", 26);
// let A_male2 = new a_man("Tennichi", 26);
// A_male1.show_name();
// A_male2.show_age();


// * method;
// * lists of method --> typeof() == type(); String() == str(); Number() == int();
// let num = "24";
// console.log(typeof(Number(num)));

// todo[remember]: JavaScript doesn't have "tuple";
// * list;
// * the method for list --> .slice(); .revers();
// * let ls = {}; an empty list;
// let ex_list = ["element1", "element2", "element3", "element4", "element5", "element6", "element7", "element8", "element9", "element10"];
// console.log(ex_list);
// console.log(ex_list[1]);
// console.log(ex_list.slice(2));
// console.log(ex_list.slice(2, 4));
// console.log(ex_list.slice(1, 5));
// console.log(ex_list);
// console.log(ex_list.slice().reverse());
// console.log(ex_list);
// console.log(ex_list.reverse());
// console.log(ex_list);
// * dictionary;
// * let ex_dict = {}; an empty dictionary;
// let ex_dict = {"first_name": "Shingo", "last_name": "Tennichi", "age": 26};
// console.log(ex_dict["first_name"]);
// console.log(ex_dict["last_name"]);
// console.log(ex_dict["age"]);


// * loop;
// * .length --> the same as len(), but doesn't need "()."; It starts with 1.;
// * for loop; for (executed one time; condition; every time;) {;}
// let ex_list = ["element1", "element2", "element3", "element4", "element5"];
// for (let i = 0; i < ex_list.length; i+=1) {
//     console.log(ex_list[i]);
// }
// * for in;
// let ex_map = {"first_name": "Shingo", "last_name": "Tennichi", "age":26}
// for (let keys in ex_map) {
//     console.log(keys);
//     console.log(ex_map[keys]);
// }
// * for of --> similar to for loop in python;
// let ex_list = ["element1", "element2", "element3", "element4", "element5"];
// for (let val of ex_list) {
//     console.log(val);
// }


// * while loop;
// let i = 0
// while (i < 10) {
//     console.log(i);
//     i += 1;
// }
// * This is sample of while loop;
// let i = 0
// while (i < 10) {
//     if(i%2 == 0) {
//         i += 1;
//         continue;
//     } else {
//     console.log(i);
//     i += 1;
//     }
// }

// * switch;
// * case --> only value;
// switch (num1) {
//     case 1:
//         console.log("num1 is 1.");
//         break;
//     case 2:
//         console.log("num1 is 2.");
//         break;
//     case 3:
//         console.log("num1 is 3.");
//         break;
//     case 4:
//         console.log("num1 is 4.");
//         break;
//     case 5:
//         console.log("num1 is 5.");
//         break;
//     default:
//         console.log("num1 is not fitted.");
//         break;
// }


// * if, else if, else;
// let num1 = 4;
// let num2 = 10;
// console.log(num1,num2);
// if (num1 > num2) {
//     console.log(true);
// } else if (num1 == 5) {
//     console.log("It's five.");
// } else {
//     console.log(false);
// }