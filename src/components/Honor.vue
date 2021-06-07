<template>
  <div class="listImg">
    <swiper>
      <swiper-slide
        :options="swiperOption2"
        v-for="item in honorImg"
        :key="item.id"
        ><img :src="$host + item.urlAddr" class="swiper" alt=""
      /></swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      honorImg: [],
    };
  },
  created() {
    this.getImg();
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        autoplay: true,
        autoplayDisableOnInteraction: true,
        speed: 3000,
        loop: true,
        observer: true,
        observeParents: true,
      });
    });
  },
  methods: {
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
    initSwiper() {
      // setTimeout(()=>{
      this.mySwiper = new Swiper(".swiper-container", {
        autoplay: true,
        autoplayDisableOnInteraction: true,
        speed: 3000,
        loop: true,
        slidesPerView: 3,
        observer: true,
        observeParents: true,
      });
      // },1)
    },
  },
};
</script>
<style scoped >
.honor .listImg {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.honor .listImg img {
  width: 300px;
}
</style>