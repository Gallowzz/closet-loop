<script setup lang="ts">
  import { ACTIVITIES } from '../data';
  import GarmentArt from './GarmentArt.vue';
  import SectionEyebrow from './SectionEyebrow.vue';
  import UiIcon from './UiIcon.vue';
</script>

<template>
    <section id="marketplace" class="relative scroll-mt-24 overflow-hidden bg-ivory py-24 lg:py-32" aria-labelledby="loop-title">
      <span aria-hidden="true" class="pointer-events-none absolute -right-8 top-2 hidden select-none font-serif text-[15rem] italic leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(27,25,143,0.08)] lg:block">loop</span>
      <div class="relative mx-auto max-w-7xl px-5 lg:px-8">

        <div class="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-7" v-reveal>
            <section-eyebrow label="03 / THE LOOP" />
            <h2 id="loop-title" class="mt-5 max-w-2xl text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-ink">
              Lo que ya no va contigo puede ser el <em class="font-serif font-medium italic">próximo favorito</em> de alguien.
            </h2>
          </div>
          <div class="lg:col-span-5 lg:pb-1" v-reveal="{ delay: 0.12 }">
            <p class="max-w-md text-ink/75 lg:text-lg">
              Encuentra nuevas piezas, vende lo que ya no usas o intercambia prendas para renovar tu estilo sin empezar de cero.
            </p>
            <p class="mt-3 font-serif text-lg italic text-midnight">“Dale otra vuelta a tu ropa. Y a tu forma de consumir moda.”</p>
          </div>
        </div>

        <!-- Viaje de una prenda: listado → loop → nuevo armario -->
        <div class="relative mt-16" v-reveal="{ y: 40 }">
          <div class="absolute left-10 right-10 top-1/2 hidden -translate-y-1/2 border-t-2 border-dashed border-ink/20 lg:block" aria-hidden="true"></div>
          <div class="relative grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">

            <figure class="relative z-10 mx-auto w-64 -rotate-2 rounded-2xl border border-ink/10 bg-ivory p-4 shadow-[0_30px_60px_-30px_rgba(27,25,143,0.4)] transition duration-300 hover:rotate-0 hover:shadow-[0_40px_80px_-30px_rgba(27,25,143,0.5)]">
              <span class="block rounded-xl bg-lavender/30 p-3">
                <garment-art type="jeans" main="#C3B3F1" deep="#1B198F" accent="#1B198F" class="h-32 w-full" />
              </span>
              <figcaption class="mt-3">
                <p class="text-sm font-bold text-midnight">Vaqueros rectos</p>
                <p class="mt-0.5 font-mono text-[0.56rem] tracking-[0.14em] text-midnight/60">T.38 · BTM-022 · LISTING #1042</p>
                <div class="mt-3 flex items-center gap-2">
                  <span class="rounded-full bg-ink px-3 py-1 text-xs font-bold text-ivory">18 €</span>
                  <span class="inline-flex items-center gap-1.5 rounded-full border-2 border-lime px-3 py-1 text-[0.66rem] font-bold text-midnight">
                    <span class="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true"></span>INTERCAMBIO
                  </span>
                </div>
              </figcaption>
            </figure>

            <div class="relative z-10 mx-auto flex flex-col items-center gap-2 text-center">
              <span class="flex h-16 w-16 items-center justify-center rounded-full bg-lime text-midnight shadow-[0_15px_40px_-15px_rgba(169,219,27,0.9)]">
                <ui-icon name="repeat" class="h-7 w-7" />
              </span>
              <p class="font-mono text-[0.62rem] font-bold tracking-[0.2em] text-ink">EL LOOP</p>
              <p class="max-w-[160px] text-xs leading-relaxed text-midnight/70">de un armario a otro, sin paradas</p>
            </div>

            <figure class="relative z-10 mx-auto w-64 rotate-2 rounded-2xl bg-lavender p-4 shadow-[0_30px_60px_-30px_rgba(27,25,143,0.4)] transition duration-300 hover:rotate-0">
              <p class="font-mono text-[0.58rem] font-bold tracking-[0.18em] text-ink">NUEVO PROPIETARIO</p>
              <div class="mt-3 flex items-end justify-center gap-1 rounded-xl bg-ivory/70 p-3">
                <garment-art type="tee" main="#FFFFFF" deep="#1E2760" class="h-20 w-1/2" />
                <garment-art type="jeans" main="#C3B3F1" deep="#1B198F" accent="#1B198F" class="h-20 w-1/2" />
              </div>
              <figcaption class="mt-3 text-xs leading-relaxed text-midnight">
                Tu prenda sigue su vuelta: ahora brilla en otro armario.
              </figcaption>
            </figure>
          </div>
          <p class="mt-6 text-center font-mono text-[0.56rem] tracking-[0.16em] text-midnight/50">
            * LISTADOS DE EJEMPLO — EL MERCADO ABRE CON EL LANZAMIENTO
          </p>
        </div>

        <!-- Tres actividades, composición editorial -->
        <ul class="mt-20 border-t border-ink/15">
          <li v-for="(a, i) in ACTIVITIES" :key="a.title" v-reveal="{ delay: i * 0.08 }"
              class="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-ink/15 px-2 py-7 transition-colors hover:bg-lavender/25 sm:gap-8 sm:px-4">
            <span class="w-14 shrink-0 font-serif text-4xl italic text-ink/25 transition-colors group-hover:text-ink sm:text-5xl">0{{ i + 1 }}</span>
            <div class="min-w-0">
              <h3 class="flex items-center gap-3 text-xl font-bold text-ink sm:text-2xl">
                <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" :class="a.chip">
                  <ui-icon :name="a.icon" class="h-4 w-4" />
                </span>
                {{ a.title }}
              </h3>
              <p class="mt-1.5 max-w-lg text-sm text-ink/70 sm:text-[0.95rem]">{{ a.text }}</p>
            </div>
            <ui-icon name="arrow-up-right" class="h-6 w-6 shrink-0 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
          </li>
        </ul>

        <a href="#lista-espera" class="mt-10 inline-flex items-center gap-2 font-bold text-ink underline-offset-4 hover:underline" v-reveal>
          Quiero dar mi primera vuelta <ui-icon name="arrow-right" class="h-4 w-4" />
        </a>
      </div>
    </section>
</template>
