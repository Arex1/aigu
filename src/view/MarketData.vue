<template>
  <div>
    <b-card no-body>
      <b-tabs pills card vertical nav-class="nav-tabs" active-nav-item-class='activate-li-tab'>
        <b-tab title="数据分析" :active="true">
          <div class="data-analysis-header shadow clearfix">
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
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </b-tab>
        <b-tab title="赚钱效应" >
          <b-tabs content-class="mt-3">
            <b-tab title="效应一">
              <b-alert show>仅供参考</b-alert>
              <!-- 成交额，日期，评论区 -->
              <b-form @submit="onSubmit" v-if="true">
                <b-row>
                  <b-col sm="3">
                    <b-form-group label-cols="5" label-cols-lg="4" label-size="sm" label="类型:" label-for="select-buy-sale">
                      <b-form-select size="sm" id="select-buy-sale" v-model="selected" :options="options"></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col sm="3">
                    <b-form-group label-cols="4" label-cols-lg="3" label-size="sm" label="日期:" label-for="second-date">
                      <b-form-input id="second-date" size="sm" placeholder="2020-05-14"></b-form-input>
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
              <!-- 成交额表 -->
              <b-table-simple v-if="selected == '1'" outlined bordered small caption-top responsive table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table">
                <caption>成交额信息对照表:</caption>
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
              <!-- 总市值表 -->
              <b-table-simple v-if="selected == '2'" outlined bordered small caption-top responsive table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table">
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
              <b-table-simple v-if="selected == '3'" outlined bordered small caption-top responsive table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table">
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
        <b-tab title="股票池"><b-card-text>Tab contents 4</b-card-text></b-tab>
      </b-tabs>
  </b-card>
  </div>
</template>
<script>
// import echarts from 'echarts'
export default {
  data() {
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
      selected: '1',
      options: [
          { value: '1', text: '成交额' },
          { value: '2', text: '总市值' },
          { value: '3', text: '涨幅' }
        ],
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
</style>