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

export { login, getInfo };
