<style scoped>
.gs-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #409eff;
  background-color: #000000;
  opacity: 0.5;
  z-index: 5000;
}
.gs-loading i {
  font-size: 24px;
  margin: 8px;
}
</style>

<template>
  <div class="gs-loading" v-show="isLoading">
    <i class="el-icon-loading"></i>
    <p>拼命加载中，请稍候···</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'gs-loading',
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>
