import alt from '../alt'
class MemeActions {
  constructor () {
    this.generateActions(
      'getAllMemesSuccess',
      'getAllMemesFail',
      'postMemeSuccess',
      'postMemeFail'
    )
  }
  getAllMemes () {
    let request = {
      method: 'get',
      url: '/api/memes/all'
    }

    $.ajax(request)
      .done(data => this.getAllMemesSuccess(data))
      .fail(err => this.getAllMemesFail(err))
  }
  postMeme (data) {
    let request = {
      method: 'post',
      url: '/api/memes/add',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }

    $.ajax(request)
      .done(data => this.postMemeSuccess(data))
      .fail(err => this.postMemeFail(err))
  }
}
export default alt.createActions(MemeActions)
