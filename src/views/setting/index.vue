<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <my-bread>个人设置</my-bread>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form label-width="120px">
            <el-form-item label="编号：">111</el-form-item>
            <el-form-item label="手机：">13911111111</el-form-item>
            <el-form-item label="媒体名称：">
              <el-input v-model="userForm.name"></el-input>
            </el-form-item>
            <el-form-item label="媒体介绍：">
              <el-input v-model="userForm.intro" type="textarea" :row="3"></el-input>
            </el-form-item>
            <el-form-item label="邮箱：">
              <el-input v-model="userForm.email"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">保存设置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p style="text-align:center;font-size:14px">修改头像</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userForm: {
        name: '',
        intro: '',
        email: ''
      },
      imageUrl: null
    }
  },

  methods: {}
}
</script>

<style scoped lang='less' >
</style>
