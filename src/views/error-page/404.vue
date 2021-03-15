<style lang="scss">
.Page404 {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div class="Page404">{{ msg }}</div>
</template>

<script>
export default {
  name: 'Page404',
  data() {
    return {
      msg: 'a123'
    }
  },
  computed: {},
  methods: {},
  // 创建前后钩子函数
  beforeCreate() {
    console.log('比方科锐At')
  },
  created() {
    console.log('科锐At的')
  },
  // 载入前后钩子函数
  beforeMount() {
    console.log('比方盲特')
  },
  mounted() {
    console.log('盲忒的')
  },
  // 更新前后钩子函数
  beforeUpdate() {
    console.log('比方阿婆德特')
  },
  updated() {
    console.log('阿婆德特的')
  },
  // 销毁前后钩子函数
  beforeDestroy() {
    console.log('比方抵死拽')
  },
  destroyed() {
    console.log('抵死拽的')
  }
}
</script>
