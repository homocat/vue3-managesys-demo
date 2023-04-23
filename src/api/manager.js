import axios from "axios";

const service = axios.create(() => {
  baseURL: "/api";
});

const login = (account, password) => {
  return service.post("/admin/login", {
    account,
    password,
  });
};

export { login };
