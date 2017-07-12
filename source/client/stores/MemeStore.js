import alt from '../alt'
import MemeActions from '../actions/MemeActions'

class MemeStore {
  constructor () {
    this.bindActions(MemeActions)
    this.memes = []
    this.meme = {}
  }

  onGetAllMemesSuccess (memes) {
    this.memes = memes
  }

  onGetAllMemesFail () {
    console.log('we are sorry but we had problems getting dem DankMemes')
  }
  onPostMemeSuccess (meme) {
    this.meme = meme
  }
  onPostMemeFail (error) {

  }
}
export default alt.createStore(MemeStore)

