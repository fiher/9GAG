/**
 * Created by PC on 09-Jul-17.
 */
function createFileLoader (image) {
  let returnResponse = ''
  let imageData = {
    image: image
  }

  // First we upload the image to imgur.
  let imageUploadRequest = {
    method: 'POST',
    url: 'https://api.imgur.com/3/upload',
    headers: {
      'Authorization': 'Client-ID 5ac16d574a84514'
    },
    data: imageData,
    success: imageUploaded,
    error: errorCreate
  }

  // Send request to upload.
  $.ajax(imageUploadRequest)
  function imageUploaded (response) {
    returnResponse = response
  }

  function errorCreate (error) {
    returnResponse = error
  }
}
export { createFileLoader }
