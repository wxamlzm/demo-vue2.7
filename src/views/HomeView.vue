<!--
 * @Author: zd
 * @Date: 2022-12-31 18:47:44
 * @LastEditors: zd
 * @LastEditTime: 2023-01-05 23:25:41
 * @Description: 首页
-->
<template>
  <div class="home-view">hello world</div>
</template>

<script>
import { getUserLists } from '@/api/user.js'

export default {
  name: 'HomeView',

  components: {},

  mounted () {
    this.getUserLists()
  },

  methods: {
    async getUserLists () {
      const res = await getUserLists()
      console.log(res)
    }
  }
}
</script>
