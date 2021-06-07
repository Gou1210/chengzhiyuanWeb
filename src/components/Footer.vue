<template>
  <div class="footer">
    <div class="top">
      <div>
        <img src="../../static/img/home/weizhi.png" alt="" />
        <p>北京市顺义区北小营镇汽调库路5号</p>
      </div>
      <div>
        <img src="../../static/img/home/dianhua.png" alt="" />
        <p>010-60497160</p>
      </div>
      <div>
        <img src="../../static/img/home/youxiang.png" alt="" />
        <p>bjchengzhiyuan@163.com</p>
      </div>
    </div>
    <div class="middle">
      <div>
        <img src="../../static/img/home/wx.png" alt="" />
        <p>诚智源环卫保洁</p>
      </div>
      <div>
        <img src="../../static/img/home/ditu.png" alt="" />
      </div>
    </div>
    <div class="bottom">
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2020043323">
      京ICP备2020043323号
      </a>
      <div style="width:300px;">
     <a target="_blank" href=" " style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
       <img src="../../static/img/home/gongan.png" style="float:left;"/>
       <p class="gongan" style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">京公网安备 11011302003162号</p >
       </a>
    </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  margin-top: 140px;
  width: 100%;
  position: relative;
}
.footer .top {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #fffef9;
  border-radius: 10px;
  box-shadow: 10px -5px 5px 1px #d3d7d4;
  /* padding: 50px; */
  position: absolute;
  left: 50%;
  top: -50px;
  transform: translate(-50%, 0);
  height: 100px;
}
.footer .top img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.footer .top div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  letter-spacing: 2px;
}
.footer .middle {
  background-color: #15539e;
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
}
.footer .middle div {
  margin: 40px 50px 0 50px;
}
.footer .middle div:nth-child(1) img {
  width: 141px;
}
.footer .middle div:nth-child(2) img {
  width: 368px;
}
.footer .bottom {
  height: 40px;
  background-color: #072448;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}
.footer .bottom a{
  color: #fff;
}

</style>
