<template>
  <div class="strategy">
    <h5>收藏的策略</h5>
    <div v-for="item in list" :key="item" class="strategy-card shadow-sm p-3 mb-3 bg-white rounded ">
      <div class="strategy-title">
        <ul>
          <li class="float-left strategy-title-name">选股宝</li>
          <li class="float-right strategy-title-author">作者:
            <a href="#">小车</a>
          </li>
        </ul>
      </div>
      <div class="strategy-content">
        <ul class="strategy-content-ul">
          <li>
            <div class="strategy-second-data text-danger">350.23%</div>
            <div class="strategy-second-title">累计收益</div>
          </li>
          <li>
            <div class="strategy-second-data text-danger">3.23%</div>
            <div class="strategy-second-title">今日收益</div>
          </li>
          <li>
            <div class="strategy-second-data text-danger">119.43%</div>
            <div class="strategy-second-title">年化收益</div>
          </li>
          <li>
            <div class="strategy-second-data">31.24%</div>
            <div class="strategy-second-title">最大回撤</div>
          </li>
          <li>
            <div class="strategy-second-data">¥100000</div>
            <div class="strategy-second-title">出事资金</div>
          </li>
          <li>
            <div class="strategy-second-data">2019-05-21</div>
            <div class="strategy-second-title">开始时间</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1,2,3,4,5,6]
    }
  }
}
</script>

<style scoped>
  .strategy{
    padding: 20px;
  }
  h5{
    font-size: 16px;
  }
  ul{
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  .strategy-card{
    width: 80%;
    background-color: wheat;
  }
  .strategy-title{
    border-bottom: 2px solid #e1e1e1;
    padding-bottom: 10px;
    overflow: hidden;
  }
  .strategy-title-name{
    font-size: 20px;
  }
  .strategy-title-author{
    font-size: 14px;
  }
  a{
    text-decoration: none;
  }
  .strategy-content{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .strategy-content-ul{
    display: flex;
    justify-content: space-evenly;
  }
  .strategy-content-ul li{
    display: block;
    font-size: 14px;
    text-align: center;
  }
</style>