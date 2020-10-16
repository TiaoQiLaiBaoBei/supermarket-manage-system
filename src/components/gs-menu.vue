<style lang="scss">
span {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.el-submenu__title:hover {
  background-color: #e5f9f4 !important;
  color: #ffd04b !important;
}
.el-menu-item:hover {
  background-color: #e5f9f4 !important;
  color: #ffd04b !important;
}
.el-menu-item.is-active {
  background-color: #30c5b2 !important;
}
</style>
<template>
  <!-- 用 fragment 这个技术的原因,主要是为了把fragment 当成根节点 然后循环 template 标签 -->
  <!-- 封装 导航栏 动态循环  element多层导航菜单-->
  <fragment>
    <template v-for="item in list">
      <template v-if="item[childrenField] && item[childrenField].length > 0">
        <el-submenu :key="item[idField]" :index="item[idField]" popper-class="headSelectNavMenu">
          <template slot="title">
            <i :class="item[iconField]"></i>
            <span>{{ item[labelField] }}</span>
          </template>
          <!-- 递归循环 -->
          <gs-menu :list="item[childrenField]" @menuClick="itemClick"></gs-menu>
        </el-submenu>
      </template>
      <!-- 选项 -->
      <template v-else>
        <el-menu-item :key="item[idField]" :index="item[idField]" @click="itemClick(item)">
          <i :class="item[iconField]"></i>
          <span>{{ item[labelField] }}</span>
        </el-menu-item>
      </template>
    </template>
  </fragment>
</template>
<script>
export default {
  name: 'gs-menu',
  props: {
    list: Array,
    idField: { type: String, default: 'id' },
    labelField: { type: String, default: 'name' },
    iconField: { type: String, default: 'icon' },
    childrenField: { type: String, default: 'children' }
  },
  components: {},
  methods: {
    itemClick(item) {
      this.$emit('menuClick', item)
    }
  },
  mounted() {}
}
</script>
