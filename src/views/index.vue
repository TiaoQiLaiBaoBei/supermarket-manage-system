<style lang="scss">
.index {
  width: 100%;
  height: 100%;

  @keyframes fade-in-down {
    0% {
      opacity: 0; /*初始状态 透明度为0*/
    }
    50% {
      opacity: 0.3; /*中间状态 透明度为0*/
    }
    100% {
      opacity: 1; /*结尾状态 透明度为1*/
    }
  }
  // 首页的css
  .main-header {
    position: absolute;
    top: 0;
    left: 0;
    display: table;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    text-align: center;
    background-size: cover;
    box-shadow: 0 1px 2px rgba(150, 150, 150, 0.7);
    background: center center / cover no-repeat rgb(34, 34, 34);
    overflow: hidden;
  }
  .vertical {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
  }
  .inner {
    position: relative;
    width: 80%;
    max-width: 800px;
    padding: 10px;
    margin: 0 auto;
  }
  .page-title {
    font-size: 3.5rem;
    font-family: 'Playball', cursive;
    letter-spacing: -1px; // 增加或减少字符间的空白（字符间距）
    font-weight: 700;
    color: #fff;
    -webkit-animation: fade-in-down 1s;
    animation: fade-in-down 1s both;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.5s;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  }
  .page-description {
    font-size: 1.2rem;
    line-height: 1.5em;
    -webkit-animation: fade-in-down 0.9s;
    animation: fade-in-down 0.9s both;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.3s;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    overflow: hidden;
    font-family: 'Long Cang', cursive;
  }
  .page-author {
    font-size: 0.9rem !important;
    line-height: 1.3em;
    font-family: 'Ubuntu Mono', monospace;
    -webkit-animation: fade-in-down 0.9s;
    animation: fade-in-down 0.9s both;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.3s;
  }
  .page-author,
  .page-description {
    margin: 0;
    letter-spacing: 0.01rem;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    display: none;
    font-weight: 400;
  }
  .arrow {
    position: absolute;
    bottom: 130px;
    left: 50%;
    width: 60px;
    height: 60px;
    line-height: 60px;
    margin-left: -30px;
    cursor: pointer;
    background-image: url('/down.png');
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: 1;
    animation: arrow 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
    -webkit-animation: arrow 3s cubic-bezier(0.5, 0, 0.1, 1) infinite;
  }
  .arrow:hover {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
  }
  @keyframes arrow {
    0%,
    100% {
      bottom: 150px;
      opacity: 1;
    }
    50% {
      bottom: 130px;
      opacity: 0.5;
    }
  }
  @-webkit-keyframes arrow {
    0%,
    100% {
      bottom: 150px;
      opacity: 1;
    }
    50% {
      bottom: 130px;
      opacity: 0.5;
    }
  }

  // 菜单-抽屉
  .menu-button {
    position: fixed;
    z-index: 1000;
    margin: 1em;
    padding: 0;
    width: 100px;
    height: 35px;
    text-indent: 0.3em;
    background: transparent;
    top: 10px;
    left: 10px;
    outline: 0;
    cursor: pointer;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 3px;
    font-size: 16px;
    text-transform: uppercase;
    line-height: 35px;
    padding-right: 13px;
    text-align: center;
  }
  .el-drawer__body {
    background-color: #3399dc;
    // background-color: black;
  }
  .el-drawer:focus {
    outline: none;
  }
  .clock {
    width: 100%;
    height: 35%;
    background-color: #3399dc;
  }
  // 登录弹框
  .el-dialog__header {
    padding: 0px;
  }
  .el-dialog__body {
    padding: 0px;
  }
  // 重要显示内容
  .nav {
    width: 80%;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
  }
  .entry .state {
    font-size: 12px;
    color: #bfbfbf;
  }
  .entry a {
    font-size: 12px;
    color: #fff;
    margin: 0 5px;
    text-decoration: none;
  }
  .entry a:hover {
    color: #00bbee;
  }
}
</style>
<template>
  <div class="index">
    <div class="container">
      <el-button class="menu-button" plain icon="el-icon-menu" @click="handleClick" size="medium">MENU</el-button>
      <!-- 抽屉 -->
      <el-drawer title="我是标题" :with-header="false" :visible.sync="drawer" direction="ltr" size="20%">
        <!-- 时间-日期 -->
        <div class="clock">
          <digital-clock></digital-clock>
        </div>
        <div style="margin-bottom: 10px;">
          <span style="color: white">{{ $global.today + $global.week }}</span>
        </div>
        <!-- 重要内容 goLogin-->
        <div class="nav">
          <!-- <el-button plain icon="el-icon-menu" @click="dialogVisible = true" size="medium"></el-button> -->
          <div class="entry" style="color: #fff;">
            <span class="state">{{ $global.userInfo.name ? '你好，' + $global.userInfo.name : '我已有账户' }}</span>
            <a
              v-show="!$global.userInfo.name"
              href="javascript:void(0)"
              @click="dialogVisible = true"
              target="_self"
              seed=""
            >
              快速登录
            </a>
          </div>
        </div>
      </el-drawer>
    </div>
    <!-- 登录的弹框 -->
    <el-dialog title="" :visible.sync="dialogVisible" :show-close="false" width="60%">
      <div class="el-dialog-div">
        <login ref="login" return-mode="close" @closeLogin="dialogVisible = false"></login>
      </div>
    </el-dialog>
    <!-- 界面显示 -->
    <div class="main-header" :style="{ backgroundImage: 'url(' + backgroundURL + ')' }">
      <div class="vertical">
        <div class="main-header-content inner">
          <h1 class="page-title" id="homeTopTitle">寒爵</h1>
          <h2 class="page-description" id="hitokoto" style="display: -webkit-box;">
            我们中有些人注定要在日常生活的点滴中寻找生命存在的意义。
          </h2>
          <h3 class="page-author" id="hitokotoAuthor" style="display: block;">
            Some of us may just have to find meaning in the little moments that make up life.
          </h3>
          <h1 class="sb-title" id="sbTitle"></h1>
          <p class="article-info" id="articleInfo"></p>
        </div>
      </div>
      <div class="arrow" @click="goHome"></div>
    </div>
  </div>
