<template>
  <div class="bg-gray-100 p-linear-md">
    <div class="m-auto w-full max-w-7xl gap-6 desktop:flex">
      <div class="block sm:hidden">
        <div class="m-auto aspect-full">
          <img class="w-full" src="@/assets/qualify-small.png">
        </div>
      </div>
      <div class="flex flex-col justify-center desktop:w-3/5 py-16 px-12">
        <h1 class="leading-tight font-gt-walsheim font-medium text-4xl mb-4">See If You Qualify</h1>
        
        <EmailForm formType="alt" methodName="contact" />
      </div>
      <div class="hidden sm:block desktop:w-2/5">
        <div class="m-auto aspect-full w-full">
          <img class="px-12" src="@/assets/qualify.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import EmailForm from './EmailForm.vue';
</script>