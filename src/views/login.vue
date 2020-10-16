<style lang="scss">
.login {
  position: absolute;
  top: 0;
  left: 0;
  display: table;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);

  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }

  .login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  .login-box .user-box {
    position: relative;
  }

  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }

  .login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 10px;
    letter-spacing: 4px;
  }

  .login-box a:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
  }

  .login-box a span {
    position: absolute;
    display: block;
  }

  .login-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  .login-box a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  .login-box a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  .login-box a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }

  .login-but {
    float: right;
    font-size: 16px;
    margin: 10px;
  }
}
</style>
<template>
  <div class="login">
    <el-button type="text" class="login-but" @click="goBack">返回</el-button>
    <div class="login-box">
      <h2>会员登录</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" v-model="user.name" />
          <label>用户名</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" v-model="user.password" />
          <label>密码</label>
        </div>
        <!-- #App text-align: center; 影响了-->
        <a href="#" style="float: left;" @click="login">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          登录
        </a>
        <a
          class="register"
          style="float: right;"
          href="javascript:void(0)"
          target="_blank"
          seed="authcenter-register"
          title="免费注册"
          tabindex="6"
          >免费注册</a
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  props: {
    // 返回模式 close 关闭 back 返回
    returnMode: {
      type: String,
      required: false,
      default: 'back'
    }
  },
  data() {
    return {
      user: {}
    }
  },
  computed: {},
  methods: {
    /**
     * 用户登录(伪)。
     * @param {Oobject} user
     * @return {*} 登录成功关闭弹框or登录失败进行提示
     */
    login() {
      if (this.user.name === '跳起来丶宝贝' && this.user.password === '123') {
        this.$message.success('登录成功')
        this.$global.userInfo = this.user
        this.goBack()
      } else {
        this.$message.error('登录失败')
      }
    },
    /**
     * 关闭登录界面。
     * this.$emit 子组件向引用它的父组件派发关闭事件
     * 根据返回模式进行关闭还是返回的控制
     * @param {*} null
     */
    goBack() {
      if (this.returnMode === 'back') {
        this.$replace('/')
      } else {
        this.$emit('closeLogin')
      }
    }
  },
  mounted() {}
}
</script>
