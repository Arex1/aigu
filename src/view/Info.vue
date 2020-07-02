<template>
  <div class="container">
    <!-- 头部涨跌指数 -->
    <div class="index-header wow animate__animated animate__slideInDown">
      <ul class="top-index">
        <li class="stock-index">上证指数</li>
        <li class="index">
          <span>2836.80</span>
          <span>-9.74</span>
          <span>-0.34%</span>
        </li>
        <li class="index-list-group">
          <ul class="index-list">
            <li>
              <span class="company-id">东方财经</span>
              <span class="or-fall">+23.2%</span>
            </li>
            <li>
              <span class="company-id">北方财经</span>
              <span class="or-fall">+13.2%</span>
            </li>
            <li>
              <span class="company-id">西方财经</span>
              <span class="or-fall">+11.2%</span>
            </li>
            <li>
              <span class="company-id">南方财经</span>
              <span class="or-fall">+10.2%</span>
            </li>
            <li class="bg-green">
              <span class="company-id">好疼科技</span>
              <span class="or-fall">-0.2%</span>
            </li>
            <li class="bg-green">
              <span class="company-id">上证</span>
              <span class="or-fall">-2.3%</span>
            </li>
            <li class="bg-green">
              <span class="company-id">夏正</span>
              <span class="or-fall">-3.4%</span>
            </li>
            <li class="bg-green">
              <span class="company-id">佐证</span>
              <span class="or-fall">-4.3%</span>
            </li>
            <li class="bg-green">
              <span class="company-id">邮政</span>
              <span class="or-fall">-9.5%</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <b-row>
        <b-col md="9" class="wow animate__animated animate__slideInLeft">
          <b-card title="实时新闻" class="mb-2 shadow-sm bg-white stock-news-section">
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
            <timeline>
              <timeline-item :hollow="false" v-for="(item, index) in newsLists" :key="index" class="wow animate__animated animate__fadeInUp">
                <div class="news-title">
                  <h2 class="news-title-name">
                    {{item.name}}
                    <b-badge variant="danger" v-for="(bd,i) in item.badage" :key="i" class="news-badage">{{bd}}</b-badge>
                  </h2>
                  <div class="news-date">{{item.date}}</div>
                </div>
                <div class="news-content">{{item.content}}</div>
                <div class="box" title="解读" v-if="item.unscramble">
                  <p class="unscramble">{{item.unscramble}}</p>
                </div>
                <span class="corresponding-plate" v-for="(plate, j) in item.correspondingPlate" :key="j">{{plate}}</span>
              </timeline-item>
            </timeline>
          </b-card>
        </b-col>
        <b-col md="3" class="">
          <div class="tips">市场观点</div>
          <div style="height:400px;width:100%;background-color:#fff;padding:10px" class="right-card mb-2 shadow bg-white wow animate__animated animate__slideInRight">
            <!-- 这里的标签名称要和main.js文件中定义的组件名称保持一致 -->
            <happy-scroll color="rgba(0,0,0,0.5)" size="5" class="wow animate__animated animate__fadeInUp">
              <!-- 内层盒子——内容区 -->
              <div class="con">
                <div class="public-article con" v-for="(article, ai) in publicArticle" :key="ai">
                  <div class="article-title-date">
                    <div class="article-title">{{article.title}}</div>
                    <div class="article-date">{{article.date}}</div>
                  </div>
                  <div class="article-content">{{article.content}}</div>
                </div>
              </div>
            </happy-scroll>
          </div>
          <div class="tips">公众号精选</div>
          <div style="height:400px;width:100%;background-color:#fff;padding:10px" class="right-card mb-2 shadow bg-white wow animate__animated animate__slideInRight">
            <!-- 这里的标签名称要和main.js文件中定义的组件名称保持一致 -->
            <happy-scroll color="rgba(0,0,0,0.5)" size="5" class="wow animate__animated animate__fadeInUp">
              <!-- 内层盒子——内容区 -->
              <div class="con">
                <div class="public-article con" v-for="(article, ai) in publicArticle" :key="ai">
                  <div class="article-title-date">
                    <div class="article-title">{{article.title}}</div>
                    <div class="article-date">{{article.date}}</div>
                  </div>
                  <div class="article-content">{{article.content}}</div>
                </div>
              </div>
            </happy-scroll>
          </div>
          <div class="tips">交易日历</div>
          <div style="height:400px;width:100%;background-color:#fff;padding:10px" class="right-card mb-2 shadow bg-white wow animate__animated animate__slideInRight">
            <!-- 这里的标签名称要和main.js文件中定义的组件名称保持一致 -->
            <happy-scroll color="rgba(0,0,0,0.5)" size="5" class="wow animate__animated animate__fadeInUp">
              <!-- 内层盒子——内容区 -->
              <div class="con">
                <div class="public-article con" v-for="(article, ai) in publicArticle" :key="ai">
                  <div class="article-title-date">
                    <div class="article-title">{{article.title}}</div>
                    <div class="article-date">{{article.date}}</div>
                  </div>
                  <div class="article-content">{{article.content}}</div>
                </div>
              </div>
            </happy-scroll>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {WOW} from 'wowjs';
