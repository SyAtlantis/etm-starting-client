<template>
  <div class="setting">
    <div class="setting-content">
      <SettingContent :isRequred="false"/>
    </div>
    <div class="setting-button">
      <a-button type="primary">保存</a-button>
      <a-button type="primary">取消</a-button>
    </div>
  </div>
</template>

<script>
import SettingContent from "../components/SettingContent";

export default {
  name: "setting",
  components: {SettingContent},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.setting {
  height: 100%;

  .setting-content {
    padding-top: 20px;
  }

  .setting-button {
    padding: 20px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
