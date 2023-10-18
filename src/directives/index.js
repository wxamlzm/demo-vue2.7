/*
 * @Author: zd
 * @Date: 2023-08-23 09:34:49
 * @LastEditors: zd
 * @LastEditTime: 2023-08-30 14:32:29
 * @FilePath: \demo-vue2\src\directives\index.js
 * @Description: 指令
 */
import Vue from 'vue'
import formTab from './formTab'
// 监听tab事件
Vue.directive('formTab', formTab)
