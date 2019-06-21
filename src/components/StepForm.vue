<template>
  <div class="steps">
    <a-steps class="steps-title" :current="step-1">
      <a-step v-for="item in steps" :key="item.key" :title="item.title"/>
    </a-steps>
    <div class="steps-content">
      <!-- {{steps[current].content}} -->
      <Step1 v-show="step == 1"/>
      <Step2 v-show="step == 2"/>
      <Step3 v-show="step == 3"/>
      <Step4 v-show="step == 4"/>
    </div>
    <!-- <div class="steps-action">
      <a-button class="action left" v-if="current == 0" @click="cancle">取消</a-button>
      <a-button class="action left" v-if="current > 0" @click="prev" :disabled="prevDisabled">上一步</a-button>
      <a-button
        class="action right"
        v-if="current < steps.length-1"
        @click="next"
        :disabled="nextDisabled"
      >下一步</a-button>
      <a-button class="action right" v-if="current == steps.length-1" @click="finish">完成</a-button>
    </div>-->
  </div>
</template>

<script>
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default {
  name: "stepform",
  components: { Step1, Step2, Step3, Step4 },
  data() {
    return {
      steps: [
        {
          key: 1,
          title: "配置环境"
        },
        {
          key: 2,
          title: "安装程序"
        },
        {
          key: 3,
          title: "初始设置"
        },
        {
          key: 4,
          title: "安装完成"
        }
      ]
    };
  },
  computed: {
    step() {
      return this.$store.state.install.step;
    },
    nextDisabled() {
      return this.$store.state.install.nextDisabled;
    },
    prevDisabled() {
      return this.$store.state.install.prevDisabled;
    }
  },
  methods: {
    next() {
      this.current++;
      this.$store.state.install.step++;
      this.$store.state.install.nextDisabled = true;
    },
    prev() {
      this.current--;
      this.$store.state.install.step--;
    },
    cancle() {
      this.$store.state.install.step = 0;
    },
    finish() {}
  }
};
</script>

<style lang="less">
.steps {
  width: 100%;
  height: 100%;

  .steps-title {
    height: 60px;
    padding: 10px;
  }

  .steps-content {
    height: 480px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    // text-align: center;
    padding: 20px;
  }

  .steps-action {
    height: 60px;
    padding-top: 24px;

    .action {
      width: 80px;
    }

    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
}
</style>
