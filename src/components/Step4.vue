<template>
  <div class="step4">
    <div class="step-content"></div>
    <div class="step-footer">
      <a-button class="footer-btn" type="primary" @click="prev" :disabled="prevDisabled">上一步</a-button>
      <a-button class="footer-btn" type="primary" @click="finish" :disabled="finishDisabled">完成</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "step4",
  components: {},
  data() {
    return {
      prevDisabled: false,
      finishDisabled: false
    };
  },
  methods: {
    prev() {
      this.$store.state.install.step = 3;
    },
    finish() {}
  }
};
</script>

<style lang="less">
.step4 {
  width: 100%;
  height: 100%;

  .step-content {
    height: calc(100% - 32px);
  }

  .step-footer {
    height: 32px;
    display: flex;
    justify-content: space-between;

    .footer-btn {
      width: 80px;
      height: 32px;
    }
  }
}
</style>
