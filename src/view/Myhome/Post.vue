<template>
  <div class="Post">
    <div class="nav-tab shadow p-3 mb-3 bg-white rounded">
      <ul>
        <li>
            <input type="radio" name="check" id="active1" checked><label for="active1">全部</label>
        </li>
        <li>
            <input type="radio" name="check" id="active2"><label for="active2">原发文</label>
        </li>
        <li>
            <input type="radio" name="check" id="active3"><label for="active3">长文</label>
        </li>
        <li>
            <input type="radio" name="check" id="active4"><label for="active4">问答</label>
        </li>
        <li>
            <input type="radio" name="check" id="active5"><label for="active5">热门</label>
        </li>
        <li>
            <input type="radio" name="check" id="active6"><label for="active6">交易</label>
        </li>
        <li>
            <input type="radio" name="check" id="active7"><label for="active7">收藏</label>
        </li>
      </ul>
    </div>
    <!-- 用作填充顶部空白用 -->
    <div class="padding-fill"></div>
    <!-- 循环便利获取 -->
    <Post-card v-for="item in list" :key="item" :content="sayhi"></Post-card>
    <a href="" @click="SwitchTitle">hhhh</a>
  </div>
</template>
<script>
// 引入自定义写的帖子的卡片组件
import PostCard from '../../components/PostCard'

export default {
  data() {
    return {
      isActive: false,
      sayhi: '我的吗呀',
      list: [1,2,3,4,5],
    }
  },
  components:{
    PostCard
  },
  methods: {
  }
}
</script>
<style scoped>
input{
  display: none;
}
label {
  font-size: 16px;
}
input:checked+label{
    color:#07c160ff;
    font-size: 16px;
}
input:hover+label{
    color:#07c160ff;
    font-size: 16px;
}
.nav-tab{
  width: 100%;
  /* height: 200px; */
  top: 0px;
  position: fixed;
  z-index: 1000;
  /* overflow: hidden; */
  background-color: #ffffff;
}
ul{
  padding: 0px;
  margin: 0px;
  list-style: none;
}
ul li {
  float: left;
  padding: 10px 25px;
  font-weight: 600;
  color: #869fb1;
}
a{
  text-decoration: none;
  color: #869fb1;
  font-size: 14px;
}
.padding-fill{
  padding-top: 100px ;
}
</style>