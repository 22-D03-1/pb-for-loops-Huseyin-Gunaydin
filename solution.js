//Frage1

// var ergebnis = 0;
// for(let i=0; i<20; i++){
//     ergebnis = ergebnis + i;  // ergebnis +=i
//  }
//  console.log(ergebnis);

// //Frage2 ???????????

// for(let i=1; i<6; i++){
//     console.log(`Es befindet sich ${i} Flasche Bier an der Wand.`)
//     }

// //Frage 3**************  

// for(let i=0; i<20; i++){
//     if (i%2 ===0){
//         console.log(i, "ist gerade");
//     }
//     else{
//         console.log(i, "ist ungerade")
// }


// for(let i=1; i<=10; i++){
//     console.log(`${i} * 9 = ${i}`)
// }
for(let i=1; i<=10; i++){
  for (let j =1; j<=10; j++){
    console.log(`${j} * ${i} = ${j*i}`);
  }
}

//Frage 5

// for(i=0; i<100; i++){

//     if(i%3 === 0 && i%5 === 0){
//         console.log(i, "FizzBuzz");
//     }
//     else if(i%3 ===0){
//         console.log(i, "fizz");
//     }
//     else if(i%5 ===0){
//         console.log(i, "buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

//Frage 6

// var ergebnis=0;

// for(i=0; i<1000; i++){
//     if(i%3 ===0 && i%5 ===0){
//         ergebnis += i;
//     }
// }
//  console.log(ergebnis);



// 7

// 7.1
let result71 = "";
for (let nummer = 100; nummer <= 1000; nummer += 100) {
    result71 += nummer + " ";
}
console.log(result71);

// 7.2
let result72 = "";
for (let even = 0; even <= 10; even += 2) {
    result72 += even + " ";
}
console.log(result72);

// 7.3
// Wie die zwei davor nur += 3

// 7.4
let result74 = "";
for (let i = 9; i > -1; i--) {
    result74 += i + " ";
}
console.log(result74);

// 7.5
let result75 = "";
for (let i = 1; i < 5; i++) {
    result75 += i.toString().repeat(3);
}
console.log(result75);

// 7.6
let result76 = "";
for (let i = 0; i < 15; i++) {
    result76 += (i % 5) + " ";
}
console.log(result76);

// Andere Lösung mit verschachtelten for Schleifen
let result76a = "";
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        result76a += j + " ";
    }
}
console.log(result76a);

// 10 % 2 = 0
// 10 % 3 = 1
// 10 % 4 = 2
// 10 % 6 = 4

// 8

let wordToCheck = "apfel";
let reversedWord = "";
for (let i = wordToCheck.length - 1; i >= 0; i--) {
    reversedWord += wordToCheck[i];
}

if (wordToCheck === reversedWord) {
    console.log(wordToCheck, "ist ein Palindrom");
} else {
    console.log(wordToCheck, "ist kein Palindrom");
}

console.log(wordToCheck, reversedWord);

// 8 Alternativ lösung

const str = "tarrattarrat";
const reversedStr = str.split("").reverse().join("");
if (str === reversedStr) {
    console.log("Ist Palindrom");
} else {
    console.log("Ist kein Palindrom");

}