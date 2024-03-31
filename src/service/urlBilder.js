const urlBilder = (text) => {
  let _url = text.split(' ')

  return decodeURI(_url.join('-').toLowerCase())
}


export default urlBilder