import axios from "axios"

const instance = axios.create({
    baseURL: 'https://brrxzper.lc-cn-e1-shared.com/1.1/',
    headers: {
    'X-LC-Id': 'bRrXZpErmstSfa9is8ier6Qb-9Nh9j0Va',
    'X-LC-Key': 'TrRlG3bYPyqf9VNfA5mFPvUU',
    'Content-Type': 'application/json',
  }
})

export default instance