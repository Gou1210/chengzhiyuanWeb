<template>
  <div class="headTop">
    <div class="top-inner">
      <div class="imgBox">
              <img
        @click="logoTap"
        class="logo"
        src="../../static/img/home/logo.png"
        alt=""
      />
<div class="zhankai">
  <div v-if="showList" >
<img  @click="zhankaiTap" src="../../static/img/header/guanbi.png" alt="">
<span  class="guanbi" >关闭导航</span>
  </div>
  <div v-if="!showList" >
<img  @click="zhankaiTap" src="../../static/img/header/zhankai.png" alt="">
<span   >展开导航</span>
  </div>

</div>
      </div>

      <ul class="list headList">
        <li
          @click="listTap('home')"
          :class="isActive == 'home' ? 'active' : ''"
        >
          首页
        </li>
        <li
          @click="listTap('service')"
          :class="isActive == 'service' ? 'active' : ''"
        >
          服务与创新
        </li>
        <li
          @click="listTap('culture')"
          :class="isActive == 'culture' ? 'active' : ''"
        >
          企业文化
        </li>
        <li
          @click="listTap('mine')"
          :class="isActive == 'mine' ? 'active' : ''"
        >
          关于我们
        </li>
      </ul>
      <ul v-show="showList" class="mediaHeadList">
        <li
          @click="listTap('home')"
          :class="isActive == 'home' ? 'active' : ''"
        >
          首页
        </li>
        <li
          @click="listTap('service')"
          :class="isActive == 'service' ? 'active' : ''"
        >
          服务与创新
        </li>
        <li
          @click="listTap('culture')"
          :class="isActive == 'culture' ? 'active' : ''"
        >
          企业文化
        </li>
        <li
          @click="listTap('mine')"
          :class="isActive == 'mine' ? 'active' : ''"
        >
          关于我们
        </li>
      </ul>
      <div class="search">
        <input
          type="text"
          v-model="title"
          placeholder="请输入要查询的内容"
          @keyup.enter="searchTap"
        />
        <img src="../../static/img/home/serach.png" @click="searchTap" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: "",
      title: "",
      showList:false
    };
  },
  created() {
    this.isActive = this.$route.meta.isActive;
  },
  methods: {
    async searchTap() {
      if (this.title != "") {
        this.$router.push({ name: "search", query: { title: this.title } });
      } else {
        alert("请输入内容");
      }
      if (this.$route.meta.isActive == "search") {
        location.reload();
      }
    },
    listTap(path) {
      this.isActive = path;
      this.$router.push(`${path}`);
    },
    logoTap() {
      this.$router.push({ name: "home" });
    },
    zhankaiTap(){
      this.showList = !this.showList
    }
  },
};
</script>
<style scoped >
.headTop {
  width: 1920px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-inner {
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-inner .logo {
  width: 83px;
  height: 71px;
}
.top-inner .list {
  display: flex;
  font-size: 22px;
  /* flex-wrap: wrap; */
}
.top-inner .list li {
  height: 90px;
  margin-left: 60px;
  padding: 0 30px 0 30px;
  line-height: 90px;
}

.top-inner .list .active {
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  background-color: #68d38b;
  color: #fff;
}
.search {
  position: relative;
  display: flex;
}
.search img {
  position: absolute;
  right: 40px;
  width: 20px;
  top: 50%;
  transform: translate(0, -50%);
}
.search input {
  padding-left: 10px;
  width: 230px;
  height: 40px;
  border-radius: 20px;
  margin-right: 20px;
  font-size: 14px;
  background-color: #f3f3ff;
}
.search input:focus {
  outline: none;
}
.headList li {
  cursor: pointer;
}
img {
  cursor: pointer;
}
.zhankai{
  margin-left: 50px;
  margin-right: 100px;
  display: none;
  font-size: 22px;
}
.guanbi{
  color: #68d38b;
}
.zhankai img{
    width: 40px;
}

</style>