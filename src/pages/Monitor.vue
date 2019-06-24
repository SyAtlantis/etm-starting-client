<template>
  <div class="monitor">
    <a-list :dataSource="listData" itemLayout="vertical">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <a slot="title">{{item.title}}</a>
          <a-button
            class="title-reload"
            slot="title"
            icon="sync"
            size="small"
            shape="circle"
            @click="reload(item.name)"
          />
          <a-avatar slot="avatar" :size="48" shape="square" :src="item.avatar"/>
          <template slot="description" v-for="({name, value}, index) in item.actions">
            <span :key="name">{{name}} : {{value}}</span>
            <a-divider :key="index" type="vertical" v-if="index !== item.actions.length-1"/>
          </template>
        </a-list-item-meta>
        <Tag :type="item.status" slot="extra"/>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import Tag from "../components/Tag";

import { monitor } from "../modules";

export default {
  name: "monitor",
  components: { Tag },
  data() {
    return {
      // listData: [
      //   {
      //     title: "网络连接",
      //     status: this.$store.state.monitor.netInfo.status,
      //     avatar: require("@/assets/net.png"),
      //     actions: [
      //       {
      //         name: "公网IP",
      //         value: "127.0.0.1"
      //       },
      //       {
      //         name: "端口",
      //         value: "4096"
      //       }
      //     ]
      //   },
      //   {
      //     title: "显卡状态",
      //     status: "loading",
      //     avatar: require("@/assets/gpu.png"),
      //     actions: [
      //       {
      //         name: "型号",
      //         value: "aaaaa"
      //       },
      //       {
      //         name: "支持挖矿",
      //         value: "是"
      //       }
      //     ]
      //   },
      //   {
      //     title: "进程状态",
      //     status: "search",
      //     avatar: require("@/assets/proc.png"),
      //     actions: [
      //       {
      //         name: "进程目录",
      //         value: "aa"
      //       },
      //       {
      //         name: "版本",
      //         value: "bb"
      //       }
      //     ]
      //   },
      //   {
      //     title: "同步情况",
      //     status: "error",
      //     avatar: require("@/assets/sync.png"),
      //     actions: [
      //       {
      //         name: "最新高度",
      //         value: "12345"
      //       },
      //       {
      //         name: "我的高度",
      //         value: "12000"
      //       },
      //       {
      //         name: "当前奖励",
      //         value: "6ETM"
      //       }
      //     ]
      //   },
      //   {
      //     title: "出块情况",
      //     status: "normal",
      //     avatar: require("@/assets/block.png"),
      //     actions: [
      //       {
      //         name: "上一个成功出块时间",
      //         value: "2019.06.11 11:11"
      //       },
      //       {
      //         name: "成功高度",
      //         value: "123"
      //       },
      //       {
      //         name: "上一个失败出块时间",
      //         value: "2019.06.11 11:11"
      //       },
      //       {
      //         name: "失败高度",
      //         value: "456"
      //       }
      //     ]
      //   }
      // ]
      // status: {
      //   normal: {
      //     name: "正常",
      //     color: "#74bd4f"
      //   },
      //   error: {
      //     name: "错误",
      //     color: "#e56255"
      //   },
      //   loading: {
      //     name: "加载中",
      //     color: "#f7c443"
      //   },
      //   search: {
      //     name: "查询中",
      //     color: "#3f91f7"
      //   }
      // },
      // busy: false
    };
  },
  computed: {
    listData() {
      return [
        {
          title: "网络连接",
          name: "netInfo",
          status: this.$store.state.monitor.netInfo.status,
          avatar: require("@/assets/net.png"),
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
          name: "gpuInfo",
          status: this.$store.state.monitor.gpuInfo.status,
          avatar: require("@/assets/gpu.png"),
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
          name: "procInfo",
          status: this.$store.state.monitor.procInfo.status,
          avatar: require("@/assets/proc.png"),
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
          name: "syncInfo",
          status: this.$store.state.monitor.syncInfo.status,
          avatar: require("@/assets/sync.png"),
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
          name: "blockInfo",
          status: this.$store.state.monitor.blockInfo.status,
          avatar: require("@/assets/block.png"),
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
      ];
    }
  },
  mounted() {
    this.getNetInfo();
    this.getGpuInfo();
    this.getProcInfo();
    this.getSyncInfo();
    this.getBlockInfo();
  },
  methods: {
    reload(name) {
      console.log(name);
      switch (name) {
        case this.listData[0].name:
          this.getNetInfo();
          break;
        case this.listData[1].name:
          this.getGpuInfo();
          break;
        case this.listData[2].name:
          this.getProcInfo();
          break;
        case this.listData[3].name:
          this.getSyncInfo();
          break;
        case this.listData[4].name:
          this.getBlockInfo();
          break;
        default:
          break;
      }
    },
    getNetInfo() {
      this.$store.state.monitor.netInfo.status = "loading";
      monitor
        .getNetInfo()
        .then(res => {
          this.$store.state.monitor.netInfo.status = "normal";
          console.log(res, this.$store.state.monitor.netInfo.status);
        })
        .catch(err => {
          console.log(err);
          this.$store.state.monitor.netInfo.status = "error";
        });
    },
    getGpuInfo() {
      this.$store.state.monitor.gpuInfo.status = "loading";
      monitor
        .getGpuInfo()
        .then(res => {
          this.$store.state.monitor.gpuInfo.status = "normal";
          console.log(res, this.$store.state.monitor.gpuInfo.status);
        })
        .catch(err => {
          console.log(err);
          this.$store.state.monitor.gpuInfo.status = "error";
        });
    },
    getProcInfo() {
      this.$store.state.monitor.procInfo.status = "loading";
      monitor
        .getProcInfo()
        .then(res => {
          this.$store.state.monitor.procInfo.status = "error";
          console.log(res, this.$store.state.monitor.procInfo.status);
        })
        .catch(err => {
          console.log(err);
          this.$store.state.monitor.procInfo.status = "error";
        });
    },
    getSyncInfo() {
      this.$store.state.monitor.syncInfo.status = "loading";
      monitor
        .getSyncInfo()
        .then(res => {
          this.$store.state.monitor.syncInfo.status = "normal";
          console.log(res, this.$store.state.monitor.syncInfo.status);
        })
        .catch(err => {
          console.log(err);
          this.$store.state.monitor.syncInfo.status = "error";
        });
    },
    getBlockInfo() {
      this.$store.state.monitor.blockInfo.status = "loading";
      monitor
        .getBlockInfo()
        .then(res => {
          this.$store.state.monitor.blockInfo.status = "error";
          console.log(res, this.$store.state.monitor.blockInfo.status);
        })
        .catch(err => {
          console.log(err);
          this.$store.state.monitor.blockInfo.status = "error";
        });
    }
  }
};
</script>

<style lang="less">
.monitor {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 100%;

  .title-reload {
    margin-left: 20px;
  }
}
</style>
