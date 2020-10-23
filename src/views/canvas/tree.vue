<style scoped></style>
<!-- tree.vue - 树，canvas -->
<template>
  <div class="container">
    <canvas ref="tree-canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null, // canvas元素
      width: 800, // canvas宽度
      height: 600, // canvas高度
      ctx: null, // canvas的绘制上下文
      tree: {
        // 树的一些配置
        angle: 30, // 分叉角度
        long: 90, // 每支长度
        color: '#888' // 树枝颜色
      },
      x: 100
    }
  },
  methods: {
    init() {
      // 初始化canvas状态
      this.canvas = this.$refs['tree-canvas']
      this.canvas.width = this.width
      this.canvas.height = this.height
      this.canvas.style.background = '#f5f5f5'
      if (this.canvas.getContext) {
        this.ctx = this.canvas.getContext('2d')
      } else {
        this.$message.error('您的浏览器不支持canvas绘画环境')
      }
    },

    debounce(methods, duration) {
      // 函数防抖（一个事件被不断快速触发时，不执行，只有当延迟一段时间后才会执行），例如scroll事件是在滚动过程中不断触发的，如果事件处理函数比较复杂，或者存在dom操作，会占用大量的资源，增加浏览器压力，所以，在确定滚动结束后再执行事件处理函数。又或者resize事件等。
      let timer = null
      return () => {
        const context = this
        // eslint-disable-next-line prefer-rest-params
        const args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
          methods.apply(context, args)
        }, duration)
      }
    },
    srollHandler() {
      // 真正的事件处理函数
      console.log('执行事件处理函数了')
    },

    throttle(methods, duration) {
      // 函数节流，—— 上面的函数防抖，连续多次触发事件而无动于衷，只有最后事件完全结束后一定时间，才执行一次处理函数，有时候不是我们需要的，例如还是scroll事件，假设内部有一个元素，他的滚动条需要和页面滚动同步，那么有可能出现的问题是，页面滚动时，他无动于衷，只有页面滚动结束后，这个元素的滚动条才突然跳动一下，跳到他该去的位置，而出现不流畅感。函数节流正是为解决这一问题而生：
      // 函数节流，类似水龙头的控制，将水滴频率进行控制，使间隔一定时间就滴下一滴。既不会不断滴下（不断触发事件，浪费性能，函数防抖里面已经说过），也不会不滴水，只在最后滴下一滴。而是过程中每隔一个周期滴下一滴，使处理平滑又不浪费性能。
      console.log(11)
      let begin = new Date() // 初始时间
      return () => {
        const context = this
        // eslint-disable-next-line prefer-rest-params
        const args = arguments
        const current = new Date() // 事件触发时的当前时间
        if (current - begin >= duration) {
          // 当前时间-初始设定时间，间隔大于设定的时间延迟，就要触发事件，并更新开始时间为本次的当前时间，从而形成周期。
          methods.apply(context, args)
          begin = current
        }
      }
    }
  },
  mounted() {
    this.init()
    window.addEventListener('scroll', this.debounce(this.srollHandler, 300), false) // 函数防抖
    window.addEventListener('scroll', this.throttle(this.srollHandler, 300), false) // 函数节流
  }
}
</script>
