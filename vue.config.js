/*
 * @Author: zd
 * @Date: 2023-01-01 00:12:05
 * @LastEditors: zd
 * @LastEditTime: 2023-01-02 00:43:04
 * @Description:
 */
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/reset.scss";`
      }
    }
  }
})
