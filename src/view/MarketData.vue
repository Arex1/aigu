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
                    <b-form-group label-cols="5" label-cols-lg="4" label-size="sm" label="类型:" label-for="select-buy-sale">
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
      selected: '1',
      options: [
          { value: '1', text: '成交额' },
          { value: '2', text: '总市值' },
          { value: '3', text: '涨幅' }
        ],
    }
  },
  methods: {
    onSubmit() {
      console.log("添加")
    }
  },
  mounted(){
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