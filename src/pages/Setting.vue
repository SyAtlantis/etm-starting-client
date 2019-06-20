<template>
  <div class="setting">
    <div class="setting-port">
      <div class="input-name">端口号：</div>
      <a-input class="input-box" defaultValue="4096"/>
    </div>
    <div class="setting-secret">
      <div class="input-name">secret：</div>
      <a-input class="input-box" placeholder="请输入矿工secret"/>
    </div>
    <div class="setting-button">
      <a-button type="primary">保存</a-button>
      <a-button type="primary">取消</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "setting",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.setting {
  height: 100%;

  .setting-port {
    padding: 50px 50px 20px 50px;
    display: flex;
    justify-content: space-between;
  }

  .setting-secret {
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
  }

  .setting-button {
    padding: 20px 50px;
    display: flex;
    justify-content: space-around;
  }

  .input-name {
    width: 80px;
    height: 32px;
    line-height: 32px;
  }

  // .input-box {

  // }
}
</style>
