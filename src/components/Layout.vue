<template>
  <div class="layout-wrapper">
    <slot name="header"/>
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
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  height:0px; //不使用 fixed 定位，实现顶部底部固定
  overflow: scroll;
  flex-grow: 1;
}
</style>