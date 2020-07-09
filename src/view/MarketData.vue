<template>
  <div>
    <b-card no-body class="market-card">
      <b-tabs pills card vertical nav-class="nav-tabs" active-nav-item-class='activate-li-tab' class="market-data">
        <b-tab title="数据分析">
          <div class="data-analysis-header clearfix">
            <div class="selectDate">
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions1"
                id="data-analysis-date">
              </el-date-picker>
            </div>
            <b-row class="text-center header-charts">
              <!-- PC端显示，移动端隐藏 -->
              <b-col sm=2 class="d-none d-md-block">
                <b-row class="chartStyle">
                  <!-- 市场真实数据 -->
                  <div id="heat" :style="{width: '70%', height: '100%'}"></div>
                </b-row>
              </b-col>
              <b-col sm=2 class="d-none d-md-block">
                <b-row class="chartStyle bar-charts">
                  <!-- 涨跌分布 -->
                  <div id="myChart" :style="{width: '100%', height: '100%'}"></div>
                </b-row>
              </b-col>
              <b-col sm=2 class="d-none d-md-block">
                <!-- 涨跌对比 -->
                <b-row class="chartStyle">
                  <div id="myChart2" :style="{width: '100%', height: '100%'}"></div>
                </b-row>
              </b-col>
              <b-col sm=2 class="d-none d-md-block">
                <!-- 涨跌停对比 -->
                <b-row class="chartStyle">
                  <div id="myChart3" :style="{width: '100%', height: '100%'}"></div>
                </b-row>
              </b-col>
              <b-col sm=2 class="d-none d-md-block">
                <!-- 封板未遂(炸板率:19%) -->
                <b-row class="chartStyle">
                  <div id="myChart4" :style="{width: '100%', height: '100%'}"></div>
                </b-row>
              </b-col>
              <b-col sm=2 class="d-none d-md-block">
                <!-- 昨日涨跌停今日表现 -->
                <b-row class="chartStyle">
                  <div id="myChart5" :style="{width: '100%', height: '100%'}"></div>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </b-tab>
        <b-tab title="赚钱效应" :active="true">
          <b-tabs content-class="mt-3">
            <b-tab title="效应一">
              <b-row>
                <b-col md="9">
                  <b-form-group label="类型">
                    <b-form-radio-group v-model="selectedMakeMoney" :options="makeMoneyOptions" name="radio-inline" ></b-form-radio-group>
                  </b-form-group>
                  <b-form-group label="大佬评论">
                    <b-form-textarea id="textarea" v-model="commentsMakeMoney" rows="3" max-rows="6" disabled></b-form-textarea>
                  </b-form-group>
                </b-col>
                <b-col md="3">
                  <b-calendar v-model="value" :min="min" :max="max" locale="cn"></b-calendar>
                </b-col>
              </b-row>
              <!-- 表格部分 -->
              <!-- 成交额表 -->
              <b-table-simple outlined bordered small caption-top responsive table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table">
                <caption>{{tableValue[selectedMakeMoney].category}}信息对照表:</caption>
                <b-thead head-variant="dark">
                  <b-tr class="text-center gains">
                    <b-th>涨幅</b-th>
                    <b-th>{{tableValue[selectedMakeMoney].category}}</b-th>
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
                <b-tbody v-for="(item, index) in tableValue[selectedMakeMoney].tableValue" :key="index" class="text-center gains">
                  <b-th rowspan="11" class="text-center gains">{{item.firstIndex}}</b-th>
                  <b-tr v-for="(i, sindex) in item.seconedIndex" :key="sindex">
                    <b-td v-for="(j, tindex) in i" :key="tindex">{{j}}</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
              <!-- 总市值表 -->
              <b-table-simple v-if="false" outlined bordered small caption-top responsive table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table">
                <caption>总市值信息对照表:</caption>
                <colgroup><col><col></colgroup>
                <colgroup><col><col><col></colgroup>
                <colgroup><col><col></colgroup>
                <b-thead head-variant="dark">
                  <b-tr>
                    <b-th>收盘</b-th>
                    <b-th>总市值</b-th>
                    <b-th>个数</b-th>
                    <b-th>实际占比</b-th>
                    <b-th>理论个数</b-th>
                    <b-th>理论占比</b-th>
                    <b-th>实际/理论</b-th>
                    <b-th>次日开盘</b-th>
                    <b-th>次日涨幅</b-th>
                    <b-th>新高后连续3日涨幅</b-th>
                    <b-th>新高后连续5日涨幅</b-th>
                    <b-th>新高后连续10日涨幅</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-th rowspan="9" class="text-center gains">创5日新高</b-th>
                    <b-th>总个数</b-th>
                    <b-td>56</b-td>
                    <b-td>22</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>1000+</b-th>
                    <b-td>46</b-td>
                    <b-td variant="warning">18</b-td>
                    <b-td>50</b-td>
                    <b-td>61</b-td>
                    <b-td variant="danger">15</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>500-1000</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>200-500</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>100-200</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>60-100</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>40-60</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>30-40</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>30</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>69</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
              <!-- 涨幅表 -->
              <b-table-simple v-if="false" outlined bordered small caption-top responsive table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table">
                <caption>涨幅表信息对照表:</caption>
                <colgroup><col><col></colgroup>
                <colgroup><col><col><col></colgroup>
                <colgroup><col><col></colgroup>
                <b-thead head-variant="dark">
                  <b-tr>
                    <b-th>时间</b-th>
                    <b-th>涨幅</b-th>
                    <b-th>类别</b-th>
                    <b-th>个数</b-th>
                    <b-th>实际占比</b-th>
                    <b-th>理论个数</b-th>
                    <b-th>理论占比</b-th>
                    <b-th>实际/理论</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-th rowspan="9" class="text-center gains">最近3天的</b-th>
                    <b-th>25+</b-th>
                    <b-td>56</b-td>
                    <b-td>22</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                    <b-td>43</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>15-25</b-th>
                    <b-td>46</b-td>
                    <b-td variant="warning">18</b-td>
                    <b-td>50</b-td>
                    <b-td variant="danger">15</b-td>
                    <b-td>43</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>10-15</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>5-10</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>38</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>0-5</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>-5-0</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td variant="danger">69</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>-10--5</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>-15--10</b-th>
                    <b-td>51</b-td>
                    <b-td>69</b-td>
                    <b-td>28</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                  <b-tr>
                    <b-th>-16--10</b-th>
                    <b-td>51</b-td>
                    <b-td>27</b-td>
                    <b-td>69</b-td>
                    <b-td>43</b-td>
                    <b-td variant="success">72</b-td>
                    <b-td>23</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </b-tab>
          </b-tabs>
        </b-tab>
        <b-tab title="连板效应">
          <!-- 成交额，日期，评论区 -->
          <b-form @submit="onSubmit" v-if="true">
            <b-row>
              <b-col sm="3">
                <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="日期:" label-for="third-date">
                  <b-form-input id="third-date" size="sm" placeholder="2020-05-14"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="6">
                <b-form-group label-cols="3" label-cols-lg="2" label-size="sm" label="评论区:" label-for="input-sm">
                  <b-form-input id="input-third" size="sm"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>
          <!-- 表格 -->
          <b-table-simple outlined bordered small caption-top responsive table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table">
            <colgroup><col><col></colgroup>
            <colgroup><col><col><col></colgroup>
            <colgroup><col><col></colgroup>
            <b-thead head-variant="dark">
              <b-tr>
                <b-th colspan="1"></b-th>
                <b-th colspan="4">高度板</b-th>
                <b-th colspan="5">2连板</b-th>
                <b-th colspan="5">首板</b-th>
                <b-th colspan="4">跌停板</b-th>
              </b-tr>
              <b-tr>
                <b-th>日期</b-th>
                <b-th>最高板</b-th>
                <b-th>个数</b-th>
                <b-th>品种</b-th>
                <b-th>次日平均涨幅</b-th>
                <b-th>2连板个数</b-th>
                <b-th>次日上涨个数</b-th>
                <b-th>次日下跌个数</b-th>
                <b-th>继续涨停个数</b-th>
                <b-th>品种</b-th>
                <b-th>涨停板个数</b-th>
                <b-th>次日上涨个数</b-th>
                <b-th>次日下跌个数</b-th>
                <b-th>继续涨停个数</b-th>
                <b-th>跌停板个数</b-th>
                <b-th>次日上涨个数</b-th>
                <b-th>次日下跌个数</b-th>
                <b-th>继续涨幅超5%个数</b-th>
                <b-th>品种</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th >2020-05-11</b-th>
                <b-th variant="info">12</b-th>
                <b-td>12</b-td>
                <b-td variant="danger">金自天正</b-td>
                <b-td>12%</b-td>
                <b-td variant="success">12</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
              </b-tr>
              <b-tr>
                <b-th >2020-05-12</b-th>
                <b-th variant="success">12</b-th>
                <b-td>12</b-td>
                <b-td variant="danger">金自天正</b-td>
                <b-td>12%</b-td>
                <b-td variant="success">12</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td variant="primary">23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td variant="warning">23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td variant="info">23</b-td>
                <b-td>23</b-td>
              </b-tr>
              <b-tr>
                <b-th >2020-05-13</b-th>
                <b-th variant="danger">12</b-th>
                <b-td>22</b-td>
                <b-td variant="danger">金自天正</b-td>
                <b-td>12%</b-td>
                <b-td variant="success">12</b-td>
                <b-td>23</b-td>
                <b-td variant="danger">23</b-td>
                <b-td>23</b-td>
                <b-td variant="info">23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td variant="warning">23</b-td>
                <b-td>23</b-td>
                <b-td>23</b-td>
                <b-td variant="info">23</b-td>
                <b-td>23</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-tab>
        <b-tab title="股票池">
          <b-nav tabs class="mb-4">
            <b-nav-item v-for="(item, index) in StockPoolOptions" :key="index" :active="item.isActive" @click="changeTable(index)">{{item.tabName}}</b-nav-item>
          </b-nav>
          <!-- 股票池表格区域 -->
          <b-table hover :items="StockPoolItems" :fields="StockPoolFields" :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc" table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table"></b-table>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
