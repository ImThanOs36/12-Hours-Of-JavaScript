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

const square = (numbers) =>{
    
    
    let result = []
    for (const number of numbers) {
        result.push(number * number);
    }
    return result
}

console.log(square([2,3,4,5]))
