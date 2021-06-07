<template>
  <div class="culture">
    <div class="bigScreen">
<HeaderTab></HeaderTab>
    </div>
    
    <div class="container">
      <div class="">
        <Banner>
          <img src="../../static/img/culture/banner.png" alt="" />
        </Banner>
      </div>
      <!-- 企业文化 -->
      <div class="culture block">
        <Title>
          <p class="leftP">企业文化</p>
          <img
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>

        <div class="cultureList">
          <div
            v-for="(item, index) in cultureList"
            @mouseover="protectionOver(index)"
            class="cultureDetail"
            :class="{ active: item.isActive }"
          >
            <p>{{ item.title }}</p>
            <p>{{ item.p1 }}</p>
            <p>{{ item.p2 }}</p>
          </div>
        </div>
      </div>
      <!-- 企业文化 -->
      <div class="spirit block">
        <Title>
          <p class="rightP">企业精神</p>
          <img
            class="rightImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
        <div class="spiritList">
          <div class="spiritDetail">
            <div class="spiritText">
              <p>立场</p>
              <p>
                国家立场，维护国家利益，爱党爱民，与背叛和损坏国家利益的人划清界限，斗争到底
              </p>
              <p>客户立场，永远维护客户的利益，不做对不起客户的事情</p>
              <p>
                公司立场，永远不做损坏公司利益的是，和所有损坏公司利益的人划清界限
              </p>
            </div>
            <div class="spiritImg"></div>
          </div>
          <div class="spiritDetail">
            <div class="spiritImg spiritImg2"></div>
            <div class="spiritText">
              <p>八荣八耻</p>
              <p>创新为荣--墨守为耻&nbsp&nbsp&nbsp&nbsp成果为荣--过程为耻</p>
              <p>责任为荣--抱怨为耻&nbsp&nbsp&nbsp&nbsp遵纪为荣--乱纪为耻</p>
              <p>忠诚为荣--背叛为耻&nbsp&nbsp&nbsp&nbsp精进为荣--懈怠为耻</p>
              <p>标准为荣--随意为耻&nbsp&nbsp&nbsp&nbsp集体为荣--个人为耻</p>
            </div>
          </div>
          <div class="spiritDetail">
            <div class="spiritText">
              <p>八条铁律</p>
              <p>
                贪污腐败--处理办法：除名&nbsp&nbsp&nbsp&nbsp接干私活--处理办法：除名
              </p>
              <p>
                延缓执行--处理办法：除名&nbsp&nbsp&nbsp&nbsp安全事故--处理办法：除名
              </p>
              <p>
                传播负面--处理办法：除名&nbsp&nbsp&nbsp&nbsp违规违法--处理办法：除名
              </p>
              <p>
                泄露机密--处理办法：除名&nbsp&nbsp&nbsp&nbsp拉帮结伙--处理办法：除名
              </p>
            </div>
            <div class="spiritImg spiritImg3"></div>
          </div>
        </div>
      </div>
      <!-- 风采展示 -->
      <div class="scene block">
        <Title>
          <p class="leftP">风采展示</p>
          <img 
            class="leftImg"
            src="../../static/img/home/chengzhiyuan.png"
            alt=""
          />
        </Title>
        <div class="sceneList">
          <div class="sceneDetail" v-for="item in sceneList" @click="sceneTap(item.gradeId,item.id)">
            <img class="sceneImg" :src="$host+item.newsPhoto" alt="" />
            <div class="sceneText">
              <p>{{item.newsTitle}}</p>
              <p>
               {{item.newsDescribe}}
              </p>
            </div>
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
      cultureList: [
        {
          title: "公司愿景",
          p1: "影响和改变更多人为环境",
          p2: "为环保做出更多贡献",
          isActive: true,
        },
        {
          title: "公司使命",
          p1: "努力改善环境卫生",
          p2: "让人人享受健康人生",
          isActive: false,
        },
        {
          title: "公司宗旨",
          p1: "每一天，我们都致力于",
          p2: "更高的标准服务",
          isActive: false,
        },
        {
          title: "公司精神",
          p1: "以主人翁精神和责任感",
          p2: "清洁爱护城市",
          isActive: false,
        },
      ],
      idArr:[13,14,15],
      sceneList:[]
    };
  },
  components: {
    HeaderTab,
    Title,
    Footer,
    Banner,
  },
  created(){
    this.getCultureList()
  },
  methods: {

         getCultureList(){
      this.idArr.forEach((v,i)=>{
        
        new Promise((resolve,reject)=>{
         resolve(this.$http.get("/api/news/getNewsListByGrade",{params: {gradeId: v,pageNum: 1,}})) 
        }).then(res=>{
          this.sceneList.push(res.data.data.rows[0])
          
        }).catch(err=>{
          console.log(err)
        })
      })
      console.log(this.cultureData)
    },
    protectionOver(index) {
      this.cultureList.forEach((v, i) => {
        if (index == i) {
          v.isActive = true;
        } else {
          v.isActive = false;
        }
      });
    },
    sceneTap(e1,e2){
            this.$router.push({
        name: "journalismDetail",
        query: { pid: this.pid, gradeid: e1, id: e2 },
      });
    }
  },
};
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  /* margin-bottom: -140px; */
}
.block {
  padding-top: 40px;
}
.cultureList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.cultureList .active {
  background: url("../../static/img/culture/tuoyuanliang.png") no-repeat;
  background-size: cover;
}

.cultureList .active p {
  background: linear-gradient(to bottom, green, blue);
  -webkit-background-clip: text;
  color: transparent;
}
.cultureDetail {
  width: 228px;
  height: 228px;
  background: url("../../static/img/culture/tuoyuan.png") no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.cultureDetail > :nth-child(1) {
  font-size: 20px;
  color: #11264f;
}
.cultureDetail p {
  margin-top: 10px;
}
.spiritDetail {
  display: flex;
  justify-content: space-around;
  padding: 0 40px 0 40px;
  /* flex-wrap: wrap; */
}
.spiritImg {
  width: 600px;
  height: 410px;
  background: url("../../static/img/culture/spirit1.png");
  background-size: cover;
}
.spiritImg2 {
  background: url("../../static/img/culture/spirit2.png");
  background-size: cover;
}
.spiritImg3 {
  background: url("../../static/img/culture/spirit3.png");
  background-size: cover;
}
.spiritText {
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
}
.spiritText p {
  margin-top: 12px;
  text-align: left;
  font-size: 16px;
}
.spiritText > :nth-child(1) {
  font-size: 20px;
  color: #11264f;
  font-weight: 700;
}
.spirit {
  padding-bottom: 60px;
}
.scene {
  background-color: #d3d7d4;
  width: 1920px;
  margin-left: -360px;
  padding-bottom: 70px;
}
.sceneList {
  width: 1200px;
  margin: 0 auto;
}
.sceneDetail {
  display: flex;
  background-color: #fff;
  margin-bottom: 50px;
}
.sceneDetail img {
  width: 600px;
  height: 400px;
}
.sceneText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px 0 50px;
  width: 600px;
}
.sceneText p {
  margin-top: 20px;
}
.sceneText > :nth-child(1) {
  font-size: 20px;
  font-weight: 700;
}

.sceneDetail:hover{
    background: #072648;
  color: #fff;
}
.sceneImg{
  width: ;
}
</style>