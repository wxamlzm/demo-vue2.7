<!--
 * @Author: zd
 * @Date: 2023-10-18 09:08:09
 * @LastEditors: zd
 * @LastEditTime: 2023-10-18 09:15:27
 * @FilePath: \demo-vue2\src\views\goTest\GoTest.vue
 * @Description: 
-->
<template>
  <div>goTest</div>
</template>

<script>
import { goTest } from '@/api/goTest'
export default {
  name: 'GoTest',

  mounted () {
    // sshtest
    goTest({ test: 'test' })
  }
}
</script>
