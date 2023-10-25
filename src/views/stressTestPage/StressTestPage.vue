<!--
 * @Author: zd
 * @Date: 2023-10-25 14:04:45
 * @LastEditors: zd
 * @LastEditTime: 2023-10-25 14:54:40
 * @FilePath: \zb-risk-web-dev\src\views\otc\stressTestPage\StressTestPage.vue
 * @Description: 压力测试情景
-->

<template>
  <div class="global-c-page otc-pnl-warning">
    <header class="global-c-screen-main">
      <div class="global-c-screen-div global-c-screen-1-line">
        <div class="global-c-screen-left">
          <el-row :gutter="70" type="flex">
            <el-col :span="8">
              <div class="global-c-input-div">
                <div class="global-c-input-lable">业务日期</div>
                <div class="global-c-input-value">
                  <el-date-picker
                    v-model="searchContent.business_date"
                    :clearable="false"
                    value-format="yyyyMMdd"
                    size="mini"
                    type="date"
                    placeholder="请选择开始日期"
                  />
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="global-c-screen-right">
          <el-button
            icon="el-icon-search"
            size="mini"
            type="primary"
            @click="handleSearchClick"
            >查询</el-button
          >
        </div>
      </div>
    </header>

    <div class="global-c-content-transverse-division" />

    <main class="global-c-div-main">
      <StressTestPageTable :tableData="tableData" />
    </main>
  </div>
</template>

<script>
import { listPlateStressTestingResult } from '@/api/otc/stressTestPage.js'
import StressTestPageTable from './components/StressTestPageTable'

// zdtest
import { testData } from './testData'

export default {
  name: 'StressTestPage',

  components: { StressTestPageTable },

  data () {
    return {
      searchContent: {
        business_date: '20230912'
      },
      tableData: []
    }
  },

  mounted () {
    this.initPage()
  },

  methods: {
    async initPage () {
      const businessData = this.searchContent.business_date
      try {
        const res = await listPlateStressTestingResult({
          business_date: businessData
        })
        this.tableData = res
      } catch (err) {
        console.log(err)
      }
    },
    // 点击查询
    handleSearchClick () {}
  }
}
</script>
