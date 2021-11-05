<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button class="calendar" :value="date" @click="inputCalendar">
        <Icon name="calendar"/>
        <span>{{ date || '今天' }}</span>
      </button>
      <van-calendar v-model="show" @confirm="onConfirm" color="rgb(183, 201, 161)"
                    :min-date="minDate" :max-date="maxDate"
                    :show-mark=false :show-subtitle=false
      />
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear" class="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">完成</button>
      <button @click="inputContent">.</button>

      <button @click="inputContent">0</button>
      <button @click="remove">
        <Icon name="backspace"/>
      </button>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {Calendar} from 'vant';
import router from '@/router';

Vue.use(Calendar);

@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;

  date = '';
  show = false;
  minDate = new Date(2019, 0, 1);
  maxDate = new Date();
  createdAt = '';

  formatDate(date: Date) {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }

  onConfirm(date: Date) {
    this.show = false;
    this.$emit('selectDate', date.toISOString());
    this.date = this.formatDate(date);

  }

  inputCalendar() {
    this.show = true;
  }

  output = this.value.toString();

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement); //强制指定类型
    const input = button.textContent!; //认定 button 不会为 null
    if (this.output.length === 16) {return;}
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      }
      // else if ('+-'.indexOf(input) >= 0) {return;}
      else {
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

  clear(){
    this.output = '0'
  }

  ok() {
    const number = parseFloat(this.output);
    this.$emit('update:value', number);
    this.$emit('submit', number);
    this.output = '0';
    // router.push('/bill')
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
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: $color-highlight;
      border: none;
      color: $color-key;
      font-size: 20px;
    }

    > .clear {
      font-size: 18px;
    }

    > .calendar {
      font-size: 18px;

      > .icon {
        width: 16px;
        height: 16px;
      }

      > span {
        padding-left: 8px;
      }
    }

    > .ok {
      background: $color-indigo;
      color: #fff;
      height: 64*2px;
      float: right;
    }
  }
}
</style>