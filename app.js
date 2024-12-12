const age = parseInt(prompt('How old are you?'))
const krAge = parseInt(age) + 2

// console.log(isNaN(age))

if (isNaN(age)) {
  console.log('Please write your age by number')
} else if (age < 18) {
  console.log('You are under age')
} else if (age >= 18 && age <= 50) {
  console.log('you can drink')
} else {
  console.log('stop to drink')
}
