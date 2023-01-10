/*
 * @Author: zd
 * @Date: 2023-01-05 23:17:50
 * @LastEditors: zd
 * @LastEditTime: 2023-01-06 21:35:24
 * @Description: 测试api
 */

/**
 * @Description: 先来查个路由
 */

import axios from 'axios'

export function getUserLists () {
  return axios.get('/user')
}
