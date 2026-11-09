<script setup lang="ts">
  import UiIcon from './UiIcon.vue';
  import EditorialImage from './EditorialImage.vue';
</script>

<template>
    <section id="top" class="relative bg-ivory pb-16 pt-[110px] lg:pb-20 lg:pt-[150px]" aria-labelledby="hero-title">
      <div class="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:gap-8 lg:px-8">

        <div class="relative z-10 lg:col-span-6">
          <p v-reveal class="inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.26em] text-midnight">
            <span class="inline-block h-2 w-2 rotate-45 bg-lime"></span>TU ESTILO, TU MUNDO
          </p>
          <h1 id="hero-title" class="mt-6 text-[clamp(2.7rem,7vw,5.3rem)] font-bold leading-[0.98] tracking-tight text-ink">
            <span class="block" v-reveal="{ delay: 0.05 }">Tu ropa.</span>
            <span class="block pl-6 font-serif font-medium italic sm:pl-10" v-reveal="{ delay: 0.14 }">Tus reglas.</span>
            <span class="block text-midnight" v-reveal="{ delay: 0.22 }">Tu próximo look.</span>
          </h1>
          <p class="mt-7 max-w-md text-base text-ink/75 lg:text-lg" v-reveal="{ delay: 0.3 }">
            Viste lo que eres, descubre lo que tienes y dale una nueva vuelta a tu estilo.
          </p>
          <div class="mt-9 flex flex-wrap items-center gap-4" v-reveal="{ delay: 0.38 }">
            <a href="#lista-espera"
               class="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-bold text-ivory shadow-[0_20px_45px_-20px_rgba(27,25,143,0.7)] transition hover:bg-midnight">
              Quiero entrar
              <ui-icon name="arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#armario"
               class="group inline-flex items-center gap-2.5 rounded-full border-2 border-ink/15 px-6 py-[14px] text-sm font-bold text-ink transition hover:border-ink hover:bg-lavender/30">
              Descubre Closet Loop
              <ui-icon name="arrow-down" class="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
          <p class="mt-10 flex flex-wrap items-center gap-3" v-reveal="{ delay: 0.46 }">
            <span class="rounded-full bg-lavender/40 px-3 py-1.5 font-mono text-[0.6rem] font-bold tracking-[0.18em] text-midnight">PRÓXIMAMENTE</span>
            <span class="font-mono text-[0.62rem] tracking-[0.18em] text-midnight/60">UNA NUEVA FORMA DE VIVIR TU ARMARIO</span>
          </p>
        </div>

        <!-- Collage editorial: imagen principal 4:5 + tarjetas flotantes con ranura de imagen -->
        <div class="relative lg:col-span-6" v-reveal="{ delay: 0.2, y: 36 }">
          <div class="relative mx-auto w-full max-w-[560px]">
            <div class="dots-ink absolute left-1/2 top-1/2 h-[86%] w-[94%] -translate-x-1/2 -translate-y-1/2 opacity-60 [mask-image:radial-gradient(75%_75%_at_50%_45%,black,transparent)]" aria-hidden="true"></div>

            <figure class="relative z-[5] mx-auto w-[78%] rounded-[1.8rem] border border-ink/10 bg-ivory p-2 shadow-[0_45px_90px_-40px_rgba(27,25,143,0.55)] sm:w-[330px] lg:w-[390px]">
              <editorial-image src="/photos/front_test_1.jpg" label="LOOK PRINCIPAL" rounded="rounded-[1.4rem]" eager />
              <figcaption class="flex items-center justify-between px-2 pb-1 pt-2 font-mono text-[0.55rem] font-bold tracking-[0.16em] text-midnight/60">
                <span>CL · CAMPAIGN 01</span><span>Nº 001 — 4:5</span>
              </figcaption>
            </figure>

            <!-- Estrella cromada decorativa -->
            <svg viewBox="0 0 100 100" aria-hidden="true" class="absolute -top-4 right-0 z-10 h-14 w-14 drop-shadow-[0_6px_18px_rgba(27,25,143,0.35)] lg:-top-2 lg:right-2 lg:h-20 lg:w-20">
              <path d="M50 2C56 36 64 44 98 50 64 56 56 64 50 98 44 64 36 56 2 50 36 44 44 36 50 2Z" fill="url(#gradChrome)" />
              <path d="M50 22C53 40 60 47 78 50 60 53 53 60 50 78 47 60 40 53 22 50 40 47 47 40 50 22Z" fill="#ffffff" opacity="0.55" />
            </svg>

            <div class="absolute -left-1 top-14 z-10 w-32 -rotate-6 rounded-xl border border-ink/10 bg-ivory p-2 shadow-[0_25px_50px_-25px_rgba(27,25,143,0.5)] sm:w-36 lg:-left-2">
              <span class="relative block">
                <editorial-image src="/photos/top.webp" label="TOP · FAVORITO" rounded="rounded-lg" />
                <ui-icon name="heart" class="absolute right-2.5 top-2.5 h-4 w-4 text-ink/50" />
              </span>
              <p class="mt-2 font-mono text-[0.55rem] font-bold tracking-[0.14em] text-midnight/70">TOP-014 · TOP NEGRO</p>
            </div>

            <div class="absolute -right-1 bottom-10 z-10 w-32 rotate-6 rounded-xl border border-ink/10 bg-ivory p-2 shadow-[0_25px_50px_-25px_rgba(27,25,143,0.5)] sm:w-36 lg:-right-2">
              <editorial-image src="/photos/hoodie.webp" label="ACCESORIO" rounded="rounded-lg" />
              <p class="mt-2 font-mono text-[0.55rem] font-bold tracking-[0.14em] text-midnight/70">SWE-021 · ZIP HOOD</p>
            </div>

            <!-- Chip "Outfit check" -->
            <div class="absolute right-2 top-12 z-10 flex rotate-2 items-center gap-3 rounded-2xl border border-ink/10 bg-ivory p-3 pr-4 shadow-[0_25px_50px_-25px_rgba(27,25,143,0.5)] lg:right-6 lg:top-20">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-midnight">
                <ui-icon name="sparkles" class="h-5 w-5" />
              </span>
              <span>
                <span class="block text-xs font-bold text-midnight">Outfit check</span>
                <span class="mt-0.5 block font-mono text-[0.56rem] tracking-[0.14em] text-midnight/60">LOOK GUARDADO ✓</span>
              </span>
            </div>

            <!-- Sticker giratorio -->
            <div class="absolute -bottom-4 left-0 z-20 h-24 w-24 sm:h-28 sm:w-28 lg:-left-4 lg:bottom-6 lg:h-32 lg:w-32">
              <svg viewBox="0 0 120 120" class="sticker-spin h-full w-full" aria-hidden="true">
                <circle cx="60" cy="60" r="58" fill="#A9DB1B" />
                <text font-family="'Space Mono', monospace" font-size="10.5" font-weight="700" letter-spacing="1.6" fill="#1E2760">
                  <textPath href="#stickerCircle">CLOSET LOOP ✦ TU ESTILO, TU MUNDO ✦ DALE OTRA VUELTA ✦</textPath>
                </text>
                <g transform="translate(38 41) scale(0.36)">
                  <path d="M60 32C60 25 65 24 67 19 69.5 12.5 63 6.5 57 8.5 51.5 10.5 50.5 17 55 20" fill="none" stroke="#1E2760" stroke-width="9" stroke-linecap="round" />
                  <path d="M60 32 14 62M60 32 106 62M14 62h56" fill="none" stroke="#1E2760" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M69 50.5 91 62 69 73.5Z" fill="#1E2760" />
                  <path d="M99 62h7" fill="none" stroke="#1E2760" stroke-width="9" stroke-linecap="round" />
                  <path d="M67.5 36 83 34.5 74.5 49.5Z" fill="#1E2760" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
