<template>
  <div class="step2">
    <div class="step-content">
      <a-timeline>
        <a-timeline-item :color="status['already'].color">
          <span>Nodejs:</span>
          <Tag type="already"/>
        </a-timeline-item>
        <a-timeline-item :color="status['failure'].color">
          <span>Git:</span>
          <Tag type="failure"/>
        </a-timeline-item>
        <a-timeline-item :color="status['running'].color">
          <span>PM2:</span>
          <Tag type="running"/>
          <p>Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </a-timeline-item>
        <a-timeline-item>
          <span>EnTanMo:</span>
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
import Tag from "./Tag";
export default {
  name: "step2",
  components: { Tag },
  data() {
    return {
      status: {
        //安装成功
        success: {
          color: "green"
        },
        //安装失败
        failure: {
          color: "red"
        },
        //安装中
        running: {
          color: "#f7c443"
        },
        //已安装
        already: {
          color: "blue"
        }
      }
    };
  },
  computed: {
    prevDisabled() {
      if (this.$store.state.install.step !== 2) {
        return true;
      }

      return false;
    },
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
      this.$store.state.install.step = 1;
    },
    next() {
      this.$store.state.install.step = 3;
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
