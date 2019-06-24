import Server from "./server";

let server = new Server();

class Monitor {

  static async getNetInfo(data) {
    return await server.get("/monitor/getNetInfo", data);
  }

  static async getGpuInfo(data) {
    let res;
    await new Promise((resolve, reject) => {
      void (reject);
      setTimeout(() => {
        res = server.get("/monitor/getGpuInfo", data);
        resolve(res);
      }, 2000);
    });

    return res;
  }

  static async getProcInfo(data) {
    let res;
    await new Promise((resolve, reject) => {
      void (reject);
      setTimeout(() => {
        res = server.get("/monitor/getProcInfo", data);
        resolve(res);
      }, 2000);
    });

    return res;
  }

  static async getSyncInfo(data) {
    let res;
    await new Promise((resolve, reject) => {
      void (reject);
      setTimeout(() => {
        res = server.get("/monitor/getSyncInfo", data);
        resolve(res);
      }, 2000);
    });

    return res;
  }

  static async getBlockInfo(data) {
    let res;
    await new Promise((resolve, reject) => {
      void (reject);
      setTimeout(() => {
        res = server.get("/monitor/getBlockInfo", data);
        resolve(res);
      }, 2000);
    });

    return res;
  }
}

export default Monitor;