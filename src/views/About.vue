<style lang="scss">
.about {
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: fixed;
    top: calc(50% - 100px);
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }
  .error-text {
    color: #030749;
    text-align: center;
  }
  .error-text .error-code {
    font-size: 150px;
    line-height: 170px;
    font-weight: 800;
    margin-bottom: 25px;
    color: #030749;
  }
  .error-text h3.error-message {
    color: #4a4a4a;
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
  }
  h1,
  h3 {
    font-family: 'Poppins', sans-serif;
    color: #0a0a0a;
    margin: 0 0 26px;
    line-height: 1.4;
  }

  .error-text form {
    position: relative;
    max-width: 400px;
    margin: 0 auto;
  }
  .el-autocomplete {
    position: relative;
    display: block;
  }
  .error-text form input {
    border: 1px solid #ddd;
    color: #444444;
    padding: 0 17px;
    height: 50px;
    line-height: 50px;
    width: 100%;
    border-radius: 5px;
    outline: none;
    margin-bottom: 30px;
    font-size: 18px;
  }
  .error-text form button {
    background: transparent;
    border: medium none;
    color: #666666;
    padding: 0 16px;
    height: 48px;
    line-height: 48px;
    position: absolute;
    right: 0px;
    top: 1px;
    z-index: 10;
    font-size: 20px;
    cursor: pointer;
    border-top-right-radius: 5px;
    outline: none;
    border-bottom-right-radius: 5px;
    transition: all 0.3s ease 0s;
  }
  .error-text form button:hover {
    background: #030749;
    color: #ffffff;
  }

  a {
    color: #f8560c;
    transition: all 0.3s ease 0s;
    text-decoration: none !important;
    outline: none !important;
  }
  a:active,
  a:hover {
    text-decoration: none;
    outline: 0 none;
    color: #f8560c;
  }
  .readon {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    height: 50px;
    line-height: 50px;
    padding: 0 34px;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    background: #f8560c;
    z-index: 1;
    border: none;
  }
  .readon:before {
    display: block;
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: '';
    color: #000 !important;
    background: #c54409;
    border-radius: 3px;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
  .readon:hover {
    background: #c54409;
    color: #ffffff;
    opacity: 0.99;
  }
  .readon:hover:before {
    top: 0%;
    bottom: auto;
    height: 100%;
  }
}
</style>
<template>
  <div class="about">
    <div class="container">
      <div class="error-text">
        <h1 class="error-code">404</h1>
        <h3 class="error-message">页面未找到！</h3>
        <!-- 当el-input标签放入el-form标签中时：
          1.只有一个el-input标签
          2.只有一个el-input标签和一个el-button标签
          以上两种情况会触发form表单默认提交刷新事件 -->
        <el-form @submit.native.prevent>
          <!-- <el-input v-model="searchValue" @keyup.enter.native="search"></el-input> -->
          <el-autocomplete
            class="inline-input"
            v-model="searchValue"
            value-key="value"
            placeholder="搜索..."
            :trigger-on-focus="false"
            :fetch-suggestions="querySearch"
            @select="handleSelect"
            @keyup.enter.native="search"
          ></el-autocomplete>
          <el-button type="primary" icon="el-icon-search" @click="search"></el-button>
        </el-form>
        <div class="back-home-btn">
          <a class="readon" href="/#/index">返回首页</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {},
  data() {
    return {
      restaurants: [
        { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
        { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' }
      ], // 资源数组
      searchValue: ''
    }
  },
  computed: {},
  methods: {
    /**
     * 返回输入建议的方法 通过调用callback来返回它
     * element 组件自带方法 :fetch-suggestions
     * @param {String} queryString 当前输入的搜索值
     * @param {*} callback 回调函数
     */
    querySearch(queryString, callback) {
      const results = queryString ? this.restaurants.filter(this.createFilter(queryString)) : this.restaurants
      callback(results)
    },
    /**
     * js filter() 把传入的函数依次作用于每个元素
     * toLowerCase() 字符串转换为小写
     * indexOf() 返回某个指定的字符串值在字符串中首次出现的位置 如果要检索的字符串值没有出现，则该方法返回 -1
     * @param {Object} restaurant 通常我们仅使用第一个参数，表示Array的某个元素
     * @param {String} queryString 搜索参数
     * @return {Boolean } true false
     */
    createFilter(queryString) {
      return element => element.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1
    },
    /**
     * 选中 input 中的文字。
     * element 组件自带方法 @select
     * @param {Object} item 自动捕捉选中后的对象
     */
    handleSelect(item) {
      console.log(item)
    },
    search() {
      console.log(this.searchValue)
    }
  },
  mounted() {}
}
</script>
