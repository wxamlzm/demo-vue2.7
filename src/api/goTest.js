/*
 * @Author: zd
 * @Date: 2023-09-13 15:15:17
 * @LastEditors: zd
 * @LastEditTime: 2023-09-13 15:15:29
 * @FilePath: \demo-vue2\src\api\goTest.js
 * @Description: api
 */
import request from '@/utils/request'

export function goTest (data) {
  return request.post('/goTest', data)
}
