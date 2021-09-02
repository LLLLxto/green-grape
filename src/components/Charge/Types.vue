<template>
  <ul class="types">
    <li :class="{selected:value==='-'}"
        @click="selectType('-')">支出
    </li>
    <li :class="{selected:value==='+'}"
        @click="selectType('+')">收入
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch, Prop} from 'vue-property-decorator';
@Component
export default class value extends Vue {
  // '-'表示支出，'+'表示收入
  @Prop(String) readonly value!: string; //! 表示绝对不是 undefined
  @Prop(String) ClassPrefix?: string; //表示可能是 undefined

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value',type)
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.types {
  background: transparent;
  display: flex;
  font-size: 20px;
  width:150px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: $color-key;
    }
  }
}
</style>