<script setup lang="ts">
  import { TICKER_ITEMS } from '../data';

</script>

<template>
    <div class="marquee overflow-hidden border-y border-ivory/10 bg-ink py-3.5 text-ivory">
      <div class="marquee-track flex w-max items-center gap-10">
        <ul v-for="n in 2" :key="n" :aria-hidden="n === 2 ? 'true' : 'false'" class="flex items-center gap-10">
          <li v-for="(t, i) in TICKER_ITEMS" :key="i" class="flex items-center gap-10 whitespace-nowrap font-mono text-xs font-bold tracking-[0.24em]">
            {{ t }} <span class="text-lime" aria-hidden="true">✦</span>
          </li>
        </ul>
      </div>
    </div>
</template>
