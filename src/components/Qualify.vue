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
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-3">
          <div>
            <label for="first-name" class="block text-sm font-regular leading-6 font-roboto">First name</label>
            <div class="mt-2.5">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-roboto" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-regular leading-6 font-roboto">Last name</label>
            <div class="mt-2.5">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-roboto" />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-regular leading-6 font-roboto">Email address</label>
            <div class="mt-2.5">
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-roboto" />
            </div>
          </div>
          <div>
            <label for="phone" class="block text-sm font-regular leading-6 font-roboto">Phone number</label>
            <div class="mt-2.5">
              <input id="phone" name="phone" type="phone" autocomplete="phone" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-roboto" />
            </div>
          </div>
          <button class="bg-altus-green text-white px-16 py-4 mt-4 rounded-full tracking-wider uppercase font-roboto font-bold text-sm">See if I quality</button>
        </div>
      </div>
      <div class="hidden sm:block desktop:w-2/5">
        <div class="m-auto aspect-full w-full">
          <img class="px-12" src="@/assets/qualify.png">
        </div>
      </div>
    </div>
  </div>
</template>