</template>

<script>
// import * as util from '../plugins/utils/getBankBinUtil' 以util.getBankBinAll()使用
// getBankBinAll('6222005865412565805', data => {})
import { getArrayRandom } from '../plugins/utils/customUtil'
import login from './login.vue'

export default {
  name: 'index',
  components: { login },
  data() {
    return {
      drawer: false, // 首页菜单打开抽屉控制字段
      dialogVisible: false, // 登录弹框-首页菜单跳转登录控制字段
      backgroundURL: ''
    }
  },
  computed: {},
  methods: {
    // 首页的菜单按钮-打开时间和登录显示
    handleClick(e) {
      let { target } = e
      if (target.nodeName === 'SPAN' || target.nodeName === 'I') {
        target = e.target.parentNode
      }
      // 移开选中状态
      target.blur()
      this.drawer = true
    },
    // 前往后台管理界面
    goHome() {
      this.$replace('/home')
    },
    // 每隔10秒获取一次背景图片
    getURL() {
      // 加载背景图片
      if (getArrayRandom(this.$global.backgroundImage)) {
        this.backgroundURL = `./wallpaper/${getArrayRandom(this.$global.backgroundImage)}`
      } else {
        this.backgroundURL = './wallpaper/home_top_bg.jpg'
      }
      // 根据配置参数-一分钟换一次背景图片
      setTimeout(this.getURL, this.$parameter.switchTime)
    },
    initialization() {
      this.getURL()
    }
  },
  mounted() {
    this.initialization()
  }
}
</script>
