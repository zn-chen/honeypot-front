<template>
  <div>
    <el-button-group>
      <el-button plain icon="el-icon-arrow-left"></el-button>
      <el-button plain icon="el-icon-arrow-right"></el-button>
    </el-button-group>
    <el-button-group style="margin-left:10px">
      <el-button plain icon="el-icon-refresh" @click="updateData"></el-button>
    </el-button-group>
    
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="payload">
                <span>{{ props.row.payload }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="时间" prop="timestamp"></el-table-column>
        <el-table-column label="节点名称" prop="name"></el-table-column>
        <el-table-column label="攻击源IP" prop="peer_ip"></el-table-column>
        <el-table-column label="攻击源端口" prop="peer_port"></el-table-column>
        <el-table-column label="主机IP" prop="host_ip"></el-table-column>
        <el-table-column label="主机端口" prop="host_port"></el-table-column>
        <el-table-column label="协议" prop="protocol"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [],
      page1: {
        start_page: 0,
        end_page: 1,
        page_size: 30
      }
    };
  },
  methods: {
    updateData() {
      this.axios.post(process.env.VUE_APP_BASEURL + "/record", this.page1).then(
        res => {
          this.tableData = res.data.result;
          window.console.log(this.tableData);
        },
        res => {
          // 错误回调
          window.console.log(res);
        }
      );
    }
  },
  mounted() {
    this.updateData();
  }
};
</script>
