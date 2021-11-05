<template>
  <Layout class-prefix="layout">
    <Tabs slot="header" :data-source="recordTypeList" :value.sync="record.type"/>
    <TagList v-if="record.type === '-'" class-prefix="accounting" :dynamic="true" :selected-tag.sync="record.tag"
             :tag-list="expenseTags" class="tag-list"/>
    <TagList v-else-if="record.type === '+'" class-prefix="accounting" :selected-tag.sync="record.tag"
             :tag-list="incomeTags" class="tag-list"/>
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
import {defaultExpenseTags,defaultIncomeTags} from '@/constants/defaultTagList';

@Component({
  components: {TagList, Note, NumberPad, Tabs},
})
export default class Charge extends Vue {
  expenseTags = defaultExpenseTags
  incomeTags = defaultIncomeTags
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;
  record: RecordItem = {
    tag:{id:'',name:''}, note: '', type: '-', amount: 0, createdAt: ''
  };

  created() {
    this.$store.commit('fetchRecordList');
  }

  createRecord() {
    if (!this.record.tag) {
      return window.alert('请选择一个分类标签');
    }
    if (!this.record.amount) {
      return window.alert('请输入金额');
    }
    this.$store.commit('createRecord', this.record);
    this.record.note = '';
  }

  onUpdateNote(value: string) {
    this.record.note = value;
  }

  onUpdateTags(value: Tag) {
    this.record.tag = value;
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
}
</style>