<template>
  <div class="service">
    <div class="bigScreen">
<HeaderTab></HeaderTab>
    </div>
    
    <div class="container">
      <div class="">
        <Banner>
          <img src="../../static/img/service/banner.png" alt="" />
        </Banner>
      </div>
      <div class="classify block">
        <Title>
          <p class="leftP">服务分类</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
        <div class="classifyList">
          <div
            v-for="(item, index) in classifyList"
            @mouseover="protectionOver(index)"
            @mouseleave="protectionLeave(index)"
            @click="classifyTap( item.detail.pid, item.detail.id)"
            class="classifyDetail"
            :class="{ active: item.isActive }"
          >
            <img :src="item.img" alt="" />
            <div class="sanitation" >
            <p>{{ item.detail.title }}</p>
            <p>SANITATION</p>
            </div>

          </div>
        </div>
      </div>
      <div class="innovate block">
        <Title>
          <p class="rightP">服务创新</p>
          <img
            class="rightImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
                <p class="more" @click="allnews">查看所有>></p>
        <div class="innovateList">
          <!-- <div
            class="innovateDetail"
            @click="innovateDetailTap(gradeOne.pid, gradeOne.id)"
          >
            <div class="bottom">
              <div v-if="gradeOne.dateTime">
                <p>{{ gradeOne.dateTime[1] }}月</p>
                <p>{{ gradeOne.dateTime[2] }}日</p>
              </div>

              <p>{{ gradeOne.title }}</p>

              <img src="../../static/img/service/arrow.png" alt="" />
            </div>
          </div> -->
          
          <div
            class="innovateDetailRight"
            @click="innovateDetailTap(item.gradeId, item.id)"
            v-for="(item,index) in fuwuList"
                        v-if="index<3"
          >
           <img class="newsPhoto" :src="$host+item.newsPhoto" alt="">
                  <div  class="wordDay">
                <p>{{ item.dateTime[1] }}月</p>
                <p>{{ item.dateTime[2] }}日</p>
              </div>
            <div class="wordTitle">
              <p>{{ item.newsTitle }}</p>
            </div>
            <div class="wordTime">
              <p>发布时间:{{ item.createTime }}</p>
            </div> 
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>
<script>
//引入头部组件
import HeaderTab from "../components/HeaderTab";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Banner from "../components/Banner";
export default {
  data() {
    return {
      classifyList: [
        {
          img: "../../static/img/service/protection.png",
          detail:{}
        },
        {
          img: "../../static/img/service/protection.png",
          detail:{}
        },
        {
          img: "../../static/img/service/protection.png",
          detail:{}
        },
      ],
      // gradeOne: {},
      // grade: [],
      idArr:[2,3,5],
      articleList:[],
      articleOne:{},
      fuwuList:[]
    };
  },
  created() {
    this.getGrade();
    this.getarticleList()
    this.getfuwuList()
  },
  methods: {
    async getGrade() {
      let { data: res } = await this.$http.get("/api/grade/getGradeList", {
        params: {
          pid: 1,
        },
      });
        this.classifyList.forEach((v,i)=>{
          v.detail = res.data[i]
        }) 

    },
     getarticleList(){
      this.idArr.forEach((v,i)=>{
        
        new Promise((resolve,reject)=>{
         resolve(this.$http.get("/api/news/getNewsListByGrade",{params: {gradeId: v,pageNum: 1,}})) 
        }).then(res=>{
          res.data.data.rows[0].dateTime = res.data.data.rows[0].createTime.split(" ")[0].split("-");
          this.articleList.push(res.data.data.rows[0])
        }).catch(err=>{
        })
      })
    },
    async getfuwuList() {
      let { data: res } = await this.$http.get("/api/news/getNewsListByGrade", {
        params: {
          gradeId: 22,
          showIndex:0
        },
      });
        res.data.rows.forEach(v=>{
         v.dateTime = v.createTime.split(" ")[0].split("-")
        })
        this.fuwuList = res.data.rows
    },
classifyTap(e1,e2){
  this.$router.push({name:'maintain',query:{pid:e1,id:e2}})
},
    innovateDetailTap(e1, e2) {
      this.$router.push({
        name: "journalismDetail",
        query: { gradeid: e1, id: e2 },
      });
    },
    protectionOver(index) {
      this.classifyList[index].img =
        "../../static/img/service/protectionbai.png";
      this.classifyList[index].isActive = true;
    },
    protectionLeave(index) {
      this.classifyList[index].img =
        "../../static/img/service/protection.png";
      this.classifyList[index].isActive = false;
    },
    allnews(){
      this.$router.push({name:'serviceList'})
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
}
.block {
  padding-top: 40px;
}
.classifyList {
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  flex-wrap: wrap;
}

.classifyDetail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;
  box-shadow: 10px 10px 10px 10px #999d9c;
  border-radius: 15px;
  border-bottom-left-radius: 0;
}

.classifyDetail p {
  margin: 10px 0;
}
.sanitation{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 400px; */
}
.classifyDetail .sanitation> :nth-child(2) {
  font-weight: 700;
  color: #354168;
}
.classifyDetail .sanitation> :nth-child(3) {
  color: #666;
}
/* .classifyDetail:hover{
background-color: #61D185;
} */
.active {
  background-color: #61d185;
}
.active p {
  color: #fff !important;
}
.innovate {
  width: 1920px;
  margin-left: -360px;
  background-color: #072448;
  margin-top: 80px;
}
.innovate .rightP {
  color: #fff;
}
.innovate .innovateList {
  width: 1200px;
  margin: 0 auto;
  height: 480px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.innovateDetail {
  cursor: pointer;
  display: flex;
  background: url("../../static/img/service/earth.png") no-repeat;
  background-size: cover;
  width: 500px;
  height: 401px;
  align-items: flex-end;
  padding: 0 20px 0 10px;
}
.innovateDetail .bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* .innovateDetail .bottom > :nth-child(2) {
  color: #fff;
  text-align: left;
}
.innovateDetail .bottom > :nth-child(1) {
  text-align: center;
} */
.innovateDetailRight {
  cursor: pointer;
  background: url("../../static/img/service/qingsao.png");
  background-size: cover;
  width: 308px;
  height: 387px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 10px 0px 10px;
  position: relative;
}
/* .innovateDetailRight > :nth-child(1) {
  margin-bottom: 50px;
}
.innovateDetailRight > :nth-child(2) {
  margin-bottom: 10px;
} */
.wordDay {
  /* margin-top: -120px;
  margin-bottom: 50px; */
  position: absolute;
  width: 55px;
  padding: 10px;
  background-color: #072448;
  color: #fff;
  top: 190px;
}
.wordTitle{
  position: absolute;
  top: 290px;
}
.wordTime{
  position: absolute;
  bottom: 10px;
}

.newsPhoto{
  width: 308px;
  height: 220px;
  position: absolute;
  top: 0;
  left: 0;
}
.more {
  text-align: end;
  cursor: pointer;
  color: #000;
  margin-right: 360px;
  color: #fff;
}
.more:hover {
  color: #218746;
  font-weight: 700;
}
</style>