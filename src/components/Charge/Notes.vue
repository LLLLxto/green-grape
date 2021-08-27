<template>
  <div>
    <label class="notes">
      <button class="date">日期</button>
      <span class="name">备注</span>
      <input type="text" placeholder="请输入备注信息" @input="onValueChanged($event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Watch} from 'vue-property-decorator';
@Component
export default class Notes extends Vue {
  value = '';
  @Watch('value')
  onValueChanged(value:string){
    this.$emit('update:value',value)
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.notes {
  font-size: 14px;
  padding-left: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }

  .date {
    padding-right: 16px;
    background: $color-grey;
    $h: 24px;
    height: $h;
    line-height: $h;
    border-radius: $h/2;
    margin-right: 12px;
    border: none;
  }

  input {
    height: 32px;
    flex-grow: 0.8;
    background: transparent;
    border: none;
    color: #999;
    border-bottom: 1px solid;
    padding: 8px;
  }
}
</style>