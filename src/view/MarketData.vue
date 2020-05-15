<template>
  <div>
    <div class="sr-only">
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
      <div >
        <b-table sticky-header :fields="fields" :items="items" head-variant="dark"></b-table>
      </div>
    </div>
    <!-- 新版本 -->
    <b-card no-body>
      <b-tabs pills card vertical nav-class="nav-tabs" active-nav-item-class='activate-li-tab'>
        <b-tab title="数据分析" active><b-card-text>Tab contents 1</b-card-text></b-tab>
        <b-tab title="赚钱效应" :active="true">
          <b-tabs content-class="mt-3">
            <b-tab title="效应一">
              <b-alert show>仅供参考</b-alert>
              <!-- 成交额，日期，评论区 -->
              <b-form @submit="onSubmit" v-if="true">
                <b-row>
                  <b-col sm="3">
                    <b-form-group label-cols="5" label-cols-lg="4" label-size="sm" label="成交额:" label-for="select-buy-sale">
                      <b-form-select size="sm" id="select-buy-sale" v-model="selected" :options="options"></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="日期:" label-for="input-sm">
                      <b-form-input id="input-sm" size="sm" placeholder="2020-05-14"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group label-cols="3" label-cols-lg="2" label-size="sm" label="评论区:" label-for="input-sm">
                      <b-form-input id="input-sm" size="sm"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
              <!-- 表格部分 -->
              <b-table-simple outlined bordered small caption-top responsive table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table">
                <caption>股票信息对照表:</caption>
                <colgroup><col><col></colgroup>
                <colgroup><col><col><col></colgroup>
                <colgroup><col><col></colgroup>
                <b-thead head-variant="dark">
                  <b-tr>
                    <b-th>涨幅</b-th>
                    <b-th>成交额/亿</b-th>
                    <b-th>类别</b-th>
                    <b-th>个数</b-th>
                    <b-th>实际占比</b-th>
                    <b-th>理论个数</b-th>
                    <b-th>理论占比</b-th>
                    <b-th>实际/理论</b-th>
                    <b-th>次日开盘</b-th>
                    <b-th>次日涨幅</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-th rowspan="10" class="text-center gains">10%</b-th>
                    <b-th>总个数</b-th>
                    <b-td>56</b-td>
                    <b-td>22</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>30+</b-th>
                    <b-td>46</b-td>
                    <b-td variant="warning">18</b-td>
                    <b-td>50</b-td>
                    <b-td>61</b-td>
                    <b-td variant="danger">15</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>10-20</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>10-20</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>7-10</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>5-7</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>2-5</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>1-2</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>0.5-1</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>&lt;0.5</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th rowspan="10" class="text-center gains">10%</b-th>
                    <b-th>总个数</b-th>
                    <b-td>56</b-td>
                    <b-td>22</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>30+</b-th>
                    <b-td>46</b-td>
                    <b-td variant="warning">18</b-td>
                    <b-td>50</b-td>
                    <b-td>61</b-td>
                    <b-td variant="danger">15</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>10-20</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>10-20</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>7-10</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>5-7</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>2-5</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>1-2</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>0.5-1</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>&lt;0.5</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </b-tab>
            <b-tab title="效应二" lazy>
              <b-alert show>仅供参考</b-alert>
              <!-- 成交额，日期，评论区 -->
              <b-form @submit="onSubmit" v-if="true">
                <b-row>
                  <b-col sm="3">
                    <b-form-group label-cols="5" label-cols-lg="4" label-size="sm" label="总市值:" label-for="select-buy-sale">
                      <b-form-select size="sm" id="select-buy-sale" v-model="selected" :options="options"></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="日期:" label-for="input-sm">
                      <b-form-input id="input-sm" size="sm" placeholder="2020-05-14"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col sm="6">
                    <b-form-group label-cols="3" label-cols-lg="2" label-size="sm" label="评论区:" label-for="input-sm">
                      <b-form-input id="input-sm" size="sm"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-tab>
          </b-tabs>
        </b-tab>
        <b-tab title="连板效应"><b-card-text>Tab contents 3</b-card-text></b-tab>
        <b-tab title="股票池"><b-card-text>Tab contents 4</b-card-text></b-tab>
      </b-tabs>
  </b-card>
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
        
      ],
      selected: null,
      options: [
          { value: null, text: '成交额' },
          { value: '1', text: '>100万' },
          { value: '2', text: '<100万' },
        ],
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
<style>
  .nav-tabs {
    font-size: 16px;
   
  }
  .nav-tabs a{
    color: #9ea3a6;;
  }
  .activate-li-tab{
    font-size: 18px;
    background-color: #f7f7f7 !important;
    color: #2c3e50 !important; 
    font-family: PingFangSC-Semibold;
    border: none !important;
  }
  .col-form-label-sm{
  font-size: 16px;
}
.custom-select-sm{
  font-size: 16px;
}
.form-control-sm{
  font-size: 16px;
}
.gains{
  vertical-align: middle !important;
}
</style>