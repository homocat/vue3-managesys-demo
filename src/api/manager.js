import axios from "axios";

const service = axios.create(() => {
  baseURL: "/api";
});

service.defaults.headers.common["Content-Type"] = "application/json";

const login = (usename, password) => {
  return service.post("/admin/login", {
    usename,
    password,
  });
};

export { login };
