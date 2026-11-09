<script setup lang="ts">
  import SiteHeader from './components/SiteHeader.vue';
  import HeroSection from './components/HeroSection.vue';
  import TickerStrip from './components/TickerStrip.vue';
  import ClosetSection from './components/ClosetSection.vue';
  import StylingSection from './components/StylingSection.vue';
  import MarketplaceSection from './components/MarketplaceSection.vue';
  import WaitlistSection from './components/WaitlistSection.vue';
  import SiteFooter from './components/SiteFooter.vue';
  import CustomCursor from './components/CustomCursor.vue';
</script>

<template>
  <custom-cursor/>

  <svg width="0" height="0" class="absolute" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="gradChrome" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#EFEBFF" />
        <stop offset="0.42" stop-color="#C3B3F1" />
        <stop offset="0.56" stop-color="#8C85DE" />
        <stop offset="1" stop-color="#1B198F" />
      </linearGradient>
      <path id="stickerCircle" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
    </defs>
  </svg>

  <a href="#contenido" class="skip-link">Saltar al contenido</a>

  <noscript>
    <p style="padding:4rem 1.5rem;text-align:center;font-family:sans-serif">Closet Loop es una demo interactiva y necesita JavaScript para mostrarse.</p>
  </noscript>

  <site-header />

  <main id="contenido">
    <hero-section />
    <ticker-strip />
    <closet-section />
    <styling-section />
    <marketplace-section />
    <waitlist-section />
  </main>

  <site-footer />
</template>
