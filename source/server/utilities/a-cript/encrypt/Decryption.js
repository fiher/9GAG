
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
    return text
  }
  cypher2 (text, publicKey, privateKey, secretKey) {
    return text
  }
  cypher3 (text) {
    return text
  }
  cypher4 (text, publicKey, privateKey, secretKey) {
    return text
  }
  decypher5 (text) {
    return text
  }
}
