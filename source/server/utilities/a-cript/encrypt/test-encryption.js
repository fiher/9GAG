/**
 * Created by PC on 09-Jul-17.
 */
function cypher4 (text, publicKey, privateKey, secretKey) {
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
let a = cypher4('pesho', 'misho', 'mamaMia', 'oleole')
console.log(a)
