<template>
  <div>
    <div class="navBar">
      <Icon name="back" class="backIcon" @click="goBack"/>
      <span class="title">添加分类</span>
      <span class="rightHolder"></span>
    </div>
    <div class="createName">
      <span class="name">名称</span>
      <input type="text" placeholder="请输入分类名称" id="inputTagName" autocomplete="off">
    </div>
    <ol class="icons">
      <li></li>
    </ol>
    <FooterButton @click="saveTag">保存</FooterButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import FooterButton from '@/components/FooterButton.vue';

@Component({
  components: {FooterButton}
})
export default class EditLabel extends Vue {
  saveTag() {
    const input = document.getElementById('inputTagName') as HTMLInputElement;
    const name = input.value;
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('分类名称已经存在啦');
      } else if (message === 'success') {
        window.alert('保存成功');
        this.$router.back();
      }
    }
  }

  goBack() {
    this.$router.back();
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.navBar {
  text-align: center;
  font-size: 20px;
  height: 64px;
  padding: 12px 16px;
  background: $color-highlight;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {

  }

  > .backIcon {
    width: 24px;
    height: 24px;
  }

  > .rightHolder {
    width: 24px;
    height: 24px;
  }
}

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
    border-radius: 20px;
    padding: 8px;
    background: $color-grey;
    border: none;
  }
}
</style>