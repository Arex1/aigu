<template>
  <div>
    <div class="paper-cards shadow mb-3 mt-3">
      <b-row>
        <b-col md="1" class="mt-3">
          <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3 ml-3"></b-avatar>
        </b-col>
        <b-col md="11" class="mt-3">
          <b-row class="author-name ml-2">
            <span>天台小泥心</span>
          </b-row>
          <b-row class="pup-date ml-2">
            <span>2020-06-15 12:23</span>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="1"></b-col>
        <b-col md="11">
          <b-row class="author-title ml-2">
            <span>未来二十年，芯片半导体，国运之战大项，中国一定会赢！</span>
          </b-row>
          <b-row class="author-content ml-2">
            <span>诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。诸恶莫作，众善奉行，远报儿女，近在己身，苍天有眼，报应循环，但行好事，莫问前程。</span>
          </b-row>
          <b-row class="author-badage ml-2">
            <ul>
              <li>
                <a href="#">
                  <b-icon icon="box-arrow-up-right"></b-icon>
                  <span>转发</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon icon="chat-square"></b-icon>
                  <span>评论(27)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon icon="heart"></b-icon>
                  <span>赞(12)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <b-icon icon="star"></b-icon>
                  <span>收藏</span>
                </a>
              </li>
            </ul>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  data() {
    return {

    }
  },
  props: ['content']
}
</script>

<style scoped>
  .paper-cards{
    background-color: #fff;
    width: 80%;
    margin-left: 5%;
  }
  .pup-date{
    font-size: 10px;
    color: #ccc;
  }
  .author-name{
    line-height: 30px;
    font-size: 14px;
    font-weight: 600;
  }
  .author-title{
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    width: 95%;
  }
  .author-content{
    font-size: 13px;
    width: 95%;
    line-height: 18px;
    color: #333;
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
    margin: 10px 0;
  }
  li{
    display: inline-block;
    height: 15px;
    line-height: 15px;
    padding-right: 20px;
    padding-left: 20px;
    border-right: 1px solid #aaa;
  }
  li:nth-child(1){
    padding-left: 0px;
  }
  li:nth-child(4){
    border-right: 0px;
  }
  a{
    text-decoration: none;
    color: #aaa;
  }
</style>