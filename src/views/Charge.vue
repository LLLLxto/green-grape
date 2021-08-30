<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="createRecord"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags/>
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
import store from '@/store/index2';


@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Charge extends Vue {
  tags = store.tagList;
  recordList = store.recordList;
  /*global RecordItem*/
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  createRecord() {
    store.createRecord(this.record);
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