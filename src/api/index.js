import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5055",
});

const postItem = (item) => instance.post("/item", item);
const getItems = () => instance.get("/item");

const api = {
  postItem,
  getItems,
};

export default api;
