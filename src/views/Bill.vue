<template>
  <layout>
    <div class="header">
      <span class="title">明细</span>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Bill extends Vue {
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.header {
  text-align: center;
  font-size: 20px;
  height: 64px;
  padding: 12px 16px;
  background: $color-highlight;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>