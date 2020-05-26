<template>
  <div class="HeaderBody sticky-top">
    <b-navbar class="navbar" toggleable="sm" type="dark" variant="dark" fixed="top" :sticky="sticky">
      <b-navbar-brand tag="h1" to="/">智股</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">首页</b-nav-item>
          <b-nav-item to="/info">快讯</b-nav-item>
          <b-nav-item to="/data">市场数据</b-nav-item>
          <b-nav-item to="/">模型分析</b-nav-item>
          <b-nav-item href="#">论坛</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-navbar-nav v-if="!isLogin">
            <b-nav-item href="" @click="goLogin"><b-icon-people-circle></b-icon-people-circle>登陆/注册</b-nav-item>
            <!-- <b-nav-item to="/register">注册</b-nav-item> -->
          </b-navbar-nav>
          <b-nav-item-dropdown right v-else>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-avatar size="sm" variant="info" src="https://placekitten.com/300/300" class="mr-1"></b-avatar>小车
            </template>
            <b-dropdown-item class="item-dropdown" :to="{ name: 'strategy' }"><b-icon icon="house-door" class="mr-1"></b-icon>个人主页</b-dropdown-item>
            <b-dropdown-item class="item-dropdown" href="#"><b-icon icon="box-arrow-in-right" class="mr-1"></b-icon>退出登录</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div :class="{popmodal: isPop}" v-show="isPop">
      <b-row>
        <b-col cols="12" md="4" sm="12" offset-md="4" offset-sm="0">
          <div class="login" md="3" v-if="loginStyle=='phonenumber'">
            <div class="close closePop" @click="goLogin">X</div>
            <div class="aiguName">AI 智股</div>
            <div>
              <div class="verificationCode mb-3">验证码登录/注册</div>
              <b-form>
                <b-form-input size="sm" v-model="form.phonenumber" placeholder="输入手机号"></b-form-input>
                <b-row class="mt-3 mb-3">
                  <b-col sm="8">
                    <b-form-input size="sm" v-model="form.numberCode" placeholder="验证码"></b-form-input>
                  </b-col>
                  <b-col sm="4">
                    <a href="" class="numberCode">获取验证码</a>
                  </b-col>
                </b-row>
                <b-button block variant="primary" size="sm">登录</b-button>
              </b-form>
            </div>
            <div class="passwordLogin mt-2 mb-3">
              <a href="" @click.prevent="goPassword" class="float-left">密码登录></a>
              <a href="" @click.prevent="goRegister" class="float-right">没有账号/注册></a>
            </div>
          </div>
          <div class="login" md="3" v-else-if="loginStyle=='password'">
            <div class="close closePop" @click="goLogin">X</div>
            <div class="aiguName">AI 智股</div>
            <div>
              <div class="verificationCode mb-3">密码登录</div>
              <b-form>
                <b-form-input size="sm" v-model="form.phonenumber" placeholder="手机/邮箱/用户名"></b-form-input>
                <b-form-input size="sm" v-model="form.phonenumber" placeholder="密码" class="mt-3 mb-3"></b-form-input>
                <b-button block variant="primary" size="sm">登录</b-button>
              </b-form>
            </div>
            <div class="passwordLogin mt-2 mb-5">
              <a href="" @click.prevent="goPhone" class="float-left text-secondary">忘记密码?</a>
              <a href="" @click.prevent="goPhone" class="float-right">验证码登录></a>
            </div>
          </div>
          <div class="login" md="3" v-else-if="loginStyle=='register'">
            <div class="close closePop" @click="goLogin">X</div>
            <div class="aiguName">AI 智股</div>
            <div>
              <div class="mb-3 text-center">完善信息，开启量化之路</div>
              <b-form>
                <b-form-input size="sm" v-model="form.phonenumber" placeholder="用户名，必填，3-16位字母，数字"></b-form-input>
                <b-form-input type="password" size="sm" v-model="form.phonenumber" placeholder="密码，必填，6-21位字母+数字/符号组合密码" class="mt-3 mb-3"></b-form-input>
                <b-form-input size="sm" v-model="form.phonenumber" placeholder="邮箱，用于接收策略调仓信号" class="mb-3"></b-form-input>
                <b-button block variant="primary" size="sm">完成</b-button>
              </b-form>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      loginStyle: 'phonenumber',
      isPop: false,
      form: {
        phonenumber: '',
        numberCode: ''
      },
      sticky: true,
      isLogin: false,
      centerDialogVisible: false
    }
  },
  methods: {
    goLogin() {
      this.isPop =!this.isPop;
    },
    goPassword() {
      this.loginStyle = 'password'
    },
    goPhone() {
      this.loginStyle = 'phonenumber'
    },
    goRegister() {
      this.loginStyle = 'register'
    }
  },
}
</script>

<style scoped>
/* .navbar {
  padding: 0.5rem 8rem;
} */
.navbar {
  background-color: #101010 !important;
}
.item-dropdown {
  font-size: 14px;
}
.numberCode{
  text-decoration: none;
  font-size: .8rem;
}
.passwordLogin{
  text-align: center;
  font-size: .8rem;
}
.passwordLogin a{
  color: #dc3546;
  text-decoration: none;
  font-size: .5rem;
}
.closePop{
  font-weight: 450;
  font-size: 1.2rem;
  cursor: pointer;
}
.form-control-sm{
  font-size: .7rem;
}
</style>
<style>
.nav-link{
  font-size: 15px !important;
}
.dropdown-menu {
  min-width: 7rem;
}
.popmodal{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    padding: 80px 3% 0px;
    z-index: 10000;
}
.login{
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
}
.aiguName{
  text-align: center;
  font-size: 1.5rem;
  margin: 20px auto;
}
.verificationCode{
  font-size: .8rem;
  color: #cccccc;
}
</style>