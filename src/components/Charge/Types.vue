<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'"
    @click="selectType('-')">支出</li>
    <li :class="type === '+' && 'selected'"
    @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator'; //引入装饰器
@Component //装饰器
export default class Types extends Vue {
  type = '-'; // '-'表示支出，'+'表示收入 //data
  selectType(type: string) { //type 只能是'-'/'+'中的一个 //methods
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}
</script>


<!--<script>-->
<!--export default {-->
<!--  name: 'Types',-->
<!--  props:['xxx'],-->
<!--  mounted(){-->
<!--    console.log(this.xxx)-->
<!--  },-->
<!--  data(){-->
<!--    return{-->
<!--      type:'-' //'-'表示支出，'+'表示收入-->
<!--    }-->
<!--  },-->
<!--  methods:{-->
<!--    selectType(type){ //type 只能是'-'/'+'中的一个-->
<!--      if(type !== '-' && type !== '+') throw new Error('type is unknown')-->
<!--      this.type=type-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.types {
  background: $color-highlight;
  display: flex;
  font-size: 20px;
  text-align: center;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>