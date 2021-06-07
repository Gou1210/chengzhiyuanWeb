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
          <p class="leftP">视频列表</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>

        <div class="video block">
          <div
            class="visualDetail"
            @click="videoTap(item.id)"
            v-for="item in videoList"
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
</style>

<script>
import HeaderTab from "../components/HeaderTab";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Banner from "../components/Banner";
export default {
  data() {
    return {
      videoList: [],
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
      console.log(res.data);
      this.videoList = res.data;
    },
    videoTap(e) {
      this.$router.push({ name: "video", query: { id: e } });
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

    
