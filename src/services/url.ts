import { apiInstance } from './config'

export const getUrlByShort = (short: string) => apiInstance.get(`/short-url?short=${short}`)

export const addShortUrl = (data: BodyInit) => apiInstance.post('/short-url', data)
