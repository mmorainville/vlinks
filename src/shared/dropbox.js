import Dropbox from 'dropbox'
import store from '@/store'

export let dropbox = new Dropbox({accessToken: process.env.DROPBOX_ACCESS_TOKEN})

export let actions = {
  upload () {
    dropbox.filesUpload({
      path: '/db.dev.json',
      contents: JSON.stringify(store.state.items.all, null, 2),
      mode: {
        '.tag': 'overwrite'
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  download () {
    dropbox.filesDownload({path: '/db.dev.json'})
      .then((response) => {
        let blob = response.fileBlob
        let reader = new FileReader()
        reader.onload = () => {
          store.commit('LOAD_ITEMS', JSON.parse(reader.result))
        }
        reader.readAsText(blob)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
