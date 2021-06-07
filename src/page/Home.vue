<template>
  <div class="home">
    <Phone />
    <!-- 头部组件 -->
    <div class="bigScreen">
      <HeaderTab></HeaderTab>
      <!-- 轮播图 -->
      <div class="swiperBox">
        <el-carousel
          class="swiperCarousel"
          loop
          :interval="2000"
          height="700px"
          arrow="always"
        >
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="$host + item.headImage" class="swiper" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="container" >
      <!-- 新闻 -->
      <div class="news block">
        <Title>
          <p class="leftP">公司新闻</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
        <div>
          <div class="newsBox" v-if="newsDetail">
            <div class="newsLeft">
              <div class="newsTouming" ></div>
               <div class="newsPic" :style="{backgroundImage: 'url(' + $host + newsDetail.newsPhoto + ')', backgroundSize:'cover'}" ></div>
            </div>
            <div class="newsRight">
              <div class="all">
                <router-link
                  :to="{ name: 'journalism', query: { pid: 16,  showIndex: 0 } }"
                  >查看全部</router-link
                >
              </div>
              <div class="detail">
                <p>{{ newsDetail.newsTitle }}</p>
                <p>
                  {{ newsDetail.newsDescribe }}
                </p>
                <p>{{ newsDetail.createTime }}</p>
              </div>
              <div class="detailBtn">
                <router-link
                  :to="{
                    name: 'journalismDetail',
                    query: {id: newsDetail.id },
                  }"
                >
                  <button><span>查看详情</span></button></router-link
                >

                <div class="arrow">
                  <div @click="newsLast"></div>
                  <div @click="newsNext"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 一站式 -->
      <div class="block">
        <Banner>
          <img src="../../static/img/home/yizhanshi.png" alt="" />
        </Banner>
      </div>
      <!-- 主营业务 -->
      <div class="business block">
        <Title>
          <p class="rightP">主营业务</p>
          <img
            class="rightImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
        <div  class="list">
          <!-- 城乡环卫 -->
          <div class="listBlock">
            <img  :src="$host+classify.cxPhoto" alt="" />
            <div class="word">
              <p class="title">
                <router-link
                  :to="{ name: 'maintain', query: { pid: 1, gradeid: 2 } }"
                  >{{classify.cxTitle}}</router-link
                >
              </p>
              <router-link v-for="item in chengxiang"
              :key="item.id"
                :to="{
                  name: 'journalismDetail',
                  query: { pid: 1, gradeid: 2, id: item.id },
                }"
                >{{item.newsTitle}}</router-link >
            </div>
          </div>
          <!-- 生产 -->
          <div class="listBlock">
            <img  :src="$host+classify.scPhoto" alt="" />
            <div class="word">
              <p class="title">
                <router-link
                  :to="{ name: 'maintain', query: { pid: 1, gradeid: 3 } }"
                  >{{classify.scTitle}}</router-link
                >
              </p>
              <router-link
               v-for="item in shengchan"
               :key="item.id"
                :to="{
                  name: 'journalismDetail',
                  query: { pid: 1, gradeid: 3, id: item.id },
                }"
                >{{item.newsTitle}}</router-link
              >
            </div>
          </div>
          <!-- 城市公用设施 -->
          <div  class="listBlock">
            <img  :src="$host+classify.csPhoto" alt="" />
            <div class="word">
              <p class="title">
                <router-link
                  :to="{ name: 'maintain', query: { pid: 1, gradeid: 5 } }"
                  >{{classify.csTitle}}</router-link
                >
              </p>
              <router-link
               v-for="item in chengshi"
               :key="item.id"
                :to="{
                  name: 'journalismDetail',
                  query: { pid: 1, gradeid: 5, id: item.id },
                }"
                >{{item.newsTitle}}</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 荣誉资质 -->
      <div class="honor block">
        <Title>
          <p class="leftP">荣誉资质</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
        <p class="more" @click="allHonor">查看全部>></p>
        <div class="listImg">
          <el-carousel
            class="honorCarousel"
            :interval="4000"
            type="card"
            height="550px"
          >
            <el-carousel-item v-for="(item, index) in honorImg" :key="item.id">
              <img
                @click="fangda(index)"
                :src="$host + item.urlAddr"
                class="swiper"
                alt=""
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <div v-if="bigImg != ''" class="showImg">
      <div class="showImgBox">
        <div @click="leftArrow" class="leftArrow"></div>
        <div @click="rightArrow" class="rightArrow"></div>
        <img
          src="../../static/img/home/guanbi.png"
          @click="hide"
          class="guanbi"
          alt=""
        />
        <img
          :src="$host + honorImg[bigImgIndex].urlAddr"
          class="fangda"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
