/* Closet Loop — interacciones (vanilla JS) */
(() => {
  "use strict";
  const doc = document;
  doc.documentElement.classList.add("js");

  const movReducido = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Estado de la cabecera ---------- */
  const cabecera = doc.querySelector(".cabecera");
  const alDesplazar = () => cabecera.classList.toggle("cabecera--fija", window.scrollY > 10);
  window.addEventListener("scroll", alDesplazar, { passive: true });
  alDesplazar();

  /* ---------- Menú móvil accesible ---------- */
  const botonMenu = doc.getElementById("menuBoton");
  const menuMovil = doc.getElementById("menuMovil");
  const fijarMenu = (abierto) => {
    menuMovil.hidden = !abierto;
    botonMenu.setAttribute("aria-expanded", String(abierto));
    botonMenu.classList.toggle("menu-boton--abierto", abierto);
    botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  };
  botonMenu.addEventListener("click", () => fijarMenu(menuMovil.hidden));
  menuMovil.addEventListener("click", (e) => { if (e.target.closest("a")) fijarMenu(false); });
  doc.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menuMovil.hidden) { fijarMenu(false); botonMenu.focus(); }
  });
  doc.addEventListener("click", (e) => {
    if (!menuMovil.hidden && !cabecera.contains(e.target)) fijarMenu(false);
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", (ev) => {
    if (ev.matches) fijarMenu(false);
  });

  /* ---------- Aparición sutil al hacer scroll ---------- */
  const items = doc.querySelectorAll(".rv");
  if (!movReducido.matches && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("rv-in"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => obs.observe(el));
  } else {
    items.forEach((el) => el.classList.add("rv-in"));
  }

  /* ---------- Respaldo visual si una imagen falla ---------- */
  const marcarFallo = (img) => {
    const cont = img.closest("[data-marco], figure");
    if (cont) cont.classList.add("sin-imagen");
    img.style.visibility = "hidden";
  };
  doc.querySelectorAll("img").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) marcarFallo(img);
    img.addEventListener("error", () => marcarFallo(img), { once: true });
  });

  /* ---------- Guardados (mosaico de comunidad) ---------- */
  doc.querySelectorAll(".guardar").forEach((btn) => {
    btn.addEventListener("click", () => {
      const activo = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!activo));
    });
  });

  /* ---------- Propuesta de intercambio (demo) ---------- */
  const btnIntercambio = doc.getElementById("btnIntercambio");
  const tarjetaIntercambio = doc.getElementById("tarjetaIntercambio");
  const avisoIntercambio = doc.getElementById("avisoIntercambio");
  const anuncioIntercambio = doc.getElementById("anuncioIntercambio");
  if (btnIntercambio) {
    btnIntercambio.addEventListener("click", () => {
      tarjetaIntercambio.dataset.estado = "enviada";
      btnIntercambio.disabled = true;
      btnIntercambio.querySelector(".etq-enviar").hidden = true;
      btnIntercambio.querySelector(".etq-enviada").hidden = false;
      avisoIntercambio.hidden = false;
      anuncioIntercambio.textContent = "Propuesta de intercambio enviada. Es una demostración.";
    });
  }

  /* ---------- Escáner de outfit (demo simulada) ---------- */
  const LOOKS = [
    {
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=640&auto=format&fit=crop",
      alt: "Look 1: modelo con blazer rosa, top blanco y jeans",
      prendas: ["Blazer rosa", "Top blanco", "Jeans rectos", "Sneakers blancos"],
      etiquetas: ["Base neutra", "Acento de color"],
      indice: 8.7,
      nota: "El acento rosa es el protagonista: mantén el resto en tonos planos y sube el punto con accesorios dorados.",
      sugerencias: ["Pañuelo estampado", "Aretes dorados", "Bolso café"]
    },
    {
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=640&auto=format&fit=crop",
      alt: "Look 2: outfit urbano con chaqueta vaquera y camiseta blanca",
      prendas: ["Chaqueta vaquera", "Camiseta blanca", "Pantalón beige"],
      etiquetas: ["Doble denim", "Silueta relajada"],
      indice: 9.1,
      nota: "Doble denim bien balanceado. Dobla la manga de la chaqueta y añade un cinturón marrón para un acabado más intencional.",
      sugerencias: ["Cinturón marrón", "Gorra lisa", "Mocasines"]
    },
    {
      img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=640&auto=format&fit=crop",
      alt: "Look 3: modelo con abrigo beige, top oscuro y gafas de sol",
      prendas: ["Abrigo beige", "Top negro", "Pantalón cargo"],
      etiquetas: ["Monocromo cálido", "Capas"],
      indice: 8.4,
      nota: "Capas en la misma familia de color: cambia el top por uno lavanda para un contraste suave y muy actual.",
      sugerencias: ["Top lavanda", "Botines negros", "Bufanda fina"]
    }
  ];

  const pantalla = doc.getElementById("pantalla");
  const scanFoto = doc.getElementById("scanFoto");
  const estadoTexto = doc.getElementById("estadoTexto");
  const contadorLooks = doc.getElementById("contadorLooks");
  const btnEscanear = doc.getElementById("btnEscanear");
  const btnEscanearTexto = doc.getElementById("btnEscanearTexto");
  const btnOtro = doc.getElementById("btnOtro");
  const hoja = doc.getElementById("hoja");
  const listaPrendas = doc.getElementById("listaPrendas");
  const hojaEtiquetas = doc.getElementById("hojaEtiquetas");
  const hojaNota = doc.getElementById("hojaNota");
  const hojaSugerencias = doc.getElementById("hojaSugerencias");
  const indiceValor = doc.getElementById("indiceValor");
  const arco = doc.getElementById("indiceArco");
  const anuncioDemo = doc.getElementById("anuncioDemo");

  const C_ARCO = 2 * Math.PI * 20; /* circunferencia del gauge (r=20, viewBox 48) */
  let indice = 0;
  let temporizador = 0;

  const crearChip = (texto) => {
    const li = doc.createElement("li");
    li.className = "";
    li.style.cssText = "";
    li.textContent = texto;
    return li;
  };

  const pintarHoja = (look) => {
    listaPrendas.replaceChildren();
    look.prendas.forEach((p) => {
      const li = doc.createElement("li");
      li.className = "chip-prenda";
      li.textContent = p;
      listaPrendas.append(li);
    });
    hojaSugerencias.replaceChildren();
    look.sugerencias.forEach((s) => {
      const li = doc.createElement("li");
      li.className = "chip-sug";
      li.textContent = s;
      hojaSugerencias.append(li);
    });
    hojaEtiquetas.textContent = look.etiquetas.join(" · ");
    hojaNota.textContent = look.nota;
    indiceValor.textContent = look.indice.toFixed(1);

    /* el arco se reinicia sin transición y luego anima hasta el valor */
    arco.style.transition = "none";
    arco.style.strokeDashoffset = C_ARCO;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      arco.style.transition = "stroke-dashoffset 1s cubic-bezier(.22,.61,.36,1) .25s";
      arco.style.strokeDashoffset = C_ARCO * (1 - look.indice / 10);
    }));
  };

  const cargarFoto = (look) => {
    scanFoto.classList.remove("lista");
    scanFoto.src = look.img;
    scanFoto.alt = look.alt;
    const alCargar = () => scanFoto.classList.add("lista");
    if (scanFoto.complete && scanFoto.naturalWidth > 0) alCargar();
    else scanFoto.addEventListener("load", alCargar, { once: true });
  };

  const escanear = () => {
    if (pantalla.dataset.estado === "escaneando") return;
    pantalla.dataset.estado = "escaneando";
    hoja.setAttribute("aria-hidden", "true");
    estadoTexto.textContent = "Analizando prendas";
    anuncioDemo.textContent = "Escaneando outfit. Demostración simulada.";
    btnEscanear.disabled = true;
    btnOtro.disabled = true;
    window.clearTimeout(temporizador);
    temporizador = window.setTimeout(() => {
      pintarHoja(LOOKS[indice]);
      pantalla.dataset.estado = "resultado";
      hoja.setAttribute("aria-hidden", "false");
      estadoTexto.textContent = "Ideas listas";
      anuncioDemo.textContent = "Ideas listas. Índice Loop " + LOOKS[indice].indice.toFixed(1) + " sobre 10.";
      btnEscanearTexto.textContent = "Escanear de nuevo";
      btnEscanear.disabled = false;
      btnOtro.disabled = false;
    }, movReducido.matches ? 500 : 2000);
  };

  const otroLook = () => {
    if (pantalla.dataset.estado === "escaneando") return;
    indice = (indice + 1) % LOOKS.length;
    const look = LOOKS[indice];
    contadorLooks.textContent = (indice + 1) + " de " + LOOKS.length;
    cargarFoto(look);
    pantalla.dataset.estado = "reposo";
    hoja.setAttribute("aria-hidden", "true");
    estadoTexto.textContent = "Listo para escanear";
    btnEscanearTexto.textContent = "Escanear outfit";
    indiceValor.textContent = "—";
    hojaEtiquetas.textContent = "";
    hojaNota.textContent = "";
    listaPrendas.replaceChildren();
    hojaSugerencias.replaceChildren();
    arco.style.transition = "none";
    arco.style.strokeDashoffset = C_ARCO;
    anuncioDemo.textContent = "Nuevo look cargado: " + (indice + 1) + " de " + LOOKS.length + ".";
  };

  if (pantalla && btnEscanear && btnOtro) {
    btnEscanear.addEventListener("click", escanear);
    btnOtro.addEventListener("click", otroLook);

    /* precarga silenciosa del resto de looks */
    const precargar = () => LOOKS.forEach((l) => { const i = new Image(); i.src = l.img; });
    if ("requestIdleCallback" in window) requestIdleCallback(precargar);
    else window.setTimeout(precargar, 1200);
  }
})();
