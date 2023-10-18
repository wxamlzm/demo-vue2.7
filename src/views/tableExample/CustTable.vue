<template>
  <div>
    <el-table :data="getTableData">
      <el-table-column prop="plate" label="板块">
        <el-table-column prop="plate_type_name" label="主类" />
        <el-table-column prop="plate_code_name" label="子类" />
      </el-table-column>
      <el-table-column prop="stress_scene_names" label="压力情景">
        <el-table-column
          prop="stress_scene_name"
          label="轻度压力"
          min-width="400"
        >
          <CustTableItem />
        </el-table-column>
        <el-table-column prop="stress_scene_name" label="中度压力" />
        <el-table-column prop="stress_scene_name" label="重度压力" />
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import CustTableItem from './components/CustTableItem'
const testData = [
  {
    hedge_profit: 450,
    credit_min_profit: -1320,
    quantile_value: 0.2,
    market_min_profit: -1250,
    volatility_value: -0.03,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityDownMild',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: 550,
    stress_scene: 'MildStressScene',
    quantile_type: 'QuantileDownMild',
    today_profit: 1000,
    modify_date: null,
    plate_code: 'AG',
    stress_scene_name: '轻度压力'
  },
  {
    hedge_profit: 660,
    credit_min_profit: -1320,
    quantile_value: 0.2,
    market_min_profit: -1250,
    volatility_value: 0.03,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityUpMild',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: 660,
    stress_scene: 'MildStressScene',
    quantile_type: 'QuantileDownMild',
    today_profit: 1320,
    modify_date: null,
    plate_code: 'AG',
    stress_scene_name: '轻度压力'
  },
  {
    hedge_profit: 6521,
    credit_min_profit: -36521,
    quantile_value: 0.1,
    market_min_profit: -25456,
    volatility_value: -0.05,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityDownModerate',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: 3000,
    stress_scene: 'ModerateStressScene',
    quantile_type: 'QuantileDownModerate',
    today_profit: 36521,
    modify_date: null,
    plate_code: 'AG',
    stress_scene_name: '轻度压力'
  },
  {
    hedge_profit: 5000,
    credit_min_profit: -36521,
    quantile_value: 0.1,
    market_min_profit: -25456,
    volatility_value: 0.05,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityUpModerate',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: 684,
    stress_scene: 'ModerateStressScene',
    quantile_type: 'QuantileDownModerate',
    today_profit: 5684,
    modify_date: null,
    plate_code: 'AG',
    stress_scene_name: '轻度压力'
  },
  {
    hedge_profit: -100,
    credit_min_profit: -9854,
    quantile_value: null,
    market_min_profit: -23100,
    volatility_value: null,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityDownSever',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: -12000,
    stress_scene: 'SeverStressScene',
    quantile_type: 'QuantileDownSever',
    today_profit: -12100,
    modify_date: null,
    plate_code: 'AG'
  },
  {
    hedge_profit: -20000,
    credit_min_profit: -9854,
    quantile_value: null,
    market_min_profit: -23100,
    volatility_value: null,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityUpSever',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: -3100,
    stress_scene: 'SeverStressScene',
    quantile_type: 'QuantileDownSever',
    today_profit: -23100,
    modify_date: null,
    plate_code: 'AG'
  },
  {
    hedge_profit: 320,
    credit_min_profit: -1320,
    quantile_value: 0.8,
    market_min_profit: -1250,
    volatility_value: -0.03,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityDownMild',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: 330,
    stress_scene: 'MildStressScene',
    quantile_type: 'QuantileUpMild',
    today_profit: 650,
    modify_date: null,
    plate_code: 'AG'
  },
  {
    hedge_profit: 400,
    credit_min_profit: -1320,
    quantile_value: 0.8,
    market_min_profit: -1250,
    volatility_value: 0.03,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityUpMild',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: -850,
    stress_scene: 'MildStressScene',
    quantile_type: 'QuantileUpMild',
    today_profit: -1250,
    modify_date: null,
    plate_code: 'AG'
  },
  {
    hedge_profit: 521,
    credit_min_profit: -36521,
    quantile_value: 0.9,
    market_min_profit: -25456,
    volatility_value: -0.05,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityDownModerate',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: 4000,
    stress_scene: 'ModerateStressScene',
    quantile_type: 'QuantileUpModerate',
    today_profit: 4521,
    modify_date: null,
    plate_code: 'AG'
  },
  {
    hedge_profit: -5426,
    credit_min_profit: -36521,
    quantile_value: 0.9,
    market_min_profit: -25456,
    volatility_value: 0.05,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityUpModerate',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: -20000,
    stress_scene: 'ModerateStressScene',
    quantile_type: 'QuantileUpModerate',
    today_profit: -25456,
    modify_date: null,
    plate_code: 'AG'
  },
  {
    hedge_profit: 54,
    credit_min_profit: -9854,
    quantile_value: null,
    market_min_profit: -23100,
    volatility_value: null,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityDownSever',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: 9800,
    stress_scene: 'SeverStressScene',
    quantile_type: 'QuantileUpSever',
    today_profit: 9854,
    modify_date: null,
    plate_code: 'AG'
  },
  {
    hedge_profit: -12000,
    credit_min_profit: -9854,
    quantile_value: null,
    market_min_profit: -23100,
    volatility_value: null,
    plate_type_name: '商品板块',
    modify_time: null,
    volatility_type: 'VolatilityUpSever',
    business_date: 20230913,
    plate_code_name: '农产品',
    order_index: 1,
    enable_status: 'True',
    option_profit: -500,
    stress_scene: 'SeverStressScene',
    quantile_type: 'QuantileUpSever',
    today_profit: -12500,
    modify_date: null,
    plate_code: 'AG'
  }
]
export default {
  name: 'CustTable',

  components: { CustTableItem },

  data () {
    return {
      tableData: testData
    }
  },

  computed: {
    getCurHeaders () {
      return [{}]
    },

    getTableData () {
      // const getTableDataConfig = () => {
      //   const tableDataConfig = [
      //     {
      //       plate_type_name: '商品板块',
      //       plate_code_name: '农产品',
      //       label_column: '计算结果',
      //       credit_min_profit: 0,
      //       volatility_value_down: '波动率涨跌',
      //       volatility_value_up: '波动率涨跌'
      //     },
      //     {
      //       plate_type_name: '商品板块',
      //       plate_code_name: '农产品',
      //       label_column: '计算结果',
      //       credit_min_profit: 0,
      //       volatility_value_down: '-3%',
      //       volatility_value_up: '+3%'
      //     },
      //     {
      //       plate_type_name: '商品板块',
      //       plate_code_name: '农产品',
      //       label_column: '标的价格涨跌',
      //       credit_min_profit: '20%分位数（标的价格下跌情形）',
      //       volatility_value_down: 1000,
      //       volatility_value_up: 1200
      //     },
      //     {
      //       plate_type_name: '商品板块',
      //       plate_code_name: '农产品',
      //       label_column: '标的价格涨跌',
      //       credit_min_profit: '80%分位数（标的价格下跌情形）',
      //       volatility_value_down: 1000,
      //       volatility_value_up: 1200
      //     }
      //   ]
      // }
      // return getTableDataConfig

      // this.tableData
      //   .filter(ele => ele.stress_scene_name === '轻度压力')
      //   .map(ele => {
      //    return
      //   })
      // return mildPressureTableDataConfig

      return this.tableData
        .filter(ele => ele.stress_scene_name === '轻度压力')
        .map(ele => {
          return [
            {
              mildPressure_credit_min_profit_label: '计算结果',
              mildPressure_credit_min_profit: ele.credit_min_profit
            }
          ]
        })
    }
  }
}
</script>
