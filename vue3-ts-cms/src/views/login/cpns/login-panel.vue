<template>
  <div class="login-panel">
    <h1 class="title">後台管理系統</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>帳號登錄</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手機登錄</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="iskeepPassword">記住密碼</el-checkbox>
      <el-link type="primary">忘記密碼</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登錄</el-button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default {
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 1.定義屬性
    const iskeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    // 2.定義方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(iskeepPassword.value)
      } else {
        console.log('phoneRef調用loginAction')
      }
    }
    return {
      iskeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick
    }
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 120px;
  width: 320px;
  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
