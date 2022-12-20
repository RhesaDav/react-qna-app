import baseApi from './baseApi'

const getQuestion = (difficult) => {
    return baseApi.get(`/questions?categories=history&limit=1&difficulty=${difficult}`)
}

export const httpService = {
    getQuestion
}