// import echarts from 'echarts'
export default {
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 2)
    maxDate.setDate(15)
    return {
      value2: Date.now(),
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
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
      selectedMakeMoney: 1,
      makeMoneyOptions: [
        { value: 0, text: '成交额' },
        { value: 1, text: '股价' },
        { value: 2, text: '总市值' },
        { value: 3, text: '流通市值' }
      ],
      tableValue: [
        {
          category: '成交额',
          tableValue: [
            {
              firstIndex: '10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['20+', 12, 32, 43, '', 25, 76, '', 86],
                ['10~20', 12, 32, 43, '', 25, 76, '', 86,],
                ['7~10', 12, 32, 43, 11, 25, 76, '', 86,],
                ['5~7', 12, 32, 43, '', 25, 76, '', 23],
                ['2~5', 12, 32, 43, '', 25, 76, '', 23],
                ['1~2', 12, 32, 43, 23, 25,'', 86, 23],
                ['0.5~1', 12, 32, 43, '', 76, '', 86, 23],
                ['<0.5', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '7%~10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['20+', 12, 32, 43, '', 25, 76, '', 86],
                ['10~20', 12, 32, 43, '', 25, 76, '', 86,],
                ['7~10', 12, 32, 43, 11, 25, 76, '', 86,],
                ['5~7', 12, 32, 43, '', 25, 76, '', 23],
                ['2~5', 12, 32, 43, '', 25, 76, '', 23],
                ['1~2', 12, 32, 43, 23, 25,'', 86, 23],
                ['0.5~1', 12, 32, 43, '', 76, '', 86, 23],
                ['<0.5', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '5%~7%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['20+', 12, 32, 43, '', 25, 76, '', 86],
                ['10~20', 12, 32, 43, '', 25, 76, '', 86,],
                ['7~10', 12, 32, 43, 11, 25, 76, '', 86,],
                ['5~7', 12, 32, 43, '', 25, 76, '', 23],
                ['2~5', 12, 32, 43, '', 25, 76, '', 23],
                ['1~2', 12, 32, 43, 23, 25,'', 86, 23],
                ['0.5~1', 12, 32, 43, '', 76, '', 86, 23],
                ['<0.5', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '3%~5%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['20+', 12, 32, 43, '', 25, 76, '', 86],
                ['10~20', 12, 32, 43, '', 25, 76, '', 86,],
                ['7~10', 12, 32, 43, 11, 25, 76, '', 86,],
                ['5~7', 12, 32, 43, '', 25, 76, '', 23],
                ['2~5', 12, 32, 43, '', 25, 76, '', 23],
                ['1~2', 12, 32, 43, 23, 25,'', 86, 23],
                ['0.5~1', 12, 32, 43, '', 76, '', 86, 23],
                ['<0.5', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '<-10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['20+', 12, 32, 43, '', 25, 76, '', 86],
                ['10~20', 12, 32, 43, '', 25, 76, '', 86,],
                ['7~10', 12, 32, 43, 11, 25, 76, '', 86,],
                ['5~7', 12, 32, 43, '', 25, 76, '', 23],
                ['2~5', 12, 32, 43, '', 25, 76, '', 23],
                ['1~2', 12, 32, 43, 23, 25,'', 86, 23],
                ['0.5~1', 12, 32, 43, '', 76, '', 86, 23],
                ['<0.5', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-7%~-10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['20+', 12, 32, 43, '', 25, 76, '', 86],
                ['10~20', 12, 32, 43, '', 25, 76, '', 86,],
                ['7~10', 12, 32, 43, 11, 25, 76, '', 86,],
                ['5~7', 12, 32, 43, '', 25, 76, '', 23],
                ['2~5', 12, 32, 43, '', 25, 76, '', 23],
                ['1~2', 12, 32, 43, 23, 25,'', 86, 23],
                ['0.5~1', 12, 32, 43, '', 76, '', 86, 23],
                ['<0.5', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-5%~-7%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['20+', 12, 32, 43, '', 25, 76, '', 86],
                ['10~20', 12, 32, 43, '', 25, 76, '', 86,],
                ['7~10', 12, 32, 43, 11, 25, 76, '', 86,],
                ['5~7', 12, 32, 43, '', 25, 76, '', 23],
                ['2~5', 12, 32, 43, '', 25, 76, '', 23],
                ['1~2', 12, 32, 43, 23, 25,'', 86, 23],
                ['0.5~1', 12, 32, 43, '', 76, '', 86, 23],
                ['<0.5', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-3%~5%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['20+', 12, 32, 43, '', 25, 76, '', 86],
                ['10~20', 12, 32, 43, '', 25, 76, '', 86,],
                ['7~10', 12, 32, 43, 11, 25, 76, '', 86,],
                ['5~7', 12, 32, 43, '', 25, 76, '', 23],
                ['2~5', 12, 32, 43, '', 25, 76, '', 23],
                ['1~2', 12, 32, 43, 23, 25,'', 86, 23],
                ['0.5~1', 12, 32, 43, '', 76, '', 86, 23],
                ['<0.5', 12, 32, 43, '', 76, '', 86, 23]
              ]
            }
          ]
        },
        {
          category: '股价',
          tableValue: [
            {
              firstIndex: '10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['50+', 12, 32, 43, '', 25, 76, '', 86],
                ['40~50', 12, 32, 43, '', 25, 76, '', 86,],
                ['30~40', 12, 32, 43, 11, 25, 76, '', 86,],
                ['20~30', 12, 32, 43, '', 25, 76, '', 23],
                ['10~20', 12, 32, 43, '', 25, 76, '', 23],
                ['5~10', 12, 32, 43, 23, 25,'', 86, 23],
                ['3~5', 12, 32, 43, '', 76, '', 86, 23],
                ['<3', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '7%~10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['50+', 12, 32, 43, '', 25, 76, '', 86],
                ['40~50', 12, 32, 43, '', 25, 76, '', 86,],
                ['30~40', 12, 32, 43, 11, 25, 76, '', 86,],
                ['20~30', 12, 32, 43, '', 25, 76, '', 23],
                ['10~20', 12, 32, 43, '', 25, 76, '', 23],
                ['5~10', 12, 32, 43, 23, 25,'', 86, 23],
                ['3~5', 12, 32, 43, '', 76, '', 86, 23],
                ['<3', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '5%~7%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['50+', 12, 32, 43, '', 25, 76, '', 86],
                ['40~50', 12, 32, 43, '', 25, 76, '', 86,],
                ['30~40', 12, 32, 43, 11, 25, 76, '', 86,],
                ['20~30', 12, 32, 43, '', 25, 76, '', 23],
                ['10~20', 12, 32, 43, '', 25, 76, '', 23],
                ['5~10', 12, 32, 43, 23, 25,'', 86, 23],
                ['3~5', 12, 32, 43, '', 76, '', 86, 23],
                ['<3', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '3%~5%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['50+', 12, 32, 43, '', 25, 76, '', 86],
                ['40~50', 12, 32, 43, '', 25, 76, '', 86,],
                ['30~40', 12, 32, 43, 11, 25, 76, '', 86,],
                ['20~30', 12, 32, 43, '', 25, 76, '', 23],
                ['10~20', 12, 32, 43, '', 25, 76, '', 23],
                ['5~10', 12, 32, 43, 23, 25,'', 86, 23],
                ['3~5', 12, 32, 43, '', 76, '', 86, 23],
                ['<3', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '<-10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['50+', 12, 32, 43, '', 25, 76, '', 86],
                ['40~50', 12, 32, 43, '', 25, 76, '', 86,],
                ['30~40', 12, 32, 43, 11, 25, 76, '', 86,],
                ['20~30', 12, 32, 43, '', 25, 76, '', 23],
                ['10~20', 12, 32, 43, '', 25, 76, '', 23],
                ['5~10', 12, 32, 43, 23, 25,'', 86, 23],
                ['3~5', 12, 32, 43, '', 76, '', 86, 23],
                ['<3', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-7%~-10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['50+', 12, 32, 43, '', 25, 76, '', 86],
                ['40~50', 12, 32, 43, '', 25, 76, '', 86,],
                ['30~40', 12, 32, 43, 11, 25, 76, '', 86,],
                ['20~30', 12, 32, 43, '', 25, 76, '', 23],
                ['10~20', 12, 32, 43, '', 25, 76, '', 23],
                ['5~10', 12, 32, 43, 23, 25,'', 86, 23],
                ['3~5', 12, 32, 43, '', 76, '', 86, 23],
                ['<3', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-5%~-7%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['50+', 12, 32, 43, '', 25, 76, '', 86],
                ['40~50', 12, 32, 43, '', 25, 76, '', 86,],
                ['30~40', 12, 32, 43, 11, 25, 76, '', 86,],
                ['20~30', 12, 32, 43, '', 25, 76, '', 23],
                ['10~20', 12, 32, 43, '', 25, 76, '', 23],
                ['5~10', 12, 32, 43, 23, 25,'', 86, 23],
                ['3~5', 12, 32, 43, '', 76, '', 86, 23],
                ['<3', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-3%~5%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['50+', 12, 32, 43, '', 25, 76, '', 86],
                ['40~50', 12, 32, 43, '', 25, 76, '', 86,],
                ['30~40', 12, 32, 43, 11, 25, 76, '', 86,],
                ['20~30', 12, 32, 43, '', 25, 76, '', 23],
                ['10~20', 12, 32, 43, '', 25, 76, '', 23],
                ['5~10', 12, 32, 43, 23, 25,'', 86, 23],
                ['3~5', 12, 32, 43, '', 76, '', 86, 23],
                ['<3', 12, 32, 43, '', 76, '', 86, 23]
              ]
            }
          ]
        },
        {
          category: '总市值',
          tableValue: [
            {
              firstIndex: '10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['1000+', 12, 32, 43, '', 25, 76, '', 86],
                ['500~1000', 12, 32, 43, '', 25, 76, '', 86,],
                ['200~500', 12, 32, 43, 11, 25, 76, '', 86,],
                ['100~200', 12, 32, 43, '', 25, 76, '', 23],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, 23, 25,'', 86, 23],
                ['30~40', 12, 32, 43, '', 76, '', 86, 23],
                ['<30', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '7%~10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['1000+', 12, 32, 43, '', 25, 76, '', 86],
                ['500~1000', 12, 32, 43, '', 25, 76, '', 86,],
                ['200~500', 12, 32, 43, 11, 25, 76, '', 86,],
                ['100~200', 12, 32, 43, '', 25, 76, '', 23],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, 23, 25,'', 86, 23],
                ['30~40', 12, 32, 43, '', 76, '', 86, 23],
                ['<30', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '5%~7%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['1000+', 12, 32, 43, '', 25, 76, '', 86],
                ['500~1000', 12, 32, 43, '', 25, 76, '', 86,],
                ['200~500', 12, 32, 43, 11, 25, 76, '', 86,],
                ['100~200', 12, 32, 43, '', 25, 76, '', 23],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, 23, 25,'', 86, 23],
                ['30~40', 12, 32, 43, '', 76, '', 86, 23],
                ['<30', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '3%~5%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['1000+', 12, 32, 43, '', 25, 76, '', 86],
                ['500~1000', 12, 32, 43, '', 25, 76, '', 86,],
                ['200~500', 12, 32, 43, 11, 25, 76, '', 86,],
                ['100~200', 12, 32, 43, '', 25, 76, '', 23],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, 23, 25,'', 86, 23],
                ['30~40', 12, 32, 43, '', 76, '', 86, 23],
                ['<30', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '<-10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['1000+', 12, 32, 43, '', 25, 76, '', 86],
                ['500~1000', 12, 32, 43, '', 25, 76, '', 86,],
                ['200~500', 12, 32, 43, 11, 25, 76, '', 86,],
                ['100~200', 12, 32, 43, '', 25, 76, '', 23],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, 23, 25,'', 86, 23],
                ['30~40', 12, 32, 43, '', 76, '', 86, 23],
                ['<30', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-7%~-10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['1000+', 12, 32, 43, '', 25, 76, '', 86],
                ['500~1000', 12, 32, 43, '', 25, 76, '', 86,],
                ['200~500', 12, 32, 43, 11, 25, 76, '', 86,],
                ['100~200', 12, 32, 43, '', 25, 76, '', 23],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, 23, 25,'', 86, 23],
                ['30~40', 12, 32, 43, '', 76, '', 86, 23],
                ['<30', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-5%~-7%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['1000+', 12, 32, 43, '', 25, 76, '', 86],
                ['500~1000', 12, 32, 43, '', 25, 76, '', 86,],
                ['200~500', 12, 32, 43, 11, 25, 76, '', 86,],
                ['100~200', 12, 32, 43, '', 25, 76, '', 23],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, 23, 25,'', 86, 23],
                ['30~40', 12, 32, 43, '', 76, '', 86, 23],
                ['<30', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-3%~5%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['1000+', 12, 32, 43, '', 25, 76, '', 86],
                ['500~1000', 12, 32, 43, '', 25, 76, '', 86,],
                ['200~500', 12, 32, 43, 11, 25, 76, '', 86,],
                ['100~200', 12, 32, 43, '', 25, 76, '', 23],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, 23, 25,'', 86, 23],
                ['30~40', 12, 32, 43, '', 76, '', 86, 23],
                ['<30', 12, 32, 43, '', 76, '', 86, 23]
              ]
            }
          ]
        },
        {
          category: '流通市值',
          tableValue: [
            {
              firstIndex: '10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['500+', 12, 32, 43, '', 25, 76, '', 86],
                ['200~500', 12, 32, 43, '', 25, 76, '', 86,],
                ['100~200', 12, 32, 43, 11, 25, 76, '', 86,],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, '', 25, 76, '', 23],
                ['20~40', 12, 32, 43, 23, 25,'', 86, 23],
                ['10~20', 12, 32, 43, '', 76, '', 86, 23],
                ['<10', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '7%~10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['500+', 12, 32, 43, '', 25, 76, '', 86],
                ['200~500', 12, 32, 43, '', 25, 76, '', 86,],
                ['100~200', 12, 32, 43, 11, 25, 76, '', 86,],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, '', 25, 76, '', 23],
                ['20~40', 12, 32, 43, 23, 25,'', 86, 23],
                ['10~20', 12, 32, 43, '', 76, '', 86, 23],
                ['<10', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '5%~7%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['500+', 12, 32, 43, '', 25, 76, '', 86],
                ['200~500', 12, 32, 43, '', 25, 76, '', 86,],
                ['100~200', 12, 32, 43, 11, 25, 76, '', 86,],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, '', 25, 76, '', 23],
                ['20~40', 12, 32, 43, 23, 25,'', 86, 23],
                ['10~20', 12, 32, 43, '', 76, '', 86, 23],
                ['<10', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '3%~5%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['500+', 12, 32, 43, '', 25, 76, '', 86],
                ['200~500', 12, 32, 43, '', 25, 76, '', 86,],
                ['100~200', 12, 32, 43, 11, 25, 76, '', 86,],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, '', 25, 76, '', 23],
                ['20~40', 12, 32, 43, 23, 25,'', 86, 23],
                ['10~20', 12, 32, 43, '', 76, '', 86, 23],
                ['<10', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '<-10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['500+', 12, 32, 43, '', 25, 76, '', 86],
                ['200~500', 12, 32, 43, '', 25, 76, '', 86,],
                ['100~200', 12, 32, 43, 11, 25, 76, '', 86,],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, '', 25, 76, '', 23],
                ['20~40', 12, 32, 43, 23, 25,'', 86, 23],
                ['10~20', 12, 32, 43, '', 76, '', 86, 23],
                ['<10', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-7%~-10%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['500+', 12, 32, 43, '', 25, 76, '', 86],
                ['200~500', 12, 32, 43, '', 25, 76, '', 86,],
                ['100~200', 12, 32, 43, 11, 25, 76, '', 86,],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, '', 25, 76, '', 23],
                ['20~40', 12, 32, 43, 23, 25,'', 86, 23],
                ['10~20', 12, 32, 43, '', 76, '', 86, 23],
                ['<10', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-5%~-7%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['500+', 12, 32, 43, '', 25, 76, '', 86],
                ['200~500', 12, 32, 43, '', 25, 76, '', 86,],
                ['100~200', 12, 32, 43, 11, 25, 76, '', 86,],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, '', 25, 76, '', 23],
                ['20~40', 12, 32, 43, 23, 25,'', 86, 23],
                ['10~20', 12, 32, 43, '', 76, '', 86, 23],
                ['<10', 12, 32, 43, '', 76, '', 86, 23]
              ]
            },
            {
              firstIndex: '-3%~5%',
              seconedIndex: [
                ['总个数', 12, 32, 43, '', 25, 76, '', 86],
                ['500+', 12, 32, 43, '', 25, 76, '', 86],
                ['200~500', 12, 32, 43, '', 25, 76, '', 86,],
                ['100~200', 12, 32, 43, 11, 25, 76, '', 86,],
                ['60~100', 12, 32, 43, '', 25, 76, '', 23],
                ['40~60', 12, 32, 43, '', 25, 76, '', 23],
                ['20~40', 12, 32, 43, 23, 25,'', 86, 23],
                ['10~20', 12, 32, 43, '', 76, '', 86, 23],
                ['<10', 12, 32, 43, '', 76, '', 86, 23]
              ]
            }
          ]
        },
      ],
      commentsMakeMoney: "“投资者尤其是中小投资者，应坚守理性投资的理念，既要对中国经济和资本市场的发展充满信心，又要认识到市场的风险和不确定性。”清华大学国家金融研究院副院长、上市公司研究中心主任王娴表示新时代证券首席经济学家潘向东向中新网记者表示，疫情发生之后，中国货币政策宽松，金融机构间资金价格低廉，M2、社会融资增速大幅上升，宏观流动性充裕，中国经济恢复良好，PPI增速触底反弹，企业盈利改善。“3月下旬以来，大盘中枢上移吸引社会资金进入股市，以及近期偏股型基金发行规模上升就是证明。”",
      value: '',
      min: minDate,
      max: maxDate,
      // ----------------
      // 股票池参数
      StockPoolOptions: [
        {
          tabName: '涨停池',
          isActive: true
        },
        {
          tabName: '炸板池',
          isActive: false
        },
        {
          tabName: '跌停池',
          isActive: false
        },
        {
          tabName: '强势池',
          isActive: false
        },
        {
          tabName: '昨日涨停池',
          isActive: false
        }
      ],
      StockPoolFields: [
          {
            key: 'index',
            label: "序号",
            sortable: true
          },
          {
            key: 'stockName',
            label: "股票名称",
            sortable: false
          },
          {
            key: "stockCode",
            label: "股票代码",
            sortable: false
          },
          {
            key: 'newestPrice',
            label: '最新价',
            sortable: true
          },
          {
            key: 'applies',
            label: '涨跌幅',
            sortable: true
          },
          {
            key: 'sharePrice',
            label: '流通市值',
            sortable: true
          },
          {
            key: 'totalValue',
            label: '总市值',
            sortable: true
          },
          {
            key: 'finalSealingTime',
            label: '最后封板时间',
            sortable: true
          },
          {
            key: 'evenPlateNumber',
            label: '连板数',
            sortable: true
          }
      ],
      StockPoolItems: [
        { index: 202, stockName: "兆一创新", stockCode: 603976, newestPrice: 22.34, applies: "+10.00%",  sharePrice: "82.1亿", totalValue: "47.12亿", finalSealingTime: "11:32:12", evenPlateNumber: "23"},
        { index: 123, stockName: "秦闻科技", stockCode: 603271, newestPrice: 98.34, applies: "+40.00%",  sharePrice: "72.1亿", totalValue: "947.12亿", finalSealingTime: "11:33:12", evenPlateNumber: "22"},
        { index: 532, stockName: "三花智控", stockCode: 602912, newestPrice: 25.24, applies: "+23.00%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:34:12", evenPlateNumber: "21"},
        { index: 122, stockName: "长电科技", stockCode: 604342, newestPrice: 12.34, applies: "+12.00%",  sharePrice: "2.1亿", totalValue: "97.12亿", finalSealingTime: "11:35:13", evenPlateNumber: "32"},
        { index: 422, stockName: "花生科技", stockCode: 698356, newestPrice: 63.34, applies: "+32.00%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:32:15", evenPlateNumber: "1"},
        { index: 242, stockName: "圣康加深", stockCode: 691772, newestPrice: 34.34, applies: "+9.00%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
      ],
      sortBy: 'index', //默认排序字段
      sortDesc: true,  //默认排序方式，降序
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    onSubmit() {
      console.log("添加")
    },
    // 生成随机数测试用。
    generateRandomArr(n, min, max) {
      var arr = [];
      for (var i = 0; i < n; i++) {
        var random = Math.floor(Math.random() * (max - min + 1) + min);
        arr.push(random);
      }
      return arr;
    },
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
      let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
      let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
      let myChart5 = this.$echarts.init(document.getElementById('myChart5'))
      let heat = this.$echarts.init(document.getElementById('heat'))
      window.onresize = function() {
        heat.resize();
        myChart.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
      }
      // 绘制图表
      // 涨跌分布
      let option = {
        title: {
          text: '涨跌分布',
          x:'left',
          y:'top',
          textStyle: {fontSize: 13, color: '#2c3e50'}
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          top: "15%",
          bottom: "0%",
          containLabel: true
        },
        xAxis: {type: 'category',show: false, data: this.generateRandomArr(6, 100, 200)},
        yAxis: { type: 'value', position: 'right', axisLine: { show: false },
            axisTick: { show: false },
            splitNumber: 2,
            splitLine:{ show:true, lineStyle:{ type:'dashed' } }
        },
        series: [{
          name: '涨',
          data: [120, 200, 150, 80, 70, 110],
          barWidth: '60%',
          type: 'bar'
        }]
      };
      myChart.setOption(option, true);

      let heatOption = {
        title: {
          text: '市场真实数据',
          x:'center',
          y:'top',
          textStyle: {fontSize: 13, color: '#2c3e50'}
        },
        tooltip: {
          formatter: '{a} : {c}%',
          "textStyle": {
            "fontSize": 10
          }
        },
        series: [
          {
            name: '实时热度',
            type: 'gauge',
            radius: '100%',//仪表盘半径
            center: ['50%', '65%'],//仪表盘位置
            detail: {
              formatter: '{value}%',
              textStyle: {
              fontSize: 13
            }
            },
            axisTick: {show: false},
            axisLabel: {show: false},
            data: [{value: 50}],
            splitLine: {show: true, length: 10},
            axisLine: {
              lineStyle: {
                color: [[0.6, '#2aab55'], [1, '#e44444']],
                width: 10
              },
            },
            pointer: {width: 4},
            startAngle: 180,
            endAngle: 0
          }
        ]
      }
      heat.setOption(heatOption, true);
      // 涨跌对比
      let option2 = {
        title: {
          text: '涨跌分布',
          x:'left',
          y:'top',
          textStyle: {fontSize: 13, color: '#2c3e50'}
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          top: "15%",
          bottom: "0%",
          containLabel: true
        },
        xAxis: {
          type: 'category',
          show: false,
          data: this.generateRandomArr(50, 0, 100)
        },
        yAxis: { type: 'value', position: 'right', axisLine: { show: false },
          axisTick: { show: false },
          splitNumber: 2,
          splitLine:{ show:true, lineStyle:{ type:'dashed' } }
        },
        series: [{
          name: '涨',
          data: this.generateRandomArr(50, 0, 200),
          type: 'line',
          symbol: 'none',
          itemStyle: {
            normal: {lineStyle: {width: 1.5}}
          }
        },
        { 
          name: '跌',
          data: this.generateRandomArr(50, 0, 200),
          type: 'line',
          symbol: 'none',
          itemStyle: {
            normal: {lineStyle: {width: 1.5}}
          }
        }]
      };
      myChart2.setOption(option2, true);
      myChart3.setOption(option2, true);
      myChart4.setOption(option2, true);
      myChart5.setOption(option2, true);

      setInterval(function () {
          heatOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          heat.setOption(heatOption, true);
      },2000);
    },
    // 股票池改变表格
    changeTable(index){
      for (let index = 0; index < this.StockPoolOptions.length; index++) {
        this.StockPoolOptions[index].isActive = false;
      }
      this.StockPoolOptions[index].isActive = true;
      if(index == 0) {
        this.StockPoolItems = [
          { index: 202, stockName: "兆一创新", stockCode: 603976, newestPrice: 22.34, applies: "+10.00%",  sharePrice: "82.1亿", totalValue: "47.12亿", finalSealingTime: "11:32:12", evenPlateNumber: "23"},
          { index: 123, stockName: "秦闻科技", stockCode: 603271, newestPrice: 98.34, applies: "+40.00%",  sharePrice: "72.1亿", totalValue: "947.12亿", finalSealingTime: "11:33:12", evenPlateNumber: "22"},
          { index: 532, stockName: "三花智控", stockCode: 602912, newestPrice: 25.24, applies: "+23.00%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:34:12", evenPlateNumber: "21"},
          { index: 122, stockName: "长电科技", stockCode: 604342, newestPrice: 12.34, applies: "+12.00%",  sharePrice: "2.1亿", totalValue: "97.12亿", finalSealingTime: "11:35:13", evenPlateNumber: "32"},
          { index: 422, stockName: "花生科技", stockCode: 698356, newestPrice: 63.34, applies: "+32.00%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:32:15", evenPlateNumber: "1"},
          { index: 242, stockName: "圣康加深", stockCode: 691772, newestPrice: 34.34, applies: "+9.00%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
        ]
      } else if(index==1) {
        this.StockPoolItems = [
          { index: 11, stockName: "长电科技", stockCode: "sz300002", newestPrice: 22.34, applies: "+1.00%",  sharePrice: "82.1亿", totalValue: "47.12亿", finalSealingTime: "11:32:12", evenPlateNumber: "23"},
          { index: 22, stockName: "神州太岳", stockCode: "sz300003", newestPrice: 98.34, applies: "+21.00%",  sharePrice: "72.1亿", totalValue: "947.12亿", finalSealingTime: "11:33:12", evenPlateNumber: "22"},
          { index: 342, stockName: "乐普医疗", stockCode: 'sz300041', newestPrice: 25.24, applies: "+0.10%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:34:12", evenPlateNumber: "21"},
          { index: 123, stockName: "南风股份", stockCode: "sz300021", newestPrice: 12.34, applies: "+2.40%",  sharePrice: "2.1亿", totalValue: "97.12亿", finalSealingTime: "11:35:13", evenPlateNumber: "32"},
          { index: 432, stockName: "莱美药业", stockCode: "sz300012", newestPrice: 63.34, applies: "+3.80%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:32:15", evenPlateNumber: "1"},
          { index: 262, stockName: "安科生物", stockCode: "sz300098", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
          { index: 1234, stockName: "天海防务", stockCode: "sz300023", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
          { index: 853, stockName: "丁汉技术", stockCode: "sz300053", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
        ]
      } else if(index==2) {
        this.StockPoolItems = [
          { index: 43221, stockName: "中灰股份", stockCode: "sz300002", newestPrice: 22.34, applies: "+1.00%",  sharePrice: "82.1亿", totalValue: "47.12亿", finalSealingTime: "11:32:12", evenPlateNumber: "23"},
          { index: 19823, stockName: "华测检测", stockCode: "sz300003", newestPrice: 98.34, applies: "+21.00%",  sharePrice: "72.1亿", totalValue: "947.12亿", finalSealingTime: "11:33:12", evenPlateNumber: "22"},
          { index: 62341, stockName: "亿纬锂能", stockCode: 'sz300041', newestPrice: 25.24, applies: "+0.10%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:34:12", evenPlateNumber: "21"},
          { index: 23151, stockName: "华谊兄弟", stockCode: "sz300021", newestPrice: 12.34, applies: "+2.40%",  sharePrice: "2.1亿", totalValue: "97.12亿", finalSealingTime: "11:35:13", evenPlateNumber: "32"},
          { index: 13415, stockName: "天龙广电", stockCode: "sz300012", newestPrice: 63.34, applies: "+3.80%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:32:15", evenPlateNumber: "1"},
          { index: 12414, stockName: "爱尔眼科", stockCode: "sz300098", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
          { index: 12459, stockName: "金龙科技", stockCode: "sz300023", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
          { index: 83778, stockName: "红日药业", stockCode: "sz300053", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
        ]
      } else if(index==3) {
        this.StockPoolItems = [
          { index: 83784, stockName: "九州电器", stockCode: "sz300002", newestPrice: 22.34, applies: "+1.00%",  sharePrice: "82.1亿", totalValue: "47.12亿", finalSealingTime: "11:32:12", evenPlateNumber: "23"},
          { index: 18728, stockName: "天怀科技", stockCode: "sz300003", newestPrice: 98.34, applies: "+21.00%",  sharePrice: "72.1亿", totalValue: "947.12亿", finalSealingTime: "11:33:12", evenPlateNumber: "22"},
          { index: 19823, stockName: "航科科技", stockCode: 'sz300041', newestPrice: 25.24, applies: "+0.10%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:34:12", evenPlateNumber: "21"},
          { index: 63528, stockName: "中汇科技", stockCode: "sz300021", newestPrice: 12.34, applies: "+2.40%",  sharePrice: "2.1亿", totalValue: "97.12亿", finalSealingTime: "11:35:13", evenPlateNumber: "32"},
          { index: 28383, stockName: "浮光科技", stockCode: "sz300012", newestPrice: 63.34, applies: "+3.80%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:32:15", evenPlateNumber: "1"},
          { index: 28742, stockName: "新麦科技", stockCode: "sz300098", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
          { index: 76347, stockName: "安怀科技", stockCode: "sz300023", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
          { index: 57273, stockName: "丁汉技术", stockCode: "sz300053", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
        ]
      } else if(index==4) {
        this.StockPoolItems = [
          { index: 93884, stockName: "中信股份", stockCode: "sz300002", newestPrice: 22.34, applies: "+1.00%",  sharePrice: "82.1亿", totalValue: "47.12亿", finalSealingTime: "11:32:12", evenPlateNumber: "23"},
          { index: 28485, stockName: "中国烫伤", stockCode: "sz300003", newestPrice: 98.34, applies: "+21.00%",  sharePrice: "72.1亿", totalValue: "947.12亿", finalSealingTime: "11:33:12", evenPlateNumber: "22"},
          { index: 48956, stockName: "永恒科技", stockCode: 'sz300041', newestPrice: 25.24, applies: "+0.10%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:34:12", evenPlateNumber: "21"},
          { index: 34858, stockName: "天津发展", stockCode: "sz300021", newestPrice: 12.34, applies: "+2.40%",  sharePrice: "2.1亿", totalValue: "97.12亿", finalSealingTime: "11:35:13", evenPlateNumber: "32"},
          { index: 47385, stockName: "龙城科技", stockCode: "sz300012", newestPrice: 63.34, applies: "+3.80%",  sharePrice: "72.1亿", totalValue: "87.12亿", finalSealingTime: "11:32:15", evenPlateNumber: "1"},
          { index: 29494, stockName: "重庆机电", stockCode: "sz300098", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
          { index: 94574, stockName: "仁慈控股", stockCode: "sz300023", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
          { index: 47473, stockName: "新卫斯顿", stockCode: "sz300053", newestPrice: 34.34, applies: "+12.40%",  sharePrice: "42.1亿", totalValue: "27.12亿", finalSealingTime: "11:32:16", evenPlateNumber: "32"},
        ]
      }
    }
  }
}
</script>

<style scoped>
.ban-chart-out{
  display: flex;
  justify-content: flex-start;
}
.el-progress{
  margin: 0 auto;
}
.market-card{
  border: none;
}


</style>
<style>
  .regular-size {
    font-size: 13px;
    width: 100%;
    text-align: center;
    display: block;
  }
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
/* .card-header{
  height: 100% !important;
} */
.chartStyle{
  width: 100%;
  height: 150px;
  padding-left: 15px;
  display: flex;
  justify-content: center;
}
.clearfix::before{
  content: ”;
  display: table;
}
.selectDate{
  margin: 10px 10px 25px;
}
.el-input__inner{
  border: none;
}
.market-data ul {
  background-color: #fff !important;
}
</style>