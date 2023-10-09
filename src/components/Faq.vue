<template>
  <dl class='mt-3 space-y-6 divide-y divide-gray-900/10'>
    <div v-for='(item, index) in items' :key='index' class='pt-6'>
      <dt>
        <div class='flex cursor-pointer items-center justify-between' @click='toggleItem(index)'>
          <span class='font-gt-walsheim text-medium text-lg'>{{ item.question }}</span>
          <span class='ml-6 flex h-7 items-center'>
            <svg class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M12 6v12m6-6H6' />
            </svg>

            <!-- <svg class='hidden h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M18 12H6' />
            </svg> -->

            <!-- <svg :class='{'rotate-180': activeIndex === index}' class='w-6 h-6 transform transition-transform' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'>
              <path d='M19 9l-7 7-7-7'></path>
            </svg> -->
          </span>
        </div>
      </dt>
      <transition name='slide-fade'>
        <dd v-show='activeIndex === index' class='mt-3 pr-12'>
          <p class='font-roboto text-base text-gray-600'>{{ item.answer }}</p>
        </dd>
      </transition>
    </div>
  </dl>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup () {
    const activeIndex = ref(-1)

    const toggleItem = index => {
      activeIndex.value = (activeIndex.value === index) ? -1 : index
    }

    return {
      activeIndex,
      toggleItem
    }
  }
}
</script>

<style>
.rotate-180 {
  transform: rotate(180deg);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
