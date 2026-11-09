<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import { NAV_LINKS } from "../data";
import BrandLogo from "./BrandLogo.vue";
import UiIcon from "./UiIcon.vue";

const open = ref(false);
const scrolled = ref(false);
const closeBtn = ref<HTMLButtonElement | null>(null);

const onScroll = () => {
    scrolled.value = window.scrollY > 10;
};
const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") open.value = false;
};

watch(open, (v) => {
    document.documentElement.classList.toggle("overflow-hidden", v);
    if (v) {
        window.addEventListener("keydown", onKey);
        nextTick(() => closeBtn.value && closeBtn.value.focus());
    } else {
        window.removeEventListener("keydown", onKey);
    }
});
onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("keydown", onKey);
});
</script>
<template>
    <header
        class="fixed inset-x-0 top-0 z-40 transition-all duration-300"
        :class="
            scrolled
                ? 'bg-ivory/85 shadow-[0_1px_0_rgba(27,25,143,0.08)] backdrop-blur-md'
                : 'bg-ivory/50 backdrop-blur-sm'
        "
    >
        <div
            class="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8"
        >
            <a href="#top" aria-label="Closet Loop — volver al inicio"
                ><brand-logo
            /></a>
            <nav
                class="hidden items-center gap-8 md:flex"
                aria-label="Navegación principal"
            >
                <a
                    v-for="l in NAV_LINKS"
                    :key="l.href"
                    :href="l.href"
                    class="group relative text-sm font-semibold text-midnight transition hover:text-ink"
                >
                    {{ l.label }}
                    <span
                        class="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded bg-lime transition-transform duration-300 group-hover:scale-x-100"
                    ></span>
                </a>
            </nav>
            <div class="flex items-center gap-3">
                <a
                    href="#lista-espera"
                    class="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-ivory transition hover:bg-midnight sm:inline-flex"
                >
                    Quiero entrar <ui-icon name="arrow-right" class="h-4 w-4" />
                </a>
                <button
                    type="button"
                    class="flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-lavender/40 md:hidden"
                    @click="open = true"
                    aria-expanded="false"
                    aria-controls="menu-movil"
                    aria-label="Abrir menú"
                >
                    <ui-icon name="menu" class="h-6 w-6" />
                </button>
            </div>
        </div>
        <teleport to="body">
            <transition name="menu">
                <div
                    v-if="open"
                    id="menu-movil"
                    class="fixed inset-0 z-[60] flex flex-col bg-ink px-6 pb-10 pt-4 text-ivory"
                >
                    <div class="flex h-[64px] items-center justify-between">
                        <brand-logo light />
                        <button
                            ref="closeBtn"
                            type="button"
                            @click="open = false"
                            class="flex h-11 w-11 items-center justify-center rounded-full text-ivory transition hover:bg-ivory/10"
                            aria-label="Cerrar menú"
                        >
                            <ui-icon name="x" class="h-6 w-6" />
                        </button>
                    </div>
                    <nav
                        class="mt-8 flex flex-col"
                        aria-label="Navegación móvil"
                    >
                        <a
                            v-for="(l, i) in NAV_LINKS"
                            :key="l.href"
                            :href="l.href"
                            @click="open = false"
                            class="group flex items-center justify-between border-b border-ivory/15 py-5"
                        >
                            <span class="flex items-baseline gap-4">
                                <span class="font-mono text-xs text-lime"
                                    >0{{ i + 1 }}</span
                                >
                                <span
                                    class="text-3xl font-bold tracking-tight transition group-hover:text-lime"
                                    >{{ l.label }}</span
                                >
                            </span>
                            <ui-icon
                                name="arrow-up-right"
                                class="h-6 w-6 text-ivory/50 transition group-hover:text-lime"
                            />
                        </a>
                    </nav>
                    <div class="mt-auto">
                        <a
                            href="#lista-espera"
                            @click="open = false"
                            class="flex h-14 items-center justify-center gap-2 rounded-xl bg-lime text-sm font-bold text-midnight transition hover:bg-ivory"
                        >
                            Quiero entrar
                            <ui-icon name="arrow-right" class="h-4 w-4" />
                        </a>
                        <p
                            class="mt-5 text-center font-mono text-[0.6rem] tracking-[0.22em] text-ivory/50"
                        >
                            TU ESTILO, TU MUNDO — CL·2025
                        </p>
                    </div>
                </div>
            </transition>
        </teleport>
    </header>
</template>
