<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import SellingProps from './components/SellingProps.vue'
import HowItWorks from './components/HowItWorks.vue'
import CallToAction from './components/CallToAction.vue'
import CustomerReviews from './components/CustomerReviews.vue'
import Faqs from './components/Faqs.vue'
import Qualify from './components/Qualify.vue'
// import Logos from './components/Logos.vue'
</script>

<template>
  <Navigation/>
  <Hero/>
  <!-- <Logos/> -->
  <SellingProps/>
  <HowItWorks/>
  <CallToAction/>
  <CustomerReviews/>
  <Faqs/>
  <Qualify/>
</template>

<style lang='scss'>
@import "https://use.typekit.net/vpi6ccm.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: "GT Walsheim";
  src: url("@/assets/fonts/GT-Walsheim-Bold.otf");
  font-weight: bold;
}

@font-face {
  font-family: "GT Walsheim";
  src: url("@/assets/fonts/GT-Walsheim-Medium.otf");
  font-weight: 500;
}

@font-face {
  font-family: "GT Walsheim";
  src: url("@/assets/fonts/GT-Walsheim-Regular.otf");
  font-weight: normal;
}

@font-face {
  font-family: "GT Walsheim";
  src: url("@/assets/fonts/GT-Walsheim-Light.otf");
  font-weight: light;
}
</style>
