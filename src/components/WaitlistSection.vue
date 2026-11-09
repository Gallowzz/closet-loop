<script setup lang="ts">
  import WaitlistForm from './WaitlistForm.vue';
</script>

<template>
    <section id="lista-espera" class="relative scroll-mt-24 overflow-hidden bg-midnight py-28 text-ivory lg:py-36" aria-labelledby="waitlist-title">
      <svg viewBox="0 0 120 100" class="absolute -bottom-28 -left-20 h-[460px] w-auto rotate-[-8deg] text-ivory opacity-[0.06]" aria-hidden="true">
        <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M60 32C60 25 65 24 67 19 69.5 12.5 63 6.5 57 8.5 51.5 10.5 50.5 17 55 20" />
          <path d="M60 32 14 62M60 32 106 62M14 62h56" />
        </g>
        <path d="M69 50.5 91 62 69 73.5Z" fill="currentColor" />
        <path d="M99 62h7" stroke="currentColor" stroke-width="8" stroke-linecap="round" />
      </svg>
      <div class="dots-ivory absolute left-8 top-10 h-48 w-64 opacity-10 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]" aria-hidden="true"></div>
      <svg viewBox="0 0 100 100" class="absolute right-10 top-12 hidden h-14 w-14 opacity-90 lg:block" aria-hidden="true">
        <path d="M50 2C56 36 64 44 98 50 64 56 56 64 50 98 44 64 36 56 2 50 36 44 44 36 50 2Z" fill="url(#gradChrome)" />
      </svg>

      <div class="relative mx-auto max-w-2xl px-5 text-center lg:px-8">
        <p v-reveal class="inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.26em] text-lime">
          <span class="inline-block h-2 w-2 rotate-45 bg-lime"></span>EL PRIMER LOOP
        </p>
        <h2 id="waitlist-title" v-reveal="{ delay: 0.08 }" class="mt-6 text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.02] tracking-tight">
          Tu próximo look <em class="font-serif font-medium italic text-lime">empieza aquí</em>.
        </h2>
        <p v-reveal="{ delay: 0.16 }" class="mx-auto mt-6 max-w-lg text-lavender lg:text-lg">
          Estamos preparando una nueva forma de descubrir, combinar y compartir moda. ¿Te unes al primer loop?
        </p>
        <div v-reveal="{ delay: 0.24 }" class="mt-10">
          <waitlist-form />
        </div>
      </div>
    </section>
</template>