import { Timeline, TimelineItem } from 'vue-cute-timeline';
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: '大新闻', value: 'bigNew' },
        { text: '公告', value: 'announcement' },
        { text: '盘中异动', value: 'chartMove' },
        { text: '市场机会', value: 'marketOpportunities' }
      ],
      newsLists: [
        {
          name: '沪指逼近3000点',
          date: '2020-07-01 10:07',
          badage: ['利好','飙升'],
          content: '在外围短暂调整企稳后，市场再度突破上攻，沪指也逼近3000点整数关口，后市来看，权重股的表现，特别是大金融及地产等蓝筹是市场攻关的主要力量，创业板引领的偏成长风格的反弹走势，短期仍望保持强势态势，在目前宽流动性、低估值及低利率市场环境下，长期来看，股票资产仍具备较大的吸引力，而短期择股则要考虑中报业绩，只有业绩上超预期，短线才可能有超额收益。',
          unscramble: "股市有风险，投资需谨慎，笔者分析也仅仅是一个参考，不作为你买卖的依据，对了错了希望一笑而过。",
          correspondingPlate: ['汽车', '医药']
        },
        {
          name: '创业板牛冠全球',
          date: '2020-07-01 10:07',
          badage: [],
          content: '周二，美三大股指延续涨势，道指收涨逾200点，报25812.88点；科技股大涨带动纳指收涨1.87%至10058.77点；标普500指数涨1.53%。',
          unscramble: "今天的3011点已经有个下破动作，今天减仓的仓位本周后半场有接回来的机会，个股走妖的较少，所以都会给机会。保持低吸思路不变。",
          correspondingPlate: ['汽车', '医药']
        },
        {
          name: '指数成分股普涨',
          date: '2020-07-01 10:07',
          badage: ['利好','飙升'],
          content: '32只成分股中，有28只上涨，仅4只下跌。汽车、医药、食品饮料等内需消费类成分股表现较为强势。其中，金杯汽车涨停，天士力(17.380, 1.16, 7.15%)上涨7.56%，张裕A(34.960, 0.81, 2.37%)上涨5.56%，寿仙谷(34.520, 0.64, 1.89%)上涨4.28%。医药类成分股片仔癀(176.910, 6.66, 3.91%)再创历史新高，股价最高触及170.6元，收涨2.81%。此外，启明信息(9.740, -0.07, -0.71%)、白云山(32.350, 0.02, 0.06%)、五粮液(178.330, 7.21, 4.21%)均上涨逾2%。',
          correspondingPlate: ['汽车', '医药']
        },
        {
          name: '传媒板块异动',
          date: '2020-07-01 10:06',
          badage: ['利好','飙升'],
          content: '新浪财经讯 7月1日消息，传媒板块异动，截至发稿，人民网(21.810, 1.98, 9.98%)拉升触板，北京文化(6.740, 0.61, 9.95%)、新华网(23.990, 1.63, 7.29%)、中视传媒(15.520, 1.03, 7.11%)、华媒控股(4.580, 0.23, 5.29%)等跟涨。',
          unscramble: "从5月底，我们就建议大家，尽量多关注风格切换，5月31日起，我们开始发布风格切换系列报告，提示在资金‘脱虚入实’的过程中，无风险利率上行使得投资者更加关注短期，而景气复苏的节奏有利于价值板块。近期周期股出现‘逆袭’信号，一定程度上印证了我们的思考。"
        },
        {
          name: '白酒股大涨',
          date: '2020-07-01 10:05',
          badage: ['利好','飙升'],
          content: '新浪财经讯 7月1日消息，白酒概念持续走强，截至发稿，老白干酒(13.910, 0.96, 7.41%)涨超8%，泸州老窖(98.280, 7.16, 7.86%)、伊力特(20.700, 0.93, 4.70%)、口子窖(53.300, 2.40, 4.72%)、迎驾贡酒(22.690, 0.92, 4.23%)等跟涨。'
        },
        {
          name: '格力地产复牌涨停',
          date: '2020-07-01 10:04',
          badage: ['利好','飙升'],
          content: '新浪财经讯 7月1日消息，格力地产(12.770, 1.16, 9.99%)复牌涨停。消息面上，此前玖思投资要约收购公司1.83亿股。格力地产6月30日晚间发布公告称，公司股票自2020年7月1日开市起复牌。'
        },
        {
          name: '绿地控股获两连板',
          date: '2020-07-01 10:01',
          badage: ['利好','飙升'],
          content: '新浪财经讯 7月1日消息，或因全球贸易港蹭到“海南+免税概念”，绿地控股(6.800, 0.62, 10.03%)录得两连板，截至发稿，绿地控股拉升涨停。昨日绿地控股午后涨停，有分析称涨停原因或是绿地正布局全球商品贸易港项目，加上新商办刚在海口落地，市场预期其能享受政策利好。'
        }
      ],
      publicArticle: [
        {
          title: '医疗IT长期景气确定性提升',
          date: '2020-07-02 12:12',
          content: '6月29日，国家卫生健康委办公厅印发《关于做好信息化支撑常态化疫情防控工作的通知》。《通知》从强化疫情监测预警、完善健康通行码政策标准、推广疫情期间线上服务经验、拓展“互联网+政务”服务、推进信息化新型基础设施建设和强化网络安全工作等六个方面提出相关要求，指导各地利用信息化手段支撑常态化疫情防控工作。'
        },
        {
          title: '电子特气市场空间广阔',
          date: '2020-07-02 12:12',
          content: '据悉，电子气体在半导体材料领域成本比13%左右，是仅次于硅片的第二大半导体材料，国内2018年对应市场规模约80亿元。对于整个电子特气行业而言，2018年国内市场规模约120亿元。由于半导体等下游技术更迭带来附加值不断提高，电子特气市场增长超越了整个半导体材料增速，中国半导体行业协会预计到2024年电子特气行业规模将达到230亿元。目前国内电子特气市场被空气化工、液化空气、大阳日酸、普莱克斯、林德五大外资巨头垄断，国内企业市场占比仅12%，国产替代空间广阔。'
        },
        {
          title: '上攻之后击破3000点洗盘！',
          date: '2020-07-02 12:12',
          content: '观察盘面，认为：沪市大盘55月均线（3006点）呈向下运行趋势，对上方的股指具有向下反作用力；30分钟图上的KDJ指标线运行到高位，提前发出了对应级别回落调整的信号；今天早盘高开的一般性缺口（2984.67点）没有被完全封补，为反弹行情留下了隐患。因此，认为大盘惯性上冲以后再度击破3000点震荡洗盘。股指向上反弹在3031点至3058点之间会遇到压力出现阴K线回杀调整，短线调整目标位至少会回补今天早盘高开的缺口（2984.67点），并有回踩8日均线（2974点）的欲望，股指通过震荡将55月均线（3006点）向下运行的反作用力减弱以后才能向上去冲击62月均线（3063点）。'
        },
        {
          title: '电子特气市场空间广阔',
          date: '2020-07-02 12:12',
          content: '据悉，电子气体在半导体材料领域成本比13%左右，是仅次于硅片的第二大半导体材料，国内2018年对应市场规模约80亿元。对于整个电子特气行业而言，2018年国内市场规模约120亿元。由于半导体等下游技术更迭带来附加值不断提高，电子特气市场增长超越了整个半导体材料增速，中国半导体行业协会预计到2024年电子特气行业规模将达到230亿元。目前国内电子特气市场被空气化工、液化空气、大阳日酸、普莱克斯、林德五大外资巨头垄断，国内企业市场占比仅12%，国产替代空间广阔。'
        },
        {
          title: '电子特气市场空间广阔',
          date: '2020-07-02 12:12',
          content: '据悉，电子气体在半导体材料领域成本比13%左右，是仅次于硅片的第二大半导体材料，国内2018年对应市场规模约80亿元。对于整个电子特气行业而言，2018年国内市场规模约120亿元。由于半导体等下游技术更迭带来附加值不断提高，电子特气市场增长超越了整个半导体材料增速，中国半导体行业协会预计到2024年电子特气行业规模将达到230亿元。目前国内电子特气市场被空气化工、液化空气、大阳日酸、普莱克斯、林德五大外资巨头垄断，国内企业市场占比仅12%，国产替代空间广阔。'
        },
      ]
    }
  },
  methods: {
  },
  components: {
    Timeline,
    TimelineItem
  },
  mounted() {
    // 在项目加载完成之后初始化wow
    this.$nextTick(() => {
      let wow = new WOW({
        live:false
      })
      wow.init()
    })
  },
}
</script>

