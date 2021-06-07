<template>
  <div class="video">
    <div class="bigScreen">
<HeaderTab></HeaderTab>
    </div>
    

    <div class="container">
      <Banner>
        <img src="../../static/img/culture/banner.png" alt="" />
      </Banner>
      <Title>
        <p class="leftP">视频展示</p>
        <img
          class="leftImg"
          src="../../static/img/home/chengzhiyuan.png"
          alt=""
        />
      </Title>

      <div class="video block">
        <video
          controls="controls"
          width="1200px"
          :src="$host + videoDetail"
        ></video>
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
      videoDetail: "",
    };
  },
  created() {
    this.getVideo();
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
      res.data.forEach((v) => {
        if (v.id == this.$route.query.id) {
          this.videoDetail = v.urlAddr;
        }
      });
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
  /* background-color: aqua; */
}
</style>

