<script setup lang="ts">
  defineProps<{ type: string; main?: string; deep?: string; accent?: string }>();
</script>
<template>
    <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <!-- Camiseta -->
        <g v-if="type === 'tee'">
            <path
                d="M36 28 52 20C55 27 65 27 68 20L84 28 96 46 83 54 83 98 37 98 37 54 24 46Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path
                d="M52 20C55 27 65 27 68 20"
                :stroke="deep"
                stroke-width="3"
                stroke-linecap="round"
            />
            <path
                d="M50 51 46.5 61M70 51 73.5 61"
                :stroke="deep"
                stroke-width="2.5"
                stroke-linecap="round"
            />
            <path
                d="M40 91H80"
                :stroke="deep"
                stroke-width="2"
                stroke-dasharray="1 6"
                stroke-linecap="round"
            />
        </g>
        <!-- Camisa -->
        <g v-else-if="type === 'shirt'">
            <path
                d="M35 35 48 25 60 33 72 25 85 35 83 98 37 98Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path d="M48 25 60 33 53 41Z" :fill="deep" />
            <path d="M72 25 60 33 67 41Z" :fill="deep" />
            <path d="M60 41V98" :stroke="deep" stroke-width="2" />
            <path
                d="M60 51h.01M60 63h.01M60 75h.01M60 87h.01"
                :stroke="deep"
                stroke-width="3.5"
                stroke-linecap="round"
            />
            <rect
                x="43"
                y="50"
                width="11"
                height="11"
                rx="2"
                :stroke="deep"
                stroke-width="2"
            />
        </g>
        <!-- Sudadera -->
        <g v-else-if="type === 'hoodie'">
            <path
                d="M44 30C46 17 74 17 76 30 70 36 50 36 44 30Z"
                :fill="deep"
            />
            <path
                d="M28 44C28 35 37 31 44 30 50 37 70 37 76 30 83 31 92 35 92 44L94 98 26 98Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path
                d="M47 68H73L69 87H51Z"
                :stroke="deep"
                stroke-width="2.5"
                stroke-linejoin="round"
            />
            <path
                d="M55 38V48M65 38V48"
                :stroke="deep"
                stroke-width="2.5"
                stroke-linecap="round"
            />
        </g>
        <!-- Top de tirantes -->
        <g v-else-if="type === 'tank'">
            <path
                d="M46 22 52 22 52 33C56 37 64 37 68 33L68 22 74 22 74 36C80 45 82 55 82 64L82 98 38 98 38 64C38 55 40 45 46 36Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path
                d="M52 33C56 37 64 37 68 33"
                :stroke="deep"
                stroke-width="2.5"
            />
            <path
                d="M42 91H78"
                :stroke="deep"
                stroke-width="2"
                stroke-dasharray="1 6"
                stroke-linecap="round"
            />
        </g>
        <!-- Jeans -->
        <g v-else-if="type === 'jeans'">
            <path
                d="M38 24H82L85 42 79 98H64L60 56 56 98H41L35 42Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path d="M38 33H82" :stroke="deep" stroke-width="2.5" />
            <path d="M60 33V47" :stroke="deep" stroke-width="2" />
            <path
                d="M60 28h.01"
                :stroke="deep"
                stroke-width="4"
                stroke-linecap="round"
            />
            <path
                d="M41 36C45 43 48 45 51 46M79 36C75 43 72 45 69 46"
                :stroke="deep"
                stroke-width="2"
            />
            <path
                d="M36 44 42 94M84 44 78 94"
                :stroke="accent"
                stroke-width="2"
                stroke-dasharray="2 5"
                stroke-linecap="round"
            />
        </g>
        <!-- Cargo -->
        <g v-else-if="type === 'cargo'">
            <path
                d="M36 24H84L86 42 82 98H64L60 60 56 98H38L34 42Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path d="M36 33H84" :stroke="deep" stroke-width="2.5" />
            <path
                d="M37 54H48V67H37ZM72 54H83V67H72Z"
                :stroke="deep"
                stroke-width="2"
                stroke-linejoin="round"
            />
            <path d="M37 60H48M72 60H83" :stroke="deep" stroke-width="2" />
            <path
                d="M40 91H53M67 91H80"
                :stroke="deep"
                stroke-width="2.5"
                stroke-linecap="round"
            />
            <path
                d="M60 28h.01"
                :stroke="deep"
                stroke-width="4"
                stroke-linecap="round"
            />
        </g>
        <!-- Pantalón de vestir -->
        <g v-else-if="type === 'trousers'">
            <path
                d="M40 24H80L84 44 74 98H62L60 58 58 98H46L36 44Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path d="M40 33H80" :stroke="deep" stroke-width="2.5" />
            <path
                d="M51 42 48.5 92M69 42 71.5 92"
                :stroke="deep"
                stroke-width="1.5"
            />
            <path
                d="M60 28h.01"
                :stroke="deep"
                stroke-width="4"
                stroke-linecap="round"
            />
        </g>
        <!-- Sneakers -->
        <g v-else-if="type === 'sneaker'">
            <path
                d="M20 76C21 63 31 57 43 54 53 51.5 59 45 69 41 83 35.5 97 43 99.5 55 101 62 101 70 101 76Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path
                d="M17 76H102C104 81 100.5 86 93 86H26C19 86 15 81 17 76Z"
                :fill="deep"
            />
            <path
                d="M20 81.5H99"
                :stroke="accent"
                stroke-width="3"
                stroke-linecap="round"
            />
            <path
                d="M45 59 56 53M49 65 61 59M53 71 66 65"
                :stroke="deep"
                stroke-width="2.5"
                stroke-linecap="round"
            />
        </g>
        <!-- Botas -->
        <g v-else-if="type === 'boot'">
            <path
                d="M44 24H68V58C80 60 92 65 95 73 96.5 78 93 82 86 82H44Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path
                d="M50 18H62V24H50Z"
                :fill="main"
                :stroke="deep"
                stroke-width="2.5"
                stroke-linejoin="round"
            />
            <path
                d="M51 31V53M59 31V53"
                :stroke="deep"
                stroke-width="2"
                stroke-linecap="round"
            />
            <path
                d="M40 82H90C94 82 94.5 89 90 89H44C39.5 89 38.5 82 40 82Z"
                :fill="deep"
            />
        </g>
        <!-- Gafas -->
        <g v-else-if="type === 'sunglasses'">
            <path
                d="M22 52H52V64C52 71 46 75 37 75 28 75 22 70 22 63Z"
                :fill="deep"
            />
            <path
                d="M98 52H68V64C68 71 74 75 83 75 92 75 98 70 98 63Z"
                :fill="deep"
            />
            <path
                d="M52 58C55 54 65 54 68 58"
                :stroke="deep"
                stroke-width="3"
                stroke-linecap="round"
            />
            <path
                d="M22 56 11 49M98 56 109 49"
                :stroke="deep"
                stroke-width="3"
                stroke-linecap="round"
            />
            <path
                d="M28 57C30 53 34 52 38 53M92 57C90 53 86 52 82 53"
                :stroke="accent"
                stroke-width="2.5"
                stroke-linecap="round"
            />
        </g>
        <!-- Tote -->
        <g v-else-if="type === 'tote'">
            <path
                d="M32 44H88L94 96H26Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path
                d="M45 44C45 25 75 25 75 44"
                :stroke="deep"
                stroke-width="5"
                stroke-linecap="round"
            />
            <path
                d="M33 52H87"
                :stroke="deep"
                stroke-width="1.75"
                stroke-dasharray="1 5"
                stroke-linecap="round"
            />
            <path
                d="M53 64H67V78H53Z"
                :fill="accent"
                :stroke="deep"
                stroke-width="2"
                stroke-linejoin="round"
            />
        </g>
        <!-- Gorro -->
        <g v-else-if="type === 'beanie'">
            <circle
                cx="60"
                cy="33"
                r="7"
                :fill="accent"
                :stroke="deep"
                stroke-width="2"
            />
            <path
                d="M32 68C32 44 88 44 88 68Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path
                d="M30 66H90V80H30Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path
                d="M40 66V80M50 66V80M60 66V80M70 66V80M80 66V80"
                :stroke="deep"
                stroke-width="1.5"
            />
        </g>
        <!-- Chaquetón (hero) -->
        <g v-else-if="type === 'jacket'">
            <path
                d="M40 22 52 15 60 24 68 15 80 22 90 34 82 42 82 104 38 104 38 42 30 34Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path d="M52 15 60 24 52 40Z" :fill="deep" />
            <path d="M68 15 60 24 68 40Z" :fill="deep" />
            <path d="M60 40V104" :stroke="deep" stroke-width="2" />
            <path d="M39.5 60H80.5" :stroke="deep" stroke-width="9" />
            <path
                d="M56 54H64V66H56Z"
                :fill="main"
                :stroke="deep"
                stroke-width="2"
            />
            <path
                d="M44 74H54V80H44ZM66 74H76V80H66Z"
                :stroke="deep"
                stroke-width="2"
            />
            <path
                d="M52 15C56 11.5 64 11.5 68 15"
                :stroke="deep"
                stroke-width="2.5"
                stroke-linecap="round"
            />
        </g>
        <!-- Vestido (collage) -->
        <g v-else-if="type === 'dress'">
            <path
                d="M48 24 56 32 64 32 72 24 78 42 69 44 82 98H38L51 44 42 42Z"
                :fill="main"
                :stroke="deep"
                stroke-width="3"
                stroke-linejoin="round"
            />
            <path
                d="M56 32C58 36 62 36 64 32"
                :stroke="deep"
                stroke-width="2.5"
            />
            <path
                d="M52 60 49 90M68 60 71 90"
                :stroke="deep"
                stroke-width="1.5"
                stroke-dasharray="2 4"
            />
        </g>
    </svg>
</template>
