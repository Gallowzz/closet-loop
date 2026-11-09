<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionEyebrow from './SectionEyebrow.vue';
import GarmentArt from './GarmentArt.vue';
import UiIcon from './UiIcon.vue';

  const shoe = ref('sneaker');
  const hasBag = ref(false);
  const shoeArt = computed(() => shoe.value === 'boots'
    ? { main: '#1E2760', deep: '#1B198F', accent: '#C3B3F1' }
    : { main: '#FFFFFF', deep: '#1E2760', accent: '#A9DB1B' });
  const shoeLabel = computed(() => (shoe.value === 'boots' ? 'BOTAS' : 'SNEAKERS'));
</script>

<template>
    <section id="styling" class="relative scroll-mt-24 overflow-hidden bg-ink py-24 text-ivory lg:py-32" aria-labelledby="styling-title">
      <div class="dots-ivory absolute inset-y-0 right-0 w-1/2 opacity-[0.07] [mask-image:linear-gradient(to_left,black,transparent)]" aria-hidden="true"></div>
      <div class="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div class="grid gap-14 lg:grid-cols-12 lg:gap-10">

          <div class="lg:col-span-5" v-reveal>
            <section-eyebrow label="02 / OUTFIT CHECK" tone="lime" dot="lime" />
            <h2 id="styling-title" class="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.05] tracking-tight">
              ¿Y si pruebas algo <em class="font-serif font-medium italic text-lavender">diferente</em>?
            </h2>
            <p class="mt-5 max-w-md text-ivory/75 lg:text-lg">
              Explora combinaciones, recibe feedback sobre tus outfits y encuentra nuevas formas de expresar tu estilo.
            </p>
            <p class="mt-4 max-w-md font-medium text-lavender/90">
              Nuevas ideas, nuevas combinaciones, más formas de ser tú.
            </p>
            <p class="mt-9 flex items-start gap-2.5 font-mono text-[0.62rem] leading-relaxed tracking-[0.14em] text-ivory/50">
              <ui-icon name="info" class="mt-0.5 h-4 w-4 shrink-0" />
              VISTA PREVIA DE INTERFAZ — EL FEEDBACK DE ESTA DEMO ESTÁ ESCRITO A MANO
            </p>
          </div>

          <div class="lg:col-span-7" v-reveal="{ delay: 0.15, y: 40 }">
            <div class="relative mx-auto w-full max-w-[560px]">
              <!-- Flat-lay del look -->
              <div class="rounded-2xl bg-ivory p-5 text-midnight shadow-[0_50px_100px_-40px_rgba(0,0,25,0.75)] sm:p-7" role="region" aria-label="Vista previa de un look con feedback de estilo">
                <div class="flex items-center justify-between gap-3">
                  <p class="font-mono text-[0.66rem] font-bold tracking-[0.2em]">LOOK #07 — FINDE</p>
                  <span class="rounded-full border border-ink/20 px-2.5 py-1 font-mono text-[0.56rem] font-bold tracking-[0.16em] text-ink/70">SIMULACIÓN</span>
                </div>
                <div class="mt-5 grid grid-cols-2 gap-3">
                  <figure class="rounded-xl bg-lavender/30 p-4">
                    <garment-art type="hoodie" main="#C3B3F1" deep="#1B198F" class="h-28 w-full" />
                    <figcaption class="mt-3 flex items-baseline justify-between font-mono text-[0.58rem] tracking-[0.14em] text-midnight/70">
                      <span>01 · SUDADERA</span><span>L</span>
                    </figcaption>
                  </figure>
                  <figure class="rounded-xl bg-lavender/30 p-4">
                    <garment-art type="jeans" main="#1B198F" deep="#1E2760" accent="#C3B3F1" class="h-28 w-full" />
                    <figcaption class="mt-3 flex items-baseline justify-between font-mono text-[0.58rem] tracking-[0.14em] text-midnight/70">
                      <span>02 · VAQUEROS</span><span>38</span>
                    </figcaption>
                  </figure>
                  <figure class="rounded-xl p-4 transition-colors" :class="shoe === 'boots' ? 'bg-lime/25 ring-2 ring-lime' : 'bg-lavender/30'">
                    <transition name="swap" mode="out-in">
                      <garment-art :key="shoe" :type="shoe" :main="shoeArt.main" :deep="shoeArt.deep" :accent="shoeArt.accent" class="h-28 w-full" />
                    </transition>
                    <figcaption class="mt-3 flex items-baseline justify-between font-mono text-[0.58rem] tracking-[0.14em] text-midnight/70">
                      <span>03 · CALZADO</span><span>{{ shoeLabel }}</span>
                    </figcaption>
                  </figure>
                  <figure v-if="hasBag" class="relative rounded-xl bg-lavender/30 p-4 ring-2 ring-lime">
                    <span class="absolute -top-2.5 left-4 rounded-full bg-lime px-2 py-0.5 font-mono text-[0.52rem] font-bold tracking-[0.14em] text-midnight">CONTRASTE</span>
                    <transition name="swap" appear>
                      <garment-art type="tote" main="#FFFFFF" deep="#1B198F" accent="#A9DB1B" class="h-28 w-full" />
                    </transition>
                    <figcaption class="mt-3 flex items-baseline justify-between font-mono text-[0.58rem] tracking-[0.14em] text-midnight/70">
                      <span>04 · BOLSO</span><span>ÚNICO</span>
                    </figcaption>
                  </figure>
                  <button v-else type="button" @click="hasBag = true"
                          class="flex min-h-[160px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-ink/25 text-ink/50 transition hover:border-ink/50 hover:text-ink"
                          aria-label="Añadir un accesorio al look">
                    <ui-icon name="plus" class="h-5 w-5" />
                    <span class="font-mono text-[0.58rem] tracking-[0.16em]">¿UN ACCESORIO?</span>
                  </button>
                </div>
              </div>

              <!-- Panel de feedback (ejemplo escrito a mano) -->
              <aside class="relative z-10 mx-auto -mt-10 w-[94%] rounded-2xl bg-lavender p-5 text-midnight shadow-[0_30px_70px_-30px_rgba(0,0,30,0.6)] sm:w-[360px] lg:absolute lg:-bottom-14 lg:-left-6 lg:mt-0 lg:w-[330px]">
                <p class="flex items-center gap-2 font-mono text-[0.66rem] font-bold tracking-[0.18em] text-ink">
                  <ui-icon name="sparkles" class="h-4 w-4" />UNA NUEVA PERSPECTIVA
                </p>
                <p class="mt-3 text-sm leading-relaxed">
                  Prueba un accesorio que contraste con los tonos del outfit o cambia el calzado para darle otro carácter.
                </p>
                <p class="mt-4 font-mono text-[0.56rem] font-bold tracking-[0.18em] text-midnight/60">PRUEBA ESTO</p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <button type="button" @click="shoe = shoe === 'boots' ? 'sneaker' : 'boots'" :aria-pressed="shoe === 'boots'"
                          class="rounded-full border-2 px-3.5 py-1.5 text-xs font-bold transition"
                          :class="shoe === 'boots' ? 'border-ink bg-ink text-ivory' : 'border-ink/30 text-ink hover:border-ink'">
                    {{ shoe === 'boots' ? 'Volver a las sneakers' : 'Probar botas negras' }}
                  </button>
                  <button type="button" @click="hasBag = !hasBag" :aria-pressed="hasBag"
                          class="rounded-full border-2 px-3.5 py-1.5 text-xs font-bold transition"
                          :class="hasBag ? 'border-ink bg-ink text-ivory' : 'border-ink/30 text-ink hover:border-ink'">
                    {{ hasBag ? 'Quitar el bolso' : 'Añadir un bolso' }}
                  </button>
                </div>
                <p class="mt-4 border-t border-midnight/15 pt-3 font-mono text-[0.56rem] tracking-[0.14em] text-midnight/60">
                  9.1 — SOLO UNA OPINIÓN · LA MODA ES SUBJETIVA
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
