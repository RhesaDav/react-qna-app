import axios from 'axios'

const baseUrl = 'https://the-trivia-api.com/api'

export default axios.create({
    baseURL: baseUrl
})