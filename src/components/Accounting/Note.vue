<template>
  <div>
    <label class="note">
      <Icon name="note"/>
      <span class="name">备注：</span>
      <input type="text" placeholder="请输入备注信息（最多150字）" maxlength="150"
             :value="value" @input="onValueChanged($event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Note extends Vue {
  @Prop(String) readonly value?: string;
  onValueChanged(value:string){
    this.$emit('update:value',value)
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/style/helper.scss";
.note {
  font-size: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 4px;
    padding-left: 4px;
  }
  .icon {
    width: 16px;
    height: 16px;
  }

  input {
    height: 32px;
    flex-grow: 0.8;
    background: transparent;
    border: none;
    color: #333;
    border-bottom: 1px solid;
    padding: 8px;
  }
}
</style>