<template>
  <div class="step2">
    <div class="step-content">
      <a-timeline>
        <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
        <a-timeline-item color="red">
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </a-timeline-item>
        <a-timeline-item>
          <p>Technical testing 1</p>
          <p>Technical testing 2</p>
          <p>Technical testing 3 2015-09-01</p>
        </a-timeline-item>
      </a-timeline>
    </div>
    <div class="step-footer">
      <a-button class="footer-btn" type="primary" @click="prev" :disabled="prevDisabled">上一步</a-button>
      <a-button class="footer-btn" type="primary" @click="next" :disabled="nextDisabled">下一步</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "step2",
  components: {},
  data() {
    return {
      prevDisabled: false
      // nextDisabled: false
    };
  },
  computed: {
    nextDisabled() {
      if (this.$store.state.install.step !== 2) {
        return true;
      }
      // if (!this.nodejsInfo.isInstalled || !this.gitInfo.isInstalled) {
      //   return true;
      // }

      return false;
    }
  },
  methods: {
    prev() {
      this.$store.state.install.step--;
    },
    next() {
      this.$store.state.install.step++;
    }
  }
};
</script>

<style lang="less">
.step2 {
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
