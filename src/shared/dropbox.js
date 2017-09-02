import Dropbox from 'dropbox'

export let dropbox = new Dropbox({accessToken: process.env.DROPBOX_ACCESS_TOKEN})

dropbox.filesListFolder({path: ''})
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
