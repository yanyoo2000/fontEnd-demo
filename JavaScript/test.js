let url = 'http://192.168.56.177/share/b1vr91cm0'

let shareIndex = url.indexOf('/share')

let originUrl = url.slice(0, shareIndex)
console.log(originUrl);

let codeIndex = url.lastIndexOf('/')

let code = url.slice(codeIndex + 1)
console.log(code);