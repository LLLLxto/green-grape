<template>
  <div class="nav">
    <router-link to="/charge">
      <Icon name="charge"/>
      记账
    </router-link>
    |
    <router-link to="bill">
      <Icon name="bill"/>
      明细
    </router-link>
    |
    <router-link to="charts">
      <Icon name="charts"/>
      图表
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style scoped lang="scss">
.nav{
  border:1px solid red;
}
</style>