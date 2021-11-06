<template>
  <Layout>
    <div slot="header" class="header">
      <Icon name="back" class="backIcon" @click="goBack"/>
      <Tabs :data-source="recordTypeList" :value.sync="type"/>
      <span class="rightHolder"></span>
    </div>
    <ol class="tagList">
      <li v-for="tag in tagList" :key="tag.id">
        <span>{{ tag.name }}</span>
        <div class="removeTag" @click="remove(tag)">
          <Icon name="delete"/>
        </div>
      </li>
    </ol>
    <createTagButton slot="footer" class="createTag" @click="createTag">添加分类</createTagButton>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import CreateTagButton from '@/components/CreateTagButton.vue';
import recordTypeList from '@/constants/recordTypeList';
@Component({
  components: {CreateTagButton, Tabs},
})
export default class EditTag extends Vue {
  type = '-'
  recordTypeList = recordTypeList;
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit('fetchTagList');
  }
  goBack() {
    this.$router.back();
  }
  createTag(){
    const name = window.prompt("请输入分类名称")
    if(name){
      this.$store.commit('createTag',name)
    }else if(name === ''){
      return window.alert('名称不能为空')
    }
  }
  remove(tag: { id: string, name: string } | undefined) {
    if (tag) {
      this.$store.commit('removeTag', tag.id);
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/style/helper.scss";
.header{
  background:$color-highlight;
  height:64px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  ::v-deep .tabs{
    width:150px;
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
.tagList {
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  overflow: auto;
  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $color-grey;
    > .removeTag {
      height: 40px;
      display: flex;
      align-items: center;
    }
    svg {
      width: 16px;
      height: 16px;
      color: #333;
    }
  }
}
</style>