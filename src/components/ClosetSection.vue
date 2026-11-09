
<script setup lang="ts">
  import { ref, computed, onBeforeUnmount } from 'vue';
  import UiIcon from './UiIcon.vue';
  import SectionEyebrow from './SectionEyebrow.vue';
  import GarmentCard from './GarmentCard.vue';
  import GarmentArt from './GarmentArt.vue';
  import { GARMENTS } from '../data';
  import { CATS } from '../data';

  // Derive the garment type directly from the data source.
  type Garment = (typeof GARMENTS)[number];

  // Reactive state
  const activeCat = ref<string>('todo');
  const query = ref<string>('');

  const selectedIds = ref<Garment['id'][]>([
    'TOP-014',
    'BTM-008',
    'SHO-005'
  ]);

  const maxHint = ref<boolean>(false);
  const saved = ref<boolean>(false);

  // Explicit timeout types
  let maxT: ReturnType<typeof setTimeout> | undefined;
  let saveT: ReturnType<typeof setTimeout> | undefined;

  // Filter garments by category and search query
  const filtered = computed(() =>
    GARMENTS.filter(g =>
      (activeCat.value === 'todo' || g.cat === activeCat.value) &&
      g.name.toLowerCase().includes(query.value.trim().toLowerCase())
    )
  );

  // Retrieve selected garments, excluding missing IDs
  const lookItems = computed(() =>
    selectedIds.value
      .map(id => GARMENTS.find(g => g.id === id))
      .filter((g): g is Garment => g !== undefined)
  );

  // Calculate the number of possible outfit combinations
  const combos = computed(() => {
    const count = (cat: Garment['cat']): number =>
      GARMENTS.filter(g => g.cat === cat).length;

    return count('tops') * count('pantalones') * count('calzado');
  });

  // Toggle garment selection
  function toggle(id: Garment['id']): void {
    maxHint.value = false;

    const i = selectedIds.value.indexOf(id);

    if (i > -1) {
      selectedIds.value.splice(i, 1);
    } else if (selectedIds.value.length < 4) {
      selectedIds.value.push(id);
    } else {
      maxHint.value = true;

      if (maxT !== undefined) clearTimeout(maxT);

      maxT = setTimeout(() => {
        maxHint.value = false;
        maxT = undefined;
      }, 3200);
    }
  }

  // Simulate saving an outfit
  function saveLook(): void {
    saved.value = true;

    if (saveT !== undefined) clearTimeout(saveT);

    saveT = setTimeout(() => {
      saved.value = false;
      saveT = undefined;
    }, 2600);
  }

  // Clean up timers when the component is destroyed
  onBeforeUnmount(() => {
    if (maxT !== undefined) clearTimeout(maxT);
    if (saveT !== undefined) clearTimeout(saveT);
  });
</script>


