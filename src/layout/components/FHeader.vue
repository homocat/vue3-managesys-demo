<template>
  <div class="f-header">
    <span class="logo">
      <el-icon class="mr-1"><eleme-filled /></el-icon>
      Ereflect
    </span>
    <el-icon class="icon-btn"><fold /></el-icon>
    <el-icon class="icon-btn"><refresh /></el-icon>
    <div class="ml-auto flex items-center">
      <el-icon class="icon-btn"><FullScreen /></el-icon>
      <el-dropdown class="dropdown">
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
            <el-dropdown-item>退出登录</el-dropdown-item>
            <el-dropdown-item>休改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
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
