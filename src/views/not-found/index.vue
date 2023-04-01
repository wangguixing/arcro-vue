<!--
 * @Author: wangguixing
 * @Date: 2023-03-30 18:08:10
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 13:06:15
 * @FilePath: \src\views\not-found\index.vue
 * @Description: 注明出处即可
 * Copyright 2023 OBKoro1, All Rights Reserved.
 * 2023-03-30 18:08:10
-->

<template>
  <div class="content">
    <a-result class="result" status="404" :subtitle="'not found'"> </a-result>
    <div class="operation-row">
      <a-button key="back" type="primary" @click="back"> back </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const back = () => {
    // warning： Go to the node that has the permission
    router.push({ name: 'Workplace' });
  };
</script>

<style scoped lang="less">
  .content {
    // padding-top: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -95px;
    margin-top: -121px;
    text-align: center;
  }
</style>
