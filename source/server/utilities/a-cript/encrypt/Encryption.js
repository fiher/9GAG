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
    let textLength = text.length
    let splitInto = 0
    let textAsList = []
    SplitInto()
    let textBlocks = []
    let leftBlockOfText = ''
    let startIndex = 0

    text = this.reverse(text)
    for (let i = 0; i < splitInto; i++) {
      let textBlock = ''
      for (let k = 0; k < Math.floor(textLength / splitInto); k++) {
        textBlock += text[startIndex]
        startIndex++
      }
      textBlocks.push(textBlock)
    }

    textBlocks.reverse()
    textBlocks.forEach(function (textBlock) {
      textAsList.push(textBlock)
    })

    if (startIndex < textLength) {
      for (let i = startIndex; i < textLength; i++) {
        leftBlockOfText += text[i]
      }
      textAsList.push(leftBlockOfText)
    }
    return textAsList.join('')
    function SplitInto () {
      if (textLength >= 5 && textLength < 10) {
        splitInto = 2
      } else if (textLength < 15) {
        splitInto = 4
      } else if (textLength < 20) {
        splitInto = 8
      } else if (textLength < 30) {
        splitInto = 6
      } else if (textLength < 35) {
        splitInto = 10
      } else if (textLength < 45) {
        splitInto = 8
      } else if (textLength < 50) {
        splitInto = 4
      } else if (textLength < 60) {
        splitInto = 12
      } else if (textLength < 70) {
        splitInto = 14
      } else if (textLength < 80) {
        splitInto = 16
      } else if (textLength < 90) {
        splitInto = 12
      } else if (textLength < 100) {
        splitInto = 8
      } else if (textLength < 120) {
        splitInto = 14
      } else if (textLength < 150) {
        splitInto = 18
      } else if (textLength < 160) {
        splitInto = 14
      } else if (textLength < 180) {
        splitInto = 16
      } else if (textLength < 190) {
        splitInto = 8
      } else if (textLength < 200) {
        splitInto = 4
      } else if (textLength < 240) {
        splitInto = 9
      } else if (textLength < 280) {
        splitInto = 21
      } else if (textLength < 290) {
        splitInto = 32
      } else if (textLength < 300) {
        splitInto = 14
      } else if (textLength < 320) {
        splitInto = 35
      } else if (textLength < 340) {
        splitInto = 21
      } else if (textLength < 356) {
        splitInto = 4
      } else if (textLength < 456) {
        splitInto = 2
      } else if (textLength < 500) {
        splitInto = 5
      } else if (textLength < 550) {
        splitInto = 23
      } else if (textLength >= 550) {
        splitInto = 40
      }
    }
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
    let textLegnth = text.length
    let insertIndex = Math.floor(textLegnth / 3.0)
    text = this.reverse(text)
    let textAsList = text.split()
    let publicKeyLength = publicKey.length
    let privateKeyLength = privateKey.length
    let secretKeyLength = secretKey.length
    for (let i = 0; i < publicKeyLength; i++) {
      textAsList.splice(insertIndex, 0, publicKey[i])
    }
    insertIndex++
    for (let i = 0; i < privateKeyLength; i++) {
      textAsList.splice(insertIndex + publicKeyLength, 0, privateKey[i])
    }
    insertIndex++
    for (let i = 0; i < secretKeyLength; i++) {
      textAsList.splice(insertIndex + publicKeyLength + privateKeyLength, 0, secretKey[i])
    }
    text = textAsList.join('')
    text = this.reverse(text)
    return text
  }

  cypher3 (text) {
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
