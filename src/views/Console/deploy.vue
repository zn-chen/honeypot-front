<template>
  <div>
    <br />
    <br />
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="节点名称" prop="name">
        <el-input v-model="form.name" style="width:500px"></el-input>
      </el-form-item>

      <el-form-item label="部署地址" prop="addr">
        <el-input v-model="form.addr" style="width:500px"></el-input>
      </el-form-item>

      <el-form-item label="节点类型" prop="type">
        <el-select v-model="form.type" placeholder="请选择节点类型">
          <el-option label="SSH仿真蜜罐" value="cowrie"></el-option>
          <el-option label="WEB渗透蜜罐" value="none"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="节点描述" prop="des">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 30}"
          v-model="form.des"
          style="width:500px"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">获取部署命令</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>

      <el-form-item label="部署命令">
        <el-input
          type="textarea"
          :autosize="{ minRows: 5, maxRows: 30}"
          v-model="deploymentCommand"
          style="width:500px"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        addr: "",
        type: "",
        des: ""
      },
      deploymentCommand: "",
      rules: {
        name: [{ required: true, message: "请输入节点名称", trigger: "blur" }],
        addr: [{ required: true, message: "请输部署的IP地址", trigger: "blur" }],
        type: [
          { required: true, message: "请选择蜜罐类型", trigger: "change" }
        ],
        des: [{ required: true, message: "请输入节点描述", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submit();
        } else {
          alert("参数缺失或格式错误");
          return false;
        }
      });
    },
    submit() {
      this.axios.post(process.env.VUE_APP_BASEURL + "/deploy", this.form).then(
        res => {
          this.deploymentCommand = res.data.result;
          window.console.log(this.deploymentCommand);
        },
        res => {
          // 错误回调
          window.console.log(res);
        }
      );
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.deploymentCommand = "";
    }
  }
};
</script>
