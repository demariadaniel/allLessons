console.log('Hello world')
console.log(process.argv)
// Node method for grabbing user command line arguments in an array

if (process.argv.length < 4){
  console.log('Please enter at least 2 arguments')
  // First two arguments for process.argv are 'node' and 'yourFile.js'
  // so we check if .argv.length is greater than 4
  process.exit()
  // Node method to stop the program
}

let sum = 0;
let others = [];
for(let i = 2; i < process.argv.length; i++){
  if (!isNaN(parseInt(process.argv[i]))){
    // isNaN returns true if the argument is NaN.... so if
    // the result we get is NOT NaN then the result IS a Number,
    // so we add it to the sum
    sum += parseInt(process.argv[i]);
  } else {
    others.push(process.argv[i])
  }
}

console.log('The sum is ', sum)
console.log('Other arguments: ', others)