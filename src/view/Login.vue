<template>
  <div class="main">
    <div class="login-logo">这里放logo图片</div>
    <ul class="tab-nav">
      <li>注册</li>
      <li>登录</li>
    </ul>
    <b-form class="tab-content">
      <b-form-input v-model="text" placeholder="手机号"></b-form-input>
      <b-form-input type="password" v-model="password" placeholder="请输入密码"></b-form-input>
      <b-button type="submit" block variant="primary">登录</b-button>
      <div class="other-login">
        <a href="#">使用手机验证码登录 ></a>
        <a href="#" class="forget-password">忘记密码？</a>
      </div>
    </b-form>
    <div class="third-login">
      <div class="third-login-wechat-text">
         <div class="third-login-line"></div> 
         <p> <span> 微信登录 </span> </p> 
      </div>
      <div class="third-login-wechat"> 
        <div class="third-login-wechat-btn js-jq-login-wechat" data-type="wx"></div> 
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  width: 460px;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 50px;
  box-shadow: 0 4px 10px 0 #cbd2db;
}
.login-logo {
  text-align: center;
  width: 100%;
  height: 114px;
  background-color: aqua;
  background-size: cover;
  background-repeat: no-repeat;
}
.tab-nav {
  padding: 0;
  display: flex;
  justify-content: center;
}
.tab-nav li {
  display: inline-block;
  text-align: center;
  line-height: 38px;
  width: 90px;
  height: 36px;
  margin-top: 20px;
  list-style: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  border-bottom: 2px solid #E8ECF0;
  color: #8997AB;
}
.tab-content {
  width: 356px;
  margin: 0 auto;
  overflow: hidden;
}
.tab-content input{
  width: 100%;
  height: 48px;
  line-height: 48px;
  border: solid 1px #E7EAEE;
  border-radius: 2px;
  margin-top: 18px;
  padding-left: 10px;
}
.tab-content button {
  background-color: #4184E1;
  width: 100%;
  height: 48px;
  font-size: 16px;
  line-height: 48px;
  text-align: center;
  color: white;
  margin-top: 18px;
  border: solid 1px #4184E1;
  border-radius: 2px;
}
.tab-content button:hover{
  background-color: #579af7;
}
.other-login{
  display: flex;
  justify-content: space-between;
}
.other-login a{
  display: inline-block;
  width: 150px;
  height: 37px;
  line-height: 37px;
  text-align: left;
  color: #4184e1;
  font-size: 14px;
  cursor: pointer;
}
.other-login .forget-password {
  width: 100px;
  height: 37px;
  line-height: 37px;
  text-align: right;
  color: #4184e1;
  font-size: 14px;
}
.third-login{
  width: 356px;
  margin: 0 auto !important;
  overflow: hidden;
  margin: 0px 0 26px;
}
.third-login .third-login-wechat-text{
  position: relative;
}
.third-login .third-login-wechat-text .third-login-line{
  height: 1px;
  width: 100%;
  background: #CBD2DB;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.third-login .third-login-wechat-text p{
  color: #8997AB;
  text-align: center;
}
.third-login .third-login-wechat-text p span{
  background: #fff;
  padding: 0 30px;
  position: relative;
  z-index: 2;
}
.third-login .third-login-wechat {
  text-align: center;
  padding: 18px 0 0;
  margin-bottom: 30px;
}
.third-login .third-login-wechat .third-login-wechat-btn {
  width: 40px;
  height: 40px;
  display: inline-block;
  background: url(../assets/wechat-an.png) no-repeat center;
  background-size: 40px 40px;
}
.third-login .third-login-wechat .third-login-wechat-btn:hover {
  background: url(../assets/wechat-active.png) no-repeat center;
  background-size: 40px 40px;
}
a:hover, a:active, a:focus, a:visited {
    text-decoration: none;
}

</style>