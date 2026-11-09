export type Category = 'tops' | 'pantalones' | 'calzado' | 'accesorios';

export interface Garment {
  id: string;
  name: string;
  cat: Category | 'todo';
  type: string;
  size: string;
  main: string;
  deep: string;
  accent?: string;
}

export const GARMENTS: Garment[] = [
  { id: 'TOP-014', name: 'Camiseta blanca', cat: 'tops', type: 'tee', size: 'M', main: '#FFFFFF', deep: '#1E2760' },
  { id: 'TOP-023', name: 'Camisa de poplín', cat: 'tops', type: 'shirt', size: 'S', main: '#C3B3F1', deep: '#1E2760' },
  { id: 'TOP-031', name: 'Sudadera lila', cat: 'tops', type: 'hoodie', size: 'L', main: '#C3B3F1', deep: '#1B198F' },
  { id: 'TOP-042', name: 'Top de tirantes', cat: 'tops', type: 'tank', size: 'S', main: '#1E2760', deep: '#1B198F' },
  { id: 'BTM-008', name: 'Jeans rectos', cat: 'pantalones', type: 'jeans', size: '38', main: '#C3B3F1', deep: '#1B198F', accent: '#1B198F' },
  { id: 'BTM-022', name: 'Pantalón cargo', cat: 'pantalones', type: 'cargo', size: '40', main: '#1B198F', deep: '#1E2760' },
  { id: 'BTM-037', name: 'Pantalón de vestir', cat: 'pantalones', type: 'trousers', size: '40', main: '#FFFFFF', deep: '#1B198F' },
  { id: 'SHO-005', name: 'Sneakers blancas', cat: 'calzado', type: 'sneaker', size: '39', main: '#FFFFFF', deep: '#1E2760', accent: '#A9DB1B' },
  { id: 'SHO-011', name: 'Botas negras', cat: 'calzado', type: 'boot', size: '39', main: '#1E2760', deep: '#1B198F' },
  { id: 'ACC-021', name: 'Gafas de sol', cat: 'accesorios', type: 'sunglasses', size: 'Único', main: '#1E2760', deep: '#1B198F', accent: '#C3B3F1' },
  { id: 'ACC-033', name: 'Bolso tote', cat: 'accesorios', type: 'tote', size: 'Único', main: '#C3B3F1', deep: '#1B198F', accent: '#A9DB1B' },
  { id: 'ACC-040', name: 'Gorro de lana', cat: 'accesorios', type: 'beanie', size: 'Único', main: '#1B198F', deep: '#1E2760', accent: '#A9DB1B' },
];

export const CATS = [
  { label: 'Todo', value: 'todo' },
  { label: 'Tops', value: 'tops' },
  { label: 'Pantalones', value: 'pantalones' },
  { label: 'Calzado', value: 'calzado' },
  { label: 'Accesorios', value: 'accesorios' },
];

export const TICKER_ITEMS = ['ORGANIZA TU ARMARIO', 'COMBINA SIN LÍMITES', 'INTERCAMBIA PRENDAS', 'VISTE LO QUE ERES', 'DALE OTRA VUELTA'];

export const ACTIVITIES = [
  { title: 'Descubre', text: 'Encuentra prendas con una historia propia.', icon: 'search', chip: 'bg-ink text-ivory' },
  { title: 'Vende', text: 'Dale salida a las prendas que ya no usas.', icon: 'tag', chip: 'bg-lime text-midnight' },
  { title: 'Intercambia', text: 'Renueva tu armario con otras personas.', icon: 'swap', chip: 'bg-lavender text-midnight' },
];

export const NAV_LINKS = [
  { label: 'El armario', href: '#armario' },
  { label: 'Styling', href: '#styling' },
  { label: 'Marketplace', href: '#marketplace' },
];

export const ICONS: Record<string, string> = {
  'arrow-right': 'M5 12h14|M12 5l7 7-7 7',
  'arrow-down': 'M12 5v14|M19 12l-7 7-7-7',
  'arrow-up-right': 'M7 7h10v10|M7 17 17 7',
  'check': 'M20 6 9 17l-5-5',
  'circle-check': 'M21.8 10A10 10 0 1 1 17 3.34|m9 11 3 3L22 4',
  'menu': 'M4 6h16|M4 12h16|M4 18h16',
  'x': 'M18 6 6 18|M6 6l12 12',
  'search': 'M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16|m21 21-4.35-4.35',
  'heart': 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.51 4.04 3 5.5l7 7Z',
  'sparkles': 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z|M20 3v4|M22 5h-4|M4 17v2|M5 18H3',
  'shirt': 'M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z',
  'swap': 'M8 3 4 7l4 4|M4 7h16|m16 21 4-4-4-4|M20 17H4',
  'tag': 'M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z|M7.5 7.5h.01',
  'repeat': 'm17 2 4 4-4 4|M3 11v-1a4 4 0 0 1 4-4h14|M7 22l-4-4 4-4|M21 13v1a4 4 0 0 1-4 4H3',
  'plus': 'M5 12h14|M12 5v14',
  'info': 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18|M12 16v-4|M12 8h.01',
};

export async function joinWaitlist(_email: string) {
  await new Promise(r => setTimeout(r, 900));
  return { ok: true, demo: true };
}
