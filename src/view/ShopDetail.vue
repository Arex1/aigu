<template>
  <div class="shopDetail">
    <!-- 风险提示 -->
    <b-card no-body class="text-center shadow p-3 mb-5 bg-white rounded d-none d-md-block d-lg-block d-xl-block">
      <div class="sticky-top note">
        <span class="risk-note">风险提示：过往业绩不预示未来表现，相关数据仅供交流学习，不构成投资建议。请勿使用策略信号进行跟单。</span>
      </div>
    </b-card>
    <b-container class="detail">
      <!-- 股票信息 -->
      <div class="shadow-sm p-3 mb-5 bg-white rounded">
        <b-row>
          <b-col md="8">
            <b-row class="detail-recentil-title">
              <b-col>98 稳健 超短 高频
                <b-badge variant="primary" class="title-badge">稳健</b-badge>
                <b-badge variant="primary" class="title-badge">回撤小</b-badge>
              </b-col>
            </b-row>
            <b-row class="detaile-person-data">
              <b-col>
                <div class="text-secondary data-title">累计收益</div>
                <div class="data-value text-danger">97.41%</div>
              </b-col>
              <b-col>
                <div class="text-secondary data-title">胜率</div>
                <div class="data-value">53.7%</div>
              </b-col>
              <b-col>
                <div class="text-secondary data-title">盈亏比</div>
                <div class="data-value">186.02%</div>
              </b-col>
              <b-col>
                <div class="text-secondary data-title">最大回撤</div>
                <div class="data-value">5.83%</div>
              </b-col>
            </b-row>
            <b-row class="detail-recentil-data text-secondary">
              <b-col>近一个月收益:<span class="text-danger">0.62%</span></b-col>
              <b-col>近三个月收益:<span class="text-danger">22.35%</span></b-col>
              <b-col>近六个月收益:<span class="text-danger">55.33%</span></b-col>
              <b-col>近一年收益:<span class="text-danger">0%</span></b-col>
            </b-row>
          </b-col>
          <b-col md="4" class="border-left">
            <b-row class="data-title-refer">订阅价格:<span class="price">¥10000元/月</span></b-row>
            <b-row class="data-title-refer">适合资金:<span>100万以上</span></b-row>
            <b-row class="data-title-refer">剩余份数:<span>0</span></b-row>
            <b-row class="detail-head-r-btns">
              <b-button squared variant="outline-danger">免费资讯</b-button>
              <b-button squared disabled>订阅已满</b-button>
            </b-row>
          </b-col>
        </b-row>
      </div>
      <!-- 股票收益率 -->
      <div class="shadow-sm p-3 mb-5 bg-white rounded">
        <b-row>
          <b-col md="3">
            <div class="detail-container-title">策略信息</div>
            <div class="border-bottom canvas">当前仓位：66%</div>
            <div class="detail-strategy-data-group">
              <div class="detail-strategy-data">交易标的:<span>正常股票</span></div>
              <div class="detail-strategy-data">交易时间:<span>盘中交易</span></div>
              <div class="detail-strategy-data">交易频率:<span>3-10次/周</span></div>
              <div class="detail-strategy-data">同时持股数:<span>0-6只</span></div>
              <div class="detail-strategy-data">开始时间:<span>2019-05-06</span></div>
            </div>
          </b-col>
          <b-col md="9" class="border-left">
            <div class="detail-container-title">模拟交易收益率</div>
            <div ref="myChart" :style="{width: '100%', height: '100%'}"></div>
          </b-col>
        </b-row>
      </div>
      <!-- 策略持仓 -->
      <div class="shadow-sm p-3 mb-5 bg-white rounded">
        <div class="detail-container-title border-bottom"><span class="detail-tab-item">策略持仓</span></div>
        <b-row class="line-text">
          <b-col class="text" md="1"><span>当前持仓</span></b-col>
          <b-col class="text" md="1" offset-md="7">
            <span>历史持仓
            </span>
          </b-col>
          <b-col md="2">
            <b-form-datepicker :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" id="example-datepicker" v-model="value" class="mb-2" placeholder="" size="sm"></b-form-datepicker>
          </b-col>
        </b-row>
        <div class="table">
          <b-table striped hover :items="items" :fields="fields"></b-table>
        </div>
      </div>
    </b-container>
    <b-card no-body class="text-center d-none d-md-block d-lg-block d-xl-block">
      <div class="sticky-top note">
        <span class="risk-note">风险提示：过往业绩不预示未来表现，相关数据仅供交流学习，不构成投资建议。请勿使用策略信号进行跟单。</span>
      </div>
    </b-card>
  </div>
</template>

<script>
// import echarts from 'echarts'
export default {
  data() {
    return {
      value: '2020-02-02',
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  created() {
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      let option = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myChart)
      myChart.setOption(option, true);
    },
  },
}
</script>

<style scoped>
/* .note {
  text-align: center;
  background-color: #fff;
} */
.risk-note {
  color: #8997ab;
  font-size: 14px;
}
.detail {
  /* height: 100vh; */
}
.data-title {
  font-size: 13px;
}
.data-value {
  font-weight: bold;
  font-size: 28px;
}
.detail-recentil-data{
  font-size: 14px;
}
.detail-recentil-title {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 30px;
}
.title-badge {
  font-size: 10px;
  margin: 0 5px;
}
.detaile-person-data {
  margin-bottom: 30px;
}
.data-title-refer{
  font-size: 14px;
  color: #8997ab;
  height: 25%;
  padding: .8rem;
  line-height: 25%;
}
.data-title-refer span {
  padding: 0 10px;
}
.data-title-refer .price{
  font-size: 28px;
  color: #fb4044;
  font-weight: bold;
}
.detail-head-r-btns{
  display:flex;
  justify-content: space-evenly;
}
.detail-head-r-btns button{
  width: 40%;
  font-size: 16px;
}
.detail-strategy-data-group .detail-strategy-data{
  font-size: 14px;
  color: #9ea3a6;
  padding: 10px;
}
.detail-strategy-data-group .detail-strategy-data span{
  color: #333;
  margin-left: 10px;
}
.detail-container-title{
  font-size: 16px;
  color: #333;
}
.canvas{
  width: 100%;
  height: 180px;
  line-height: 180px;
  text-align: center;
}
.detail-tab-item {
  border-bottom: 3px solid #333;
  color: #333;
}
.line-text span{
  float: left;
}
.text {
  font-size: 14px;
  color: #333;
  margin-right: 10px;
}
.text span {
  line-height: 48px;
}
.table{
  font-size: 16px;
}
</style>