<template>
    <div class="journalismDetail">
      <div class="bigScreen">
 <HeaderTab></HeaderTab>
      </div>
       
                </Banner>
                <img src="../../static/img/journalism/banner.png" alt="" />
        </Banner>
        <div class="container">

        <!-- 企业新闻 -->
        <div class="companyNews">
            <Title>
           <!-- <p  class="leftP">{{title}}</p> -->
           <p  class="leftP">公司新闻</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
            </Title>
        </div>
        <div class="newsDetail" >
          <div class="title">
            <h2>
{{newsDetail.newsTitle}}
            </h2>
          </div>
          <div>

          </div>
           <p class="createTime">发布时间:{{newsDetail.createTime}}</p>
          <div class="ql-container ql-show">
            <div class="ql-editor">
<div class="content" v-html="newsDetail.newsContent">
            </div>
          </div>
          </div>
        </div>
                <div v-if="newsList[this.index-1]">
  
        <div class="wenzhang" @click="last">上一篇:{{newsList[this.index-1].newsTitle}}</div>

        </div>
        <div v-if="newsList[this.index+1]">

        <div class="wenzhang" @click="next">下一篇:{{newsList[this.index+1].newsTitle}}</div>

        </div>
        </div>


<Footer></Footer>
    </div>
</template>

<script>
import HeaderTab from "../components/HeaderTab";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Banner from "../components/Banner";
export default {
  data() {
    return {
      newsDetail: {},
      newsList: [],
      title: "",
      index: 0,
    };
  },
  created() {
    this.getNewsDetail();
    this.getNewsList();
    // this.getGrade()
  },
  methods: {
    // 获取详情
    async getNewsDetail() {
      const { data: res } = await this.$http.get("/api/news/getNewsListById", {
        params: {
          gradeId: this.$route.query.id,
        },
      });
      this.newsDetail = res.data;
    },
    // 获取列表
    async getNewsList() {
      const { data: res } = await this.$http.get(
        "/api/news/getNewsListByGrade",
        {
          params: {
            gradeId: this.$route.query.gradeid,
          },
        }
      );
      this.newsList = res.data.rows;
      this.newsList.forEach((v) => {
        if (v.id == this.$route.query.id) {
          this.index = this.newsList.indexOf(v);
        }
      });
    },
    last() {
      this.$router.push({
        name: "journalismDetail",
        query: { id: this.newsList[this.index - 1].id },
      });
      this.getNewsDetail();
      this.getNewsList();
    },
    next() {
      this.$router.push({
        name: "journalismDetail",
        query: { id: this.newsList[this.index + 1].id },
      });
      this.getNewsDetail();
      this.getNewsList();
    },
  },
  components: {
    HeaderTab,
    Title,
    Footer,
    Banner,
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
.block {
  padding-top: 40px;
}
.title {
  width: 1200px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.content {
  margin-bottom: 40px;
}
.wenzhang{
  margin-top: 10px;
  cursor: pointer;
}
.wenzhang:hover{
color: #61D185;
}
.createTime{
  text-align: right;
  font-size: 14px;
}
</style>