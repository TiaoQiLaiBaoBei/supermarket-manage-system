/* eslint-disable no-redeclare */
/* eslint-disable no-plusplus */
/* eslint-disable vars-on-top */
/* eslint-disable block-scoped-var */
/* eslint-disable no-multi-assign */
/* eslint-disable no-var */
/* eslint-disable func-names */
/* eslint-disable no-use-before-define */

export function utilityClock(container) {
  const dynamic = container.querySelector('.dynamic')
  const hourElement = container.querySelector('.hour')
  const minuteElement = container.querySelector('.minute')
  const secondElement = container.querySelector('.second')

  const minute = function(n) {
    return n % 5 === 0 ? minuteText(n) : minuteLine(n)
  }

  var minuteText = function(n) {
    const element = document.createElement('div')
    element.className = 'minute-text'
    element.innerHTML = (n < 10 ? '0' : '') + n
    position(element, n / 60, 135)
    dynamic.appendChild(element)
  }

  var minuteLine = function(n) {
    const anchor = document.createElement('div')
    anchor.className = 'anchor'
    const element = document.createElement('div')
    element.className = 'element minute-line'
    rotate(anchor, n)
    anchor.appendChild(element)
    dynamic.appendChild(anchor)
  }

  const hour = function(n) {
    const element = document.createElement('div')
    element.className = `hour-text hour-${n}`
    element.innerHTML = n
    position(element, n / 12, 105)
    dynamic.appendChild(element)
  }

  var position = function(element, phase, r) {
    const theta = phase * 2 * Math.PI
    element.style.top = `${(-r * Math.cos(theta)).toFixed(1)}px`
    element.style.left = `${(r * Math.sin(theta)).toFixed(1)}px`
  }

  var rotate = function(element, second) {
    element.style.transform = element.style.webkitTransform = `rotate(${second * 6}deg)`
  }

  var animate = function() {
    const now = new Date()
    const time = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds() * 1 + now.getMilliseconds() / 1000
    rotate(secondElement, time)
    rotate(minuteElement, time / 60)
    rotate(hourElement, time / 60 / 12)
    requestAnimationFrame(animate)
  }

  for (var i = 1; i <= 60; i++) minute(i)
  for (var i = 1; i <= 12; i++) hour(i)
  animate()
}

export function autoResize(element, nativeSize) {
  const update = function() {
    const scale = Math.min(window.innerWidth, window.innerHeight) / nativeSize
    element.style.transform = element.style.webkitTransform = `scale(${scale.toFixed(3)})`
  }
  update()
  window.addEventListener('resize', update)
}

// 以对象形式导出，最终以对象.方法进行使用
export default {
  utilityClock,
  autoResize
}
