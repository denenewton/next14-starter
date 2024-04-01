const urlSlugReverse = (text) => {
  let _url = text.split('-')
  let url = _url.join(' ').toLowerCase()

  if (url.includes("&")) {
    const parts = url.split("&");
    url = parts[0].length > 2 ? parts[0] : parts[1];
    return url;
  }
  if (url.includes(",")) {
    const parts = url.split(",");
    url = parts[0].length > 2 ? parts[0] : parts[1];
    return url.toString();
  }

  return url
}

export default urlSlugReverse

