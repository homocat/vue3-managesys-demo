import axios from "axios";

const service = axios.create({
  baseURL: "/api",
});

const login = (username, password) => {
  return service.post("/admin/login", {
    username,
    password,
  });
};

export { login };
