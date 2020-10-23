<style lang="scss">
.signature-board {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div class="signature-board">
    <canvas
      width="400"
      height="400"
      style="top: 10px;border: solid 1px #ccc;"
      ref="signatureBoard"
      @mousedown="canvasDown($event)"
      @mousemove="canvasMove($event)"
      @mouseup="canvasUp($event)"
      @mouseleave="canvasLeave($event)"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'signature-board',
  components: {},
  data() {
    return {
      canvas: null, // canvas元素
      ctx: null, // canvas的绘制上下文
      canvasMoveUse: false
    }
  },
  computed: {},
  methods: {
    canvasDown(e) {
      this.canvasMoveUse = true
      const canvasX = e.clientX - e.target.offsetLeft
      const canvasY = e.clientY - e.target.offsetTop + document.documentElement.scrollTop
      this.ctx.beginPath()
      this.ctx.moveTo(canvasX, canvasY)
    },
    canvasMove(e) {
      if (this.canvasMoveUse) {
        // 只有允许移动时调用
        const t = e.target
        const canvasX = e.clientX - t.offsetLeft
        const canvasY = e.clientY - t.offsetTop + document.documentElement.scrollTop
        this.ctx.lineTo(canvasX, canvasY)
        this.ctx.stroke()
      }
    },
    canvasUp(e) {
      this.canvasMoveUse = false
    },
    canvasLeave(e) {
      this.canvasMoveUse = false
    },
    // 清空画布内容
    clear() {
      console.log('清除画布')
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    },
    init() {
      // 指定canvas
      this.canvas = this.$refs.signatureBoard
      if (this.canvas.getContext) {
        this.ctx = this.canvas.getContext('2d')
      } else {
        this.$message.error('您的浏览器不支持canvas绘画环境')
      }
    }
  },
  // 采用keep-alive 实例销毁之前调用不生效
  beforeDestroy() {},
  // 组件失活。。。
  deactivated() {
    this.clear()
  },
  mounted() {
    this.init()
  }
}
</script>
