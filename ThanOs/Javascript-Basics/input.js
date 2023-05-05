food_bil = Number(prompt('enter the bil amount:'))
tip= Number(prompt("How many percent tip you wanna give:"))/100
final_tip = food_bil * tip
final_amount = food_bil + final_tip
// alert(final_amount)
console.log(" bil is:",food_bil)
console.log(" bil with tip is:",final_amount)