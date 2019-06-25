import Server from "./server";

let server = new Server();

class Install {

  static async getProjecInfo() {
    let res = {};

    await new Promise((resolve, reject) => {
      void (reject);
      setTimeout(() => {
        res = {
          isInstalled: false,
          path: "bbb",
          version: "2.2.2"
        };
        resolve(res);
      }, 2000);
    });

    return res;
  }

  static async getNodejsInfo(data) {
    return await server.get("/install/getNodejsInfo", data);
  }

  static async getGitInfo(data) {
    return await server.get("/install/getGitInfo", data);
  }

  static async getPm2Info(data) {
    return await server.get("/install/getPm2Info", data);
  }

  static async setNodejsPath(data) {
    void (data);
  }

  static async setPm2Path(data) {
    void (data);
  }

  static async installNodejs(data) {
    void (data);
  }

  static async installGit(data) {
    void (data);
  }

  static async installPm2(data) {
    void (data);
  }

}

export default Install;