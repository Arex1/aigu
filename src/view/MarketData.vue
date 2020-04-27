<template>
  <div>
    <div class="ban-chart-out">
      <div class="charts" ref="myChart1" :style="{width: '20%', height: '200px'}"></div>
      <div class="charts" ref="myChart2" :style="{width: '20%', height: '200px'}"></div>
      <div class="charts" ref="myChart3" :style="{width: '20%', height: '200px'}"></div>
      <div class="charts" ref="myChart4" :style="{width: '20%', height: '200px'}"></div>
      <div class="charts" ref="myChart5" :style="{width: '20%', height: '200px'}"></div>
    </div>
    <div style="background-color:red">
      <div>表1</div>
      <div>表2</div>
      <div>表3</div>
      <div>表4</div>
    </div>
    <!-- 涨停池 -->
    <div>
      <b-table sticky-header :fields="fields" :items="items" head-variant="dark"></b-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fields: [
        {key: 'id', label: '序号'},
        {key: 'stackName', label: '股票名称'},
        {key: 'analysis', label: '理由分析'},
        {key: 'lastesPrice', label: '最新价', sortable: true},
        {key: 'applies', label: '涨跌幅', sortable: true},
        {key: 'SealSingleThan', label: '封单比', sortable: true},
        {key: 'TurnoverRate', label: '换手率', sortable: true},
        {key: 'CurrentMarket', label: '流通市值', sortable: true},
        {key: 'TotalMarketValue', label: '总市值', sortable: true},
        {key: 'SealingPlateForTheFirstTime', label: '首次封板', sortable: true},
        {key: 'SealPlate', label: '最后封板', sortable: true},
      ],
      items: [
        { 
          id: '1', 
          stackName: '同时厉行', 
          analysis: '',
          lastesPrice: '14.21',
          applies: '+9.22%',
          SealSingleThan: '0.12%',
          TurnoverRate:'10.75%',
          CurrentMarket:'51.9亿',
          TotalMarketValue:'151.9亿',
          SealingPlateForTheFirstTime:'10:12:12',
          SealPlate:'16:21:12',

        },
        { 
          id: '2', 
          stackName: '同时厉行', 
          analysis: '',
          lastesPrice: '14.21',
          applies: '+9.22%',
          SealSingleThan: '0.12%',
          TurnoverRate:'10.75%',
          CurrentMarket:'51.9亿',
          TotalMarketValue:'151.9亿',
          SealingPlateForTheFirstTime:'10:12:12',
          SealPlate:'16:21:12',

        },
        { 
          id: '3', 
          stackName: '同时厉行', 
          analysis: '',
          lastesPrice: '14.21',
          applies: '+9.22%',
          SealSingleThan: '0.12%',
          TurnoverRate:'10.75%',
          CurrentMarket:'51.9亿',
          TotalMarketValue:'151.9亿',
          SealingPlateForTheFirstTime:'10:12:12',
          SealPlate:'16:21:12',

        },
      ]
    }
  },
  methods: {
    drawLine(){
      let option1 = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
          }]
      };
      let option2 = {
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(this.$refs.myChart1)
      myChart1.setOption(option1, true);
      let myChart2 = this.$echarts.init(this.$refs.myChart2)
      myChart2.setOption(option2, true);
      let myChart3 = this.$echarts.init(this.$refs.myChart3)
      myChart3.setOption(option2, true);
      let myChart4 = this.$echarts.init(this.$refs.myChart4)
      myChart4.setOption(option2, true);
      let myChart5 = this.$echarts.init(this.$refs.myChart5)
      myChart5.setOption(option2, true);
    },
  },
  mounted(){
    this.drawLine();
  },
}
</script>

<style scoped>
.ban-chart-out{
  display: flex;
  justify-content: flex-start;
}
</style>