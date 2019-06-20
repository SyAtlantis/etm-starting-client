<template>
  <div class="steps">
    <a-steps class="steps-title" :current="current">
      <a-step v-for="item in steps" :key="item.key" :title="item.title"/>
    </a-steps>
    <div class="steps-content">
      <!-- {{steps[current].content}} -->
      <Step1 v-show="current == 0"/>
      <Step2 v-show="current == 1"/>
      <Step3 v-show="current == 2"/>
      <Step4 v-show="current == 3"/>
    </div>
    <div class="steps-action">
      <a-button class="action l" v-if="current == 0" @click="cancle">取消</a-button>
      <a-button class="action l" v-if="current > 0" @click="prev">上一步</a-button>
      <a-button class="action r" v-if="current < steps.length-1" @click="next">下一步</a-button>
      <a-button class="action r" v-if="current == steps.length-1" @click="finish">完成</a-button>
    </div>
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
      current: 0,
      steps: [
        {
          key: 1,
          title: "配置环境",
          content: () => import("./Step1")
        },
        {
          key: 2,
          title: "安装程序",
          content: <Step1 />
        },
        {
          key: 3,
          title: "初始设置",
          content: "cccc"
        },
        {
          key: 4,
          title: "安装完成",
          content: "ddd"
        }
      ]
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    cancle() {},
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
    height: calc(~"100% - 130px");
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    text-align: center;
    padding: 20px;
  }

  .steps-action {
    height: 60px;
    padding-top: 24px;

    .action {
      width: 80px;
    }

    .l {
      float: left;
    }
    .r {
      float: right;
    }
  }
}
</style>
