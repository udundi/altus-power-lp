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
        
        <h1 class="mt-10 max-w-lg font-medium tracking-tight text-white text-5xl text-center sm:text-left font-gt-walsheim">Switch to Community Solar and Save <u>$327/yr</u> on Average</h1>

        <div class="mt-12 lg:mt-0 lg:flex-grow sm:hidden">
          <lottie-player src="lottie/Altus-Power-Motion-Graphic.json" autoplay loop/>
        </div>

        <EmailForm methodName="contact" formType="hero" />

      </div>
      <!-- mt-16 sm:mt-24 lg:flex-shrink-0 -->
      <div class="lg:mt-0 lg:flex-grow max-w-2xl hidden sm:block">
        <lottie-player src="lottie/Altus-Power-Motion-Graphic.json" autoplay loop/>
      </div>
    </div>
    <!-- Logos -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-12">
      <!-- <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Trusted by the world’s most innovative teams</h2> -->
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="@/assets/wsj-white.png" alt="Wall Street Journal" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="@/assets/bloomberg-white.png" alt="Bloomberg" width="158" height="48" />
        <img class="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src="@/assets/cnbc-white.png" alt="CNBC" width="158" height="48" />
        <img class="col-span-2 max-h-10 w-full object-contain lg:col-span-1" src="@/assets/forbes-white.png" alt="Forbes" width="158" height="48" />
        <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-1" src="@/assets/td-ameritrade-white.png" alt="TD Ameritrade" width="158" height="48" />
        <img class="col-span-2 max-h-18 w-full object-contain lg:col-span-1" src="@/assets/cheddar-white.png" alt="Cheddar News" width="158" height="48" />
      </div>
    </div>
  </div>
</template>

<script setup>
import EmailForm from './EmailForm.vue';
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