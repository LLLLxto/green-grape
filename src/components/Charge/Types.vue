<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'Types'
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.types {
  background: $color-highlight;
  display: flex;
  font-size: 20px;
  text-align: center;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>