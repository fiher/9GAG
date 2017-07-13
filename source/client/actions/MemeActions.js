import alt from '../alt'
class MemeActions {
  constructor () {
    this.generateActions(
      'getAllMemesSuccess',
      'getAllMemesFail',
      'postMemeSuccess',
      'postMemeFail',
      'getMemesByCategorySuccess',
      'getMemesByCategoryFail',
      'emptyMemes',
      'addCommentSuccess',
      'addCommentFail'
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

    return true
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

    return true
  }
  getMemesByCategory (category) {
    console.log('made it bitches')
    let request = {
      method: 'get',
      url: '/api/categories/' + category
    }

    $.ajax(request)
      .done(data => this.getMemesByCategorySuccess(data))
      .fail(err => this.getMemesByCategoryFail(err))
  }

  addComment (memeId, comment) {
    let request = {
      method: 'POST',
      url: `/api/memes/${memeId}/comments`,
      data: JSON.stringify({
        content: comment,
        author: JSON.parse(localStorage.getItem('userId'))
      }),
      contentType: 'application/json'
    }

    $.ajax(request)
      .done(data => this.addCommentSuccess(data))
      .fail(err => this.addCommentFail(err.responseJSON))

    return true
  }
}

export default alt.createActions(MemeActions)