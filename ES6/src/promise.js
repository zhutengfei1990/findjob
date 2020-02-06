function loadImage(url) {
  return new Promise((resolve, reject) => {
    var img = document.createElement('img');
    img.onload = function() {
      resolve(img)
    }
    img.onerror = function() {
      reject()
    }
    img.src = src
  })
}

loadImage('https://ab.png');