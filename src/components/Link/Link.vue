<template>
  <div class="link-box">
    <div class="header">
      <span class="title">常用链接</span>
    </div>
    <div class="btn-box">
      <el-button type="primary">
        <a href="http://manage.360kad.com" target="_blank">2.0后台</a>
      </el-button>
      <el-button type="primary">
        <a href="http://www.360kad.com" target="_blank">康爱多官网</a>
      </el-button>
      <el-button type="primary">
        <a
          href="http://localhost:7008/app/purchase-marketing/zhuanti-1910-zhuhuichang"
          target="_blank"
          >E+本地PC站</a
        >
      </el-button>
      <el-button type="primary">
        <a
          href="http://localhost:4009/app/purchase-marketing/zhuanti-1910"
          target="_blank"
          >E+本地V站</a
        >
      </el-button>
      <el-button type="primary">
        <a
          href="http://tste.360kad.com/app/purchase-marketing/zhuanti-1910-zhuhuichang"
          target="_blank"
          >E+测试PC站</a
        >
      </el-button>
      <el-button type="primary">
        <a
          href="http://tsteweixin.360kad.com/app/purchase-marketing/zhuanti-1910"
          target="_blank"
          >E+测试V站</a
        >
      </el-button>
      <el-button type="primary">
        <a href="http://tstres.360kad.com/wiki/vp/" target="_blank"
          >平台装修文档</a
        >
      </el-button>
      <el-button type="primary">
        <a
          href="http://tstres.360kad.com/wiki/e-api-doc/guide/install.html"
          target="_blank"
          >E+文档</a
        >
      </el-button>
    </div>
    <div class="header">
      <span class="title">链接调试</span>
    </div>
    <div class="btn-box">
      <el-button type="primary" @click="openLink">
        <a
          href="http://vmall.360kad.com/Login/IdLogin?unionId=ojj3njm58DmswIBtyMYMl4-1B9uc"
          target="_blank"
          >V站验证</a
        >
      </el-button>
      <el-button type="primary">
        <a
          href="http://localhost:4009/Portal/weixin/TestAuth?openId=oZMPOt40XPFPsgRnDJ8oI6FnkgHQ&unionid=opeeCv8UL8uZHKDtGH5hLg5GlDYE"
          target="_blank"
          >E+本地验证</a
        >
      </el-button>
      <el-button type="primary">
        <a
          href="http://tsteweixin.360kad.com/Portal/weixin/TestAuth?openId=oZMPOt40XPFPsgRnDJ8oI6FnkgHQ&unionid=opeeCv8UL8uZHKDtGH5hLg5GlDYE"
          target="_blank"
          >E+测试(调试)</a
        >
      </el-button>
    </div>
    <div class="header">
      <span class="title">账号信息</span>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="类别">
        <template slot-scope="scope">
          <span @click="toLink(scope.row.link)">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="账号">
        <template slot-scope="scope">
          <span
            class="tag-read"
            :data-clipboard-text="scope.row.name"
            @click="copyLink"
            >{{ scope.row.name }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="密码">
        <template slot-scope="scope">
          <span
            class="tag-read"
            :data-clipboard-text="scope.row.password"
            @click="copyLink"
            >{{ scope.row.password }}</span
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="test"></div>
  </div>
</template>
<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {
      tableData: [
        {
          title: "禅道系统",
          name: "wengqinpai",
          password: "a123456",
          link: "http://zentao.360kad.com/zentao/user-login.html"
        },
        {
          title: "OA系统",
          name: "wengqinpai",
          password: "@xxcc33...",
          link: "http://218.16.193.170:81/wui/theme/ecology8/page/login.jsp"
        },
        {
          title: "KAD邮箱",
          name: "wengqinpai@360kad.com",
          password: "@xxcc33..",
          link: "https://mail.360kad.com/"
        },
        {
          title: "kad-GitLab",
          name: "wengqinpai",
          password: "@xxcc33..",
          link: "https://gitlab.360kad.com/kad2.0"
        },
        {
          title: "主机",
          name: "wengqinpai",
          password: "@xxcc33...",
          link: ""
        },
        {
          title: "OA系统",
          name: "wengqinpai",
          password: "weng360..",
          link: ""
        },
        {
          title: "RTX账号",
          name: "wengqinpai",
          password: "a123456",
          link: ""
        },
        {
          title: "SVN账号",
          name: "wengqinpai",
          password: "6qw]IAce+ra4",
          link: ""
        }
      ]
    };
  },
  methods: {
    copyLink() {
      var clipboard = new Clipboard(".tag-read");
      // eslint-disable-next-line no-undef
      clipboard.on("success", () => {
        this.$message({
          message: "复制成功",
          type: "success"
        });
        clipboard.destroy();
      });
      // eslint-disable-next-line no-undef

      clipboard.on("error", () => {
        this.$message({
          message: "复制失败",
          type: "error"
        });
        clipboard.destroy();
      });
    },
    toLink(link) {
      window.open(link);
    },
    openLink() {
      setTimeout(() => {
        window.open("http://vmall.360kad.com");
      }, 500);
    }
  }
};
</script>
<style lang="less">
@import "./Link.less";
</style>
