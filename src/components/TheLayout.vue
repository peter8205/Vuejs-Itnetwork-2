<template>
  <div class="container">
    <div class="calculator">
      <div class="calculator-row">
        <div class="display">{{ value }}</div>
      </div>
      <div class="calculator-row"/>
      <div class="calculator-row"/>
      <div class="calculator-row"/>
      <div class="calculator-row"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheLayout',
  data () {
    return {
      value: '0'
    }
  }
}
</script>

<style>
.container {
  background: #efefef;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.calculator {
  background: #F6F3DF;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  overflow: hidden;
}
.calculator-row {
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 240px;
}
.calculator-row:first-child {
  border-bottom: 1px solid #cdcdcd
}
.display {
  flex: 1;
  font-size: 1.5rem;
  padding: .5em;
  display: flex;
  align-items: center;
  background: #DEF7EB;
  justify-content: flex-end;
}
</style>