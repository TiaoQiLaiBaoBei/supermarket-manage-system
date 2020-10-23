<style lang="scss">
.canvas-module {
  width: 100%;
  height: 100%;

  .content-wrap {
    width: 100%;
    height: 80%;
    padding: 10px;
    min-height: 600px;
    margin-bottom: 15px;
  }
  .btns {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    background: #ebeef5;
  }
}
</style>
<template>
  <div class="canvas-module">
    <div class="content-wrap">
      <component :is="curView"></component>
    </div>
    <div class="btns">
      <el-button type="primary" plain @click="changeContent('signatureBoard')">签字板</el-button>
      <el-button type="primary" plain @click="changeContent('Particle')">图形粒子化</el-button>
      <!-- <el-button type="primary" plain @click="changeContent('Tree')">canvas树</el-button> -->
    </div>
  </div>
</template>

<script>
import signatureBoard from '../canvas/signature-board.vue'
import Particle from '../canvas/particle.vue'
import Tree from '../canvas/tree.vue'

export default {
  name: 'canvas-module',
  components: { signatureBoard, Particle, Tree },
  data() {
    return {
      curView: ''
    }
  },
  computed: {},
  methods: {
    /**
     * 通过改变component标签内is值，实现动态组件的效果。
     * @param name 组件的名称
     * @return this.curView 属性改变值
     */
    changeContent(name) {
      if (name) {
        this.curView = name
      } else {
        this.curView = ''
      }
    }
  },
  mounted() {}
}
</script>
