<template>
  <div class="title">
    <slot></slot>
    <slot></slot>
  </div>
</template>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 700;
  position: relative;
  height: 60px;
  padding-top: 60px;
  padding-bottom: 80px;
}
.title p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.title .leftP::before {
  content: "";
  width: 10px;
  height: 30px;
  background-color: #20ca57;
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translate(0, -50%);
}
.title .rightP::after {
  content: "";
  width: 10px;
  height: 30px;
  background-color: #20ca57;
  position: absolute;
  right: -40px;
  top: 50%;
  transform: translate(0, -50%);
}
.title .leftImg {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(0, -50%);
  width: 500px;
}
.title .rightImg {
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(0, -50%);
  width: 500px;
}
</style>