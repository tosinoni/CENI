"use strict"

import axios from 'axios'
import { API_URL } from './constants/base-constants'
import https from 'https'

// instantiate axios
const httpClient = axios.create({
    baseURL: API_URL,
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
      })
})

httpClient.getData = function () {
    return this({
        method: 'post',
        data: {

            "queryType": "SQL",
            "query": "select * from  dfs.`/tmp/mcp_sc_test1.parquet` limit 10"
        }
    })
        .then(function (response) {
            console.log(response)
        }).catch(err => {
            return err
        })
}


httpClient.defaults.headers.post['content-Type'] = 'application/json'

export default httpClient
