<template>
  <div>
    <div class="header">
      <Icon name="back" class="backIcon" @click="goBack"/>
      <Tabs :data-source="recordTypeList"
      :value.sync="type"/>
      <span class="rightHolder"></span>
    </div>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <div class="removeTag" @click="remove(tag)">
          <Icon name="delete"/>
        </div>
      </li>
    </ol>
    <FooterButton class="createTag" @click="createLabel">添加分类</FooterButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import FooterButton from '@/components/FooterButton.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {FooterButton, Tabs},
})
export default class EditTags extends Vue {
  type = '-'
  recordTypeList = recordTypeList;
  get tags() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  goBack() {
    this.$router.back();
  }

  createLabel() {
    this.$router.push('editTags');
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

.tags {
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;

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