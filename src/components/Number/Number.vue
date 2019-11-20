<template>
  <div class="number-box">
    <el-row>
      <el-col :span="24">
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane label="函数调用" name="first">
            <div>
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column label="函数">
                  <template slot-scope="scope">
                    <span>{{ scope.row.title }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="PC">
                  <template slot-scope="scope">
                    <span
                      class="tag-read"
                      :data-clipboard-text="scope.row.Lable1"
                      @click="copyLink"
                    >{{ scope.row.Lable1 }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="移动端">
                  <template slot-scope="scope">
                    <span
                      class="tag-read"
                      :data-clipboard-text="scope.row.Lable2"
                      @click="copyLink"
                    >{{ scope.row.Lable2 }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="测试账号" name="second">
            <div>
              <el-table :data="tableData2" border style="width: 100%">
                <el-table-column label="类别">
                  <template slot-scope="scope">
                    <span>{{ scope.row.title }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="账号">
                  <template slot-scope="scope">
                    <span
                      class="tag-read"
                      :data-clipboard-text="scope.row.Lable1"
                      @click="copyLink"
                    >{{ scope.row.Lable1 }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="密码">
                  <template slot-scope="scope">
                    <span
                      class="tag-read"
                      :data-clipboard-text="scope.row.Lable2"
                      @click="copyLink"
                    >{{ scope.row.Lable2 }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          title: "单个加入购物车",
          Lable1: "kadpc.addCart('880')",
          Lable2: "kadmobile.addCart('880')"
        },
        {
          title: "套餐加入购物车",
          Lable1: "kadpc.addPackage('880')",
          Lable2: "kadmobile.addPackage('880')"
        },
        {
          title: "单个需求登记",
          Lable1: "kadpc.goBook('880')",
          Lable2: "kadmobile.goBook('880')"
        },
        {
          title: "套餐需求登记",
          Lable1: "kadpc.goPackageBook('880')",
          Lable2: "kadmobile.goPackageBook('880')"
        },
        {
          title: "领取优惠券",
          Lable1: "kadpc.getCoupon('880')",
          Lable2: "kadmobile.getCoupon('880')"
        },
        {
          title: "跳转详情页",
          Lable1: "/product/880.shtml",
          Lable2: "kadmobile.goProduct('880')"
        },
        {
          title: "资源站",
          Lable1: "//res.360kad.com/theme/",
          Lable2: "//tstres.360kad.com/theme/"
        },
      ],
      tableData2: [
        {
          title: "KAD",
          Lable1: "橘子",
          Lable2: "123456"
        },
        {
          title: "KAD",
          Lable1: "苹果",
          Lable2: "123456"
        },
        {
          title: "KAD",
          Lable1: "13250550975",
          Lable2: "123456"
        },
        {
          title: "KAD",
          Lable1: "13478888888",
          Lable2: "123456"
        },
        {
          title: "KAD",
          Lable1: "dabb",
          Lable2: "123456"
        },
        {
          title: "KAD",
          Lable1: "18565386918",
          Lable2: "123456"
        },
        {
          title: "KAD",
          Lable1: "15274420239",
          Lable2: "123456"
        },
        {
          title: "E+",
          Lable1: "13570523445",
          Lable2: "123456"
        },
        {
          title: "E+",
          Lable1: "18014725836",
          Lable2: "123456"
        },
        {
          title: "E+",
          Lable1: "16118157176",
          Lable2: "123456"
        },
        {
          title: "E+",
          Lable1: "13229050867",
          Lable2: "123456"
        },
        {
          title: "E+",
          Lable1: "13647747911",
          Lable2: "123456"
        },
        {
          title: "E+",
          Lable1: "18611112222",
          Lable2: "123456"
        },

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
    }
  }
};
</script>
<style lang="less">

@import "./Number.less";
</style>