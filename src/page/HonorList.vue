<template>
  <div class="searchList">
    <div class="bigScreeng">
      <HeaderTab></HeaderTab>
    </div>

    <div class="container">
      <Banner>
        <img src="../../static/img/maintain/banner.png" alt="" />
      </Banner>
      <div class="videoShow">
        <Title>
          <p class="leftP">荣誉资质展示</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>

        <div class="video block">
          <div class="visualDetail" v-for="(item,index) in honorImg">
            <img @click="fangda(index)" :src="$host + item.urlAddr" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 显示大图 -->
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

<style >
.container {
  width: 1200px;
  margin: 0 auto;
}
.block {
  padding-top: 40px;
}
.video {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.visualDetail {
  margin-top: 20px;
  position: relative;
}
.visualDetail img {
  width: 350px;
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
</style>

<script>
import HeaderTab from "../components/HeaderTab";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Banner from "../components/Banner";
export default {
  data() {
    return {
      honorImg: [],
      bigImg: false,
      bigImgIndex: 0,
    };
  },
  created() {
    this.getImg();
  },
  methods: {
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
  },

  components: {
    HeaderTab,
    Title,
    Footer,
    Banner,
  },
};
</script>

    
