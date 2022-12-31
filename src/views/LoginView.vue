<!--
 * @Author: zd
 * @Date: 2022-12-31 23:15:38
 * @LastEditors: zd
 * @LastEditTime: 2022-12-31 23:50:07
 * @Description: 登录界面
-->
<template>
  <div class="login-view">
    <div class="login-box">
      <el-form label-position="left" label-width="120px" size="mini">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
        <el-button type="primary" size="mini">login-view</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style lang="sass">
.login-view {
  display:flex;
  .login-box {
    width: 50%;
    margin: auto
  }
}
</style>
