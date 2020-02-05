<template>
  <div id="nav-wrap">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      id="nav-wrap"
      router
    >
      <img src="../assets/img.png" />
      <template v-for="item in items">
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navMenu",
  props: [],
  data() {
    return {
      isCollapse: true,
      items: [
        {
          icon: "el-icon-map-location",
          index: "/nodes",
          title: "节点一览"
        },
        {
          icon: "el-icon-receiving",
          index: "/recods",
          title: "攻击记录"
        },
        {
          icon: "el-icon-setting",
          index: "/deploy",
          title: "节点部署"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/config.scss";

#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $navMenu;
  height: 100vh;
  background-color: rgb(36, 47, 66);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
