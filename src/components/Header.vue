<template>
  <div id="header-wrap">
  <h1 id="title-wrap">多节点蜜网系统</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>

<style lang="scss" scoped>
@import "../styles/config.scss";

#header-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  left: $navMenu;
  height: 90px;
  background-color: #344a5f;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
}

#title-wrap {
  text-indent:20px;
  // height: 50%;
  font-family:"Microsoft YaHei";
  font-weight: lighter;
  color: #fff;
}
</style>
