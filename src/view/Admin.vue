<template>
  <div class="container">
    <h4 style="text-align:center">后台股票买卖页面</h4>
    <b-card class="Info shadow-sm p-2 mb-3 bg-white rounded">
      <span class="small-title">策略名称</span>
      <ul class="userInfo">
        <li>总资金:{{totalMoney}}</li>
        <li>持仓市值:{{marketValue}}</li>
        <li>可用资金:{{availableFunds}}</li>
        <li>仓位:{{positions}}</li>
      </ul>
    </b-card>
    <b-card class="shadow-sm p-1 mb-3 bg-white rounded">
      <b-form @submit="onSubmit" v-if="show">
        <b-row>
          <b-col sm="3">
            <b-form-group label-cols="9" label-cols-lg="5" label-size="sm" label="买卖方式:" label-for="select-buy-sale">
              <b-form-select size="sm" id="select-buy-sale" v-model="selected" :options="options"></b-form-select>
            </b-form-group>
          </b-col>
          <b-col sm="3">
            <b-form-group label-cols="9" label-cols-lg="5" label-size="sm" label="股票代码:" label-for="input-sm">
              <b-form-input id="input-sm" size="sm"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="3">
            <b-form-group label-cols="9" label-cols-lg="5" label-size="sm" label="股票价格:" label-for="input-sm">
              <b-form-input id="input-sm" size="sm"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col sm="3">
            <b-form-group label-cols="9" label-cols-lg="5" label-size="sm" label="股票数量:" label-for="input-sm">
              <b-form-input id="input-sm" size="sm"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-button block size="sm" type="submit" variant="primary">确定</b-button>
      </b-form>
      <!-- 当前可卖出股票-->
      <div class="table-current-position activate-stock">
        <span class="small-title">当前可卖出股票</span>
        <b-button size="sm" variant="success" class="sales-all">全部卖出</b-button>
        <b-table outlined  small :items="newTransactionItems" :fields="fields2" table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table"></b-table>
      </div>
      <!-- 当前持仓 -->
      <div class="table-current-position activate-stock">
        <span class="small-title">当前持仓</span>
        <b-table outlined  small :items="newTransactionItems" :fields="fields2" table-class="positions-table" thead-tr-class="positions-head-table" tbody-tr-class="positions-body-table"></b-table>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalMoney: "100万",
      marketValue: '200万',
      availableFunds: '20万',
      positions: '200',
      show: true,
      selected: null,
      options: [
          { value: null, text: '买入或卖出' },
          { value: '1', text: '买入' },
          { value: '2', text: '卖出' },
        ],
      fields2: [
        {key: 'stockCode', label: '股票代码'},
        {key: 'stockPrice', label: '股票本价/元'},
        {key: 'stockTotal', label: '股票数量/股'},
        {key: 'accumulatedEarnings', label: '累计收益/元'},
      ],
      newTransactionItems: [
          { stockCode: '2033922', stockPrice: '12.4', stockTotal: '200', accumulatedEarnings: '212212'},
          { stockCode: '2033922', stockPrice: '12.4', stockTotal: '1233', accumulatedEarnings: '13312'},
          { stockCode: '2033922', stockPrice: '92.21', stockTotal: '1213', accumulatedEarnings: '11234'},
          { stockCode: '2033922', stockPrice: '129.2', stockTotal: '2020', accumulatedEarnings: '75342'},
        ]
    }
  },
  methods: {
    onSubmit(){
      console.log("添加记录")
    }
  },
}
</script>
<style scoped>
  .userInfo {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    /* font-family: PingFangSC-Semibold; */
    line-height: 22px;
    display: flex;
    justify-content: space-between;
  }
  .userInfo li {
    display: block;
  }
  .activate-stock{
    margin-top: 20px;
  }
  .small-title{
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #333333;
  }
  .sales-all {
    float: right;
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>