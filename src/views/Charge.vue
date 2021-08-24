<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Types :value.sync="record.type"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Charge/NumberPad.vue';
import Types from '@/components/Charge/Types.vue';
import Notes from '@/components/Charge/Notes.vue';
import Tags from '@/components/Charge/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model';
const recordList = model.fetch();
import RecordItem from '@/custom.d.ts';

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Charge extends Vue {
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
  saveRecord() {
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange() {
    model.save(this.recordList);
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  tags = ['餐饮', '购物', '交通', '住宿'];

  onUpdateTags(value: string[]) {
    this.record.tags = value;
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