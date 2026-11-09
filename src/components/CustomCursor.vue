<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);

const INDIGO = "#A9DB1B";
const MIDNIGHT = "#A9DB1B";

interface Point {
    x: number;
    y: number;
    time: number;
}

let ctx: CanvasRenderingContext2D | null = null;
let points: Point[] = [];
let mouse = { x: 0, y: 0 };
let visible = false;
let animationId = 0;

const TRAIL_LENGTH = 24;
const TRAIL_WIDTH = 8;
const CURSOR_RADIUS = 5;

function resize() {
    if (!canvas.value || !ctx) return;

    const dpr = window.devicePixelRatio || 1;

    canvas.value.width = window.innerWidth * dpr;
    canvas.value.height = window.innerHeight * dpr;

    canvas.value.style.width = `${window.innerWidth}px`;
    canvas.value.style.height = `${window.innerHeight}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function handleMove(event: PointerEvent) {
    // Only use a real mouse, not touch or pen.
    if (event.pointerType !== "mouse") return;

    mouse.x = event.clientX;
    mouse.y = event.clientY;
    visible = true;

    points.push({
        x: mouse.x,
        y: mouse.y,
        time: performance.now(),
    });

    if (points.length > TRAIL_LENGTH) {
        points.shift();
    }
}

function handleLeave() {
    visible = false;
    points = [];
}

function draw() {
    if (!canvas.value || !ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);

    const now = performance.now();

    // Remove old points.
    points = points.filter((p) => now - p.time < 180);

    if (visible && points.length > 1) {
        for (let i = 1; i < points.length; i++) {
            const previous = points[i - 1];
            const current = points[i];

            const progress = i / (points.length - 1);
            const age = (now - current.time) / 180;

            const alpha = Math.max(0, 1 - age) * progress;
            const lineWidth = TRAIL_WIDTH * progress;

            // Color transitions from Indigo to Midnight.
            const gradient = ctx.createLinearGradient(
                previous.x,
                previous.y,
                current.x,
                current.y,
            );

            gradient.addColorStop(0, INDIGO);
            gradient.addColorStop(1, MIDNIGHT);

            ctx.beginPath();
            ctx.moveTo(previous.x, previous.y);
            ctx.lineTo(current.x, current.y);

            ctx.strokeStyle = gradient;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            // Subtle glow.
            ctx.shadowBlur = 12;
            ctx.shadowColor = MIDNIGHT;

            ctx.stroke();
        }
    }

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    // Cursor head.
    if (visible) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, CURSOR_RADIUS, 0, Math.PI * 2);

        ctx.fillStyle = "#FFFFFF";
        ctx.fill();

        ctx.lineWidth = 2;
        ctx.strokeStyle = INDIGO;
        ctx.stroke();
    }

    animationId = requestAnimationFrame(draw);
}

onMounted(() => {
    if (!canvas.value) return;

    ctx = canvas.value.getContext("2d");
    if (!ctx) return;

    resize();

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerout", (event) => {
        if (!event.relatedTarget) handleLeave();
    });
    window.addEventListener("resize", resize);

    animationId = requestAnimationFrame(draw);
});

onUnmounted(() => {
    cancelAnimationFrame(animationId);

    window.removeEventListener("pointermove", handleMove);
    window.removeEventListener("resize", resize);
});
</script>

<template>
    <canvas ref="canvas" class="custom-cursor" aria-hidden="true" />
</template>

<style scoped>
.custom-cursor {
    position: fixed;
    inset: 0;
    z-index: 99999;
    pointer-events: none;
    user-select: none;
}

@media (hover: hover) and (pointer: fine) {
    :global(body) {
        cursor: none;
    }
}

@media (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce) {
    .custom-cursor {
        display: none;
    }

    :global(body) {
        cursor: auto;
    }
}
</style>
