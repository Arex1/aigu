<template>
  <div>
    <b-jumbotron header="" lead="" class="jumbotron-index">
    </b-jumbotron>
    <div class="container">
      <h4 class="title">
        策略精选
        <a href="#">常见问题></a>
      </h4>
      <b-card style="max-width: 57rem;" class="mb-2">
        <b-row class="card-title">
          <b-col md="8" class="stock-name">
            <a href="/shopdetail">美玲时钟</a>
          </b-col>
          <b-col md="4" class="author">策略作者:
            <a href="#">
              <b-avatar size="1.5rem"></b-avatar>小车
            </a>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="8">
            <div class="body-left__legend" data-backtestid="c679fbbb383ab428ddd1506c7850aa4a"> 
              <div class="legend-box"> 
                <span class="legend-symbol"></span> 
                <span class="legend-text" title="策略收益">策略收益</span> 
              </div>  
              <div class="legend-box"> 
                <span class="legend-symbol"></span>
                <span class="legend-text" title="沪深300">沪深300</span> 
              </div>  
            </div>
            <div id="myChart" :style="{width: '90%', height: '315px'}"></div>
          </b-col>
          <b-col md="4" class="stack-info">
            <div class="body-right__data"> 
              <div class="right__data-item full-width"> 
                <p class="data-item-title">累计收益</p> 
                <p class="data-item-data red algorithmReturn">107.01%</p> 
              </div> 
              <div class="right__data-item dashed-right dashed-bottom"> 
                <p class="data-item-title">最近一个月</p> 
                <p class="data-item-data">15.97%</p> 
              </div> 
              <div class="right__data-item dashed-bottom"> 
                <p class="data-item-title">最近三个月</p> 
                <p class="data-item-data">88.43%</p> 
              </div> 
              <div class="right__data-item dashed-right"> 
                <p class="data-item-title">最近六个月</p> 
                <p class="data-item-data">109.29%</p> 
              </div> 
              <div class="right__data-item"> 
                <p class="data-item-title">适合资金</p>
                <p class="data-item-data">50万-100万</p>
              </div>
              <div class="body-right__btn">
                <button class="right__btn-order">立即订阅</button>
                <button class="right__btn-refer">免费资讯</button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
    }
  },
  created() {
    this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.content = response.data.bpi
        console.log('ok')
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      var data = [
          [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
          [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
      ];
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      let option = {
          backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
              offset: 0,
              color: '#f7f8fa'
          }, {
              offset: 1,
              color: '#cdd0d5'
          }]),
          title: {
              text: '1990 与 2015 年各国家人均寿命与 GDP'
          },
          legend: {
              right: 10,
              data: ['1990', '2015']
          },
          xAxis: {
              splitLine: {
                  lineStyle: {
                      type: 'dashed'
                  }
              }
          },
          yAxis: {
              splitLine: {
                  lineStyle: {
                      type: 'dashed'
                  }
              },
              scale: true
          },
          series: [{
              name: '1990',
              data: data[0],
              type: 'scatter',
              symbolSize: function (data) {
                  return Math.sqrt(data[2]) / 5e2;
              },
              emphasis: {
                  label: {
                      show: true,
                      formatter: function (param) {
                          return param.data[3];
                      },
                      position: 'top'
                  }
              },
              itemStyle: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(120, 36, 50, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: 'rgb(251, 118, 123)'
                  }, {
                      offset: 1,
                      color: 'rgb(204, 46, 72)'
                  }])
              }
          }, {
              name: '2015',
              data: data[1],
              type: 'scatter',
              symbolSize: function (data) {
                  return Math.sqrt(data[2]) / 5e2;
              },
              emphasis: {
                  label: {
                      show: true,
                      formatter: function (param) {
                          return param.data[3];
                      },
                      position: 'top'
                  }
              },
              itemStyle: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(25, 100, 150, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                      offset: 0,
                      color: 'rgb(129, 227, 238)'
                  }, {
                      offset: 1,
                      color: 'rgb(25, 183, 207)'
                  }])
              }
          }]
      };
      myChart.setOption(option, true);
      /* myChart.setOption({
          series: {
              type: 'pie',
              data: [
                  {name: 'A', value: 1212},
                  {name: 'B', value: 2323},
                  {name: 'C', value: 1919}
              ]
          }
      }); */
    },
    
  }
}
</script>

<style scoped>
.jumbotron-index {
  border-radius: 0;
  padding: 4rem 8rem;
  height: 400px;
  background-color: pink;
  font-size: .9rem;
  white-space: nowrap;
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
.card-title .stock-name{
  height: 30px;
}
.card-title .stock-name a{
  font-size: 20px;
  font-weight: bold;
  color: #255da8;
}
.card-title .author {
  height: 30px;
  line-height: 30px;
}
.body-left__legend {
  height: 40px;
  line-height: 40px;
}
.body-left__legend .legend-box{
  margin-right: 25px;
  float: left;
  cursor: default;
}
.body-left__legend .legend-box:nth-child(2) .legend-text{
  color: #AB423E;
}
.body-left__legend .legend-box:nth-child(2) .legend-symbol{
  background: #AB423E;
}
.body-left__legend .legend-box .legend-symbol{
  background: #3674C9;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 4px;
}
.body-left__legend .legend-box .legend-text{
  color: #3674C9;
  font-size: 12px;
}
.stack-info {
  width: 300px;
  height: 100%;
  float: left;
  padding: 20px 30px;
  border-left: 1px solid #e8ecf0;
}
.stack-info .body-right__data .right__data-item.full-width{
  width:100%;
  float: left;
  text-align: center;
  padding: 12px 0;
}
.stack-info .body-right__data .right__data-item.full-width .data-item-title{
  font-size: 13px;
  line-height: 17px;
  color: #999;
}
.stack-info .body-right__data .right__data-item.full-width .data-item-data.algorithmReturn{
  font-size: 32px;
  line-height: 42px;
  font-weight: bold;
  color: #fb4044;
}

.stack-info .body-right__data .right__data-item{
  border-bottom: 1px dashed #d3dae2;
  width: 50%;
  float: left;
  text-align: center;
  padding: 12px 0;
}
.stack-info .body-right__data .right__data-item .data-item-title{
  font-size: 13px;
  line-height: 17px;
  color: #999;
  margin-bottom: 0;
}
.stack-info .body-right__data .right__data-item .data-item-data{
  font-size: 18px;
  line-height: 24px;
  color: #333;
}
.body-right__btn{
  height: 44px;
  position: relative;
  top: 10px;
}
.body-right__btn .right__btn-order{
  background: #fb4044;
  width: calc(50% - 5px);
  padding: 12px;
  color: #fff;
  border: none;
  float: left;
  border-radius: 2px;
}
 .body-right__btn .right__btn-refer{
    background: #FB8341;
    margin-left: 10px;
    width: calc(50% - 5px);
    padding: 12px;
    color: #fff;
    border: none;
    float: left;
    border-radius: 2px;
 }
</style>