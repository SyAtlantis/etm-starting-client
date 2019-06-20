<template>
  <div class="steps">
    <a-steps class="steps-title" :current="current">
      <a-step v-for="item in steps" :key="item.title" :title="item.title"/>
    </a-steps>
    <div class="steps-content">{{steps[current].content}}</div>
    <div class="steps-action">
      <a-button class="action-cancle" v-if="current == 0" type="primary" @click="cancle">取消</a-button>
      <a-button class="action-prev" v-if="current > 0" type="primary" @click="prev">上一步</a-button>
      <a-button
        class="action-next"
        v-if="current < steps.length - 1"
        type="primary"
        @click="next"
      >下一步</a-button>
      <a-button
        class="action-finish"
        v-if="current == steps.length - 1"
        type="primary"
        @click="finish"
      >完成</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "stepform",
  components: {},
  data() {
    return {
      current: 0,
      steps: [
        {
          title: "配置环境",
          content: "First-content"
        },
        {
          title: "安装程序",
          content: "Second-content"
        },
        {
          title: "初始设置",
          content: "Third-content"
        },
        {
          title: "安装完成",
          content: "Last-content"
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

    .action-cancle {
      float: left;
      width: 80px;
    }
    .action-prev {
      float: left;
      width: 80px;
    }
    .action-next {
      float: right;
      width: 80px;
    }
    .action-finish {
      float: right;
      width: 80px;
    }
  }
}
</style>
