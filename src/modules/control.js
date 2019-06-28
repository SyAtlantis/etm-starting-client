import Server from "./server";

let server = new Server();

class Control {

    static async isStarted(data) {
        return await server.get("/control/isStarted", data);
    }

    static async start(data) {
        return await server.put("/control/start", data);
    }

    static async stop(data) {
        return await server.put("/control/stop", data);
    }

    static async pause(data) {
        return await server.put("/control/pause", data);
    }

    static async boot(data) {
        return await server.put("/control/boot", data);
    }

    static async unboot(data) {
        return await server.put("/control/unboot", data);
    }

}

export default Control;