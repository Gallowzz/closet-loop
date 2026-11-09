<script setup lang="ts">
  import { ref } from 'vue';
  import { joinWaitlist } from '../data';
  import UiIcon from './UiIcon.vue';

  const email = ref('');
  const state = ref('idle'); // idle | loading | success
  const error = ref('');

  async function submit() {
    if (state.value === 'loading') return;
    error.value = '';
    const v = email.value.trim();
    if (!v) { error.value = 'Escribe tu correo para unirte al loop.'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { error.value = 'Ese correo no parece válido. Revísalo.'; return; }
    state.value = 'loading';
    try {
      const res = await joinWaitlist(v);
      if (res && res.ok) state.value = 'success';
      else { state.value = 'idle'; error.value = 'No se ha podido registrar. Inténtalo de nuevo.'; }
    } catch (e) {
      state.value = 'idle';
      error.value = 'No se ha podido registrar. Inténtalo de nuevo.';
    }
  }
  function reset() { state.value = 'idle'; email.value = ''; error.value = ''; }
</script>

<template>
    <div>
      <form v-if="state !== 'success'" novalidate class="mx-auto max-w-xl text-left" @submit.prevent="submit">
        <label for="wl-email" class="font-mono text-[0.64rem] font-bold tracking-[0.22em] text-lime">TU CORREO ELECTRÓNICO</label>
        <div class="mt-3 flex flex-col gap-3 sm:flex-row">
          <input id="wl-email" v-model.trim="email" @input="error = ''" type="email" name="email" autocomplete="email"
                 placeholder="Tu correo electrónico"
                 :aria-invalid="error ? 'true' : 'false'" :aria-describedby="error ? 'wl-error' : 'wl-hint'"
                 class="h-14 w-full flex-1 rounded-xl border-2 bg-ivory px-5 text-base font-medium text-midnight outline-none transition placeholder:text-midnight/40"
                 :class="error ? 'border-lime' : 'border-transparent'">
          <button type="submit" :disabled="state === 'loading'"
                  class="inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-lime px-7 text-sm font-bold text-midnight transition hover:bg-ivory disabled:cursor-wait disabled:opacity-80">
            <span v-if="state === 'loading'" class="h-4 w-4 animate-spin rounded-full border-2 border-midnight/30 border-t-midnight" aria-hidden="true"></span>
            {{ state === 'loading' ? 'Enviando…' : 'Quiero estar en la lista' }}
            <ui-icon v-if="state !== 'loading'" name="arrow-right" class="h-4 w-4" />
          </button>
        </div>
        <p id="wl-hint" class="mt-3 text-sm text-ivory/70">
          Entérate del lanzamiento y sé de las primeras personas en conocer Closet Loop.
        </p>
        <p v-if="error" id="wl-error" class="mt-2 flex items-center gap-2 text-sm font-medium text-lime" aria-live="polite">
          <ui-icon name="info" class="h-4 w-4 shrink-0" />{{ error }}
        </p>
        <p class="mt-5 font-mono text-[0.58rem] tracking-[0.14em] text-ivory/40">SIN SPAM — SOLO TE ESCRIBIREMOS PARA EL LANZAMIENTO</p>
      </form>

      <div v-else role="status" class="mx-auto max-w-xl rounded-2xl border border-lime/40 bg-ivory/5 p-8 text-center">
        <ui-icon name="circle-check" class="mx-auto h-11 w-11 text-lime" />
        <h3 class="mt-4 text-2xl font-bold text-ivory">¡Estás dentro del loop!</h3>
        <p class="mt-3 text-sm leading-relaxed text-ivory/70">
          Esta es una demo sin servidor: tu correo no se ha enviado a ningún sitio y no lo guardamos.
        </p>
        <p class="mt-4 font-mono text-[0.58rem] tracking-[0.16em] text-lime/90">CONECTA AQUÍ TU PROVEEDOR DE LISTAS CUANDO LANCEMOS</p>
        <button type="button" @click="reset" class="mt-5 text-sm font-semibold text-ivory/80 underline underline-offset-4 transition hover:text-ivory">
          Añadir otro correo
        </button>
      </div>
    </div>
</template>
