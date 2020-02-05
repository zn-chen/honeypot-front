<template>
  <div id="layout">
    <Sidebar />
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "../../components/Header";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

export default {
  name: "console",
  components: {
    Header,
    Main,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
</style>
