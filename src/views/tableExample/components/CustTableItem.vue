<script>
export default {
  render () {
    return (
      <template>
        <el-table-column width="1" />
        <el-table-column prop='label_column' />
        <el-table-column prop='credit_min_profit' />
        <el-table-column prop='volatility_value_down' />
        <el-table-column prop='volatility_value_up' />
      </template>
    )
  },
  data () {
    return {
      columnConfig: [
        { prop: 'label_column', label: '' },
        { prop: 'credit_min_profit', label: '' },
        { prop: 'volatility_value_down', label: '' },
        { prop: 'volatility_value_up', label: '' }
      ]
    }
  }
}
</script>
