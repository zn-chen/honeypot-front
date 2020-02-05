<template>
  <div>
    <template>
      <el-button-group>
        <el-button plain icon="el-icon-arrow-left"></el-button>
        <el-button plain icon="el-icon-arrow-right"></el-button>
      </el-button-group>
      <el-button-group style="margin-left:10px">
        <el-button plain icon="el-icon-refresh" @click="updateData"></el-button>
      </el-button-group>

      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="create_time" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="name" label="节点名称" width="180"></el-table-column>
        <el-table-column prop="addr" label="地址" width="180"></el-table-column>
        <el-table-column prop="port" label="开放端口" width="120"></el-table-column>
        <el-table-column prop="statue" label="状态" width="120"></el-table-column>
        <el-table-column prop="describe" label="节点描述" style="width: 100%"></el-table-column>

        <el-table-column align="right">
          <template slot="header">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <!-- <input type="button" value="测试" @click="getData" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    updateData() {
      this.axios.get(process.env.VUE_APP_BASEURL + "/nodes").then(
        res => {
          this.tableData = res.data.result;
          window.console.log(this.tableData);
        },
        res => {
          // 错误回调
          window.console.log(res);
        }
      );
    },
    handleEdit(index, row) {
      window.console.log(index, row);
    },
    handleDelete(index, row) {
      this.axios
        .delete(process.env.VUE_APP_BASEURL + "/nodes/" + row.ident)
        .then(
          res => {
            // 正确回调
            this.updateData();
            window.console.log("OK", res);
          },
          res => {
            // 错误回调
            alert("删除操作失败");
            window.console.log("NO", res);
          }
        );
    },
  },
  mounted() {
    this.updateData();
    
  }
};
</script>

<style lang="scss" scoped>
#button-warp {
  color: #766f7f;
  background-color: transparent;
  border-color: #c3c0c7;
}
</style>

