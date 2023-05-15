<script setup>
import { messagebox, toast } from "~/composables/utils.js";
import { logout } from "~/api/manager";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useFullscreen } from "@vueuse/core";
import { ref } from "vue";
import FormDrawer from "../../components/FormDrawer.vue";

const { isFullscreen, toggle } = useFullscreen();

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

const formDrawerRef = ref(null);
const handleCommand = (c) => {
  switch (c) {
    case "logout":
      handleLogout();
      break;

    case "rePassword":
      formDrawerRef.value.open();
      break;
  }
};

const handleRefresh = () => location.reload();
</script>
<template>
  <div class="f-header">
    <span class="logo">
      <el-icon class="mr-1"><eleme-filled /></el-icon>
      Ereflect
    </span>

    <el-icon class="icon-btn"><fold /></el-icon>
    <el-tooltip class="box-item" content="刷新" placement="bottom">
      <el-icon class="icon-btn" @click="handleRefresh"><refresh /></el-icon>
    </el-tooltip>

    <div class="ml-auto flex items-center">
      <el-tooltip class="box-item" content="全屏" placement="bottom">
        <el-icon class="icon-btn" @class="toggle">
          <FullScreen v-if="!isFullscreen" />
          <Aim v-else />
        </el-icon>
      </el-tooltip>
      <el-dropdown @command="handleCommand" rigger="click" class="dropdown">
        <span class="flex items-center justify-center text-light-50">
          <el-avatar
            class="mr-2"
            :size="25"
            :src="$store.state.user.data.avatar"
          />
          {{ $store.state.user.data.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rePassword">休改密码</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

  <FormDrawer ref="formDrawerRef">
    12
    <div class="bg-rose-400" style="height: 1000px"></div>
  </FormDrawer>
</template>

<style>
.f-header {
  @apply flex items-center bg-green-700 text-light-50 fixed top-0 right-0 left-0;
  height: 64px;
}

.logo {
  width: 250px;
  @apply flex justify-center items-center text-xl font-thin;
}

.icon-btn {
  @apply flex justify-center items-center;
  height: 64px;
  width: 42px;
  cursor: pointer;
}

.icon-btn:hover {
  @apply bg-green-600;
}

.f-header .dropdown {
  height: 64px;
  cursor: pointer @apply flex items-center justify-center;
}
</style>
