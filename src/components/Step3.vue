<template>
  <div class="step3">
    <div class="step-content">
      <SettingContent :isRequred="true"/>
    </div>
    <div class="step-footer">
      <a-button class="footer-btn" type="primary" @click="prev" :disabled="prevDisabled">上一步</a-button>
      <a-button class="footer-btn" type="primary" @click="next" :disabled="nextDisabled">下一步</a-button>
    </div>
  </div>
</template>

<script>
import SettingContent from "../components/SettingContent";

export default {
  name: "step3",
  components: { SettingContent },
  data() {
    return {
      form: this.$form.createForm(this),
      prevDisabled: false
    };
  },
  computed: {
    port() {
      return this.$store.state.setting.port;
    },
    secret() {
      return this.$store.state.setting.secret;
    },
    nextDisabled() {
      if (this.$store.state.install.step !== 3) {
        return true;
      }
      if (!this.port || !this.secret) {
        return true;
      }

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
.step3 {
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
