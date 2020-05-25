<template>
  <div>
    <div class="photo-avator">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="avator-note">仅支持JPG格式, 图片大小2MB以内</div>
    </div>
    <div class="user-info">
      <div class="infolist">
        <b-list-group>
          <b-list-group-item>
            <label for="username">用户名:</label>
            <span>zhumeig123</span>
          </b-list-group-item>
          <b-list-group-item>
            <label for="password">密码:</label>
            <span>********</span>
            <a href="#">修改密码</a>
          </b-list-group-item>
          <b-list-group-item>
            <label for="phonenumber">手机号码:</label>
            <span>123****3428</span>
          </b-list-group-item>
          <b-list-group-item>
            <label for="email">邮箱:</label>
            <span>未验证</span>
            <a href="#">验证邮箱</a>
          </b-list-group-item>
          <b-list-group-item>
            <label for="wechatBind">微信绑定:</label>
            <span>未绑定</span>
            <a href="#">绑定微信</a>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        imageUrl: '',
        userInfo: {
          username: 'zhuimeng123',
          phoneNumber: '123424123112',
          isemailValidation: false,
          isbindWechat: false
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<style scoped>
  a{
    text-decoration: none;
    color: #5aadda;
  } 
  .list-group-item{
    border: none;
    background-color: #f7f7f7;
  }
</style>
<style>
  .photo-avator{
    margin-left: 10%;
    margin-top: 10%;
    float: left;
    width: 30%;
    box-sizing: border-box;

  }
  .user-info{
    float: left;
    height: 100vh;
    width: 60%;
    /* background-color: pink; */
  }
  .avator-note{
    font-size: 13px;
    color: #aaa;
    width: 178px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .infolist {
    font-size: 14px;
    color: #8c939d;
    /* border: 1px solid #333; */
    margin-top: 15%;
    /* width: 80%; */
  }
  .infolist label{
    font-size: 16px;
    padding-right: 20px;
    width: 30%;
  }
  .infolist span{
    width: 55%;
    display:inline-block;
  }
</style>