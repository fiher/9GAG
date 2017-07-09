/**
 * Created by PC on 09-Jul-17.
 */
function cypher5 (text) {
  let muttableText = text.split()
  let textLength = text.length
  for (let i = 0; i < textLength; i++) {
    let asciiChange = i + 1
    let letterASCII = text.charCodeAt(i)
    letterASCII += asciiChange
    muttableText[i] = String.fromCharCode(letterASCII)
  }
  return muttableText.join('')
}
let a = cypher5('pesho')
console.log(a)
