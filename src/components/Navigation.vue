<template>
  <div as="nav" class="nav fixed top-0 w-full z-50" :class="isScrolled ? 'scrolled bg-white/75' : 'bg-white/5'">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="flex flex-1 items-center sm:items-stretch justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img v-if="!isScrolled" class="h-8 w-auto" src="@/assets/AltusPower_logo-no-subline-white.svg" alt="Altus" />
            <img v-else class="h-8 w-auto" src="@/assets/AltusPower_logo-no-subline-color.svg" alt="Altus" />
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <a href="https://qa.altuspower.com/communitysolar/onboarding/availability" class="bg-altus-green text-white px-6 sm:px-12 py-3 rounded-full tracking-wider uppercase font-roboto font-bold text-sm">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'PrimaryHeader',  
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        isScrolled.value = true;
      } else {
        isScrolled.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isScrolled
    };
  }
}
</script>

<style scoped>
.nav {
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
}
</style>