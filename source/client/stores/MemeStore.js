import alt from '../alt'
import MemeActions from '../actions/MemeActions'

class MemeStore {
  constructor () {
    this.bindActions(MemeActions)
    this.memes = []
    this.meme = {}
  }

  onAddCommentSuccess (data) {
    console.log(data)
    let comment = data.comment
    let memeId = data.comment.meme

    for (let meme of this.memes) {
      if (meme._id === memeId) {
        meme.comments.push(comment)
      }
    }
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
  onGetMemesByCategorySuccess (memes) {
    console.log('made it')

    this.memes = memes
  }
  onGetMemesByCategoryFail (error) {
    console.log(error)
  }
}
export default alt.createStore(MemeStore)

