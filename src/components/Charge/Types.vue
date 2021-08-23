<template>
  <ul class="types">
    <li :class="value === '-' && 'selected'"
        @click="selectType('-')">支出
    </li>
    <li :class="value === '+' && 'selected'"
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
  @Prop() readonly value!: string;

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