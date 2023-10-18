<template>
  <div class="format-input">
    <el-input
      ref="elinput"
      v-show="begin"
      v-model="inputValue"
      :size="size"
      :placeholder="inputPlaceholder"
      :clearable="clearable"
      @change="inputChange"
    />
    <div
      v-show="!begin"
      v-if="!inputDisabled"
      class="format-div"
      @click="beginOn"
    >
      {{ formatValue }}
    </div>
    <div v-show="!begin" v-else class="format-div disable">
      {{ formatValue }}
    </div>
  </div>
</template>

<script>
import commonUtils from '@/utils/commonUtils'
// 格式化金额的输入框
export default {
  name: 'FormatInputNumber',
  components: {},
  props: {
    // 表单是否可修改
    disabled: {
      type: Boolean,
      default: false
    },
    // 提示默认值
    placeholder: {
      type: String,
      default: ''
    },
    // 组件大小
    size: {
      type: String,
      default: 'mini'
    },
    // 具体数值
    value: {
      type: [String, Number],
      default: ''
    },
    // 保留小数位
    dp: {
      type: [Number],
      default: 2
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 是否可以编辑
      inputDisabled: this.disabled,
      inputValue: this.value,
      inputPlaceholder: this.placeholder,
      begin: false,
      e: null
    }
  },
  created: function () {
    // 初始传入直接对元数据进行格式化
    this.updateValue()
  },
  computed: {
    // 计算属性显示格式化后的金额数据
    formatValue () {
      const number = this.inputValue
      if (commonUtils.isNull(number) || isNaN(number)) {
        return ''
      } else {
        return commonUtils.formatNum(Number(this.inputValue), this.dp)
      }
    }
  },
  watch: {
    value: function (val) {
      // 传入更新数据与原始数据相同则不触发更新
      if (val !== this.inputValue) {
        this.inputValue = val
        this.updateValue()
      }
    },
    placeholder: function (val) {
      this.inputPlaceholder = val
    },
    disabled: function (val) {
      this.inputDisabled = val
    }
  },
  methods: {
    // 直接调用设置数据方法  不触发change事件
    setInputValue (inputValue) {
      this.inputValue = inputValue
      this.updateValue(true)
    },
    // 原始element组件change事件
    inputChange () {
      this.updateValue()
    },
    // 向父级更新数据方法
    updateValue (noChange = false) {
      // 如果输入千分位符号 直接去掉
      this.inputValue = (this.inputValue + '').replace(/[,|，]/g, '')
      if (commonUtils.isNull(this.inputValue) || isNaN(this.inputValue)) {
        this.inputValue = ''
      } else if ((this.inputValue + '').split('.')[0].length > 16 - this.dp) {
        // 超15位直接设置为999999999999999
        this.inputValue = 999999999999999
      } else {
        this.inputValue = Number(this.inputValue)
        if (!commonUtils.isNull(this.dp)) {
          Math.round(this.inputValue, this.dp)
          // toFixed会遵从四舍六入五取偶  https://blog.csdn.net/txf666/article/details/121399833
          // this.inputValue = this.inputValue.toFixed(this.dp)
          this.inputValue =
            Math.round(this.inputValue * Math.pow(10, this.dp)) /
            Math.pow(10, this.dp)
        }
      }
      const outNumber =
        commonUtils.isNull(this.inputValue) || isNaN(this.inputValue)
          ? ''
          : Number(this.inputValue)
      if (outNumber !== this.value) {
        this.$emit('update:value', outNumber)
        // 向外传递变化
        if (!noChange) {
          this.$emit('change', outNumber)
        }
      }

      this.inputValue = outNumber
      this.begin = false
    },
    documentClick (ev) {
      /**
       * e !== ev 用来阻止第一次的冒泡穿透
       * !ev.path.includes(this.$refs.elinput.$el) 判断当前点击的dom链上没有组件
       * 则判定没有点击到组件
       */
      // debugger
      // if (e !== ev && !ev.path.includes(this.$refs.elinput.$el)) { // ev.path 废弃了  新浏览器不支持
      if (
        this.e !== ev &&
        !ev.composedPath().includes(this.$refs.elinput.$el)
      ) {
        debugger
        this.begin = false
        document.removeEventListener('click', this.documentClick)
      }
    },
    // 开始修改数据  不允许阻塞click事件向上传递
    beginOn (e) {
      debugger
      this.e = e
      this.begin = true
      this.$nextTick(() => {
        this.$refs.elinput.focus()
      })
      document.addEventListener('click', this.documentClick)
    }
  },
  destroyed () {
    document.removeEventListener('click', this.documentClick)
  }
}
</script>
<style lang="scss">
.format-input {
  border: 1px solid #dcdfe6;
  height: 28px;
  line-height: 28px;
  border-radius: 4px;
  width: 100%;
}
.format-div {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  font-size: 12px;
  box-sizing: border-box;
}

.disable {
  background: rgb(245, 247, 250);
  color: rgb(192, 196, 204);
}
</style>
