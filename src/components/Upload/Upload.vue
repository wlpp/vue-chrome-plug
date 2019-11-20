<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="getPicture"
      :file-list="fileList"
      :auto-upload="false"
      list-type="picture"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
    </el-upload>
    <div class="use_box">
      <el-input v-model="value" placeholder="图片名称"></el-input>
      <el-button type="primary" @click="rename">重命名</el-button>
      <el-button type="primary" @click="download(false)">下载</el-button>
      <el-button type="primary" @click="download">批量并下载</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      fileList: []
    };
  },
  methods: {
    // 删除
    handleRemove(file, fileList) {
      this.fileList &&
        this.fileList.map((item, index) => {
          if (item.name === fileList.name) {
            this.fileList.splice(index, 1);
            item.active = false;
          }
        });
    },
    // 选中
    handlePreview(fileList) {
      this.fileList =
        this.fileList &&
        this.fileList.map(item => {
          item.active = false;
          if (item.name === fileList.name) {
            return {
              ...item,
              active: true
            };
          }
          return item;
        });

    },
    // 加入文件
    getPicture(file, fileList) {
      // let lis = document.querySelectorAll('.el-upload-list li')
      this.fileList =
        fileList &&
        fileList.map(item => {
          return {
            ...item,
            active: false
          };
        });
    },
    // 重命名
    rename() {
      if (this.value === "") {
        this.$message({
          message: "图片名称不能为空",
          type: "warning"
        });
        return;
      }
      this.fileList &&
        this.fileList.map(item => {
          if (item.active) {
            item.name = this.value;
          }
        });
    },
    // 下载
    download(flag) {
      if (this.value === "") {
        this.$message({
          message: "图片名称不能为空",
          type: "warning"
        });
        return;
      } else {
        let imgs = document.querySelectorAll(".el-upload-list li img");
        imgs &&
          imgs.forEach((item, index) => {
            var url = item.src;
            var a = document.createElement("a");
            var event = new MouseEvent("click");
            flag
              ? (a.download = this.value + (index + 1))
              : (a.download = item.nextElementSibling.innerText);
            a.href = url;
            a.dispatchEvent(event);
          });
      }
    },
    // setActive(){
    //   lis.forEach(item=>{
    //     var event = new MouseEvent("click");
    //     item.dispatchEvent(event);

    //   })
    // }
  }
};
</script>
<style lang="less" scoped>
/deep/ .el-upload {
  //   display: block;
  position: relative;
  padding: 20px 80px;
}
/deep/ .el-upload-dragger {
  margin: 0 auto;
}
/deep/ .el-upload-list__item .el-icon-close {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
/deep/ .el-upload-list__item {
  cursor: pointer;
  outline: none;
}
/deep/ .el-upload-list__item-name {
  height: 70px;
  line-height: 70px;
  margin-top: 0 !important;
}
.use_box {
  position: absolute;
  right: 85px;
  top: 23px;
  width: 300px;
  /deep/ input {
    margin-bottom: 20px;
  }
  z-index: 99;
}
</style>