import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5005/api",
  headers: { "X-Custom-Header": "foobar" }
});

const api = {
  listings: {
    getListingsDetails: async () => {
      const response = await instance.get("apartments");
      return response.data;
    }
  }
};

export default api;
