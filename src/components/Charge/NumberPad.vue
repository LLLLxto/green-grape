<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button class="calendar" @click="showpopup">
        <Icon name="calendar"/>
        <van-popup v-model="show" position="bottom">
          <van-datetime-picker
              v-model="currentDate"
              type="date"
              :min-date="minDate"
              :max-date="maxDate"
              :formatter="formatter"
          />
        </van-popup>
        {{ datetime }}
      </button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="inputContent">+</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="inputContent">-</button>
      <button @click="inputContent">.</button>
      <button @click="inputContent">0</button>
      <button @click="remove">
        <Icon name="backspace"/>
      </button>
      <button @click="ok" class="ok">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

import {DatetimePicker, Popup} from 'vant';

Vue.use(DatetimePicker).use(Popup);

@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  datetime = '';
  show = false;
  minDate = new Date(2010, 1, 1);
  maxDate = new Date(2025, 12, 31);


  currentDate = new Date();

  showpopup() {
    this.show = !this.show;
  }

  formatter(type: string, value: string) {
    if (type === 'year') {
      return `${value}年`;
    } else if (type === 'month') {
      return `${value}月`;
    } else if (type === 'day') {
      return `${value}日`;
    }
    return value;
  }


  output = this.value.toString();


  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement); //强制指定类型
    const input = button.textContent!; //认定 button 不会为 null
    if (this.output.length === 16) {return;}
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf('.') > 0) {
      if (input === '.') {return;}
    }
    this.output += input;
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
  }


  ok() {
    const number = parseFloat(this.output);
    this.$emit('update:value', number);
    this.$emit('submit', number);
    this.output = '0';
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/style/helper.scss";

.numberPad {
  .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    background: white;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;

    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: $color-highlight;
      border: none;
      color: $color-key;
      font-size: 20px;
    }

    > .calendar {
      font-size: 18px;

      > .icon {
        width: 16px;
        height: 16px;
      }
    }

    > .ok {
      background: $color-indigo;
      color: white;
    }
  }
}
</style>