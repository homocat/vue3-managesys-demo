import service from "../axios";

const login = (username, password) => {
  return service.post("/admin/login", {
    username,
    password,
  });
};
export { login };
