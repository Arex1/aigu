<template>
  <div class="wrapper">
    <div class="slimScrollDiv">
      <div class="side-menu">
        <b-row>
          <b-col md="8">
            <a class="nav-header ml-2" href="/"><span>回到主页</span>
              <b-icon icon="box-arrow-left" aria-hidden="true"></b-icon>
            </a>
          </b-col>
          <b-col></b-col>
        </b-row>
        <div class="nav-avator">
          <div class="my-avator">
            <b-avatar class="mr-2" variant="info" src="https://placekitten.com/300/300" size="4rem"></b-avatar>
            
          </div>
          <div class="my-info-simple">
            <ul class="my-info-ul">
              <li>关注:
                <span>12</span>
              </li>
              <li>粉丝:
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul class="side-menu-content">
            <li><router-link :to="{ name: 'strategy' }"><b-icon icon="inboxes" class="mr-1"></b-icon><span>我的策略</span><b-icon icon="chevron-right" class="mr-1 float-right"></b-icon></router-link></li>
            <li><router-link :to="{ name: 'post' }"><b-icon icon="view-list" class="mr-1"></b-icon><span>我的帖子</span><b-icon icon="chevron-right" class="mr-1 float-right"></b-icon></router-link></li>
            <li><router-link :to="{ name: 'reply' }"><b-icon icon="file-text" class="mr-1"></b-icon><span>我的回复</span><b-icon icon="chevron-right" class="mr-1 float-right"></b-icon></router-link></li>
            <li><router-link :to="{ name: 'setting' }"><b-icon icon="gear" class="mr-1"></b-icon><span>账户设置</span><b-icon icon="chevron-right" class="mr-1 float-right"></b-icon></router-link></li>
            <li><router-link :to="{ name: 'logout' }"><b-icon icon="box-arrow-right" class="mr-1"></b-icon><span>退出登录</span><b-icon icon="chevron-right" class="mr-1 float-right"></b-icon></router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="page-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
      };
    },
    methods: {
    }
  }
</script>
<style scoped>
  .wrapper{
    height: 100%;
    width: 100%;
    /* background-color: skyblue; */
  }
  .slimScrollDiv{
    width: 220px;
    height: 100%;
    top:0px;
    bottom: 0px;
    background-color: #1c2b36;
    position: fixed;
  }
  .page-wrapper{
    position: fixed;
    top: 0px;
    bottom: 0px;
    overflow:scroll;
    left: 220px;
    right: 0px;
    background-color: #f7f7f7;
  }
  :after{
    box-sizing: border-box;
  }
  .nav-header {
    display: block;
    padding: 8px 5px;
    background: #1c2b36;
    font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
    font-size: .8rem;
    color: #ccc;
    line-height: 1.42857143;
    text-decoration: none;
  }
  .side-menu-content{
    list-style: none;
    padding:0;
    margin: 0px;
  }
  .side-menu-content li {
    font-size: 13px;
    cursor: pointer;
    height: 46px;
  }
  .side-menu-content li a{
    text-decoration: none;
    color: #869fb1;
    background-color: #1c2b36;
    display: block;
    height: 100%;
    text-align: left;
    padding: 14px 20px 14px 25px;
    font-weight: 600;
  }
  .side-menu-content li a:hover{
    color: #ccc;
  }
  .my-avator{
    text-align: center;
  }
  .my-avator span{
    font-size: 14px;
    color: #869fb1;
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: 14px;
  }
  .my-info-simple{
    height: 50px;
  }
  .my-info-ul {
    display: flex;
    justify-content: space-around;
  }
  .my-info-ul li{
    display: block;
    height: 25px;
    line-height: 50px;
    color: #869fb1;
  }
  .nav-avator{
    margin-top: 20px;
  }
</style>