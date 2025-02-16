//封装和token相关的方法 存取删
const TONKEY = 'token_key'
function setToken(token) {
  localStorage.setItem(TONKEY, token)
}

function getToken(token) {
  return localStorage.getItem(TONKEY)
}

function removeToken(token) {
  localStorage.removeItem(TONKEY)
}

export {setToken,getToken,removeToken}