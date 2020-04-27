<template>
  <div class="container">
    <!-- 多选框 -->
    <div class="NewsClassification">
      <b-form-group label="新闻分类:">
        <b-form-checkbox-group
          size="sm"
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          name="flavour-1"
          class="text-muted checkboxGroup"
        ></b-form-checkbox-group>
      </b-form-group>
    </div>
    
    <div class="sr-only">Selected: <strong>{{ selected }}</strong></div>
    <!-- 新闻板块, 循环获取 -->
    <div class="newsList">
      <div class="newsDate">4月27日</div>
      <ul class="news">
        <li class="newsItem" v-for="item in allNews" :key="item.time">
          <span class="newsTime">{{ item.time }}</span>
          <span class="newsTitle">
            <a href="#">{{ item.title }}</a>
            <b-badge href="#" variant="danger" style="margin-left:10px; color:#f8f8f8">{{ item.badage }}</b-badge>
          </span>
        </li>
      </ul>
      <div class="noData">暂无更多数据</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      selected: [], // Must be an array reference!
      options: [
        { text: '大新闻', value: 'bigNew' },
        { text: '公告', value: 'announcement' },
        { text: '盘中异动', value: 'chartMove' },
        { text: '市场机会', value: 'marketOpportunities' }
      ],
      allNews: [
        {
          time: '21:17', 
          title: '长安汽车：拟定增募资不超过60亿元，用于合肥长安汽车有限公司调整升级等多个项目,长安汽车：拟定增募资不超过60亿元，用于合肥长安汽车有限公司调整升级等多个项目',
          badage: '长安汽车'
        },
        {
          time: '21:10', 
          title: '特斯拉涨幅扩大至9%，升破790美元关口', 
          badage: "特斯拉"
        },
        {
          time: '20:40', 
          title: '五粮液：2019年净利润174亿元同比增30%，拟10派22',
          badage: '五粮液'  
        },
        {
          time: '20:38', 
          title: '新兴市场国家政府新债务销发行达到500亿美元，创单月历史新高',
          badage: '利好'
        },
        {
          time: '20:23',
          title: '证监会：中国证监会停止接收首次公开发行股票并在创业板上市申请',
          badage: '上市'  
        },
      ]
    }
  },
  methods: {

  },
}
</script>

<style scoped>
.NewsClassification{
  margin-top: 30px;
}
.newsList{
  background-color: #fff;
  position: relative;
  /* height: 100vh; */
}
.newsList .newsDate {
  position: absolute;
  width: 7%;
  height: 40px;
  background-color: #272633;
  font-size: 18px;
  text-align: left;
  line-height: 40px;
  color: #fff;
  border-top-right-radius: 30%;
  border-bottom-right-radius: 30%;
  padding-left: .3rem;
}
.newsList ul{
  padding: 0;
  padding-left: 20px;
  padding-top: 40px;
}
.newsList .newsItem {
  font-size: 14px;
  list-style: none;
  border-left: 1px dotted #dfdfdf;
  box-sizing: border-box;
  padding: 20px 0 0px 10px;
}
.newsList .newsItem .newsTime {
  width: 5%;
  display: inline-block;
  line-height: 1;
  font-family: DIN-Medium;
  padding-top: 2px;
  vertical-align:top
}
.newsList .newsItem .newsTitle {
  width: 95%;
  display: inline-block;
  border-bottom: 1px solid #f0f0f5;
  font-size: 16px;
  padding-bottom: 20px;
  padding-right: 50px;
}
.noData {
  text-align: center;
  font-size: 14px;
  padding-bottom: 20px;
  color: #666;
}
a{
  text-decoration: none;
  color: #333;
}
</style>