<template>
  <layout class-prefix="layout">
    <NumberPad/>
    <Notes/>
    <Tags/>
    <Types :xxx="123"/>
  </layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Charge/NumberPad.vue';
import Types from '@/components/Charge/Types.vue';
import Notes from '@/components/Charge/Notes.vue';
import Tags from '@/components/Charge/Tags.vue';
export default {
  name: 'Charge',
  components: {Tags, Notes, Types, NumberPad}
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}
</style>