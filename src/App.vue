<style lang="scss">
// scss 新的专门的编程语言，编译后形成正常的css文件
// 在打包时生成浏览器可识别的css文件
// @import './test.scss'; 导入外部scss文件
// 全局变量是元素外声明的变量，局部变量是在元素里声明的变量，重复声明时局部变量会覆盖全局变量
// 局部变量值后加上 !global 关键词可以使得局部变量变成全局变量
// 声明默认变量 $color
$color: red !default;
#app {
  $color: #2c3e50;
  // 对字体进行抗锯齿渲染可以使字体看起来会更清晰舒服
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;

  ::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: grey;
  }
  .router-container {
    width: 100%;
    height: 100%;
  }
  .el-dialog-div {
    height: 58vh;
  }

  // 打赏的css
  .myRewards {
    position: fixed;
    right: 0;
    top: 12%;
    width: 0px;
    z-index: 5000;
    padding-left: 34px;
    overflow: hidden;
    box-sizing: content-box;
  }
  .myRewards a {
    color: #000;
    text-decoration: none;
    outline: 0 none;
  }
  .btn-myRewards {
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -46px;
    width: 34px;
    height: 93px;
  }
  .myRewards img {
    border: 0;
    display: block;
  }
  .myRewards-main {
    width: 240px;
    height: 332px;
    font: 12px/1.5 'microsoft yahei', tahoma, arial, sans-serif;
    color: #000;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-right: none;
  }
  .myRewards-main .myR-h {
    padding: 0 0 0 6px;
    font-size: 14px;
    font-weight: normal;
    background-image: none;
  }
  .myR-h,
  .myR-bot {
    margin: 0;
    height: 26px;
    line-height: 26px;
    background-color: #e7e7e7;
  }
  .myRewards-main .myR-bot {
    padding-right: 6px;
    font-size: 12px;
    text-align: right;
  }
  .myRewardsbox {
    font-size: 0;
    background-color: #eeeeee;
    width: 240px;
  }
  .myRewards-list {
    display: inline-block;
    vertical-align: middle;
    width: 90px;
    font-size: 12px;
    // 兼容IE
    *display: inline;
    *zoom: 1;
  }
  .myRewards-list ul.not-full {
    border-top: 1px solid #dfdfdf;
  }
  .myRewards-list ul {
    list-style: none;
  }
  .myRewards ul,
  .myRewards li {
    margin: 0;
    padding: 0;
  }
  .myRewards-list .myR-on {
    border-right: none;
  }
  .myRewards-list li {
    display: block;
    height: 56px;
    -webkit-transition: background-color 0.2s linear;
    transition: background-color 0.2s linear;
  }
  .myRewards-list .myR-on a,
  .myRewards-list .myR-on a:hover {
    background-color: #fff;
  }
  .myRewards-list a {
    position: relative;
    display: block;
    padding-left: 40px;
    height: 55px;
    line-height: 55px;
    font-size: 12px;
    border-bottom: 1px solid #cccccc;
  }
  .myRewards-list a img {
    position: absolute;
    left: 6px;
    top: 13px;
    width: 30px;
    height: 30px;
  }
  .myRewards-detail {
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    height: 280px;
    font-size: 12px;
    background-color: #fff;
    *display: inline;
    *zoom: 1;
  }
  .myRewards-ubox {
    padding: 14px 0 0 10px;
  }
  .myRewards-code-tit {
    margin: 0 0 20px;
    width: 132px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
  }
  .myRewards-code {
    margin: 0 0 20px;
    padding: 12px;
    width: 106px;
    height: 106px;
    box-sizing: content-box;
  }
  .myRewards-code img {
    width: 106px;
    height: 106px;
  }
  .myRewards-account {
    font-size: 12px;
    word-break: break-all;
    text-align: center;
  }

  // 底部样式
  .footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    background: #12131a;
    width: 100%;
    float: left;
    font-size: 12px;
    line-height: 1.8em;
    text-align: center;
    padding: 10px 0;
    height: 40px;
  }
  .footer p {
    margin: 0;
    padding: 0;
  }
  .footer a {
    color: #ffffff;
    text-decoration: none;
    padding: 0 10px;
    opacity: 0.6;
  }
  .footer span {
    color: #ffffff;
    padding: 0;
    opacity: 0.6;
  }
  .footer .copyright {
    font-size: 14px;
    color: #ffffff;
    opacity: 0.8;
  }
}
</style>

