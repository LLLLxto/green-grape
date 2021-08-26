<template>
  <div class="footerButton-wrapper">
    <button class="footerButton" @click="$emit('click',$event)">
      <slot/>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class FooterButton extends Vue {
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.footerButton {
  @extend %outerShadow;
  background: $color-highlight;
  border: none;
  font-size: 16px;
  color: white;
  border-radius: 4px 4px 0 0;
  height: 56px;
  width: 100vw;

  &-wrapper {
    text-align: center;
    position: fixed;
    bottom: 0;
  }
}
</style>