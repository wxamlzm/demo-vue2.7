<!--
 * @Author: zd
 * @Date: 2023-10-25 14:43:45
 * @LastEditors: zd
 * @LastEditTime: 2023-10-25 16:53:20
 * @FilePath: \zb-risk-web-dev\src\views\otc\stressTestPage\components\StressTestPageTable.vue
 * @Description: 压力情景测试的列表
-->
<template>
  <div class="stress-test-page-table">
    <table border="true">
      <thead>
        <tr>
          <th rowspan="2" colspan="2">板块</th>
          <th colspan="3">压力情景</th>
        </tr>
        <tr>
          <th>轻度压力</th>
          <th>轻度压力</th>
          <th>轻度压力</th>
        </tr>
      </thead>
      <tbody>
        <!-- 商品板块 -->
        <template>
          <tr>
            <td :rowspan="shangpinPlateCodeNameArray.length">商品板块</td>
            <td>{{ shangpinPlateCodeNameArray[0] }}</td>
          </tr>

          <tr v-for="(item, index) in shangpinPlateCodeNameArray.slice(1)" :key="index">
            <td>{{ item }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'StressTestPageTable',

  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      //
      shangpinPlateTypeNameGroupArray: [],
      shangpinPlateCodeNameArray: []
    }
  },

  watch: {
    tableData: {
      handler (tableData) {
        // 按plate_type_name分组
        const plateTypeNameResult = this.groupByArray(
          tableData,
          'plate_type_name'
        )
        const plateTypeNameGroup = plateTypeNameResult.arrayGroupByObject
        const plateTypeNameArray = plateTypeNameResult.groupKeyArray
        console.log(plateTypeNameGroup, plateTypeNameArray)
        // 按plate_type_name分组后的各大类的plate_code_name分组
        const plateCodeNameResult = this.groupByArray(
          plateTypeNameGroup[plateTypeNameArray[0]],
          'plate_code_name'
        )
        const plateCodeNameGroup = plateCodeNameResult.arrayGroupByObject
        const plateCodeNameArray = plateCodeNameResult.groupKeyArray
        console.log(plateCodeNameGroup, plateCodeNameArray)
        // 按plate_code_name分组后的各小类按stress_scene_name进行第三次分组
        const stressSceneNameResult = this.groupByArray(
          plateCodeNameGroup[plateCodeNameArray[0]],
          'stress_scene_name'
        )
        const stressSceneNameGroup = stressSceneNameResult.arrayGroupByObject
        const stressSceneNameArray = stressSceneNameResult.groupKeyArray
        console.log(stressSceneNameGroup, stressSceneNameArray)
        // zdtest
        // 给全局变量
        this.shangpinPlateTypeNameGroupArray =
          plateTypeNameGroup[plateTypeNameArray[0]]
        this.shangpinPlateCodeNameArray = plateCodeNameArray
      },
      deep: true
    }
  },
  mounted () {
    // this.initTable()
  },

  methods: {
    // initTable () {
    //   // let result = this.tableData.reduce((acc, cur) => {
    //   //   let key = cur.plate_type_name
    //   //   if (!acc[key]) {
    //   //     acc[key] = []
    //   //   }
    //   //   acc[key].push(cur)
    //   //   return acc
    //   // }, {})
    //   // const tableDataGroup = result
    //   // const plateTypeNameArray = Object.keys(result)
    //   // console.log(tableDataGroup)
    //   // console.log(plateTypeNameArray)
    //   const plateTypeNameResult = this.groupByArray(
    //     this.tableData,
    //     'plate_type_name'
    //   )
    //   const plateTypeNameGroup = plateTypeNameResult.arrayGroupByObject
    //   const plateTypeNameArray = plateTypeNameResult.groupKeyArray
    //   console.log(plateTypeNameGroup, plateTypeNameArray)
    // },
    // 工具，对数组进行指定字段的分类，并且返回分类后的对象和分类的字段数组
    groupByArray (array, groupByKey) {
      console.log(array)
      let result = array.reduce((acc, cur) => {
        let key = cur[groupByKey]
        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(cur)
        return acc
      }, {})
      const arrayGroupByObject = result
      const groupKeyArray = Object.keys(result)
      return {
        arrayGroupByObject,
        groupKeyArray
      }
    }
  }
}
</script>

<style lang="stylus">
.stress-test-page-table {
  table {
    width: 100%;
    border-collapse: collapse;
  }
  td {
    width: auto;
  }
}
</style>
