// Code your solutions in this file
function countDown(n) {
  let i = n 
  while (i >= 0) {
    console.log(i)
    i--
  }
}

// countDown(10)


// writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise') )
//         .to.deep.eq(['Thank you, Lisa, for the wonderful surprise gift!',

// function writeCards(array, word) {
//   var n = [];
//   for (let count = 0; count < array.length; count++) {
//     n.push(`Thank you, ${array[count]}, for the wonderful ${word} gift!`);
    
//   }
//   console.log(n);
// }

function writeCards(array, word) {
  var n = []
  array.forEach(element => {
    n.push(`Thank you, ${element}, for the wonderful ${word} gift!`);
  })
  return n
}
