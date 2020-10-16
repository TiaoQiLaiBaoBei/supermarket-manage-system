/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
/* eslint-disable no-const-assign */
/* eslint-disable no-array-constructor */
/* eslint-disable consistent-return */
// 定义API接口 require用于引入模块
// const BIN = require('@/bankcardinfo') {方式二}
import BIN from 'bankcardinfo'

/**
 * 判断一个对象是否是数组，参数不是对象或者不是数组，返回false
 *
 * @param {Object} arg 需要测试是否为数组的对象
 * @return {Boolean} 传入参数是数组返回true，否则返回false
 */
function isArray(arg) {
  if (typeof arg === 'object') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return false
}

/**
 * 传入卡号得到银行卡信息
 *
 * @param {String} vlaue 卡号
 * @param {*} callback
 * @return {Object} 携带errMsg的银行卡信息
 */
export function getBankBinAll(vlaue, callback) {
  let item = { errMsg: '' }
  BIN.getBankBin(vlaue, (err, data) => {
    if (!err) {
      item = data
    } else {
      item.errMsg = err
    }
    callback(item)
  })
}

/**
 * 随机返回一个数组中的某一值。
 *
 * @param {Object} array 一个数组的对象
 * @param {*} callback
 * @return {Object} array[index] 随机的数组值
 */
export function getArrayRandom(array, callback) {
  if (isArray(array)) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }
  console.log('请传入数组')
}

/**
 * 随机返回一个数组中的某一值。
 *
 * @param {String} date 日期
 * @param {*} callback
 * @return {String} 农历
 */
export function lunarCalendar(date, callback) {
  const CalendarData = new Array(100)
  const madd = new Array(12)

  const tgString = '甲乙丙丁戊己庚辛壬癸'
  const dzString = '子丑寅卯辰巳午未申酉戌亥'
  const numString = '一二三四五六七八九十'
  const monString = '正二三四五六七八九十冬腊'
  const sx = '鼠牛虎兔龙蛇马羊猴鸡狗猪'

  let cYear
  let cMonth
  let cDay
  let TheDate

  CalendarData = new Array(
    0xa4b,
    0x5164b,
    0x6a5,
    0x6d4,
    0x415b5,
    0x2b6,
    0x957,
    0x2092f,
    0x497,
    0x60c96,
    0xd4a,
    0xea5,
    0x50da9,
    0x5ad,
    0x2b6,
    0x3126e,
    0x92e,
    0x7192d,
    0xc95,
    0xd4a,
    0x61b4a,
    0xb55,
    0x56a,
    0x4155b,
    0x25d,
    0x92d,
    0x2192b,
    0xa95,
    0x71695,
    0x6ca,
    0xb55,
    0x50ab5,
    0x4da,
    0xa5b,
    0x30a57,
    0x52b,
    0x8152a,
    0xe95,
    0x6aa,
    0x615aa,
    0xab5,
    0x4b6,
    0x414ae,
    0xa57,
    0x526,
    0x31d26,
    0xd95,
    0x70b55,
    0x56a,
    0x96d,
    0x5095d,
    0x4ad,
    0xa4d,
    0x41a4d,
    0xd25,
    0x81aa5,
    0xb54,
    0xb6a,
    0x612da,
    0x95b,
    0x49b,
    0x41497,
    0xa4b,
    0xa164b,
    0x6a5,
    0x6d4,
    0x615b4,
    0xab6,
    0x957,
    0x5092f,
    0x497,
    0x64b,
    0x30d4a,
    0xea5,
    0x80d65,
    0x5ac,
    0xab6,
    0x5126d,
    0x92e,
    0xc96,
    0x41a95,
    0xd4a,
    0xda5,
    0x20b55,
    0x56a,
    0x7155b,
    0x25d,
    0x92d,
    0x5192b,
    0xa95,
    0xb4a,
    0x416aa,
    0xad5,
    0x90ab5,
    0x4ba,
    0xa5b,
    0x60a57,
    0x52b,
    0xa93,
    0x40e95
  )
  madd[0] = 0
  madd[1] = 31
  madd[2] = 59
  madd[3] = 90
  madd[4] = 120
  madd[5] = 151
  madd[6] = 181
  madd[7] = 212
  madd[8] = 243
  madd[9] = 273
  madd[10] = 304
  madd[11] = 334

  function GetBit(m, n) {
    return (m >> n) & 1
  }

  function e2c() {
    TheDate = arguments.length !== 3 ? new Date() : new Date(arguments[0], arguments[1], arguments[2])

    let total
    let m
    let n
    let k

    let isEnd = false
    let tmp = TheDate.getYear()

    if (tmp < 1900) {
      tmp += 1900
    }

    total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38

    if (TheDate.getYear() % 4 === 0 && TheDate.getMonth() > 1) {
      total++
    }

    for (m = 0; ; m++) {
      k = CalendarData[m] < 0xfff ? 11 : 12
      for (n = k; n >= 0; n--) {
        if (total <= 29 + GetBit(CalendarData[m], n)) {
          isEnd = true
          break
        }
        total = total - 29 - GetBit(CalendarData[m], n)
      }
      if (isEnd) break
    }

    cYear = 1921 + m
    cMonth = k - n + 1
    cDay = total

    if (k === 12) {
      if (cMonth === Math.floor(CalendarData[m] / 0x10000) + 1) {
        cMonth = 1 - cMonth
      }
      if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
        cMonth--
      }
    }
  }

  function GetcDateString() {
    let tmp = ''

    tmp += tgString.charAt((cYear - 4) % 10)
    tmp += dzString.charAt((cYear - 4) % 12)
    tmp += '('
    tmp += sx.charAt((cYear - 4) % 12)
    tmp += ')年 '

    if (cMonth < 1) {
      tmp += '(闰)'
      tmp += monString.charAt(-cMonth - 1)
    } else {
      tmp += monString.charAt(cMonth - 1)
    }

    tmp += '月'
    tmp += cDay < 11 ? '初' : cDay < 20 ? '十' : cDay < 30 ? '廿' : '三十'

    if (cDay % 10 !== 0 || cDay === 10) {
      tmp += numString.charAt((cDay - 1) % 10)
    }

    return tmp
  }

  function GetLunarDay(solarYear, solarMonth, solarDay) {
    if (solarYear < 1921 || solarYear > 2020) {
      return ''
    }

    solarMonth = parseInt(solarMonth) > 0 ? solarMonth - 1 : 11
    e2c(solarYear, solarMonth, solarDay)
    return GetcDateString()
  }

  function showCal() {
    const nonglitime = GetLunarDay('2020', '09', '16')
    return nonglitime
  }

  console.log(showCal)

  return showCal
}

// 以对象形式导出，最终以对象.方法进行使用
export default {
  getBankBinAll,
  getArrayRandom
}
