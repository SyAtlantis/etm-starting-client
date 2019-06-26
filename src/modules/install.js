import Server from "./server";

let server = new Server();

class Install {

  static async getEntanmoInfo(data) {
    return await server.get("/install/getEntanmoInfo", data);
  }

  static async getNodejsInfo(data) {
    return await server.get("/install/getNodejsInfo", data);
  }

  static async getPm2Info(data) {
    return await server.get("/install/getPm2Info", data);
  }

  static async installEntanmo(data) {
    return await server.put("/install/installEntanmo", data);
  }

  static async installNodejs(data) {
    return await server.put("/install/installNodejs", data);
  }

  static async installPm2(data) {
    return await server.put("/install/installPm2", data);
  }

}

export default Install;