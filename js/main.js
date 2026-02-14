// Año del footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Filtro por categorías
document.querySelectorAll('.category-card').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const filter = this.getAttribute('data-filter');
    document.querySelectorAll('.equipment-card').forEach(function (card) {
      if (filter === 'todas' || card.getAttribute('data-category') === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/**
 * CONFIGURACIÓN DE EQUIPOS PARA EL MODAL
 * title, type, specs[], images[], whatsapp
 * Recordá reemplazar 549XXXXXXXXXX por el número real.
 */
const EQUIPMENT_DATA = {
  'grove-rt63s': {
    title: 'Grúa Grove RT63S 30 tn',
    type: 'Grúa rough terrain',
    specs: [
      'Capacidad: 30 tn',
      'Pluma: 37 m',
      'Año: 1971',
      'En funcionamiento'
    ],
    images: [
      'img/equipos/grua-grove-rt63s/2008_Grove_RT890E_90ton_Rough_Terrain_Crane.jpg',
      'img/equipos/grua-grove-rt63s/GROVE-RT-540-CE-Francia_8140_1312522546.jpg'
    ],
    whatsapp:
      'https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20la%20gr%C3%BAa%20Grove%20RT63S%2030tn'
  },

  'grove-tms475': {
    title: 'Grúa Grove TMS‑475 45 tn',
    type: 'Grúa sobre camión',
    specs: [
      'En funcionamiento',
      'Capacidad: 45 tn',
      '44 m de pluma + plumín'
    ],
    images: [
      'img/equipos/GrúaGroveTMS‑47545tn/Grúa Grove TMS‑475 45 tn.jpg',
      'img/equipos/GrúaGroveTMS‑47545tn/truck-cranes-grove-tms700e-for-sale-100298-83c2d67b60f19b490b31ad85a3acda46.jpg'
    ],
    whatsapp:
      'https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20la%20gr%C3%BAa%20Grove%20TMS-475%2045tn'
  },

  'john-deere-544g': {
    title: 'Cargadora frontal John Deere 544G',
    type: 'Maquinaria vial',
    specs: [
      'En funcionamiento',
      'Balde de 2 m³',
      'Año: 1994'
    ],
    images: [
      'img/equipos/john deere 544g/large-used (1).jpg',
      'img/equipos/john deere 544g/large-used (2).jpg',
      'img/equipos/john deere 544g/large-used (3).jpg'
    ],
    whatsapp:
      'https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20la%20cargadora%20John%20Deere%20544G'
  },

  'hydromac-h145': {
    title: 'Excavadora Hydromac H145',
    type: 'Excavadora sobre orugas',
    specs: [
      'En funcionamiento',
      'Brazo recto boom doble',
      'Alcance de brazo: 6,30 m',
      'Capacidad de balde: 1,20 m³'
    ],
    images: [
      'img/equipos/hydromac-h145/d7csoFRlymzfYqqA.jpg',
      'img/equipos/hydromac-h145/maFBJyDQOM2OQM4a.jpg',
      'img/equipos/hydromac-h145/fsKGH1LPGiDQdVgC.jpg'
    ],
    whatsapp:
      'https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20la%20excavadora%20Hydromac%20H145'
  },

  'manipulador-jlg-6036': {
    title: 'Manipulador JLG Skytrak 6036',
    type: 'Manipulador telescópico',
    specs: [
      'Año: 2006',
      'Capacidad de carga: 2.721 kg',
      'Distancia a centro de carga: 610 mm',
      'Altura máxima de horquilla: 11.200 mm'
    ],
    images: [
      'img/equipos/manipulador-jlg/JGiHQy20WBsVK4bv.jpg',
      'img/equipos/manipulador-jlg/ns9UUECT3WUAuqkY.jpg',
      'img/equipos/manipulador-jlg/Qsn0ZNyTW27hMlN7.jpg'
    ],
    whatsapp:
      'https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20el%20manipulador%20JLG%20Skytrak%206036'
  },

  'autoelevador-cat-v60b': {
    title: 'Autoelevador CAT V60B',
    type: 'Autoelevador',
    specs: [
      'Capacidad: 2,5 tn',
      'En funcionamiento',
      'Sin faltantes'
    ],
    images: [
      'img/equipos/autoelevador-cat-v60b/Qm7NXiEQe8YyuNN7.jpg',
      'img/equipos/autoelevador-cat-v60b/ifWUQyNOBcn0OgXu.jpg',
      'img/equipos/autoelevador-cat-v60b/fDONzlrUBRdkzPbZ.jpg',
      'img/equipos/autoelevador-cat-v60b-4.jpg'
    ],
    whatsapp:
      'https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20el%20autoelevador%20CAT%20V60B'
  },

  'camion-scania-volcador': {
    title: 'Camión volcador Scania 314‑P380 B 6x4',
    type: 'Camión volcador',
    specs: [
      'En funcionamiento',
      'Modelo: 2011'
    ],
    images: [
      'img/equipos/scania-volcador-314/venta-camion-scania-P420-8x4volcadora-15m3-vuelco-tri-lateral-dce-dubini-camiones-equipados-01.jpg',
      'img/equipos/scania-volcador-314/venta-camion-scania-P420-8x4volcadora-15m3-vuelco-tri-lateral-dce-dubini-camiones-equipados-04.jpg',
      'img/equipos/scania-volcador-314/venta-camion-scania-P420-8x4volcadora-15m3-vuelco-tri-lateral-dce-dubini-camiones-equipados-06.jpg'
    ],
    whatsapp:
      'https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20el%20camion%20volcador%20Scania%20314-P380'
  },

  'vw-amarok-2012': {
    title: 'Volkswagen Amarok 2.0 TDI 122',
    type: 'Pick‑up doble cabina',
    specs: [
      'Motor: 2.0L TDI 122',
      'Tipo: Pick‑up',
      'Año: 2012'
    ],
    images: [
      'img/equipos/vw-amarok-2012-1/nueva-volkswagen-amarok-v6.jpg'
    ],
    whatsapp:
      'https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20la%20Volkswagen%20Amarok%202.0%20TDI%20122%20modelo%202012'
  },

  'contenedor-electrico-6m': {
    title: 'Contenedor eléctrico 6 m',
    type: 'Equipo auxiliar',
    specs: [
      'En funcionamiento',
      'Contenedor equipado con tableros y distribución eléctrica'
    ],
    images: [
      'img/equipos/contenedor-electrico/Stavebni-kontejner-6-m-vcetne-izolace-a-elektroinstalace-na-pronajem.5.jpg',
      'img/equipos/contenedor-electrico/Stavebni-kontejner-6-m-vcetne-izolace-a-elektroinstalace-na-pronajem.6.jpg',
      'img/equipos/contenedor-electrico/Stavebni-kontejner-6-m-vcetne-izolace-a-elektroinstalace-na-pronajem.44.jpg'
    ],
    whatsapp:
      'https://wa.me/549XXXXXXXXXX?text=Hola%2C%20quiero%20consultar%20por%20el%20contenedor%20el%C3%A9ctrico%20de%206m'
  }
};

// ----- MODAL + CARRUSEL -----
const modal = document.getElementById('equipment-modal');
const modalCarousel = document.querySelector('.equipment-modal-carousel');
const modalTitle = document.getElementById('modal-equipment-title');
const modalType = document.getElementById('modal-equipment-type');
const modalSpecs = document.getElementById('modal-equipment-specs');
const modalWhatsApp = document.getElementById('modal-equipment-whatsapp');

let currentSlide = 0;
let currentImages = [];

// Abrir modal
function openEquipmentModal(equipmentKey) {
  const data = EQUIPMENT_DATA[equipmentKey];
  if (!data) return;

  modalTitle.textContent = data.title || '';
  modalType.textContent = data.type || '';
  modalWhatsApp.href = data.whatsapp || '#';

  // Specs
  modalSpecs.innerHTML = '';
  (data.specs || []).forEach(function (spec) {
    const li = document.createElement('li');
    li.textContent = spec;
    modalSpecs.appendChild(li);
  });

  // Imágenes
  modalCarousel.innerHTML = '';
  currentImages = data.images || [];
  currentSlide = 0;

  currentImages.forEach(function (src, index) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = (data.title || 'Equipo') + ' - foto ' + (index + 1);
    img.className = 'carousel-image';
    img.style.display = index === 0 ? 'block' : 'none';
    modalCarousel.appendChild(img);
  });

  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('is-open');
}

// Cerrar modal
function closeEquipmentModal() {
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('is-open');
}

// Mostrar slide
function showSlide(index) {
  const images = modalCarousel.querySelectorAll('.carousel-image');
  if (!images.length) return;
  currentSlide = (index + images.length) % images.length;
  images.forEach(function (img, i) {
    img.style.display = i === currentSlide ? 'block' : 'none';
  });
}

// Click en tarjetas
document.querySelectorAll('.equipment-card').forEach(function (card) {
  card.addEventListener('click', function () {
    const key = card.getAttribute('data-equipment');
    if (key) openEquipmentModal(key);
  });
});

// Cerrar modal al hacer click en fondo o botón
modal.addEventListener('click', function (e) {
  if (e.target.dataset.close === 'modal') {
    closeEquipmentModal();
  }
});

const closeBtn = document.querySelector('.equipment-modal-close');
if (closeBtn) {
  closeBtn.addEventListener('click', closeEquipmentModal);
}

// Controles del carrusel
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');

if (prevBtn) {
  prevBtn.addEventListener('click', function () {
    showSlide(currentSlide - 1);
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', function () {
    showSlide(currentSlide + 1);
  });
}

// Escape cierra modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    closeEquipmentModal();
  }
});

