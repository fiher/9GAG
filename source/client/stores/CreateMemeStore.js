import alt from '../alt'
import CreateMemeActions from '../actions/CreateMemeActions'

class CreateMemeStore {
  constructor () {
    this.bindActions(CreateMemeActions)
    this.title = ''
    this.image = ''
    this.category = ''
    this.memeUrl = ''
    this.success = ''
    this.error = ''
  }

  onPostMemeSuccess (meme) {
    this.title = meme.title
    this.file = meme.memeUrl
    this.category = meme.category
    this.success = 'MemeUploaded'
  }
  onPostMemeFail (error) {
    this.error = error
  }
  onHandleTitleChange (event) {
    console.log(event.target.value)
    this.title = event.target.value
  }
  onHandleImageChange (file) {
    this.image = file.base64
  }
  onHandleCategoryChange (event) {
    this.category = event.target.value
  }
}
export default alt.createStore(CreateMemeStore)
