<template>
  <div class="main_app" title="去编辑页" @click="toOption">
    <img src="../../static/images/icon.png" alt />
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    toOption() {
      // eslint-disable-next-line no-undef
      window.open(chrome.extension.getURL("options.html"));
    }
  },
};
</script>

<style lang="less" scoped>
.main_app {
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
