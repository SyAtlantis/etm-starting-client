import Axios from "axios";

class Server {
  constructor() {
    this.$ajax = Axios.create({
      baseURL: 'http://localhost:7788',
      timeout: "6000",
      headers: {
        "X-Custom-Header": "foobar"
      }
    });
  }

  async get(uri, data) {
    return await this.$ajax.get(uri, { params: data });
  }

  async post(uri, data) {
    return await this.$ajax.post(uri, { params: data });
  }

  async put(uri, data) {
    return await this.$ajax.put(uri, { params: data });
  }
}

export default Server;