<!--
 * @Author: zd
 * @Date: 2023-08-23 09:28:20
 * @LastEditors: zd
 * @LastEditTime: 2023-08-30 15:56:13
 * @FilePath: \demo-vue2\src\views\TabTest.vue
 * @Description: tabtest
-->
<template>
  <el-form v-formTab ref="tabTestRef">
    <el-form-item>
      <el-input class="tab-0" />
    </el-form-item>
    <el-form-item>
      <el-input class="tab-1" />
    </el-form-item>
    <el-form-item>
      <el-input class="tab-2" />
    </el-form-item>
    <el-form-item>
      <el-input :disabled="true" class="tab-3" />
    </el-form-item>
    <el-form-item>
      <FormatInputNumber class="tab-4" />
    </el-form-item>
    <el-form-item>
      <FormatInputNumber :disabled="true" class="tab-4" />
    </el-form-item>
    <el-form-item>
      <el-input class="tab-5" />
    </el-form-item>
    <el-form-item>
      <el-input class="tab-6" />
    </el-form-item>
    <el-form-item>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-date-picker v-model="value2" type="date" placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <!-- <el-form-item>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
    </el-form-item> -->
  </el-form>
</template>
<script>
import FormatInputNumber from '@/components/FormatInputNumber'
export default {
  name: 'TabTest',

  components: { FormatInputNumber },

  data () {
    return {
      value1: '',
      value2: ''
    }
  },

  mounted () {
    this.initEl()
  },

  methods: {
    initEl () {
      console.log(this.$refs.tabTestRef.clearSelection)
    }
  }
}
</script>
