<script setup lang="ts">
defineProps<{ light?: boolean }>();
</script>
<template>
    <span
        class="inline-flex items-center gap-2.5"
        :class="light ? 'text-ivory' : 'text-ink'"
    >
        <svg
            viewBox="0 0 120 100"
            fill="none"
            aria-hidden="true"
            class="h-9 w-auto"
        >
            <path
                d="M60 32C60 25 65 24 67 19 69.5 12.5 63 6.5 57 8.5 51.5 10.5 50.5 17 55 20"
                stroke="currentColor"
                stroke-width="8"
                stroke-linecap="round"
            />
            <path
                d="M60 32 14 62M60 32 106 62M14 62h56"
                stroke="currentColor"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M69 50.5 91 62 69 73.5Z" fill="currentColor" />
            <path
                d="M99 62h7"
                stroke="currentColor"
                stroke-width="8"
                stroke-linecap="round"
            />
            <path d="M67.5 36 83 34.5 74.5 49.5Z" fill="currentColor" />
        </svg>
        <span
            class="flex items-baseline whitespace-nowrap font-sans text-[1.4rem] font-bold leading-none tracking-tight"
        >
            Closet&nbsp;L<svg
                viewBox="0 0 29 20"
                aria-hidden="true"
                class="mx-[0.02em] h-[0.62em] w-auto translate-y-[0.05em]"
            >
                <circle
                    cx="9.5"
                    cy="10"
                    r="6.4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3.2"
                />
                <circle
                    cx="19.5"
                    cy="10"
                    r="6.4"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3.2"
                /></svg
            >p
        </span>
    </span>
</template>
