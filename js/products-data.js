const PRODUCTS_DATA = [
  {
    id: 'prod-001',
    name: 'Audifonos Inalámbricos',
    category: 'Tecnología',
    price: 59.99,
    rating: 5,
    reviewsCount: 128,
    image: 'assets/img/headphones.svg',
    imageRelative: '../assets/img/headphones.svg',
    shortDesc: 'Sonido de alta calidad, conexión bluetooth y batería de larga duración.',
    description: 'Audifonos inalámbricos con cancelación de ruido, cómodos y con gran duración de batería. Ideales para música y llamadas.',
    specs: [
      { label: 'Conectividad', value: 'Bluetooth 5.3 + Aux 3.5mm' },
      { label: 'Autonomía', value: 'Hasta 40 horas de reproducción' },
      { label: 'Cancelación de Ruido', value: 'Cancelación Activa (ANC)' },
      { label: 'Garantía', value: '12 meses' }
    ],
    stock: 25
  },
  {
    id: 'prod-002',
    name: 'Smartwatch Pro',
    category: 'Tecnología',
    price: 89.99,
    rating: 5,
    reviewsCount: 95,
    image: 'assets/img/smartwatch.svg',
    imageRelative: '../assets/img/smartwatch.svg',
    shortDesc: 'Pantalla táctil HD, monitor de frecuencia cardíaca y resistencia al agua.',
    description: 'Reloj inteligente de última generación con múltiples modos deportivos, seguimiento de salud 24/7 y notificaciones en tiempo real.',
    specs: [
      { label: 'Pantalla', value: 'AMOLED 1.43"' },
      { label: 'Resistencia al agua', value: '5 ATM' },
      { label: 'Batería', value: 'Hasta 10 días' }
    ],
    stock: 18
  },
  {
    id: 'prod-003',
    name: 'Cámara Digital',
    category: 'Tecnología',
    price: 199.99,
    rating: 5,
    reviewsCount: 64,
    image: 'assets/img/camera.svg',
    imageRelative: '../assets/img/camera.svg',
    shortDesc: 'Sensor de alta resolución 4K con lente intercambiable y estabilizador óptico.',
    description: 'Captura momentos increíbles con nitidez profesional. Grabación de video en 4K Ultra HD y enfoque automático rápido.',
    specs: [
      { label: 'Resolución', value: '24.2 Megapíxeles' },
      { label: 'Video', value: '4K Ultra HD' },
      { label: 'Estabilizador', value: 'Óptico integrado' }
    ],
    stock: 12
  },
  {
    id: 'prod-004',
    name: 'Mochila Urbana',
    category: 'Accesorios',
    price: 39.99,
    rating: 5,
    reviewsCount: 112,
    image: 'assets/img/backpack.svg',
    imageRelative: '../assets/img/backpack.svg',
    shortDesc: 'Diseño ergonómico, compartimento para laptop y material impermeable.',
    description: 'Mochila moderna y resistente con compartimento acolchado para laptops de hasta 16 pulgadas, bolsillos antirrobo y puerto USB.',
    specs: [
      { label: 'Capacidad', value: '25 Litros' },
      { label: 'Compatibilidad Laptop', value: 'Hasta 16"' },
      { label: 'Material', value: 'Poliéster impermeable' }
    ],
    stock: 35
  },
  {
    id: 'prod-005',
    name: 'Smartphone Pro Max',
    category: 'Tecnología',
    price: 699.99,
    rating: 5,
    reviewsCount: 88,
    image: 'assets/img/tecnologia.svg',
    imageRelative: '../assets/img/tecnologia.svg',
    shortDesc: 'Pantalla 120Hz OLED, triple cámara de 50MP y procesador de 8 núcleos.',
    description: 'Rendimiento sin límites con pantalla súper fluida y batería de carga ultrarrápida.',
    specs: [
      { label: 'Almacenamiento', value: '256 GB' },
      { label: 'RAM', value: '8 GB' }
    ],
    stock: 10
  },
  {
    id: 'prod-006',
    name: 'Sofá Modular Confort',
    category: 'Hogar',
    price: 349.99,
    rating: 5,
    reviewsCount: 42,
    image: 'assets/img/hogar.svg',
    imageRelative: '../assets/img/hogar.svg',
    shortDesc: 'Tapizado de alta durabilidad, estructura de madera y cojines viscoelásticos.',
    description: 'Máximo confort para tu sala de estar con diseño escandinavo contemporáneo.',
    specs: [
      { label: 'Plazas', value: '3 personas' },
      { label: 'Material', value: 'Lino premium' }
    ],
    stock: 8
  },
  {
    id: 'prod-007',
    name: 'Bolso Ejecutivo Leather',
    category: 'Accesorios',
    price: 49.99,
    rating: 5,
    reviewsCount: 73,
    image: 'assets/img/accesorios.svg',
    imageRelative: '../assets/img/accesorios.svg',
    shortDesc: 'Acabado en cuero sintético premium con múltiples organizadores internos.',
    description: 'Elegancia y funcionalidad para reuniones de negocios y viajes de trabajo.',
    specs: [
      { label: 'Material', value: 'Cuero PU de alta resistencia' }
    ],
    stock: 20
  },
  {
    id: 'prod-008',
    name: 'Auriculares Studio Max',
    category: 'Tecnología',
    price: 79.99,
    rating: 5,
    reviewsCount: 56,
    image: 'assets/img/headphones.svg',
    imageRelative: '../assets/img/headphones.svg',
    shortDesc: 'Frecuencia equilibrada para producción y monitoreo de audio profesional.',
    description: 'Audio transparente con almohadillas transpirables para uso prolongado.',
    specs: [
      { label: 'Frecuencia', value: '10Hz - 28,000Hz' }
    ],
    stock: 15
  },
  {
    id: 'prod-009',
    name: 'Smartwatch Sport Fit',
    category: 'Tecnología',
    price: 65.00,
    rating: 5,
    reviewsCount: 39,
    image: 'assets/img/smartwatch.svg',
    imageRelative: '../assets/img/smartwatch.svg',
    shortDesc: 'GPS incorporado y resistencia al agua IP68 para deportistas.',
    description: 'Registra tus rutas de running y natación con precisión satelital.',
    specs: [
      { label: 'GPS', value: 'GPS / GLONASS' }
    ],
    stock: 22
  },
  {
    id: 'prod-010',
    name: 'Lámpara Nórdica de Mesa',
    category: 'Hogar',
    price: 29.99,
    rating: 5,
    reviewsCount: 28,
    image: 'assets/img/hogar.svg',
    imageRelative: '../assets/img/hogar.svg',
    shortDesc: 'Luz LED regulable en 3 temperaturas de color con base de madera natural.',
    description: 'Iluminación cálida y relajante perfecta para escritorios o mesas de noche.',
    specs: [
      { label: 'Consumo', value: '6W LED' }
    ],
    stock: 30
  },
  {
    id: 'prod-011',
    name: 'Cámara Compacta Vlogger',
    category: 'Tecnología',
    price: 149.99,
    rating: 5,
    reviewsCount: 45,
    image: 'assets/img/camera.svg',
    imageRelative: '../assets/img/camera.svg',
    shortDesc: 'Pantalla abatible 180°, micrófono direccional y conectividad WiFi.',
    description: 'La compañera ideal para creadores de contenido y videollamadas en alta definición.',
    specs: [
      { label: 'Video', value: 'Full HD 60fps' }
    ],
    stock: 14
  },
  {
    id: 'prod-012',
    name: 'Mochila Minimalista Slim',
    category: 'Accesorios',
    price: 34.99,
    rating: 5,
    reviewsCount: 62,
    image: 'assets/img/backpack.svg',
    imageRelative: '../assets/img/backpack.svg',
    shortDesc: 'Perfil ultradelgado y ligero para uso diario en la ciudad.',
    description: 'Protección para tus pertenencias esenciales con diseño limpio y moderno.',
    specs: [
      { label: 'Peso', value: '450 gramos' }
    ],
    stock: 25
  }
];

function getProductById(id) {
  return PRODUCTS_DATA.find(p => String(p.id) === String(id)) || null;
}
