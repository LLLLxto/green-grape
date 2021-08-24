<template>
  <nav>
    <router-link to="bill" class="item" active-class="selected">
      <Icon name="bill"/>
      <span>明细</span>
    </router-link>

    <router-link to="charge" class="item" active-class="selected">
      <Icon name="charge"/>
      <span>记账</span>
    </router-link>

    <router-link to="charts" class="item" active-class="selected">
      <Icon name="charts"/>
      <span>图表</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

nav{
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  > .item{
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected{
    color: $color-highlight;
  }
}

</style>