//引入头部组件
import HeaderTab from "../components/HeaderTab";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Phone from '../components/PhoneBar'
export default {
  data() {
    return {
      tableDatas: [],
      newsList: [],
      newsDetail: {},
      bannerList: [],
      bannerDetail: {},
      rowsNum: 0,
      honorImg: [],
      bigImg: false,
      bigImgIndex: 0,
      businessList:[],
      chengxiang:[],
      shengchan:[],
      chengshi:[],
      classify:{}
    };
  },
  components: {
    HeaderTab,
    Title,
    Footer,
    Banner,
    Phone
  },
  created() {
    this.getNewsList();
    this.getBanner();
    this.getImg();
    this.getBrowse();
    this.getBusinessList();
    this.getchengxiang();
    this.getshengchan();
    this.getchengshi();
  },
  mounted(){
    
  },
  methods: {
    // 获取新闻列表
    async getNewsList() {
      const { data: res } = await this.$http.get(
        "/api/news/getNewsListByGrade",
        {
          params: {
            gradeId: 17,
            showIndex: 0,
          },
        }
      );
      this.newsList = res.data.rows;
      this.newsDetail = this.newsList[0];
      
    },
    // 获取主营业务
    async getBusinessList() {
      const { data: res } = await this.$http.get(
        "/api/news/getNewsListByGrade",
        {
          params: {
            gradeId: 19,
          },
        }
      );
      this.classify.cxPhoto = res.data.rows[0].newsPhoto;
      this.classify.cxTitle = res.data.rows[0].newsTitle;
      this.classify.scPhoto = res.data.rows[1].newsPhoto;
      this.classify.scTitle = res.data.rows[1].newsTitle;
      this.classify.csPhoto = res.data.rows[2].newsPhoto;
      this.classify.csTitle = res.data.rows[2].newsTitle;
    },
    // 获取城乡一体化
    async getchengxiang() {
      const { data: res } = await this.$http.get(
        "/api/news/getNewsListByGrade",
        {
          params: {
            gradeId: 2,
            showIndex:0
          },
        }
      );
      this.chengxiang = res.data.rows
    },
    // 获取生产生活一体化
    async getshengchan() {
      const { data: res } = await this.$http.get(
        "/api/news/getNewsListByGrade",
        {
          params: {
            gradeId: 3,
            showIndex:0
          },
        }
      );
      this.shengchan = res.data.rows
    },
    // 获取城市公用设施
    async getchengshi() {
      const { data: res } = await this.$http.get(
        "/api/news/getNewsListByGrade",
        {
          params: {
            gradeId:5,
            showIndex:0
          },
        }
      );
      this.chengshi = res.data.rows
    },
    // 获取banner
    async getBanner() {
      const { data: res } = await this.$http.get("/api/banner/getBannerList");
      this.bannerList = res.data;
    },
    // 获取图片
    async getImg() {
      const { data: res } = await this.$http.get(
        "/api/resource/getResourceList",
        {
          params: {
            addrType: 1,
          },
        }
      );
      this.honorImg = res.data;
    },
    async getBrowse() {
      const { data: res } = await this.$http.get(
        "/api/statistics/addViewRecord"
      );
    },
    newsNext() {
      this.rowsNum++;
      if (this.rowsNum == this.newsList.length) {
        this.rowsNum = 0;
      }
      this.newsDetail = this.newsList[this.rowsNum];
    },
    newsLast() {
      this.rowsNum--;
      if (this.rowsNum == -1) {
        this.rowsNum = this.newsList.length - 1;
      }
      this.newsDetail = this.newsList[this.rowsNum];
    },
    fangda(i) {
      this.bigImgIndex = i;
      this.bigImg = true;
    },
    hide() {
      this.bigImg = false;
    },
    leftArrow() {
      if (this.bigImgIndex == 0) {
        this.bigImgIndex = this.honorImg.length - 1;
      }
      this.bigImgIndex--;
    },
    rightArrow() {
      if (this.bigImgIndex == this.honorImg.length - 1) {
        this.bigImgIndex = -1;
      }
      this.bigImgIndex++;
    },
    allHonor(){
            this.$router.push({ name: "honorList" });
    }
  },
};
</script>
 <style scoped >
