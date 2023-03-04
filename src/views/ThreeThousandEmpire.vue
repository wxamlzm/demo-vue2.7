<template>
  <el-form
    size="mini"
    label-position="left"
    label-width="50px"
    class="three-thousand-empire"
  >
    <el-form-item
      v-for="(item, index) in formConfig"
      :key="index"
      :label="item.label"
      style="width:30%"
    >
      <el-input v-model="formData[item.key]" type="number"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { updateEmpireData } from '@/api/empire'

export default {
  name: 'ThreeThousandEmpire',

  data () {
    return {
      formConfig: [
        { label: '军事', key: 'military' },
        { label: '文化', key: 'culture' },
        { label: '科技', key: 'science' },
        { label: '宗教', key: 'religion' },
        { label: '商业', key: 'business' },
        { label: '农业', key: 'agriculture' },
        { label: '工业', key: 'industry' },
        { label: '集权', key: 'centralization' },
        { label: '分权', key: 'decentralization' },
        { label: '海军', key: 'navy' }
      ],
      // 表单的值
      formData: {}
    }
  },

  watch: {
    formData: {
      handler (data) {
        this.updateEmpireData(data)
      }
    }
  },

  methods: {
    // 接口：更新数据
    async updateEmpireData (data) {
      console.log(data)
      const res = await updateEmpireData(data)
      console.log(res)
    }
  }
}
</script>

<style lang="scss">
.three-thousand-empire {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
  margin: auto;
}
</style>
