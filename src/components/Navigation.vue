<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>

<template>
  <Disclosure as="nav" class="nav fixed top-0 w-full z-50 bg-white/5" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center sm:items-stretch justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="@/assets/AltusPower_logo-no-subline-white.svg" alt="Altus" />
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button class="bg-altus-green text-white px-6 sm:px-12 py-3 rounded-full tracking-wider uppercase font-roboto font-bold text-sm">Go Solar</button>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<style scoped>
.nav {
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
}
</style>