<style scoped>
.index-header{
  margin: 10px 0;
}
.top-index{
  list-style: none;
  margin: 0;
  padding: 0;
  height: 63px;
}
.top-index li{
  float: left;
}
.stock-index{
  font-size: 20px;
  width: 10%
}
.index{
  border-right: 1px solid #dfdfdf;
  line-height: 30px;
  width: 10%;
}
.index span{
  display: inline-block;
  text-align: right;
  font-size: 14px;
  width: 50%;
  padding-right: 10px;
  color: green;
}
.index span:nth-child(1){
  font-size: 16px;
  font-weight: 500;
  width: 100%;
}
.index-list-group {
  width: 80%;
}
.index-list li {
  display: inline-block;
  width: 10%;
  height: 100%;
  margin-left: 1%;
  background-color: red;
}
.index-list li span{
  font-size: 18px;
  text-align: center;
  display: inline-block;
  width: 100%;
  color: white;
}
.bg-green{
  background-color: green !important;
}
.stock-news-section{
  overflow: hidden;
}
.NewsClassification{
  margin-top: 30px;
}
a{
  text-decoration: none;
  color: #333;
}
.timeline{
  margin: 10px 5px;
}
.news-title{
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.news-title-name{
  font-size: inherit;
  line-height: 30px;
  color: black;
  font-weight: 700;
}
.news-date{
  font-size: 13px;
  color:#888;
  line-height: 30px;
}
.news-content{
  font-size: 14px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  color: #24292e;
}
.news-badage{
  margin-right: 10px;
  font-size: 13px;
  font-weight: 450;
  color: #fff;
}
.box{
  position:relative;
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  background-clip: border-box;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.125);
}
.box::before{
  font-size: .8rem;
  content:attr(title);
  position:absolute;
  left:10%;
  top: 0px;
  transform:translateX(-50%);
  -webkit-transform:translate(-50%,-50%);
  padding:0 10px;
  background-color:#fff;
}
.box .unscramble{
  font-size: 14px;
  margin-bottom: 0;
}
.corresponding-plate{
  padding: 3px 10px;
  font-size: 14px;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin: 10px 10px 0 0;
  border-radius: 4px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.125);
}
.corresponding-plate:hover{
  background-color: #007bffd1;
  color: #fff;
}
.public-article{
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
}
.article-title-date{
  /* display: flex;
  justify-content: space-between; */
  font-size: inherit;
  font-weight: 700;
}
.article-title-date .article-date{
  font-size: 13px;
  color:#888;
  line-height: 30px;
  font-weight: 400;
}
.article-content{
  font-size: 14px;
  text-indent: 28px;
}
.right-card{
  border-radius: 5px;
  overflow: hidden;
}
.tips{
  text-align: center;
  line-height: 40px;
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #4389c5d9;
  height: 40px;
  z-index: 100;
}
</style>
<style>
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto{
  padding: 10px;
}
.custom-checkbox.b-custom-control-sm .custom-control-label::before, .input-group-sm .custom-checkbox .custom-control-label::before{
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
}
.custom-checkbox.b-custom-control-sm, .input-group-sm .custom-checkbox{
  font-size: .7rem;
}
.custom-checkbox.b-custom-control-sm .custom-control-label::after, .input-group-sm .custom-checkbox .custom-control-label::after{
  width: .7rem;
  height: .7rem;
}
.happy-scroll-container{
  width: 100% !important;
  padding: 10px;
}
.happy-scroll-content{
  border-right: 5px solid transparent !important;
}
</style>