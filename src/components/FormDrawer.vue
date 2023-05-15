<template>
  <div>
    <el-drawer v-model="showDrawer" title="">
      <div class="fromDrawer">
        <div class="body">
          <slot></slot>
        </div>

        <div class="actions">
          <el-button type="primary">submmit</el-button>
          <el-button type="primary">cancel</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showDrawer = ref(false);

const open = () => (showDrawer.value = true);

const close = () => (showDrawer.value = false);

defineExpose({
  open,
  close,
});
</script>
<style>
.fromDrawer {
  width: 100%;
  height: 100%;
  position: relative;
  @apply flex flex-col;
}

.fromDrawer .body {
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-y: auto;
}
.fromDrawer .actions {
  height: 50px;
  @apply mt-auto flex items-center;
}
</style>
