<template>
  <h1>HomePage</h1>
  <el-button @click="handleLogout">log out</el-button>
</template>

<script setup>
import { messagebox, toast } from "../composables/utils.js";
import { logout } from "../api/manager";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

function handleLogout() {
  messagebox("log out", "warning", "confirm")
    .then((res) => {
      logout().finally(() => {
        store.dispatch("logout");
        // 跳转回登录页
        router.push("/login");
        toast("logout");
      });
    })
    .catch((err) => {
      console.log("failed log out");
    });
}
</script>

<style></style>
