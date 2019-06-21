<template>
  <div class="install">
    <Loading class="install-content" :loadFunc="getProjecInfo">
      <a-button v-if="step === 0" class="install-start" type="primary" @click="start">开始安装</a-button>
      <SetpFrom v-else-if="step > 0"/>
    </Loading>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import SetpFrom from "../components/StepForm";
import { install } from "../modules";

export default {
  name: "install",
  components: { Loading, SetpFrom },
  data() {
    return {};
  },
  computed: {
    step() {
      return this.$store.state.install.step;
    }
  },
  methods: {
    start() {
      this.$store.state.install.step = 1;
    },
    getProjecInfo() {
      return install.getProjecInfo();
    }
  }
};
</script>

<style lang="less">
.install {
  width: 100%;
  height: 100%;

  .install-start {
    width: 200px;
    height: 100px;
    top: 200px;
    left: calc(50% - 100px);
  }
}
</style>
