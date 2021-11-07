<template>
  <Layout class-prefix="layout">
    <Tabs slot="header" :data-source="recordTypeList" :value.sync="record.type"/>
    <TagList class-prefix="accounting" :value.sync="record.selectedTag"
             :tagListType="record.type" class="tagList"/>
    <Note :value.sync="record.note"/>
    <NumberPad :value.sync="record.amount" @submit="createRecord" @selectDate="onUpdateCreateAt"/>
    <Nav slot="footer"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Accounting/NumberPad.vue';
import Note from '@/components/Accounting/Note.vue';
import TagList from '@/components/Accounting/TagList.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';


@Component({
  components: {TagList, Note, NumberPad, Tabs}})
export default class Charge extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = {
    selectedTag:[], note: '', type: '-', amount: 0, createdAt: ''
  };

  created() {
    this.$store.commit('fetchRecordList');
  }

  createRecord() {
    if (!this.record.selectedTag || this.record.selectedTag.length === 0) {
      return window.alert('请选择一个分类标签');
    }
    if (!this.record.amount) {
      return window.alert('请输入金额');
    }
    this.$store.commit('createRecord', this.record);
    this.record.note = '';
  }

  onUpdateCreateAt(data: string) {
    this.record.createdAt = data;
  }
}
</script>

<style lang="scss">
@import "src/assets/style/helper.scss";

.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > .tagList {
    height:0px; //不使用 fixed 定位，实现顶部底部固定
    overflow: scroll;
    flex-grow: 1;
  }
}
</style>