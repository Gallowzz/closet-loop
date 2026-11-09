<script setup lang="ts">
defineProps<{
    label: string;
    tone?: "ink" | "ivory" | "lime";
    dot?: "ink" | "ivory" | "lime";
}>();
</script>
<template>
    <p
        class="inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.24em]"
        :class="
            tone === 'ivory'
                ? 'text-ivory/90'
                : tone === 'lime'
                  ? 'text-lime'
                  : 'text-midnight'
        "
    >
        <span
            class="inline-block h-2 w-2 rotate-45 rounded-[1px]"
            :class="
                dot === 'ink'
                    ? 'bg-ink'
                    : dot === 'ivory'
                      ? 'bg-ivory'
                      : 'bg-lime'
            "
        ></span>
        <span>{{ label }}</span>
    </p>
</template>
