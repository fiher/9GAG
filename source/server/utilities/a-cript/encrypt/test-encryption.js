/**
 * Created by PC on 09-Jul-17.
 */
function cypher4 (text) {
  let textLength = text.length
  let splitInto = 0
  let textAsList = []
  SplitInto()
  let textBlocks = []
  let leftBlockOfText = ''
  let startIndex = 0

  text = reverse(text)
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
function reverse (s) {
  return s.split('').reverse().join('')
}
let a = cypher4('pesho')
console.log(a)
