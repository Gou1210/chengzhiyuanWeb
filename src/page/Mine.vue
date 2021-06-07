<template>
  <div class="mine">
    <div class="bigScreen">
 <HeaderTab></HeaderTab>
    </div>
   
    <div class="container">
      <Banner>
        <img src="../../static/img/mine/banner1.png" alt="" />
      </Banner>
      <!-- 规模展示 -->
      <div class="scsae">
        <div class="scaleList">
          <div class="scaleDetail">
            <div class="scaleText">
              <p>欢迎来到诚智源环卫保洁</p>
              <p>
                我们用够城乡一体化保洁，生产生活污染防卫一体化，城市公共设施维护一体化等业务，提供一站式服务
              </p>
            </div>
            <img src="../../static/img/mine/scale.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 公司介绍 -->
      <div class="introduce block" @click="brief(briefNews.id)">
        <Title>
          <p class="leftP">公司简介</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
        <div class="introduceList">
          <div class="introduceDetail">
            <div class="introduceImg">
              <img :src="$host+briefNews.newsPhoto" alt="" />
            </div>
            <div class="introduceText">
              <p>About&nbspUs</p>
              <p></p>
              <p>{{briefNews.newsTitle}}</p>
              <p>
                {{briefNews.newsDescribe}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 视频展示 -->
      <div class="visual block">
        <Title>
          <p class="rightP">视频展示</p>
          <img
            class="rightImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>

        <p class="more" @click="allVideo">查看所有>></p>

        <div class="visualList">
          <div
            class="visualDetail"
            @click="videoTap(item.id)"
            v-for="item in videoList.slice(0, 3)"
          >
            <video
              :src="$host + item.urlAddr"
              width="210px"
              height="210px"
            ></video>
          </div>
        </div>
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
      videoList: [],
      briefNews:{}
    };
  },
  created() {
    this.getVideo();
    this.getBrief();
  },
  methods: {
    async getVideo() {
      const { data: res } = await this.$http.get(
        "/api/resource/getResourceList",
        {
          params: {
            addrType: 2,
          },
        }
      );
      // console.log(res.data);
      this.videoList = res.data;
    },
    async getBrief() {
      const { data: res } = await this.$http.get(
        "/api/news/getNewsListByGrade",
        {
          params: {
            gradeId: 18,
          },
        }
      );     
      this.briefNews = res.data.rows[0];
      console.log(this.briefNews)
    },
    videoTap(e) {
      this.$router.push({ name: "video", query: { id: e } });
    },
    allVideo() {
      this.$router.push({ name: "videoList" });
    },
    brief(e){
      this.$router.push({name:'journalismDetail',query:{id:e}})
    }
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
  font-size: 14px;
}
.block {
  padding-top: 40px;
}

.scaleList {
  width: 1200px;
  margin: 0 auto;
}
.scaleDetail {
  display: flex;
  background-color: #fff;
  margin-bottom: 50px;
}
.scaleDetail img {
  width: 600px;
}
.scaleText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px 0 50px;
}
.scaleText p {
  margin-top: 20px;
}
.scaleText > :nth-child(1) {
  font-size: 20px;
  color: #11264f;
  font-weight: 700;
}
.scaleList > :nth-child(2n) {
  background: #072648;
  color: #fff;
}
.scaleList > :nth-child(2n) p {
  color: #fff;
}
.introduceDetail {
  display: flex;
  justify-content: space-between;
 
}

.introduceDetail .introduceImg img {
  width: 556px;
}
.introduceDetail .introduceImg {
  width: 600px;
}
.introduceText {
  width: 600px;
  margin-top: 70px;
  cursor: pointer;
}
.introduceText > :nth-child(1) {
  font-weight: 700;
  font-size: 30px;
  color: #218746;
}
.introduceText > :nth-child(2) {
  width: 5px;
  height: 24px;
  background: #218746;
}
.introduceText > :nth-child(3) {
  font-weight: 700;
  font-size: 18px;
}
.introduceText p {
  margin-top: 10px;
}
.introduceText > :nth-child(4) {
  margin-top: 50px;
  line-height: 20px;
}
.visualList {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.visualDetail {
  margin-top: 20px;
  position: relative;
}

video {
  border: solid 2px#d3d7d4;
  border-radius: 10px;
  cursor: pointer;
}
.visualDetail::after {
  content: "▶";
  color: #000;
  width: 70px;
  height: 70px;
  font-size: 30px;
  position: absolute;
  left: 70px;
  top: 80px;
  background-color: #666;
  opacity: 0.7;
  text-align: center;
  line-height: 70px;
  border-radius: 35px;
  cursor: pointer;
}
.more {
  text-align: end;
  cursor: pointer;
  color: #000;
}
.more:hover {
  color: #218746;
  font-weight: 700;
}
</style>