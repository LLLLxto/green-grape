<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="createRecord"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags @update:value="onUpdateTags"/>
    <Types :value.sync="record.type"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Charge/NumberPad.vue';
import Types from '@/components/Charge/Types.vue';
import Notes from '@/components/Charge/Notes.vue';
import Tags from '@/components/Charge/Tags.vue';
import {Component} from 'vue-property-decorator';

@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Charge extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  /*global RecordItem*/
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  created() {
    this.$store.commit('fetchRecords');
  }

  createRecord() {
    this.$store.commit('createRecord', this.record);
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

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