import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8080/api/'
// axios.defaults.baseURL = 'http://f342c1bf.ngrok.io/api/'
// 对返回的数据进行拦截
axios.interceptors.response.use(function (response) {
  // 返回response.data
  return response.data
}, function (error) {
  return Promise.reject(error)
})
export function getBanner () {
  return axios.get('banner')
}

export function getHomeCate () {
  return axios.get('category')
}

export function getBrandList () {
  return axios.get('brandList')
}

export function getHuadong () {
  return axios.get('huadong')
}

export function getBotpic () {
  return axios.get('botpic')
}
export function getHotBanner () {
  return axios.get('hotBanner')
}
export function getOrderP () {
  return axios.get('orderP')
}
export function getOrderFen () {
  return axios.get('orderFen')
}
export function getMineCen () {
  return axios.get('orderCen')
}
export function getOrderLoop () {
  return axios.get('orderLoop')
}
export function getSpin () {
  return axios.get('spin')
}
export function getStrNew () {
  return axios.get('strNew')
}
export function getStrBl () {
  return axios.get('strBl')
}
export function getStrDp () {
  return axios.get('strDp')
}
export function getStrTt () {
  return axios.get('strTt')
}
export function getStrSx () {
  return axios.get('strSx')
}
export function getForyou () {
  return axios.get('foryou')
}
export function getCateListright () {
  return axios.get('cateListright')
}
export function getCateListright1 () {
  return axios.get('cateListright1')
}
export function getCateListright2 () {
  return axios.get('cateListright2')
}
export function getCateListright3 () {
  return axios.get('cateListright3')
}
export function getCateListright4 () {
  return axios.get('cateListright4')
}
export function getCateListright5 () {
  return axios.get('cateListright5')
}
export function getCateListright6 () {
  return axios.get('cateListright6')
}
export function getCateTx () {
  return axios.get('cateTx')
}
export function getZiXun () {
  return axios.get('ziXun')
}
