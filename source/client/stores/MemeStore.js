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
    console.log('Sorry but you couldn\'t add a new meme')
  }
}
export default alt.createStore(MemeStore)

