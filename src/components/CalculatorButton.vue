<template>
  <div
    v-if="displayValue === 'C'"
    class="calculator-button calculator-button-operator">
    {{ displayValue }}
  </div>
  <div
    v-else
    class="calculator-button">
    {{ displayValue }}
  </div>
</template>

<script>
export default {
  name: 'CalculatorButton',
  props: {
    displayValue: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.calculator-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .75em;
  font-size: 1.5rem;
  font-weight: bold;
  flex: 0 0 auto;
  width: 60px;
  cursor: pointer;
  transition: all .3s ease-in-out;
}
.calculator-button:not(.calculator-button-operator) {
  background: transparent
}
.calculator-button:not(.calculator-button-operator):hover {
  background: #F2EDCF;
}
.calculator-button:active {
  transform: scale(.85);
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, .15)
}
.calculator-button-operator {
  background: #fee8d7;
}
.calculator-button-operator:hover {
  background: #FDDDC3;
}
</style>