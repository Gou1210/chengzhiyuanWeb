<template>
  <div class="maintain">
    <div class="bigScreen">
<HeaderTab></HeaderTab>
    </div>
    
    <div class="container">
      <Banner>
        <img src="../../static/img/maintain/banner.png" alt="" />
      </Banner>

      <div class="detailNews">
        <Title>
          <p class="leftP">{{ title }}</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
        <div class="list">
          <div
            class="detail"
            @click="detailTap(item.gradeId, item.id)"
            v-for="item in newsList"
          >
            <div class="detailImg">
              <img :src="$host + item.newsPhoto" alt="" />
            </div>
            <div class="detailText">
              <p>{{ item.newsTitle }}</p>
              <p>
                {{ item.newsDescribe }}
              </p>
              <p>发布时间&nbsp:{{ item.createTime }}</p>
            </div>
          </div>
        </div>
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
      newsList: [],
      title: "",
      id: 0,
      pid: 0,
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
    this.getGrade();
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
      const { data: res } = await this.$http.get(
        "/api/news/getNewsListByGrade",
        {
          params: {
            gradeId: this.id,
            pageNum: this.pages,
          },
        }
      );
      console.log(res.data.rows)
      this.newsList = res.data.rows;
      this.total = res.data.total;
    },
    async getGrade() {
      this.pid = this.$route.query.pid;
      this.id = this.$route.query.id;
      const { data: res } = await this.$http.get("/api/grade/getGradeList", {
        params: {
          pid: this.pid,
        },
      });
      res.data.map((v) => {
        if (v.id == this.id) {
          this.title = v.title;
        }
      });
    },

    handleCurrentChange(e) {
      this.pages = e;
      this.getNewsList();
    },
    detailTap(e1, e2) {
      this.$router.push({
        name: "journalismDetail",
        query: { pid: this.pid, gradeid: e1, id: e2 },
      });
    },
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

.detail {
  display: flex;
  box-shadow: 10px 10px 10px 10px #d3d7d4;
  margin-bottom: 60px;
}
.detail .detailImg {
  width: 600px;
}
.detail .detailImg img{
     width: 500px;
  height: 300px;
}
.detail .detailText {
  width: 600px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.detail .detailText p {
  white-space: pre-wrap;
  margin-bottom: 20px;
  line-height: 30px; /*no*/
}
.detail .detailText > :nth-child(1) {
  font-size: 20px; /*no*/
  /* color: #11264f; */
  font-weight: 700;
}
.detail .detailText > :nth-child(3) {
  margin-left: -360px;
}
.detail img {
  width: 554px;
}
.list .detail:hover{
background: #072648;
color: #fff;
}
/* .list > :nth-child(2) {
  background: #072648;
}
.list > :nth-child(2) p {
  color: #fff !important;
} */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>