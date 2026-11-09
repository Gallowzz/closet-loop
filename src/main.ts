import { createApp } from "vue";
import { animate, inView } from "motion-v";
import App from "./App.vue";
import "./style.css";

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const app = createApp(App);

app.directive("reveal", {
  mounted(el: HTMLElement, binding: any) {
    const o = binding.value || {};
    if (
      reducedMotion ||
      typeof animate !== "function" ||
      typeof inView !== "function"
    )
      return;

    const y = o.y ?? 26;
    const delay = o.delay ?? 0;
    el.style.opacity = "0";

    let stop: (() => void) | undefined;
    stop = inView(
      el,
      () => {
        if ((el as any).__revealed) return;
        (el as any).__revealed = true;
        if (stop) {
          try {
            stop();
          } catch (e) {
            /* noop */
          }
        }
        animate(
          el,
          { opacity: [0, 1], y: [y, 0] },
          { duration: o.duration ?? 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        );
      },
      { margin: "0px 0px -12% 0px" },
    );
  },
});

app.mount("#app");
