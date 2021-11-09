<template>
  <div class="layout-wrapper">
    <slot name="header" class="header"/>
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot/>
    </div>
    <slot name="footer"/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout',
  props: ['classPrefix']
};
</script>

<style scoped lang="scss">
@import "src/assets/style/helper.scss";
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.header{
  background: $color-highlight;
  display: flex;
  text-align: center;
  font-size: 20px;
}
.content {
  height:0px; //不使用 fixed 定位，实现顶部底部固定
  overflow: auto;
  flex-grow: 1;
}
</style>