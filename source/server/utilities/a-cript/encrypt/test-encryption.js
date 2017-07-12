/**
 * Created by PC on 09-Jul-17.
 */
function cypher3 (text) {
  let textLength = text.length
  let cypheredText = []
  let isOdd = false
  let counter = textLength / 2
  if (textLength % 2 !== 0) {
    counter = Math.floor(counter)
    isOdd = true
  }

  for (let i = 0; i < counter; i++) {
    cypheredText.push(text[textLength - 1 - i])
    cypheredText.push(text[i])
  }

  if (isOdd) {
    cypheredText.push(text[Number(counter)])
  }
  text = cypheredText.join('')
  return text
}
function reverse (s) {
  return s.split('').reverse().join('')
}
let a = cypher3('pesho')
console.log(a)
