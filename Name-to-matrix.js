/*
Given a name, turn that name into a perfect square matrix 
(nested array with the amount of arrays equivalent to the length of each array).

You will need to add periods (.) 
to the end of the name if necessary, 
to turn it into a matrix.

If the name has a length of 0,
return "name must be at least one letter"

Examples:
  "Bill" ==> [ ["B", "i"],
              ["l", "l"] ]

  "Frank" ==> [ ["F", "r", "a"],
                ["n", "k", "."],
                [".", ".", "."] ]
*/


// Solution

const matrixfy = str => {
  const l =  Math.ceil(Math.sqrt(str.length))
  const arr = []
  let k = 0
  for(let i=0; i<l; i++){
    arr.push([])
    for(let j=0; j<l; j++){
      arr[i].push(str[k++]||'.')
    }
  }
  return arr.length?arr:'name must be at least one letter'
}

// or