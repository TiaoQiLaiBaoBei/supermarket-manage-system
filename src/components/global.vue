<!--全局变量-->
<script>
import Vue from 'vue'

import 'moment/locale/zh-cn'

const moment = require('moment')

// 当前日期
const todayDate = moment().format('YYYY-MM-DD')
// 当前日期的年月日
const today = moment().format('YYYY年MM月DD日')
// 星期
const week = moment().format('dddd')
// 当前月第一天
const now = new Date()
const firstDayOfMonth = moment(now.setDate(1)).format('YYYY-MM-DD')

// 首页背景图片名称的集合
const backgroundImage = []

// 用户信息
const userInfo = {}

export default {
  todayDate,
  firstDayOfMonth,
  today,
  week,
  backgroundImage,
  userInfo
}
</script>
