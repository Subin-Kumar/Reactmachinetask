import axios from 'axios'

const Base_Url="http://localhost:3001/api/"


export const publicRequest=axios.create({baseURL:Base_Url})


