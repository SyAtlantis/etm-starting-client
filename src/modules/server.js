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
    return new Promise((resolve, reject) => {
      this.$ajax
        .get(uri, {
          params: data
        })
        .then(res => {
          return resolve(res.data);
        })
        .catch(res => {
          return reject(res.data);
        });
    });
  }

  async post(uri, data) {
    return new Promise((resolve, reject) => {
      this.$ajax
        .post(uri, data)
        .then(res => {
          return resolve(res.data);
        })
        .catch(res => {
          return reject(res.data);
        });
    });
  }

  async put(uri, data) {
    return new Promise((resolve, reject) => {
      this.$ajax
        .put(uri, data)
        .then(res => {
          return resolve(res.data);
        })
        .catch(res => {
          return reject(res.data);
        });
    });
  }
}

export default Server;