<template>
  <div class="install">
    <a-button v-if="step === 0" class="install-start" type="primary" @click="start">开始安装</a-button>
    <SetpFrom v-else-if="step > 0"/>
  </div>
</template>

<script>
import SetpFrom from "../components/StepForm";

export default {
  name: "install",
  components: { SetpFrom },
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
    }
  }
};
</script>

<style lang="less">
@button-w: 200px;
@button-h: 100px;

.install {
  width: 100%;
  height: 100%;

  .install-start {
    width: @button-w;
    height: @button-h;
    top: 200px;
    left: calc(50% - @button-w / 2);
  }
}
</style>