// ---------------- MENÚ MÓVIL ----------------
(function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', function () {
    mobileNav.classList.toggle('is-open');
  });

  // Cerrar menú al hacer clic en un enlace
  mobileNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      mobileNav.classList.remove('is-open');
    }
  });
})();




// ---------------- CHAT BÁSICO ----------------
(function () {
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatBody = document.getElementById('chat-body');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');

  if (!chatToggle || !chatWindow) return;

  function openChat() {
    chatWindow.classList.add('is-open');
    chatWindow.setAttribute('aria-hidden', 'false');
    chatInput.focus();
  }

  function closeChat() {
    chatWindow.classList.remove('is-open');
    chatWindow.setAttribute('aria-hidden', 'true');
  }

  chatToggle.addEventListener('click', openChat);
  chatClose.addEventListener('click', closeChat);

  // Opciones rápidas
  chatBody.addEventListener('click', function (e) {
    if (e.target.matches('.chat-quick-options button')) {
      const option = e.target.getAttribute('data-option');
      handleQuickOption(option);
    }
  });

  function addMessage(text, from = 'bot') {
    const wrapper = document.createElement('div');
    wrapper.className = 'chat-message ' + from;
    const p = document.createElement('p');
    p.textContent = text;
    wrapper.appendChild(p);
    chatBody.appendChild(wrapper);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleQuickOption(option) {
    if (option === 'gruas') {
      addMessage('Quiero consultar por una grúa.', 'user');
      addMessage(
        'Perfecto. Decime qué capacidad necesitás (tn), altura de trabajo y localidad, así te pasamos el equipo adecuado.',
        'bot'
      );
    } else if (option === 'camiones') {
      addMessage('Consulta por camiones.', 'user');
      addMessage(
        'Tenemos camión volcador, hidrogrúa, cesta y 4x4. ¿Qué trabajo necesitás hacer y en qué zona?',
        'bot'
      );
    } else {
      addMessage('Otro equipo / duda general.', 'user');
      addMessage(
        'Contame qué equipo necesitás o qué tipo de trabajo tenés, y te orientamos.',
        'bot'
      );
    }
  }

  // Envío manual de mensaje
  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    chatInput.value = '';

    setTimeout(function () {
      addMessage(
        'Gracias por tu mensaje. Un asesor de Eslom te va a responder a la brevedad. ' +
          'Si querés una respuesta más rápida, podés escribirnos directo por WhatsApp con el botón verde de la izquierda.',
        'bot'
      );
    }, 600);
  });
})();