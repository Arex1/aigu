<template>
  <div>
    <b-jumbotron header="量化交易，从智股开始" lead="优质策略，尽在智股策略商城" class="jumbotron-index">
    </b-jumbotron>
    <div class="container">
      <h4 class="title">
        策略精选
        <a href="#">常见问题></a>
      </h4>
      <b-card style="max-width: 50rem;" class="mb-2">
        <b-row class="card-title">
          <b-col md="8" class="StockName">
            <a href="#">美玲时钟</a>
          </b-col>
          <b-col md="4">策略作者:</b-col>
        </b-row>
        <b-row>
          <b-col md="8">股票图表</b-col>
          <b-col md="4">股票信息</b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.jumbotron-index {
  border-radius: 0;
  padding: 4rem 8rem;
  height: 400px;
  background-color: pink;
}
.jumbotron-index h1{
  font-weight: 500;
}
.jumbotron-index p{
  font-weight: 500;
}
.container .title {
  font-size: 18px;
  display: inline-block;
  color: #333;
}
.container .title a{
  margin-left: 13px;
  font-size: 14px;
  color: #666;
  vertical-align: bottom;
}
.container a:hover{
  text-decoration: none;
}
.card-title {
  height: 80px;
  line-height: 80px;
  padding: 0px 20px;
  border-bottom: 1px solid #e8ecf0;
  box-sizing: border-box;
}
.card-body {
  padding: 0;
}
.StockName{
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  line-height: 80px;
}
</style>