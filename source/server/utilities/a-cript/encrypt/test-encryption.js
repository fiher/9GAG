/**
 * Created by PC on 09-Jul-17.
 */
function cypher1 (text) {
  CypherText()
  text = reverse(text)
  CypherText()
  return text
  function CypherText () {
    for (let k = 0; k < text.length; k++) {
      let myNewText = ''
      if (k > 0) {
        for (let y = 0; y < k; y++) {
          myNewText += text[y]
        }
      }
      myNewText += text[k]
      let myLetterASCII = text.charCodeAt(k)
      for (let i = k + 1; i < text.length; i++) {
        let currentLetterASCII = text.charCodeAt(i)
        let newASCII = myLetterASCII + currentLetterASCII
        myNewText += String.fromCharCode(newASCII)
      }
      text = myNewText
    }
  }
}
function reverse (s) {
  return s.split('').reverse().join('')
}
