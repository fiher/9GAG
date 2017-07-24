import alt from '../alt'
class CreateMemeActions {
  constructor () {
    this.generateActions(
      'postMemeSuccess',
      'postMemeFail',
      'handleTitleChange',
      'handleImageChange',
      'handleCategoryChange'
    )
    this.data = {}
  }

  postMeme (data) {
    this.data = data
    let image64 = data.image.slice(data.image.indexOf(',') + 1)
    let imageData = {
      image: image64
    }
    let imageUploadRequest = {
      method: 'POST',
      url: 'https://api.imgur.com/3/upload',
      headers: {
        'Authorization': 'Client-ID 5ac16d574a84514'
      },
      data: imageData,
      success: this.imageUploaded,
      error: this.errorCreate
    }

    // Send request to upload.
    return $.ajax(imageUploadRequest)
  }
  imageUploaded (response) {
    let data = this.data
    data.memeUrl = response.data.link
    data.author = localStorage.getItem('userId')
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
  errorCreate (error) {
    this.data.error = error
  }
}

export default alt.createActions(CreateMemeActions)