body {
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.swiperCarousel {
  width: 1920px;
}
.block {
  padding-top: 40px;
}
.news {
}

.newsBox {
  display: flex;
  /* flex-wrap: wrap; */
}
.newsLeft {
  position: relative;
  width: 600px;
}
.newsLeft > :nth-child(1) {

}
.newsLeft > :nth-child(2) {

}
.newsRight {
  width: 600px;
  position: relative;
}
.newsRight .all {
  text-align: right;
  padding-bottom: 80px;
  padding-top: 40px;
}

.newsRight .detail p:nth-child(1) {
  font-size: 22px;
  font-weight: 700;
}
.newsRight .detail p:nth-child(2) {
  line-height: 30px; /*no*/
  font-size: 18px;
}
.newsRight .detail p:nth-child(3) {
  font-size: 18px;
}
.newsRight .detail p {
  margin: 20px 0 20px 0;
}
.detailBtn {
  display: flex;
  /* justify-content: space-between; */
}
.detailBtn button:nth-child(1) {
  background-color: #20ca57;
  text-align: center;
  border-radius: 25px;
  color: #fff !important;
  padding: 10px 20px 10px 20px;
  width: 100px;
}
.arrow {
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
}
.arrow div:nth-child(1) {
  background: url("../../static/img/home/arrow1.png") no-repeat;
  height: 30px;
  width: 30px;
  background-size: cover;
}
.arrow div:nth-child(2) {
  background: url("../../static/img/home/arrow4.png") no-repeat;
  height: 30px;
  width: 30px;
  background-size: cover;
}
.arrow div:nth-child(1):hover {
  background: url("../../static/img/home/arrow3.png") no-repeat;
  height: 30px;
  width: 30px;
  background-size: cover;
}
.arrow div:nth-child(2):hover {
  background: url("../../static/img/home/arrow2.png") no-repeat;
  height: 30px;
  width: 30px;
  background-size: cover;
}

.business {
  background-color: #d3d7d4;
  width: 1920px;
  margin-left: -360px;
  padding-bottom: 40px;
}
.business .list {
  display: flex;
  width: 1284px;
  margin: 0 auto;
  margin-top: 20px;
  justify-content: space-between;
  /* flex-wrap: wrap; */
}

.business .list .listBlock {
  width: 370px;
  background-color: #fff;
  padding-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 14px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 22px;
  box-shadow: 10px 10px 10px 10px #999d9c;
}
.business .list .listBlock img {
  width: 370px;
  height: 280px;
  border-radius: 16px;
}
.business .list .listBlock .title {
  font-weight: 700;
  background-color: #20ca57;
 margin-top: 10px;
  height: 50px;
  padding: 0 10px;
  border-radius: 5px;
  text-align: center;
  line-height: 50px;
}
.business .list .listBlock .title > :nth-child(1) {
  margin: 0;
  color: #fff;
}
.business .list .listBlock a {
  margin-top: 10px;
}
.business .list .listBlock a:hover {
  color: #20ca57;
}

.honor .listImg {
  margin-top: 20px;
  display: flex;
}
.honor .listImg img {
  width: 400px;
}
.honorCarousel {
  width: 1200px;
  margin-left: 160px;
  margin-right: 240px;
}
.word {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.showImg {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
.guanbi {
  width: 30px;
  position: absolute;
  left: -30px;
}
.fangda {
  width: 500px;
}
.leftArrow {
  width: 48px;
  height: 48px;
  background: url("../../static/img/home/arrow1.png") no-repeat;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -55px;
}
.leftArrow:hover{
  background: url("../../static/img/home/arrow3.png") no-repeat;

}
.rightArrow {
  width: 50px;
  height: 50px;
  background: url("../../static/img/home/arrow4.png") no-repeat;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -55px;
  z-index: 99;
}
.rightArrow:hover{
  background: url("../../static/img/home/arrow2.png") no-repeat;

}
.showImgBox {
  position: relative;
}
.newsPic{
  position: relative;
  width: 500px;
  height: 300px;
  margin-left: 80px;
  width: 420px;
  z-index: 99 !important;
  margin-top: -250px;
  border-radius: 20px;
}
.newsTouming{
  position: relative;
  width: 350px;
  height: 400px;
  z-index: 1 !important;
 background-image: url('../../static/img/home/touming.png');
 /* opacity: .3; */
 border-radius: 20px;
 /* margin-top: -300px; */
}
.detailBtn{
  position: absolute;
  bottom: 20px;
}
.arrow{
  margin-left: 400px;
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
