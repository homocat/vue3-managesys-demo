import service from "../axios";

const login = (username, password) => {
  return service.post("/admin/login", {
    username,
    password,
  });
};

const getInfo = () => {
  return service.post("/admin/getinfo");
};

const logout = () => {
  return service.post("/admin/logout");
};

export { login, getInfo, logout };