<template>
  <div id="app">
    <div class="router-container">
      <keep-alive :max="keepAliveMax" :include="keepLive">
        <router-view />
      </keep-alive>
    </div>
    <!-- 打赏内容 -->
    <div
      id="myRewards"
      class="myRewards"
      :style="{ width: rewardsWidth }"
      @mouseover="rewardsWidth = '240px'"
      @mouseout="rewardsWidth = '0px'"
    >
      <!-- href="javascript:;" -->
      <a class="btn-myRewards" href="javascript:void(0)">
        <img class="png" src="./assets/rewards/tab.bmp" alt="打赏" />
      </a>
      <div class="myRewards-main">
        <h1 class="myR-h">您的支持是我最大的动力！</h1>
        <!-- 打赏支付图片 -->
        <div class="myRewardsbox">
          <div class="myRewards-list">
            <ul class="not-full">
              <li :class="[rewardsType === '1' ? 'myR-on' : '']" @mouseover="rewardsType = '1'">
                <a href="javascript:;">支付宝<img class="png" src="./assets/rewards/alipay.bmp" alt="支付宝"/></a>
              </li>
              <li :class="[rewardsType === '2' ? 'myR-on' : '']" @mouseover="rewardsType = '2'">
                <a href="javascript:;">微信<img class="png" src="./assets/rewards/weixin.bmp" alt="微信"/></a>
              </li>
            </ul>
          </div>
          <div class="myRewards-detail">
            <div class="myRewards-ubox">
              <p class="myRewards-code-tit">扫描二维码打赏</p>
              <div class="myRewards-code">
                <!-- 非静态路径下只能v-show分开绑定 -->
                <img v-show="rewardsType === '1'" src="./assets/rewards/zfb.png" alt="暂无图片" />
                <img v-show="rewardsType === '2'" src="./assets/rewards/weixin.png" alt="暂无图片" />
                <!-- img 绑定src 一、后端路径 二、静态路径:与src同一级别的文件夹下-->
                <!-- <img :src="imgUrl" alt="暂无图片" /> -->
              </div>
              <p class="myRewards-account">{{ account }}</p>
            </div>
          </div>
        </div>
        <p class="myR-bot"><a :href="learnMoreLink" target="_blank">了解更多</a></p>
      </div>
    </div>
    <!-- 底部信息区 -->
    <div class="footer halo-report-exposure-only" id="footer" data-first_column="8413010" data-slot="-1" tracking="">
      <p>
        <template v-for="(item, index) in navigationList">
          <a rel="nofollow" class="halo-report-click-only" :key="index" :data-slot="item.code" :href="item.link">
            {{ item.name }}
          </a>
          <span :key="item.code" v-if="index !== navigationList.length - 1">|</span>
        </template>
      </p>
      <p class="copyright">{{ $parameter.copyright }}</p>
    </div>
    <!-- 全局loading -->
    <gs-loading></gs-loading>
  </div>
</template>

<script>
export default {
  // 1、App.vue是我们的主组件，页面入口文件 ，所有页面都是在App.vue下进行切换的。
  // --也是整个项目的关键，app.vue负责构建定义及页面组件归集。
  // 2、name的三种作用: 调试、keep-alive、组件的递归调用(不常用)
  // 3、keep-alive 中 include(exclude不缓存) 字符串或正则表达式。只有名称匹配的组件会被缓存。
  // --匹配的规则为name。例如：include="['app', 'index']" name为app,index的界面会被缓存
  name: 'app',
  components: {},
  data() {
    return {
      rewardsWidth: '0px', // 打赏div的默认宽度-根据光标是否在此div实现动态变化。
      rewardsType: '1', // 打赏类型 1、支付宝 2、微信
      learnMoreLink: this.$parameter.learnMoreLink, // 了解更多链接
      navigationList: this.$parameter.navigationbar, // 底部导航栏数据源
      keepAliveMax: 10 // 最多可以缓存多少组件实例。
    }
  },
  computed: {
    // 打赏类型对应中文
    account() {
      let flag
      if (this.rewardsType === '1') {
        flag = '支付宝打赏'
      } else {
        flag = '微信打赏'
      }
      return flag
    },
    keepLive() {
      // 此处使用 store getters 计算过的 keepLive 数组
      // 在store拿到routes，循环出meta里面带有keepAlive:true的route的name放到keepLive
      return this.$store.getters.keepLive
    }
  }
}
</script>
