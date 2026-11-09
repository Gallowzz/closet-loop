<script setup lang="ts">
import { computed } from "vue";
const props = withDefaults(
    defineProps<{
        src?: string;
        alt?: string;
        label?: string;
        ratio?: string;
        rounded?: string;
        eager?: boolean;
    }>(),
    {
        alt: "Fotografía de la campaña de Closet Loop",
        label: "FOTO",
        ratio: "4 / 5",
        rounded: "rounded-xl",
        eager: false,
    },
);
const ratioChip = computed(() => props.ratio.replace(/\s*\/\s*/, ":"));
</script>

<template>
    <span
        class="relative block w-full overflow-hidden bg-lavender/45"
        :class="rounded"
        :style="{ aspectRatio: ratio }"
    >
        <img
            v-if="src"
            :src="src"
            :alt="alt"
            decoding="async"
            :loading="eager ? 'eager' : 'lazy'"
            class="absolute inset-0 h-full w-full object-cover"
        />
        <span
            v-else
            class="dots-ink absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center"
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 120 100"
                fill="none"
                class="h-8 w-auto text-ink/45"
            >
                <path
                    d="M60 32C60 25 65 24 67 19 69.5 12.5 63 6.5 57 8.5 51.5 10.5 50.5 17 55 20"
                    stroke="currentColor"
                    stroke-width="7"
                    stroke-linecap="round"
                />
                <path
                    d="M60 32 14 62M60 32 106 62M14 62h56"
                    stroke="currentColor"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path d="M69 50.5 91 62 69 73.5Z" fill="currentColor" />
                <path
                    d="M99 62h7"
                    stroke="currentColor"
                    stroke-width="7"
                    stroke-linecap="round"
                />
                <path d="M67.5 36 83 34.5 74.5 49.5Z" fill="currentColor" />
            </svg>
            <span
                class="font-mono text-[0.58rem] font-bold tracking-[0.2em] text-ink/55"
                >{{ label }}</span
            >
            <span
                class="rounded-full bg-ivory/80 px-2 py-0.5 font-mono text-[0.5rem] tracking-[0.16em] text-midnight/60"
                >{{ ratioChip }}</span
            >
        </span>
    </span>
</template>
