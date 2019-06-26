import Server from "./server";

let server = new Server();

class Control {

    static async start(data) {
        return await server.put("/control/start", data);
    }

    static async stop(data) {
        return await server.put("/control/stop", data);
    }

    static async pause(data) {
        return await server.put("/control/pause", data);
    }

}

export default Control;