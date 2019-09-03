"use strict"

import axios from 'axios'
import { PERFORMANCE_STATUS_API_URL } from './constants/base-constants'

// instantiate axios
const httpClient = axios.create({
    baseURL: PERFORMANCE_STATUS_API_URL
})

httpClient.getAllData = function () {
    return this({ method: 'get' })
        .then(res => {
            console.log(res.data)

            return res.data
        })
        .catch(err => {
            return err.data
        })
}

httpClient.addData = function (data) {
    return this({ method: 'post', data })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err.data
        })
}

httpClient.deleteData = function(id) {
    return this({ method: 'delete', url: '/' + id })
      .then(res => {
        return res.data
      })
      .catch(err => {
        return err.data
      })
  }

export default httpClient
