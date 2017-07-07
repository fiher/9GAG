/**
 * Created by PC on 08-Jul-17.
 */
const config = require('../config/encryption-config')

export default class Encryption {
  constructor () {
    this.sequence = config.sequence
    this.secretKey = config.secretKey
  }
  decrypt (text, publicKey, privateKey) {
    return text
  }
  decypher0 (text) {
    return text
  }
  decypher1 (text) {
    return text
  }
  decypher2 (text, publicKey, privateKey, secretKey) {
    return text
  }
  decypher3 (text) {
    return text
  }
  decypher4 (text, publicKey, privateKey, secretKey) {
    return text
  }
  decypher5 (text) {
    return text
  }
}
