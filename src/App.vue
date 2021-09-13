<template>
  <div id="app">
    <van-overlay :show="show" @click="closeLayout">
      <div class="wrapper">
        <div class="block">
          <img src="@/assets/qrcode.png" height="180" width="180">
          <span>扫描上方二维码</span>
          <span>手机体验更佳哦</span>
        </div>
      </div>
    </van-overlay>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {Overlay} from 'vant';
Vue.use(Overlay);


@Component
export default class App extends Vue {
  show = true;

  closeLayout() {
    this.show = false;
  }

}
</script>

<style lang="scss">
@import "src/assets/style/reset.scss";
@import "src/assets/style/helper.scss";

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
}


.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 240px;
  height: 240px;
  color:$color-key;
  background-color: #fff;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

//#app {
//  max-width: 500px;
//  margin: 0 auto;
//}


</style>


