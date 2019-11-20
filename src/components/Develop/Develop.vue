<template>
  <div class="develop-box">
    <el-row>
      <el-col :span="24">
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane label="CSS" name="first">
            <div>
              <el-tag @click="handleClick('1')">移动端一边框</el-tag>
              <el-tag @click="handleClick('2')">移动端一边框</el-tag>
              <div class="funBox" v-if="tagVal==1">
                <p>div::after {</p>
                <div class="indent-box">
                  <p>content: "";</p>
                  <p>position: absolute;</p>
                  <p>left: 0;</p>
                  <p>bottom: 0;</p>
                  <p>width: 100%;</p>
                  <p>height: 1px;</p>
                  <p>border-bottom: 1px solid #eee;</p>
                  <p>-webkit-transform-origin: left bottom;</p>
                  <p>transform-origin: left bottom;</p>
                  <p>-webkit-transform: scale(1, 0.5);</p>
                  <p>transform: scale(1, 0.5);</p>
                </div>
                <p>}</p>
              </div>
            </div>
            <div>
              <div class="funBox" v-if="tagVal==2">
                <p>
                  /* CSS字数限制(单行) */
                  <br />overflow: hidden;
                  <br />text-overflow: ellipsis;
                  <br />white-space: nowrap;
                </p>
                <br />
                <p>
                  /* CSS字数限制(多行) */
                  <br />overflow: hidden;
                  <br />text-overflow: ellipsis;
                  <br />display: -webkit-box;
                  <br />-webkit-line-clamp:3;
                  <br />-webkit-box-orient: vertical;
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="测试账号" name="second">
            <div>222</div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tagVal: "1",
    };
  },
  methods: {
    handleClick(tagVal) {
      this.tagVal = tagVal;
    }
  },
};
</script>

<style lang="less" scoped>
@import "./Develop.less";
</style>
