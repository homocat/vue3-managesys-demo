import axios from "axios";

const service = axios.create(() => {
  baseURL: "http://127.0.0.1:8000";
});

service.defaults.headers.common["Content-Type"] = "application/json";

const login = (usename, password) => {
  return service.post("/admin/login", {
    usename,
    password,
  });
};

export { login };
