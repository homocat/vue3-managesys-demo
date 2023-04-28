<script lang="ts" setup>
import { ref, reactive } from "vue";
import { View, User, Lock } from "@element-plus/icons-vue";
import { login, getInfo } from "../api/manager";
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";
import { setCookie } from "../composables/auth";

// do not use same name with ref
const form = reactive({
  account: "",
  password: "",
});

const rule = {
  account: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      min: 1,
      max: 12,
      message: "Length should be 1 to 12",
      trigger: "change",
    },
  ],
};

const formRef = ref();
const router = useRouter();

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (!valid) return false;

    login(form.account, form.password).then((res) => {
      ElNotification({
        title: "Success",
        message: "login success",
        type: "success",
      });

      setCookie(res["token"]);

      getInfo().then();

      router.push("/");
    });

    return false;
  });
};
</script>
<template>
  <el-row class="min-h-screen">
    <el-col
      :lg="18"
      :md="12"
      class="flex items-center justify-center text-light-500 bg-emerald-400"
    >
      <div>
        <h1 class="font-bold text-3xl mb-4">Welcome</h1>
        <div class="text-3xl text-gray-300 text-sm">This is Awesome</div>
      </div>
    </el-col>

    <el-col :lg="6" :md="12" class="flex items-center justify-center flex-col">
      <h2 class="text-blue-400 font-bold text-2xl mb-3">Login</h2>
      <div
        class="flex items-center text-sm text-gray-300 my-5 justify-center space-x-2"
      >
        <span class="h-[1px] w-16 bg-gray-300"></span>
        <span>account password login</span>
        <span class="h-[1px] w-16 bg-gray-300"></span>
      </div>

      <el-form ref="formRef" :rules="rule" :model="form" class="w-[250]">
        <el-form-item prop="account">
          <el-input v-model="form.account" placeholder="account">
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            type="password"
            show-password
            v-model="form.password"
            placeholder="passwd"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            round
            color="#66ccff"
            class="w-[250px] transition-all"
            type="primary"
            @click="onSubmit"
            >login</el-button
          >
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style></style>
