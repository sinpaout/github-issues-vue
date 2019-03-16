import axios from 'axios'

const API_URL = 'https://api.github.com/'

const client = axios.create()

let store = null

client.defaults.baseURL = API_URL
client.defaults.timeout = 5 * 60 * 1000 // タイムアウト（ミリ秒）
client.defaults.headers['Authorization'] = `token ${process.env.VUE_APP_GITHUB_TOKEN}`

client.interceptors.request.use((config) => {
  dispatch('page/startRequest', config)

  if (config.method === 'get') {
    config.url = `${config.url}${config.url.indexOf('?') >= 0 ? '&' : '?'}_=${Date.now()}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

client.interceptors.response.use(
  response => {
    dispatch('page/endRequest', response)
    return response.data
  },
  error => {
    dispatch('page/errorRequest', error)
    return Promise.reject(error)
  }
)

function dispatch (action, ...rest) {
  if (store) {
    store.dispatch(action, ...rest)
  }
}

export function setStore (appStore) {
  store = appStore
}

export default client
