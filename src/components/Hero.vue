<template>
  <div class="relative isolate overflow-hidden bg-altus-navy pt-16">
    <div class="animation-wrapper">
      <div class="rotating-group">
        <div class="inner1"></div>
        <div class="inner2"></div>
      </div>
    </div>
    <svg class="absolute inset-0 -z-10 h-full w-full stroke-white opacity-07 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
    </svg>
    <!-- sm:py-32 -->
    <div class="mx-auto max-w-7xl px-6 py-12 sm:py-4 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
        <div class="flex justify-center mx-auto sm:mx-0">
          <div class="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 uppercase font-bold text-white text-center ring-1 ring-white hover:ring-gray-100">
            <p class="flex items-center gap-x-1 font-roboto">
              <span class="absolute inset-0" aria-hidden="true" />
              Solar savings without the panels
            </p>
          </div>
        </div>
        
        <h1 class="mt-10 max-w-lg text-4xl font-medium tracking-tight text-white sm:text-5xl text-center sm:text-left font-gt-walsheim">Switch to Community Solar and Save $327/yr on Average</h1>

        <div class="mt-12 lg:mt-0 lg:flex-grow sm:hidden">
          <img src="@/assets/Altus-Power-Motion-Graphic.svg" alt="" />
        </div>

        <h2 class="mt-10 text-3xl tracking-tight text-white text-center sm:hidden font-gt-walsheim font-medium">See If I Qualify</h2>

        <EmailForm methodName="contact" formType="hero" />

      </div>
      <!-- mt-16 sm:mt-24 lg:flex-shrink-0 -->
      <div class="lg:mt-0 lg:flex-grow hidden sm:block">
        <img src="@/assets/Altus-Power-Motion-Graphic.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import EmailForm from './EmailForm.vue';

// import { ref } from 'vue'
// import { Dialog, DialogPanel } from '@headlessui/vue'
// import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
// import { ChevronRightIcon } from '@heroicons/vue/20/solid'
</script>

<style lang='scss' scoped>
.animation-wrapper {
  flex: none;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 0;
  left: calc(50% - 100% / 2);
  top: 0;
  opacity: 1;
  transform: perspective(1200px);
  z-index: -100;

  .rotating-group {
    border-radius: 31px;
    filter: blur(62px);
    height: 576px;
    left: calc(50% - 30% / 2);
    overflow: visible;
    position: absolute;
    top: calc(52% - 576px / 2);
    width: 31%;
    animation: rotating-group 35s linear infinite;

    .inner1 {
      background: linear-gradient(180deg, rgba(59,132,72,.15) 0%, rgba(87,180,104,.5) 100%);
      border-radius: 159px;
      bottom: 249px;
      filter: blur(100px);
      flex: none;
      height: 503px;
      left: -430px;
      overflow: hidden;
      position: absolute;
      width: 683px;
      will-change: transform;
      animation: rotating-group 30s linear infinite;
    }

    .inner2 {
      background: linear-gradient(180deg, rgba(59,132,72,.15) 0%, rgba(87,180,104,.5) 100%);
      border-radius: 95px;
      bottom: 23px;
      filter: blur(100px);
      height: 273px;
      left: -228px;
      overflow: hidden;
      position: absolute;
      width: 170px;
      will-change: transform;
      animation: rotating-group 30s linear infinite;
    }
  }
}

// @media (min-width: 640px) {
//   .animation-wrapper {
//     height: 100vh;
//     top: calc(50% - 100vh / 2);
//   }
// }

@keyframes rotating-group {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
@keyframes bg {
  0% {
    transform: translateX(0%), translateY(0%);
  }

  25% {
    transform: translateX(10%), translateY(15%);
  }

  50% {
    transform: translateX(17%), translateY(25%);
  }

  75% {
    transform: translateX(-14%), translateY(-10%);
  }

  100% {
    transform: translateX(0%), translateY(0%);
  }
}
</style>