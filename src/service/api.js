import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://assina-prontuario.herokuapp.com/',
})

export default Api;
