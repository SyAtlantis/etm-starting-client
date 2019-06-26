import Server from "./server";

let server = new Server();

class Setting {

    static async setVulue(data) {
        return await server.put("/setting/setVulue", data);
    }

    // static async setPublicIp(data) {
    //     return await server.put("/setting/setPublicTp", data);
    // }

    // static async setPort(data) {
    //     return await server.put("/setting/setPort", data);
    // }

    // static async setSecret(data) {
    //     return await server.put("/setting/setSecret", data);
    // }

}

export default Setting;