import { createStore } from "vuex";
import { getInfo } from "../api/manager";
import { removeToken } from "../composables/auth";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      // 用户信息
      user: {},
    };
  },
  mutations: {
    SET_USERINFO(state, user) {
      state.user = user;
    },
  },
  actions: {
    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then((res) => {
            commit("SET_USERINFO", res);
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
    logout({ commit }) {
      // 清除cookie
      removeToken();
      // 清除vuex用户状态
      commit("SET_USERINFO", {});
    },
  },
});

export default store;
