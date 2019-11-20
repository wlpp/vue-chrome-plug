<template>
  <div id="app">
    <!-- 主内容 -->
    <div class="main">
      <el-row>
        <el-col :span="24" class="navbar">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">常用链接</el-menu-item>
            <el-menu-item index="2">函数账号</el-menu-item>
            <el-menu-item index="3">前端常用</el-menu-item>
            <el-menu-item index="4">图片</el-menu-item>
          </el-menu>
          <div class="manage_box">
            <div class="add_food" title="点餐" @click="foodPopup = true"></div>
            <div
              class="show_task"
              title="管理任务"
              @click="setTaskPopup = true"
            ></div>
            <div class="add_task" title="添加任务" @click="addTask"></div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <transition name="bounce" mode="out-in">
            <Link v-if="value == 1" />
            <Number v-if="value == 2" />
            <Develop v-if="value == 3" />
            <Upload v-if="value == 4" />
          </transition>
        </el-col>
      </el-row>
    </div>
    <!-- 背景粒子 -->
    <vue-particles
      color="#ccc"
      :particleOpacity="0.8"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#ccc"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles>
    <!-- 漂浮字体 -->
    <marquee class="marqueeBox" direction="down" behavior="alternate">
      <marquee
        behavior="alternate"
        class="marqueeText"
        v-if="new Date().getDay() === 2"
      >
        <span class="textColor">今天需要填禅道</span>
      </marquee>
      <marquee behavior="alternate" class="marqueeText">
        <span class="textColor" v-for="(item, index) in taskList" :key="index"
          >任务{{ index + 1 + ":" + item.message }}</span
        >
      </marquee>
    </marquee>
    <!-- 添加任务弹框 -->
    <el-dialog title="添加任务" :visible.sync="addTaskPopup" width="40%" center>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-edit"
        v-model="message"
      ></el-input>
      <el-date-picker
        v-model="dateTime"
        type="datetime"
        placeholder="选择完成时间"
        value-format="timestamp"
        default-time="23:59:59"
      ></el-date-picker>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addTaskPopup = false">取 消</el-button>
        <el-button type="primary" @click="setTask">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 管理任务弹框 -->
    <el-dialog title="管理任务" :visible.sync="setTaskPopup" width="40%" center>
      <el-table :data="taskList" style="width: 100%">
        <el-table-column label="日期">
          <template slot-scope="scope">
            <span class="textTag">{{ initDateTime(scope.row.dateTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="任务">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.message }}</p>
              <div slot="reference" class="name-wrapper">
                <span class="textTag">{{ scope.row.message }}</span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="DeleteTask(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!-- 随机午餐弹框 -->
    <el-dialog
      title="午餐类型"
      :visible.sync="foodPopup"
      width="30%"
      center
    >
      <div class="Foolottery_warp">
        <div class="Foolottery" ref="Foolottery">
          <div
            class="type"
            :class="rollIndex === index ? 'active' : ''"
            v-for="(item, index) in foods"
            :key="index"
          ></div>
        </div>
        <div v-if="isClick" class="btn" @click="getFoodlottery"></div>
        <div v-else class="btn_disable"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Link from "../../components/Link/Link";
import Number from "../../components/Number/Number";
import Develop from "../../components/Develop/Develop";
import Upload from "../../components/Upload/Upload";
export default {
  name: "app",
  components: {
    Link,
    Number,
    Develop,
    Upload
  },
  data() {
    return {
      activeIndex: "1",
      value: "1",
      markDate: [],
      ClickTime: "",
      addTaskPopup: false,
      setTaskPopup: false,
      foodPopup: false,
      message: "",
      dateTime: "",
      taskList: [],
      nowTime: 0,
      foods: ["饭", "面", "粥"],
      rollIndex: -1,
      rollSpeed: 50,
      rollTime: 0,
      foodIndex: 0,
      timer: null,
      isClick: true
    };
  },
  methods: {
    handleSelect(key) {
      this.value = key;
    },
    // 添加任务
    addTask() {
      this.addTaskPopup = true;
      this.message = "";
      this.dateTime = "";
    },
    setTask() {
      let tmpObj = { message: this.message, dateTime: this.dateTime };
      if (this.messageValue === "") {
        this.$message({
          message: "请填写内容",
          type: "warning"
        });
      } else if (this.dateTime === "") {
        this.$message({
          message: "请选择时间",
          type: "warning"
        });
      } else if (this.dateTime <= this.nowTime) {
        this.$message({
          message: "设置的时间小于当前时间",
          type: "warning"
        });
      } else {
        this.taskList.push(tmpObj);
        localStorage.setItem("task", JSON.stringify(this.taskList));
        this.$message({
          message: "任务已添加",
          type: "success"
        });
        this.addTaskPopup = false;
      }
    },
    getTask() {
      this.nowTime = new Date().getTime();
      if (
        JSON.parse(localStorage.getItem("task")) &&
        JSON.parse(localStorage.getItem("task")).length > 0
      ) {
        this.taskList = JSON.parse(localStorage.getItem("task"));
      }
      this.taskList &&
        this.taskList.map((item, index) => {
          if (this.nowTime > item.dateTime) {
            this.taskList.splice(index, 1);
          }
        });
    },
    // 管理任务
    DeleteTask(index) {
      this.taskList.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(this.taskList));
      this.$message({
        message: "任务已删除",
        type: "success"
      });
    },
    initDateTime(dateTime) {
      let day =
        new Date(dateTime).getFullYear() +
        "-" +
        (new Date(dateTime).getMonth() + 1) +
        "-" +
        new Date(dateTime).getDate();
      return day;
    },
    // 点餐
    getFoodlottery() {
      this.rollTime++;
      this.foodIndex = Math.floor(Math.random() * this.foods.length);
      this.isClick = false;
      this.rollIndex < 2 ? this.rollIndex++ : (this.rollIndex = 0);
      this.timer = setTimeout(this.getFoodlottery, this.rollSpeed);

      if (
        this.rollTime > 40 &&
        this.foodIndex == this.rollIndex &&
        this.rollSpeed > 270
      ) {
        clearTimeout(this.timer);
        this.isClick = true;
        this.rollSpeed = 50;
        this.rollTime = 0;
        this.foodPopup = false;
        this.$notify.info({
          title: `今天吃${this.foods[this.foodIndex]}`,
          dangerouslyUseHTMLString: true,
          message:
            '<a style="color:#67C23A;cursor: pointer;" href="https://h5.waimai.meituan.com/waimai/mindex/home" target="_blank">点击此处去点餐</a>',
          showClose: false
        });
      } else {
        this.rollSpeed += 5;
      }
    },
    autosuggest() {
      const time = new Date().getHours()
      if(time>10&&time<11){
        this.$notify.info({
          title: `该点餐了`,
          dangerouslyUseHTMLString: true,
          duration: 2000,
          showClose: false,
          message:
            '<a style="color:#67C23A;cursor: pointer;" href="https://h5.waimai.meituan.com/waimai/mindex/home" target="_blank">点击此处去点餐</a>',
        });
      }
      console.log(time);
    }
  },
  mounted() {
    this.getTask();
    this.autosuggest();
  }
};
</script>

<style lang="less" scoped>
@import "./App.less";
</style>
