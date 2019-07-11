import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'
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
export function getCateList () {
  return axios.get('cateList')
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