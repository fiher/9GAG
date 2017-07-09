const config = require('../config/encryption-config')

export default class Decryption {
  constructor () {
    this.sequence = config.sequence
    this.secretKey = config.secretKey
  }

  crypt (text, publicKey, privateKey) {
    return text
  }

  cypher0 (text) {
    return text
  }

  cypher1 (text) {
    CypherText()
    text = this.reverse(text)
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

  cypher2 (text, publicKey, privateKey, secretKey) {
    return text
  }

  cypher3 (text) {
    return text
  }

  cypher4 (text, publicKey, privateKey, secretKey) {
    let muttableText = text.split()
    let textLength = text.length
    let publicKeyLength = publicKey.length
    let publicKeyIndex = 0
    let privateKeyLength = privateKey.length
    let privateKeyIndex = 0
    let secretKeyLength = secretKey.length
    let secretKeyIndex = 0
    for (let i = 0; i < textLength; i++) {
      if (publicKeyIndex === publicKeyLength - 1) { publicKeyIndex = 0 }
      if (privateKeyIndex === privateKeyLength - 1) { privateKeyIndex = 0 }
      if (secretKeyIndex === secretKeyLength - 1) { secretKeyIndex = 0 }
      let letterASCII = text.charCodeAt(i)
      let newASCII = publicKey.charCodeAt(publicKeyIndex) + privateKey.charCodeAt(privateKeyIndex) + secretKey.charCodeAt(secretKeyIndex)
      muttableText[i] = String.fromCharCode(letterASCII + newASCII)
    }
    return muttableText.join('')
  }

  cypher5 (text) {
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

  static reverse (s) {
    return s.split('').reverse().join('')
  }
}
