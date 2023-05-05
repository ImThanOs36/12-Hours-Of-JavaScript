


// let numbers = [2,5,4]
// for (number of numbers ){

//     console.log(number)

// }
// console.log(numbers)



//functions 

// function consol() {
//     console.log("im logging on console")
// }
// function sum(){
//     return 0
// }
// consol()
// console.log(sum())

//Objects

// const indentifier = (name, shirt, assets, liability) => {
//     const person = {

//         name: name,
//         shirt: shirt,
//         assets: assets,
//         liability: liability,
//         networth: function () {
//             return this.assets - this.liability
//         }

//     }
//     const out = `hello my name is ${person.name} and my shirt color is ${person.shirt} and my networth is ${person.networth()}`;
//     console.log(out)
// }
// indentifier("ThanOs", "purple", 20000, 500)



//For Loop

// const numbers = [1, 2, 3, 4, 5, 6]
// let result = []
// for (const number of numbers) {
//     result.push(number * 2);
// }
// console.log(result)



// const double = (numbers) =>{


//     let result = []
//     for (const number of numbers) {
//         result.push(number * 2);
//     }
//     return result
// }

// console.log(double([2,3,4,5]))

// const square = (numbers) =>{


//     let result = []
//     for (const number of numbers) {
//         result.push(number * number);
//     }
//     return result
// }

// console.log(square([2,3,4,5]))


//letter counter (loop)
// let result = 0
// const letter_counter = () => {
//     const phase = 'hey, im the line'
//     for(const letter in phase){
//         console.log(Number(letter)+1);
//         result = Number(letter)+1
//     }
//     return {result} 
// }
// console.log(letter_counter())

// const phrase = "Its like your my favourite incomplete wish 🥰"
// const howManyLetters = (phrase) => {
//     let result = 0;
//     for (const letter of phrase) {
//         console.log((letter) + 1)
//         result = Number(letter) + 1
//     }

//     return { result }
// }

// console.log(howManyLetters(phrase));



// const sum = (nums) => {

//     let result = 0;

//     for (numbers of nums) {
//         console.log(numbers);
//         result = result + numbers;
//     }
//     return { result }

// }
// console.log(sum(nums))




//finding max
// const nums = [1, 2, 3, 4, 20]

// const max = (nums) => {
//     let max =0;
//     for(number of nums){
//         if(number > max){
//             max = Number(number);
//         }
//     }
//     return {max}


// }
// console.log(max(nums))



//letter frequency


// const phrase = "Its like your my favourite incomplete wish wish wish 🥰"

// const letter_frequency = (phrase) => {
//     frequency ={}

//     for (letter of phrase) {
//       if(letter in frequency){
//         frequency[letter]= frequency[letter]+1;
//       }
//       else{
//         frequency[letter] = 1;
//       }
//     }
//     console.log(letter);
//     return frequency 
// }

// console.log(letter_frequency(phrase))
// const phrase = "fuck you bitch fuck you bitch"

// const wordFrequency = (phrase) => {
//     let frequency = {};

//     words = phrase.split(' ')
//     for (const word of words) {
//         if (word in frequency) {
//             frequency[word] += 1;
//         }
//         else {
//             frequency[word] = 1;
//         }
//     }
//     return frequency
// }
// console.log(wordFrequency(phrase))

//Math Method

// const double = (numbers) =>{

//     return numbers.map(number => number *2)


// }
// console.log(double([2,4,5,6]))
numbers=[4,5,6,4,5,55,99]
// const greater = (numbers, greaterThan)=>{
// let result = []

// for(const number of numbers){
//     if(number>greaterThan){
//         result.push(number);
//     }
// }

// return result


// }
// console.log(greater([1,2,3,4,5],2))
console.log(numbers.filter(nums => nums > 21 && nums < 90));