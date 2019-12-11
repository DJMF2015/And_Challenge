/**
* The following is the function where the solution shall be written
*/

function solution (input) {
  //first remove the non digits & whitespace
  input = input.replace(/(\D)/g,'')
  //handle string with no integers with error message
  try{
    if(input == '')
    throw err;
  } catch(err) {
    console.log('string does not contain integers!')
  }
  let characters = input.split(''),answers = [[characters.shift()]]
  //iterate through arrays and add current character into position using splice
  while (characters.length) {
    const currentChar = characters.shift()
    let temporaryArray = []
    answers.forEach(answer => {
      let count = 0
      while (count <= answer.length) {
        const temporary = [...answer]
        temporary.splice(count, 0, currentChar)
        //add to our temporary array
        temporaryArray.push(temporary)
        count++
      }
    })
    answers = temporaryArray
  }
  //map through our results and return new array with unique permutations in descending order
  return answers
  .map(charArr => charArr.join(''))
  .filter((el, idx, self) => (self.indexOf(el) === idx))
  .map(Number).sort((a,b)=> b -a) + '';
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected output 632,623,362,326,263,236
console.log(solution('A bB C D')) //expected output 'string does not contain integers!'
console.log(solution('A* `/`] 1B2 9D')) //expected output 921,912,291,219,192,129
