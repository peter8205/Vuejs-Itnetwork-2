import { createApp } from 'vue'
import App from './App.vue'
import CalculatorButton from '@/components/CalculatorButton.vue'

createApp(App)
  .component('CalculatorButton', CalculatorButton)
  .mount('#app')


<template>
  <div class="container">
    <div class="calculator">
      <div class="calculator-row">
        <div class="display"></div>
        <calculator-button />
      </div>
      <div class="calculator-row"/>
      <div class="calculator-row"/>
      <div class="calculator-row"/>
      <div class="calculator-row"/>
    </div>
  </div>
</template>