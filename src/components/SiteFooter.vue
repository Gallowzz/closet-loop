<script setup lang="ts">
import { NAV_LINKS } from "../data";
import BrandLogo from "./BrandLogo.vue";
</script>
<template>
    <footer class="border-t border-ivory/10 bg-midnight pb-10 pt-16 text-ivory">
        <div class="mx-auto max-w-7xl px-5 lg:px-8">
            <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <brand-logo light />
                    <p
                        class="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60"
                    >
                        Una nueva forma de vivir tu armario: organizarlo,
                        exprimirlo y darle vueltas sin parar.
                    </p>
                </div>
                <nav aria-label="Pie de página">
                    <p
                        class="font-mono text-[0.62rem] font-bold tracking-[0.22em] text-lime"
                    >
                        SECCIONES
                    </p>
                    <ul class="mt-4 space-y-2.5">
                        <li v-for="l in NAV_LINKS" :key="l.href">
                            <a
                                :href="l.href"
                                class="text-sm text-ivory/75 transition hover:text-lime"
                                >{{ l.label }}</a
                            >
                        </li>
                        <li>
                            <a
                                href="#lista-espera"
                                class="text-sm text-ivory/75 transition hover:text-lime"
                                >Lista de espera</a
                            >
                        </li>
                    </ul>
                </nav>
                <div>
                    <p
                        class="font-mono text-[0.62rem] font-bold tracking-[0.22em] text-lime"
                    >
                        EL ESTUDIO
                    </p>
                    <ul
                        class="mt-4 space-y-2.5 font-mono text-[0.68rem] tracking-[0.12em] text-ivory/50"
                    >
                        <li>CL — EST. 2026</li>
                        <li>5 COLORES, CERO POSTUREO</li>
                        <li>HONDURAS · INTERNET</li>
                    </ul>
                </div>
            </div>
            <div
                class="mt-14 flex flex-col gap-3 border-t border-ivory/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
            >
                <p class="text-xs text-ivory/50">
                    © {{ new Date().getFullYear() }} Closet Loop. Todos los
                    derechos reservados.
                </p>
                <p
                    class="font-mono text-[0.56rem] tracking-[0.14em] text-ivory/35"
                >
                    LOS EJEMPLOS DE ESTA PÁGINA SON CONTENIDO DE MUESTRA — NADA
                    SE ENVÍA NI SE VENDE AQUÍ
                </p>
            </div>
        </div>
    </footer>
</template>
