<template>
  <div class="home-page flex justify-center w-screen flex-col h-full">
    <main class="flex h-full w-full flex-col p-[24px] md:px-[40px] md:py-[128px] lg:px-[165px] lg:py-[128px]">
      <aside class="hidden lg:block lg:grow"></aside>
      <section class="flex h-full w-full flex-col items-center md:justify-between lg:h-auto lg:flex-none lg:flex-row">
        <div class="flex flex-none flex-col items-center justify-center gap-[24px] text-center md:w-[512px] lg:flex-1 lg:items-start lg:text-left">
          <div class="md:desktop-text-preset-5 mobile-text-preset-6 text-blue-300">SO, YOU WANT TO TRAVEL TO</div>
          <div class="md:desktop-text-preset-1 mobile-text-preset-1 text-white">SPACE</div>
          <div class="lg:desktop-text-preset-9 md:tablet-text-preset-9 mobile-text-preset-9 text-blue-300">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </div>
        </div>
        <RouterLink class="flex grow items-center justify-center md:flex-none lg:flex-1 lg:justify-end" to="/destination">
          <button class="text-blue-900 hover:text-blue-900/50 transition-all hover:ring-88 hover:ring-white/10 md:desktop-text-preset-4 mobile-text-preset-4 h-[144px] w-[144px] rounded-full bg-white md:h-[272px] md:w-[272px]">EXPLORE</button>
        </RouterLink>
      </section>
    </main>
  </div>
</template>
