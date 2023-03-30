<!--
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-30 13:35:21
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-30 13:35:41
 * @FilePath: \arcro-vue\src\views\not-found\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
