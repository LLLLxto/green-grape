<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="createRecord"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags @update:value="onUpdateTags"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Charge/NumberPad.vue';
import Notes from '@/components/Charge/Notes.vue';
import Tags from '@/components/Charge/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tags, Notes, NumberPad, Tabs},
})
export default class Charge extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

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
@import "~@/assets/style/helper.scss";
.layout-content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}
</style>