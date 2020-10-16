/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
/*
 * 重写this.$message, 防止连续点击多次弹窗
 * 调用样例: this.$message.info('xxx')
 * */
import { Message } from 'element-ui'

// ES6引入的是一种新的原始数据类型Symbol，表示独一无二的，它是JavaScript的第七种数据类型。
const showMessage = Symbol('showMessage')

class DonMessage {
  success(options, single = true) {
    this[showMessage]('success', options, single)
  }

  warning(options, single = true) {
    this[showMessage]('warning', options, single)
  }

  info(options, single = true) {
    this[showMessage]('info', options, single)
  }

  error(options, single = true) {
    this[showMessage]('error', options, single)
  }

  [showMessage](type, options, single) {
    if (single) {
      // 判断是否已存在Message
      if (document.getElementsByClassName('el-message').length === 0) {
        // 修改参数
        if (type === 'error' || type === 'warning') {
          options = {
            message: options,
            duration: 1500,
            showClose: true
          }
        } else {
          options = {
            message: options,
            duration: 1000,
            showClose: true
          }
        }
        Message[type](options)
      }
    } else {
      options = {
        message: options,
        duration: 2000,
        showClose: true
      }
      Message[type](options)
    }
  }
}

export const newMessage = new DonMessage()
