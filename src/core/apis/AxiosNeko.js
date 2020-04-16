import axios from 'axios'

class AxiosNeko {
  defaultFunc = res => res.status >=400 && res.status <= 500 ? Promise.reject(res.data) : Promise.resolve(res.data)
  constructor({options} = {}) {
    this.axiosNeko = axios.create({ validateStatus: false, ...options })
  }
  get = (url) => this.axiosNeko.get(url).then(this.defaultFunc)
  post = (url, body) => this.axiosNeko.post(url, body).then(this.defaultFunc)
  put = (url, body) => this.axiosNeko.put(url, body).then(this.defaultFunc)
  patch = (url, body) => this.axiosNeko.patch(url, body).then(this.defaultFunc)
  delete = (url) => this.axiosNeko.delete(url).then(this.defaultFunc)
}

export default AxiosNeko