<template>
    <section id="armario" class="scroll-mt-24 bg-lavender py-24 lg:py-32" aria-labelledby="armario-title">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div class="lg:col-span-7" v-reveal>
            <section-eyebrow label="01 / TU ARMARIO" />
            <h2 id="armario-title" class="mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-bold leading-[1.05] tracking-tight text-ink">
              Tu armario tiene <em class="font-serif font-medium italic">más</em> que ofrecer.
            </h2>
            <p class="mt-5 max-w-xl text-ink/75 lg:text-lg">
              Guarda tus prendas, organiza tus favoritos y descubre nuevas formas de combinar lo que ya tienes.
            </p>
          </div>
          <div class="lg:col-span-5 lg:pb-1" v-reveal="{ delay: 0.12 }">
            <p class="ml-auto max-w-xs border-l-2 border-ink pl-4 text-left font-serif text-lg italic text-midnight">
              “Cada prenda cuenta. Cada combinación abre posibilidades.”
            </p>
            <p class="mt-5 flex items-center justify-start gap-2 font-mono text-[0.66rem] font-bold uppercase tracking-[0.18em] text-midnight/80 lg:justify-end">
              <ui-icon name="arrow-down" class="h-4 w-4 shrink-0" />
              Toca los filtros y las prendas: todo funciona
            </p>
          </div>
        </div>

        <div class="relative mt-14" v-reveal="{ y: 44 }">
          <span class="absolute -top-5 right-6 z-20 rotate-6 rounded-xl bg-lime px-3.5 py-2 font-mono text-[0.66rem] font-bold tracking-[0.2em] text-midnight shadow-[0_10px_30px_-10px_rgba(30,39,96,0.5)]">DEMO INTERACTIVA</span>

          <div class="overflow-hidden rounded-2xl border border-ink/10 bg-ivory shadow-[0_40px_90px_-40px_rgba(30,39,96,0.55)]" role="region" aria-label="Vista previa del armario de Closet Loop">
            <!-- Barra del navegador -->
            <div class="flex items-center gap-3 border-b border-ink/10 bg-ivory px-4 py-3">
              <span class="flex gap-1.5" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-lavender"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-lime"></span>
                <span class="h-2.5 w-2.5 rounded-full bg-ink/20"></span>
              </span>
              <span class="mx-auto hidden rounded-full bg-lavender/30 px-4 py-1 font-mono text-[0.62rem] tracking-[0.12em] text-midnight/70 sm:block">closetloop.app/armario</span>
              <span class="hidden w-14 sm:block" aria-hidden="true"></span>
            </div>

            <div class="flex">
              <!-- Sidebar decorativa del mockup -->
              <div class="hidden w-44 shrink-0 flex-col border-r border-ink/10 bg-lavender/20 p-4 md:flex">
                <p class="px-3 pb-2 font-mono text-[0.58rem] font-bold tracking-[0.2em] text-midnight/50">MENÚ</p>
                <span class="flex items-center gap-2.5 rounded-lg bg-ink px-3 py-2 text-[0.8rem] font-semibold text-ivory">
                  <ui-icon name="shirt" class="h-4 w-4" />Mi armario<span class="ml-auto h-1.5 w-1.5 rounded-full bg-lime"></span>
                </span>
                <span class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.8rem] font-medium text-midnight/60"><ui-icon name="sparkles" class="h-4 w-4" />Looks</span>
                <span class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.8rem] font-medium text-midnight/60"><ui-icon name="heart" class="h-4 w-4" />Guardados</span>
                <span class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.8rem] font-medium text-midnight/60"><ui-icon name="repeat" class="h-4 w-4" />El Loop</span>
                <p class="mt-auto px-3 font-mono text-[0.56rem] tracking-[0.14em] text-midnight/50">{{ GARMENTS.length }} PRENDAS · DEMO LOCAL</p>
              </div>

              <!-- Zona principal: búsqueda + filtros + rejilla -->
              <div class="min-w-0 flex-1 p-4 sm:p-6">
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="text-lg font-bold text-midnight">Mi armario</h3>
                  <label class="relative ml-auto block w-full max-w-[220px]">
                    <span class="sr-only">Buscar prendas en tu armario</span>
                    <ui-icon name="search" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-midnight/40" />
                    <input v-model="query" type="search" placeholder="Buscar…"
                           class="h-9 w-full rounded-full border border-ink/15 bg-ivory pl-9 pr-3 text-xs text-midnight placeholder:text-midnight/40 focus:border-ink focus:outline-none" />
                  </label>
                </div>

                <div class="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filtrar prendas por categoría">
                  <button v-for="c in CATS" :key="c.value" type="button" @click="activeCat = c.value" :aria-pressed="activeCat === c.value"
                          class="rounded-full px-4 py-1.5 text-xs font-semibold transition"
                          :class="activeCat === c.value ? 'bg-ink text-ivory' : 'border border-ink/15 text-midnight/70 hover:border-ink/40 hover:text-ink'">
                    {{ c.label }}
                  </button>
                </div>

                <transition-group tag="div" name="cards" class="relative mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                  <garment-card v-for="g in filtered" :key="g.id" :item="g"
                                :selected="selectedIds.includes(g.id)" @toggle="toggle(g.id)" />
                </transition-group>
                <p v-if="!filtered.length" class="mt-6 rounded-xl border border-dashed border-ink/20 p-8 text-center text-sm text-midnight/60">
                  Nada por aquí con «{{ query }}». Prueba con otra palabra o categoría.
                </p>
              </div>

              <!-- Panel "Tu look" (desktop) -->
              <div class="hidden w-60 shrink-0 flex-col border-l border-ink/10 bg-ink p-5 text-ivory lg:flex">
                <p class="flex items-center gap-2 font-mono text-[0.66rem] font-bold tracking-[0.2em] text-lime">
                  <ui-icon name="sparkles" class="h-4 w-4" />TU LOOK
                </p>
                <transition-group tag="ul" name="look" class="mt-4 flex flex-1 flex-col gap-2">
                  <li v-for="g in lookItems" :key="g.id" class="flex items-center gap-3 rounded-lg bg-ivory/10 p-2">
                    <span class="h-10 w-10 shrink-0 rounded-md bg-lavender/20 p-1">
                      <garment-art :type="g.type" :main="g.main" :deep="g.deep" :accent="g.accent" class="h-full w-full" />
                    </span>
                    <span class="min-w-0">
                      <span class="block truncate text-xs font-semibold">{{ g.name }}</span>
                      <span class="block font-mono text-[0.56rem] tracking-[0.12em] text-ivory/50">{{ g.id }}</span>
                    </span>
                    <button type="button" @click="toggle(g.id)" class="ml-auto shrink-0 text-ivory/50 transition hover:text-lime"
                            :aria-label="'Quitar ' + g.name + ' del look'">
                      <ui-icon name="x" class="h-4 w-4" />
                    </button>
                  </li>
                </transition-group>
                <p v-if="!lookItems.length" class="mt-4 text-xs text-ivory/60">Elige prendas del armario y arma tu primera combinación.</p>
                <p class="mt-3 font-mono text-[0.6rem] tracking-[0.14em] text-ivory/50">{{ lookItems.length }}/4 PRENDAS · {{ combos }} COMB. BASE</p>
                <p v-if="maxHint" class="mt-2 rounded-md bg-lime/15 px-2.5 py-1.5 text-[0.68rem] text-lime" role="status">Máximo 4 prendas: quita una para añadir otra.</p>
                <button type="button" @click="saveLook"
                        class="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-lime px-4 text-sm font-bold text-midnight transition hover:bg-ivory">
                  <transition name="fade" mode="out-in">
                    <span :key=1 class="inline-flex items-center gap-2">
                      <ui-icon :name="saved ? 'check' : 'plus'" class="h-4 w-4" />{{ saved ? 'Look guardado' : 'Guardar look' }}
                    </span>
                  </transition>
                </button>
                <p class="mt-3 text-center font-mono text-[0.54rem] tracking-[0.14em] text-ivory/40">DEMO — NADA SALE DE TU NAVEGADOR</p>
              </div>
            </div>

            <!-- Barra "Tu look" en móvil -->
            <div class="flex items-center gap-3 border-t border-ink/10 bg-ink p-4 text-ivory lg:hidden">
              <p class="shrink-0 font-mono text-[0.64rem] font-bold tracking-[0.18em] text-lime">TU LOOK · {{ lookItems.length }}/4</p>
              <div class="flex flex-1 gap-2 overflow-x-auto">
                <span v-for="g in lookItems" :key="g.id" class="shrink-0 rounded-full bg-ivory/10 px-3 py-1 text-[0.68rem] font-medium">{{ g.name }}</span>
                <span v-if="!lookItems.length" class="whitespace-nowrap text-xs text-ivory/60">Toca prendas para armar tu look</span>
              </div>
              <button type="button" @click="saveLook" class="shrink-0 rounded-full bg-lime px-3.5 py-1.5 text-xs font-bold text-midnight">
                {{ saved ? '✓' : 'Guardar' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
