<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Types :value.sync="record.type"/>
    {{record}}
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Charge/NumberPad.vue';
import Types from '@/components/Charge/Types.vue';
import Notes from '@/components/Charge/Notes.vue';
import Tags from '@/components/Charge/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import RecordItem from '@/custom.d.ts';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Charge extends Vue {
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  saveRecord() {
    recordListModel.create(this.record)
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save();
  }

  tags = tagList;

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}
</style>