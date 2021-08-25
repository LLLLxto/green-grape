<template>
  <div>
    <Header></Header>
    <div class="createName">
      <span class="name">名称</span>
      <input type="text" placeholder="请输入分类名称">
    </div>
    <ol class="icons">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
    <div class="saveTag-wrapper">
      <button class="saveTag" @click="saveTag">保存</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

@Component
export default class EditLabel extends Vue {
  tags = tagListModel.data;


  // saveTag() {
  //   const name = window.prompt('请输入分类名称');
  //   if (name) {
  //     const message = tagListModel.create(name);
  //     if (message === 'duplicated') {
  //       window.alert('分类名称已经存在啦');
  //     }else if(message === 'success'){
  //       window.alert('保存成功')
  //     }
  //   }
  // }

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.createName {
  font-size: 14px;
  padding-left: 16px;
  padding-top: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 40px;
    flex-grow: 0.8;
    border-radius: 4px;
    padding: 8px;
    background: $color-grey;
    border: none;
  }
}

.saveTag {
  @extend %outerShadow;
  background: $color-highlight;
  border: none;
  font-size: 16px;
  color: white;
  border-radius: 4px 4px 0 0;
  height: 54px;
  width: 100vw;

  &-wrapper {
    text-align: center;
    position: fixed;
    bottom: 0;
  }
}
</style>