<script setup lang="ts">
import type { Garment } from "../data";
import UiIcon from "./UiIcon.vue";
import GarmentArt from "./GarmentArt.vue";

defineProps<{ item: Garment; selected: boolean }>();
defineEmits<{ (e: "toggle"): void }>();
</script>
<template>
    <button
        type="button"
        @click="$emit('toggle')"
        :aria-pressed="selected"
        :aria-label="
            (selected ? 'Quitar ' : 'Añadir ') + item.name + ' a tu look'
        "
        class="group relative flex flex-col rounded-xl border bg-lavender/25 p-3 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(30,39,96,0.45)]"
        :class="selected ? 'border-ink ring-2 ring-ink' : 'border-ink/10'"
    >
        <span
            v-if="selected"
            class="absolute -right-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-lime text-midnight shadow"
        >
            <ui-icon name="check" class="h-4 w-4" />
        </span>
        <garment-art
            :type="item.type"
            :main="item.main"
            :deep="item.deep"
            :accent="item.accent"
            class="h-24 w-full"
        />
        <span class="mt-3 block">
            <span
                class="block text-[0.8rem] font-semibold leading-tight text-midnight"
                >{{ item.name }}</span
            >
            <span
                class="mt-1 block font-mono text-[0.6rem] tracking-[0.14em] text-midnight/60"
                >{{ item.id }} · T.{{ item.size }}</span
            >
        </span>
    </button>
</template>
