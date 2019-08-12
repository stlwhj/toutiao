<template>
  <div class="container">
    <el-card>
      <div slot="header">
        <my-bread>个人设置</my-bread>
      </div>
      <el-row>
        <el-col :span="12">
          <el-form label-width="120px">
            <el-form-item label="编号：">{{userForm.id}}</el-form-item>
            <el-form-item label="手机：">{{userForm.mobile}}</el-form-item>
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
              <el-button type="primary" @click="saveUserInfo">保存设置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-upload
            class="avatar-uploader"
            action
            :show-file-list="false"
            :http-request="myUpload"
          >
            <img v-if="userForm.photo" :src="userForm.photo" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p style="text-align:center;font-size:14px">修改头像</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import store from '@/store'
import eventBus from '@/components/eventBus'
export default {
  data () {
    return {
      userForm: {
        id: null,
        name: null,
        intro: null,
        email: null,
        photo: null,
        mobile: null
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    myUpload (result) {
      const formData = new FormData()
      formData.append('photo', result.file)
      this.$http.patch('user/photo', formData).then(res => {
        this.$message.success('修改头像成功')
        this.userForm.photo = res.data.data.photo
        store.setUser({ photo: this.userForm.photo })
        eventBus.$emit('updatePhoto', this.userForm.photo)
      })
    },
    async getUserInfo () {
      const {
        data: { data }
      } = await this.$http.get('user/profile')
      this.userForm = data
    },
    async saveUserInfo () {
      await this.$http.patch('user/profile', {
        name: this.userForm.name,
        intro: this.userForm.intro,
        email: this.userForm.email
      })
      this.$message.success('保存设置成功')
      store.setUser({ name: this.userForm.name })
      eventBus.$emit('updateName', this.userForm.name)
    }
  }
}
</script>

<style scoped lang='less' >
</style>
