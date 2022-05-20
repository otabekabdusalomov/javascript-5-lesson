// const name = "Otabek";
// const job = "Software Engineer";
// const birthYear = 2001;
// const currentYear = 2022;

// console.log("Mening ismim " + name + "\n" + "men " + job + "\n" + "meni yoshim " + (currentYear - birthYear) + "da");

// //ES6: STRING LITERAL:
// console.log(`Mening ismim ${name},
// men ${job},
// meni yoshim ${currentYear - birthYear}da`);

// BASIC OPERATORS:
// const numberOne = prompt("X raqamini kiriting") - 0;
// const numberTwo = Number(prompt("Y raqamini kiriting"));

// console.log(numberOne % numberTwo);

// let number = 5;

// number = number + 1

// ++number

// console.log(number++);

// console.log(number);

//SOLISHTIRISH OPERATORLAR:

// let a = 10;
// let b = 5;
// let c = "10";
// let d = a;

// console.log(a !== c);
// console.log(10 != "10");

// let number = 5;
// // number = number + 1;

// number %= 3

// console.log(number);

// let x = 10 + 5
// x += 5;
// // console.log(x);

// // MATH:
// // console.log(Math.floor(5.9));
// // console.log(Math.ceil(5.1));
// // console.log(Math.round(5.5));
// // console.log((Math.random() * 10).toFixed());

// //IF-ELSE:

// let index = 3;

// if(index === 2) {
//   console.log(`Bu ${index} raqami!`);

//   if(typeof index === "number"){
//     console.log("Bu number tip ekan");
//   }
// } else if(index === 3){
//   console.log(`Bu ${index} raqami!`);
// } else if(index < 4) {
//   console.log(`Bu ${index} raqami!`);
// } else {
//   console.log("Bizda bunday raqam yo'q!");
// }

// // if(true) {
// //   //statement
// // }

// // MASALA 1
// const userAge = Number(prompt("Yoshingiz?"))

// if(userAge >= 18){
//   console.log("Mojno!");
// } else {
//   const yearsLeft = 18 - userAge
//   console.log(`Mumkin emas, ${yearsLeft} yil dan keyin mojno!`);
// }

// MASALA 2:
// const userYear = Number(prompt("Yilingiz?"))
// let century = Math.floor(userYear / 100) + 1

// console.log(`Siz ${century} asrda tugilgansiz`);


//HOMEWORK-5 LESSON
const userName = prompt("What is your name");
const userMoney = prompt("The sum or currency of your funds?");
const userAll = prompt(`${userName} Enter your total funds?`) *1;

let userPilot = 500;
    userHotel = 250;
    userMuseum = 120;
    userEnd = userPilot + userHotel + userMuseum;

let pilot = 500 * 10896.61,
hotel = 250 * 10896.61,
museum = 120 * 12247.79;
all = pilot + hotel + museum;

if (userMoney == "$") {
    //mablag' qiymati
    console.log(`mablag'inggiz chetel valyutasida: ${userMoney}$,`);
} else if (userAll >=userEnd) {
    console.log(`oq to'l ${userName}`);
}  else {
    console.log(`${userName} bir muddat sabr qilib turasiz ekan`);
}

//agar mablag' yetarli bo'lsa

if (userMoney == "milliy valyuta") {
    console.log(`mablag'inggiz milliy valyutada: ${userAll} suncha so'm `);
} else if (userAll >= all) {
    console.log(`Marhamat oq yo'l ${userName}`);
} else {
    console.log(`${userName} bir muddat sabr qilib turasiz ekan`);
}




