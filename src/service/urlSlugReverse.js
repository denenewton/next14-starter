const urlSlugReverse = (text) => {
  let _url = text.split('-')

  return decodeURI(_url.join(' ').toLowerCase())
}

export default urlSlugReverse

