const urlSlugReverse = (text) => {
  let _url = text.split('-')
      _url = _url.join(' ').toLowerCase()

  if (_url.includes("&")) {
    const parts = _url.split("&");
    const url = parts[0].length > 2 ? parts[0] : parts[1];
    return url;
  }
  if (_url.includes(",")) {
    const parts = _url.split(",");
    const url = parts[0].length > 2 ? parts[0] : parts[1];
    return url.toString();
  }

  return _url
}

export default urlSlugReverse

