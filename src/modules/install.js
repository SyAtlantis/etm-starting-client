
class Install {

  static async getProjecInfo() {
    let res = {
      isInstalled: true,
      path: "aaa",
    }

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

  static async getNodejsInfo() {
    let res = {
      isInstalled: true,
      path: "",
      version: "1.0.1"
    }

    await new Promise((resolve, reject) => {
      void (reject);
      setTimeout(() => {
        res = {
          isInstalled: true,
          path: "",
          version: "1.0.1"
        };
        resolve(res);
      }, 2000);
    });

    return res;
  }

  static async getGitInfo() {
    let res = {
      isInstalled: true,
      path: "",
      version: "1.0.1"
    }

    await new Promise((resolve, reject) => {
      void (reject);
      setTimeout(() => {
        res = {
          isInstalled: true,
          path: "",
          version: "1.0.1"
        };
        resolve(res);
      }, 2000);
    });

    return res;
  }

  static async getPm2Info() {
    let res = {
      isInstalled: true,
      path: "",
      version: "1.0.1"
    }

    await new Promise((resolve, reject) => {
      void (reject);
      setTimeout(() => {
        res = {
          isInstalled: false,
          path: "",
          version: "1.0.1"
        };
        resolve(res);
      }, 2000);
    });

    return res;
  }

  static async setNodejsPath(path) {
    void (path);
  }

  static async setPm2Path(path) {
    void (path);
  }

  static async installNodejs() {

  }

  static async installGit() {

  }

  static async installPm2() {

  }


}

export default Install;