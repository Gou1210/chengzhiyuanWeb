<template>
  <div class="journalism">
    <div class="bigScreen">
<HeaderTab></HeaderTab>
    </div>
    
    <div class="container">
      <Banner>
        <img src="../../static/img/journalism/banner.png" alt="" />
      </Banner>
      <div class="news block">
        <Title>
          <p class="leftP">公司新闻</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
        <div class="newsList" v-for="item in newsList">
          <!-- <router-link  :to="{name:'journalismDetail',query:{id:item.id}}"> -->
          <div class="newsDetail" @click="detailTap(item.id)">
            <div  class="newsImg">
              <img :src="$host + item.newsPhoto" alt="" />
            </div>
            <div class="newsText">
              <p>{{ item.newsTitle }}</p>
              <p>{{ item.newsDescribe }}</p>
              <p>发布时间:{{ item.createTime }}</p>
            </div>
          </div>
          <!-- </router-link> -->
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page="pages"
          :page-size="10"
          layout="total,  prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
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
      newsPhoto:'',
      newsList: [],
      total: 0,
      pages: 1,
    };
  },
  components: {
    HeaderTab,
    Title,
    Footer,
    Banner,
  },
  created() {
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
      const { data: res } = await this.$http.get(
        "/api/news/getNewsListByGrade",
        {
          params: {
            showIndex:0,
            pageNum: this.pages,
          },
        }
      );
      this.newsList = res.data.rows;
      this.total = res.data.total;
    },
    detailTap(e) {
      this.$router.push({ name: "journalismDetail", query: { id: e } });
    },

    handleCurrentChange(e) {
      this.pages = e;
      this.getNewsList();
    },
  },
};
</script>

<style scoped >
.container {
  width: 1200px;
  margin: 0 auto;
}
.block {
  padding-top: 40px;
}
.newsDetail {
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: #218746 solid 1px;  */
    display: flex;
  box-shadow: 10px 10px 10px 10px #d3d7d4;
  margin-bottom: 60px;
}
.newsDetail .newsImg {
  width: 600px;
}
.newsDetail .newsImg img {
     width: 500px;
  height: 300px;
}
.newsDetail .newsText {
  width: 600px;
  padding: 0 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.newsDetail .newsText p {
  margin-top: 20px;
}
.newsDetail .newsText > :nth-child(1) {
  /* color: #000; */
  font-weight: 700;
  font-size: 18px; 
}
.newsDetail:hover {
background: #072648;
color: #fff;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
}

</style>
