<template>
  <ul class="tabs">
    <li class="tabs-item"
        v-for="item in dataSource" :key="item.value"
        :class="liClass(item)"
        @click="select(item)">
      {{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
type DataSourceItem = { text: string, value: string }
@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;
  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + '-tabs-item']: this.classPrefix,
      selected: item.value === this.value
    };
  }
  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>


<style scoped lang="scss">
@import "src/assets/style/helper.scss";
.tabs {
  background: $color-highlight;
  display: flex;
  text-align: center;
  font-size: 20px;
  color:$color-key;
  &-item {
    height: 64px;
    width: 50%;
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
