/*
 * @Author: zd
 * @Date: 2023-08-30 14:27:04
 * @LastEditors: zd
 * @LastEditTime: 2023-08-31 08:18:53
 * @FilePath: \demo-vue2\src\directives\formTab.js
 * @Description: formTab功能，针对el-form，进行tab切换
 */
import commonUtils from '@/utils/commonUtils'

const commonSelector =
  '.el-form-item__content .el-input:not(.is-disabled):not([style*="display: none"])  .el-input__inner'
const formatSelector =
  '.el-form  .format-input .format-div:not(.disable):not([style*="display: none"])'
const formatInputSelector =
  '.el-form-item__content .format-input:not(:has(.format-div.disable)) .el-input .el-input__inner'
const preventDefaultTab = e => {
  if (e.key === 'Tab') e.preventDefault()
}
// 缓存当前的序号，当碰到失焦时调用
let curIndexCache = 0

const initInputIndex = el => {
  document.addEventListener('keydown', preventDefaultTab)
  const inputs = el.querySelectorAll(`${commonSelector},${formatInputSelector}`)
  // 格式化dom
  inputs.forEach((ele, index) => {
    ele.dataset.inputIndex = index
  })
}

let tabKeyWhenBlurHandle = null
const createTabKeyWhenBlur = el => {
  tabKeyWhenBlurHandle = e => {
    if (e.key === 'Tab') {
      const targets = el.querySelectorAll(`${commonSelector},${formatSelector}`)
      const curIndex = document.activeElement?.dataset?.inputIndex
      if (commonUtils.isNull(curIndex)) {
        if (curIndexCache !== 0) curIndexCache++
        if (curIndexCache >= targets.length) curIndexCache = 0
        targets[curIndexCache].click()
        targets[curIndexCache].focus()
      }
    }
  }
  return tabKeyWhenBlurHandle
}

let tabKeyWhenFocusHandle = null
const createTabKeyWhenFocus = el => {
  tabKeyWhenFocusHandle = e => {
    if (e.key === 'Tab') {
      const targets = el.querySelectorAll(`${commonSelector},${formatSelector}`)
      let curIndex = document.activeElement?.dataset?.inputIndex
      curIndex++
      curIndexCache = curIndex
      console.log(curIndex)
      if (curIndex >= targets.length) curIndex = 0
      targets[curIndex].click()
      targets[curIndex].focus()
    }
  }
  return tabKeyWhenFocusHandle
}

export default {
  bind (el) {
    // 当前form表单失焦时的监听
    document.addEventListener('keydown', createTabKeyWhenBlur(el))
    // 当前form表单的监听
    el.addEventListener('keydown', createTabKeyWhenFocus(el))
  },
  inserted (el) {
    curIndexCache = 0
    const inputs = el.querySelectorAll(
      `${commonSelector},${formatInputSelector}`
    )

    inputs.forEach(input => {
      input.addEventListener('blur', e => {
        // 失焦时更新当前焦点
        curIndexCache = e.target.dataset?.inputIndex
      })
    })
  },
  update (el, binding, vnode) {
    const vm = vnode.context.$root
    vm.$nextTick(() => initInputIndex(el))
  },
  unbind (el) {
    document.removeEventListener('keydown', preventDefaultTab)
    document.removeEventListener('keydown', tabKeyWhenBlurHandle)
    el.removeEventListener('keydown', tabKeyWhenFocusHandle)
  }
}
