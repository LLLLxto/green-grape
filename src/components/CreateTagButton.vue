<template>
  <div class="createTag-wrapper">
    <button class="createTag" @click="$emit('click',$event)">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class createTagButton extends Vue {
}
</script>

<style scoped lang="scss">
@import "src/assets/style/helper.scss";
.createTag {
  @extend %outerShadow;
  background: $color-highlight;
  border: none;
  font-size: 16px;
  color: white;
  border-radius: 4px 4px 0 0;
  height: 56px;
  display:block;
  width:100%;
  &-wrapper {
    text-align: center;
  }
}
</style>