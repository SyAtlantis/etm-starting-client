<template>
  <div class="monitor">
    <a-list :dataSource="listData" itemLayout="vertical">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <a slot="title">{{item.title}}</a>
          <a-avatar slot="avatar" :src="item.avatar"/>
        </a-list-item-meta>
        <template slot="actions" v-for="{name, value} in item.actions">
          <span :key="name">{{name}} : {{value}}</span>
        </template>
        <a-tag slot="extra" class="icon" :color="status[item.type].color">{{status[item.type].name}}</a-tag>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: "monitor",
  components: {},
  data() {
    return {
      listData: [
        {
          title: "网络连接",
          type: "error",
          avatar: "@/assets/net.png",
          actions: [
            {
              name: "公网IP",
              value: "127.0.0.1"
            },
            {
              name: "端口",
              value: "4096"
            }
          ]
        },
        {
          title: "显卡状态",
          type: "loading",
          avatar: "../assets/gpu.png",
          actions: [
            {
              name: "型号",
              value: "aaaaa"
            },
            {
              name: "支持挖矿",
              value: "是"
            }
          ]
        },
        {
          title: "进程状态",
          type: "search",
          avatar: "../assets/proc.png",
          actions: [
            {
              name: "进程目录",
              value: "aa"
            },
            {
              name: "版本",
              value: "bb"
            }
          ]
        },
        {
          title: "同步情况",
          type: "error",
          avatar: "../assets/sync.png",
          actions: [
            {
              name: "最新高度",
              value: "12345"
            },
            {
              name: "我的高度",
              value: "12000"
            },
            {
              name: "当前奖励",
              value: "6ETM"
            }
          ]
        },
        {
          title: "出块情况",
          type: "normal",
          avatar: "../assets/block.png",
          actions: [
            {
              name: "上一个成功出块时间",
              value: "2019.06.11 11:11"
            },
            {
              name: "成功高度",
              value: "123"
            },
            {
              name: "上一个失败出块时间",
              value: "2019.06.11 11:11"
            },
            {
              name: "失败高度",
              value: "456"
            }
          ]
        }
      ],
      status: {
        normal: {
          name: "正常",
          color: "#74bd4f"
        },
        error: {
          name: "错误",
          color: "#e56255"
        },
        loading: {
          name: "加载中",
          color: "#f7c443"
        },
        search: {
          name: "查询中",
          color: "#3f91f7"
        }
      },
      busy: false
    };
  },
  methods: {}
};
</script>

<style lang="less">
.monitor {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 100%;

  .icon {
    width: 60px;
    text-align: center;
  }
}
</style>
