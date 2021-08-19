<template>
  <nav>
    <router-link to="bill" class="item" active-class="selected">
      <Icon name="bill"/>
      明细
    </router-link>

    <router-link to="/charge" class="item" active-class="selected">
      <Icon name="charge"/>
      记账
    </router-link>

    <router-link to="charts" class="item" active-class="selected">
      <Icon name="charts"/>
      图表
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
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
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