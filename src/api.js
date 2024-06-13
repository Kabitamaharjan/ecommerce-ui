import axios from 'axios';
export default () => {
    const instance = axios.create({
      baseURL: `http://localhost:8081`
    })
  
    instance.interceptors.request.use(function (config) {
      const token = localStorage.getItem('token')
  
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
  
      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })
  
    return instance
  }