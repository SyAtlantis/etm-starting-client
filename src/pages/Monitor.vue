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
          <span v-if="item.status == 'error'" slot="description">{{item.errInfo}}</span>
          <template v-else slot="description" v-for="({name, value}, index) in item.actions">
            <span :key="name">{{name}} : {{value}}</span>
            <a-divider :key="index" type="vertical" v-if="index !== item.actions.length-1"/>
          </template>
          <span slot="description"></span>
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
          avatar: require("@/assets/net.png"),
          status: this.$store.state.monitor.netInfo.status,
          errInfo: this.$store.state.monitor.netInfo.errInfo,
          actions: [
            {
              name: "公网IP",
              value: this.$store.state.monitor.netInfo.data.publicIp
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
          avatar: require("@/assets/gpu.png"),
          status: this.$store.state.monitor.gpuInfo.status,
          errInfo: this.$store.state.monitor.gpuInfo.errInfo,
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
          avatar: require("@/assets/proc.png"),
          status: this.$store.state.monitor.procInfo.status,
          errInfo: this.$store.state.monitor.procInfo.errInfo,
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
          avatar: require("@/assets/sync.png"),
          status: this.$store.state.monitor.syncInfo.status,
          errInfo: this.$store.state.monitor.syncInfo.errInfo,
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
          avatar: require("@/assets/block.png"),
          status: this.$store.state.monitor.blockInfo.status,
          errInfo: this.$store.state.monitor.blockInfo.errInfo,
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
    this.getInfo("netInfo");
    this.getInfo("gpuInfo");
    this.getInfo("procInfo");
    this.getInfo("syncInfo");
    this.getInfo("blockInfo");
  },
  methods: {
    reload(name) {
      this.getInfo(name);
    },
    getInfo(name) {
      let func;
      switch (name) {
        case this.listData[0].name:
          func = monitor.getNetInfo;
          break;
        case this.listData[1].name:
          func = monitor.getGpuInfo;
          break;
        case this.listData[2].name:
          func = monitor.getProcInfo;
          break;
        case this.listData[3].name:
          func = monitor.getSyncInfo;
          break;
        case this.listData[4].name:
          func = monitor.getBlockInfo;
          break;
        default:
          break;
      }

      this.$store.state.monitor[name].status = "loading";

      func()
        .then(res => {
          console.log(res.data);
          let { data } = res;
          if (!data || res.status !== 200) {
            throw new Error("Result data or status error!");
          }

          if (data.success) {
            if (data.results) {
              this.$store.state.monitor[name].status = "normal";
              Object.assign(this.$store.state.monitor[name].data, data.results);
            } else {
              throw new Error("Requested data does not match.");
            }
          } else {
            throw new Error(data.message);
          }
        })
        .catch(err => {
          this.$store.state.monitor[name].status = "error";
          this.$store.state.monitor[name].errInfo = `${err}`;
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
