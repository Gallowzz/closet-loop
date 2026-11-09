<script setup lang="ts">
import { computed } from "vue";
import { ICONS } from "../data";

const props = defineProps<{ name: string }>();
const paths = computed(() => {
    const raw = ICONS[props.name];
    return raw ? raw.split("|") : [];
});
</script>

<template>
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
    >
        <path v-for="(d, i) in paths" :key="i" :d="d" />
    </svg>
</template>
