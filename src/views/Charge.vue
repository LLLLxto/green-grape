<template>
  <layout class-prefix="layout">

    <div class="numberPad">
      <div class="output">100</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>再记</button>
        <button>0</button>
        <button>.</button>
        <button>完成</button>
      </div>
    </div>

    <div>
      <label class="notes">
        <button class="date">日期</button>
        <input type="text" placeholder="请输入备注信息">
      </label>
    </div>

    <div class="tags">
      <ul class="current">
        <li>餐饮</li>
        <li>购物</li>
        <li>交通</li>
        <li>住宿</li>
      </ul>
      <div class="settings">
        <button>设置</button>
      </div>
    </div>

    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

  </layout>
</template>

<script lang="ts">
export default {
  name: 'Charge'
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}
</style>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.numberPad {
  .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 16px;
    text-align: right;
    background:white;
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
  }
}


.types {
  background: rgb(183, 201, 161);
  display: flex;
  font-size: 20px;
  text-align: center;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;

    }
  }
}

.notes {
  font-size: 14px;
  padding-left: 16px;
  padding-bottom:16px;
  display: flex;
  align-items: center;

  .date {
    padding-right: 16px;
    background: rgb(241, 241, 241);
    $h: 24px;
    height: $h;
    line-height: $h;
    border-radius: $h/2;
    margin-right: 12px;
    border: none;
  }

  input {
    height: 32px;
    flex-grow: 0.8;
    background: transparent;
    border: none;
    color: #999;
    border-bottom: 1px solid;
    padding: 8px;
  }
}

.tags {
  flex-grow:1;
  font-size: 14px;
  padding: 16px;

  > .current {
    display: flex;
    flex-wrap:wrap;

    > li {
      background: rgb(241, 241, 241);
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top:4px;
    }
  }

  > .settings {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>