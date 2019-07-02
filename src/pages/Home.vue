<template>
  <div class="home">
    <Layout>
      <a-icon slot="head-left" v-if="step == 0" type="schedule" @click="toMonitor" />
      <a-icon slot="head-left" v-else type="arrow-left" @click="toBack" />
      <a-icon slot="head-right" v-show="step == 0" type="setting" @click="toSetting" />
      <div slot="head-center"></div>
      <div slot="body">
        <Control v-show="step===0" />
        <Monitor v-show="step===1" />
        <Setting v-show="step===2" />
      </div>
      <div slot="foot">©2019 En-Tan-Mo. All Rights Reserved.</div>
    </Layout>
  </div>
</template>

<script>
import Layout from "../components/Layout";
import Monitor from "./Monitor";
import Control from "./Control";
import Setting from "./Setting";

export default {
  name: "home",
  components: {
    Layout,
    Monitor,
    Control,
    Setting
  },
  data() {
    return {};
  },
  computed: {
    step() {
      return this.$store.state.install.step;
    }
  },
  methods: {
    toMonitor() {
      this.$store.state.install.step = 1;
    },
    toSetting() {
      this.$store.state.install.step = 2;
    },
    toBack() {
      this.$store.state.install.step = 0;
    }
  }
};
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
}
</style>
