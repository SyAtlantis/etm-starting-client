import Server from "./server";

let server = new Server();

class Install {

  static async getEntanmoInfo(data) {
    return await server.get("/depend/getEtmInfo", data);
  }

  static async getNodejsInfo(data) {
    return await server.get("/depend/getNodeInfo", data);
  }

  static async getPm2Info(data) {
    return await server.get("/depend/getPm2Info", data);
  }

  static async installEntanmo(data) {
    return await server.put("/depend/installEtm", data);
  }

  static async installNodejs(data) {
    return await server.put("/depend/installNode", data);
  }

  static async installPm2(data) {
    return await server.put("/depend/installPm2", data);
  }

  static async uninstallEntanmo(data) {
    return await server.put("/depend/uninstallEtm", data);
  }

  static async uninstallNodejs(data) {
    return await server.put("/depend/uninstallNode", data);
  }

  static async uninstallPm2(data) {
    return await server.put("/depend/uninstallPm2", data);
  }

}

export default Install;