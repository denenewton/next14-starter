const urlSlugReverse = (text) => {
  let vet = text.split('-')

  let v_url = exclude_char(vet, ',')

  v_url = exclude_char(v_url, ':')

  return decodeURIComponent(v_url.join(' '))
}

export default urlSlugReverse



function exclude_char(vet, char) {
  let v_url = vet.map(
    word => {
      if (word.includes(char)) {
        const _word = word.split(char)
        return _word.join('')
      }
      return word
    })
  return v_url
}





// const urlSlugReverse = (text) => {
//   let _url = text.split('-')
//   let url = _url.join(' ').toLowerCase()

//   if (url.includes("&")) {
//     let parts = url.split("&");
//     url =  parts.join(' ') // parts[0].length > 2 ? parts[0] : parts[1];
//     return url.toString();
//   }
//   if (url.includes(",")) {
//     const parts = url.split(",");
//     url = parts.join(' ') //parts[0].length > 2 ? parts[0] : parts[1];
//     return url.toString();
//   }

//   return url.toString();
// }

// export default urlSlugReverse

