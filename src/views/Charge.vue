<template>
  <div class="nav-wrapper">
    <div class="content">
      Charge.vue
    </div>

    <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Charge',
};
</script>

<style scoped lang="scss">
.nav-wrapper{
  border:1px solid green;
  display:flex;
  flex-direction:column;
  height: 100vh;
}
.content{
  border:1px solid blue;
  overflow:auto; //如果 div.content 内容溢出可滚动
  flex-grow:1; //尽量把所有高度都给 div.content
}
</style>