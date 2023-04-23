import axios from "axios";

const service = axios.create(() => {
  baseURL: "/api";
});

const login = (usename, password) => {
  return service.post("/admin/login", {
    usename,
    password,
  });
};

export { login };
