<template>
  <div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <img src="@/assets/customer-reviews-bg.png" alt="Altus Power customer reviews image" class="absolute inset-0 -z-10 h-full w-full object-cover" />
    <h1 class="font-gt-walsheim text-white text-4xl font-medium text-center pb-12">Join over 20,000+ Altus Power Subscribers Today!</h1>
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#3b8448] to-[#57b468] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#3b8448] to-[#57b468] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto flex flex-col items-center max-w-3xl text-center">
      <div class="flex items-center">
        <StarIcon class="text-white h-5 w-5 mx-1 flex-shrink-0" aria-hidden="true" />
        <StarIcon class="text-white h-5 w-5 mx-1 flex-shrink-0" aria-hidden="true" />
        <StarIcon class="text-white h-5 w-5 mx-1 flex-shrink-0" aria-hidden="true" />
        <StarIcon class="text-white h-5 w-5 mx-1 flex-shrink-0" aria-hidden="true" />
        <StarIcon class="text-white h-5 w-5 mx-1 flex-shrink-0" aria-hidden="true" />
      </div>
      <p class="mt-6 text-2xl leading-8 text-white font-gt-walsheim italic">“My wife and I have had Altus for only a few months but so far the service has been very satisfactory and we did see a <b>decrease in the electric bill</b>. The summer will be the real test with the AC on a good portion of the time but as stated it has been a very good connection with zero problems... Good Work!”</p>
    </div>
  </div>
</template>

<script setup>
  import { StarIcon } from '@heroicons/vue/20/solid'
</script>