/*
 * @Author: zd
 * @Date: 2023-01-01 00:12:05
 * @LastEditors: zd
 * @LastEditTime: 2023-01-06 21:33:51
 * @Description:
 */
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/': {
        target: 'https://localhost:3000',
        ws: false,
        changeOrigin: true
      }
    }
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/reset.scss";`
      }
    }
  }
})
