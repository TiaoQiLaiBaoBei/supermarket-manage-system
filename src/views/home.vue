<style lang="scss">
.home {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100vh;
  max-height: calc(100vh - 60px);
  margin: 0;
  padding: 0;

  .home-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .home-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #30c5b2;

    .logo {
      font-size: 34px;
      text-align: center;
      text-decoration: none;
      color: white;
    }
    ul {
      display: flex;
      padding: 0;
      margin: 0;
      list-style-type: none;
      align-items: center;
    }
    ul li {
      position: relative;
      padding: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .user-portrait {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    ul li a {
      position: relative;
      color: white;
      font-family: Lato, sans-serif;
      text-decoration: none;
      transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }

  .el-menu {
    border-right: solid 0px #e6e6e6;
    text-align: left;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    min-height: 400px;
  }
  .el-main {
    padding: 0px;

    .tags-view {
      height: 40px;
      border-bottom: solid 1px #ccc;
      padding: 2px 5px;
      display: flex;
      align-items: center;

      .el-tag {
        height: 32px;
        line-height: 32px;
        cursor: pointer;
        margin-right: 5px;
        float: left;
        &:last-child {
          margin-right: 0;
        }
      }
    }

    .main-router-container {
      height: calc(100% - 45px);
    }
  }
}
</style>
<style>
/* 将el-popover内容进行旋转 */
.user-rotation {
  animation: rotate 15s linear infinite;
  -webkit-animation: rotate 15s linear infinite;
}
@keyframes rotate {
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
<template>
  <div class="home">
    <el-container class="home-container" direction="vertical">
      <el-header class="home-header">
        <a href="/#/index" class="logo">LOGO</a>
        <nav class="site-nav">
          <ul>
            <li></li>
            <li>
              <el-popover trigger="hover" width="150" placement="left">
                <el-image :src="require('@/assets/avatar.jpg')" fit="fill"></el-image>
                <el-image
                  slot="reference"
                  class="user-portrait"
                  :src="require('@/assets/avatar.jpg')"
                  fit="fill"
                ></el-image>
              </el-popover>
              <a @click="userDialogVisible = true">跳起来丶宝贝</a>
            </li>
            <li><el-switch v-model="isCollapse" active-color="yellow" inactive-color="#ff4949"> </el-switch></li>
          </ul>
        </nav>
        <!-- 用户信息以及版本信息的弹框 -->
        <el-dialog title="" :visible.sync="userDialogVisible" :show-close="false" width="60%">
          <div class="el-dialog-div"></div>
        </el-dialog>
      </el-header>
      <el-container style="height: calc(100% - 60px);">
        <el-aside width="auto" style="background-color: #ededed;">
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#ededed"
            text-color="black"
            active-text-color="#ffd04b"
            :unique-opened="true"
            :collapse="!isCollapse"
            :default-active="currentMenu.id"
          >
            <!-- :default-openeds="menus.map(({ id }) => id)" 会将所有菜单打开。 -->
            <gs-menu ref="menu" :list="menus" @menuClick="itemClick"></gs-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="tags-view">
            <el-tag
              v-for="(tag, index) in menuTags"
              :key="tag.id"
              closable
              type="success"
              :effect="tag.id === currentMenu.id ? 'dark' : 'light'"
              @click="itemClick(tag)"
              @close="delTag(tag, index)"
            >
              {{ tag.name }}
            </el-tag>
          </div>
          <div class="main-router-container">
            <keep-alive :max="keepAliveMax" :include="keepLiveHome">
              <router-view />
            </keep-alive>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      keepAliveMax: 10, // 最多可以缓存多少组件实例。
      isCollapse: true, // 折叠菜单
      userDialogVisible: false, // 用户信息的弹框
      menus: [
        {
          id: '1',
          icon: 'el-icon-location',
          name: '菜单一',
          path: '/',
          children: [
            {
              id: '1-1',
              icon: 'el-icon-location',
              name: 'Menu',
              path: '/mian/menu',
              children: [
                { id: '1-1-1', icon: 'el-icon-location', name: 'Menu', path: '/home/menu' },
                { id: '1-1-2', icon: 'el-icon-location', name: 'Home', path: '/home/home' },
                { id: '1-1-3', icon: 'el-icon-location', name: 'Table', path: '/home/table' }
              ]
            },
            { id: '1-2', icon: 'el-icon-location', name: 'Home', path: '/home/reward-module' },
            {
              id: '1-3',
              icon: 'el-icon-location',
              name: 'Table',
              path: '/mian/table',
              children: [
                { id: '1-3-1', icon: 'el-icon-location', name: 'Menu', path: '/home/menu' },
                { id: '1-3-2', icon: 'el-icon-location', name: 'Home', path: '/home/home' },
                { id: '1-3-3', icon: 'el-icon-location', name: 'Table', path: '/home/table' }
              ]
            }
          ]
        },
        {
          id: '2',
          icon: 'el-icon-setting',
          name: '导航四',
          path: '/home/reward-module',
          children: [
            {
              id: '2-1',
              icon: 'el-icon-setting',
              name: '导航测试',
              path: '',
              children: []
            }
          ]
        },
        {
          id: '4',
          icon: 'el-icon-setting',
          name: 'canvas学习',
          path: '/home/canvas-module',
          children: []
        }
      ], // 菜单数据源
      menuTags: [], // 点击过后的菜单列表
      currentMenu: {} // 当前菜单
    }
  },
  computed: {
    keepLiveHome() {
      return this.$store.getters.keepLiveHome
    }
  },
  methods: {
    itemClick(item, addTag = true) {
      if (item.path) {
        this.currentMenu = item
        if (addTag) this.addTag(item)
        this.$push(this.currentMenu.path)
      } else {
        console.log(item.name, '此菜单配置错误！！未设置访问路径')
      }
    },
    addTag(item) {
      if (!this.menuTags.find(({ id }) => id === item.id)) {
        this.menuTags.push(item)
      }
    },
    delTag(item, index) {
      const tags = this.menuTags
      // 定位当前元素的选中下标
      const fileIndex = (tags || []).findIndex(profile => profile.id === this.currentMenu.id)
      // 将关闭的元素移除
      tags.splice(index, 1)
      // 当前元素与移除元素一致
      if (fileIndex === index) {
        if (index > 0) index -= 1
        const nextItem = tags[index] || { path: '/home' }
        this.itemClick(nextItem, false)
      }
    }
  },
  mounted() {}
}
</script>
