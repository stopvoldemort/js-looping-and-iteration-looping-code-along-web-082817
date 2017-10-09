// Code your solutions in this file
function printBadges(array) {
  for (let i=0; i<array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails() {
  const flips = []
  while (Math.random() >= 0.5) {
    flips.push("tails")
  }
  return `You got ${flips.length} tails in a row!`
}
