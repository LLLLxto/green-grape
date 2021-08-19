<template>
  <div class="tags">
    <ul class="current">
      <li>餐饮</li>
      <li>购物</li>
      <li>交通</li>
      <li>住宿</li>
    </ul>
    <div class="settings">
      <button>设置</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'tags'
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: $color-grey;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
    }
  }

  > .settings {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>