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
          <Tag2 class="title-tag" :type="item.status" slot="title"/>
          <a-avatar slot="avatar" :size="48" shape="square" :src="item.avatar"/>
          <span v-if="item.status == 'error'" slot="description">{{item.message}}</span>
          <template v-else slot="description" v-for="({name, value}, index) in item.actions">
            <span :key="name">{{name}} : {{value}}</span>
            <a-divider :key="index" type="vertical" v-if="index !== item.actions.length-1"/>
          </template>
          <span slot="description"></span>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import Tag2 from "../components/Tag2";

import { monitor } from "../modules";

export default {
  name: "monitor",
  components: { Tag2 },
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
          message: this.$store.state.monitor.netInfo.message,
          actions: [
            {
              name: "公网IP",
              value: this.$store.state.monitor.netInfo.data.publicIp
            },
            {
              name: "端口",
              value: this.$store.state.setting.port
            }
          ]
        },
        {
          title: "显卡状态",
          name: "gpuInfo",
          avatar: require("@/assets/gpu.png"),
          status: this.$store.state.monitor.gpuInfo.status,
          message: this.$store.state.monitor.gpuInfo.message,
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
          message: this.$store.state.monitor.procInfo.message,
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
          message: this.$store.state.monitor.syncInfo.message,
          actions: [
            {
              name: "是否在同步",
              value: this.$store.state.monitor.syncInfo.data.syncing
            },
            {
              name: "正在同步区块数量",
              value: this.$store.state.monitor.syncInfo.data.blocks
            },
            {
              name: "区块高度",
              value: this.$store.state.monitor.syncInfo.data.height
            }
          ]
        },
        {
          title: "出块情况",
          name: "blockInfo",
          avatar: require("@/assets/block.png"),
          status: this.$store.state.monitor.blockInfo.status,
          message: this.$store.state.monitor.blockInfo.message,
          actions: [
            {
              name: "成功块数",
              value: this.$store.state.monitor.blockInfo.data.producedblocks
            },
            {
              name: "失败块数",
              value: this.$store.state.monitor.blockInfo.data.missedblocks
            },
            {
              name: "出块率",
              value: this.$store.state.monitor.blockInfo.data.productivity
            },
            {
              name: "总奖励",
              value: this.$store.state.monitor.blockInfo.data.rewards
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
      const funcs = {
        netInfo: monitor.getNetInfo,
        gpuInfo: monitor.getGpuInfo,
        procInfo: monitor.getProcInfo,
        syncInfo: monitor.getSyncInfo,
        blockInfo: monitor.getBlockInfo
      };
      let func = funcs[name];

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
          this.$store.state.monitor[name].message = `${err}`;
        });
    }
  }
};
</script>

<style lang="less">
.monitor {
  height: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;

  .title-reload {
    margin-left: 20px;
  }

  .title-tag {
    float: right;
  }
}
</style>
