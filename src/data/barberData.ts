export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  category: 'cabelo' | 'barba' | 'combo' | 'especial';
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  timeAgo: string;
  rating: number;
  text: string;
  avatarLetter: string;
  avatarColor: string;
  serviceMentioned?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cortes' | 'barba' | 'ambiente';
  image: string;
  alt: string;
}

export const OFFICIAL_ADDRESS = {
  street: 'R. Conselheiro Moreira de Barros, 596',
  neighborhood: 'Santana',
  city: 'São Paulo',
  state: 'SP',
  postalCode: '02018-011',
  full: 'R. Conselheiro Moreira de Barros, 596 - Santana, São Paulo - SP, 02018-011',
};

export const OFFICIAL_LINKS = {
  logo: 'https://i.postimg.cc/kgpJSkcZ/Nohvo.png',
  whatsapp: 'https://wa.link/utn3cy',
  googleReview: 'https://search.google.com/local/writereview?placeid=ChIJyQdlMZ_3zpQRWxSHWtj-sJA',
  instagram: 'https://www.instagram.com/barbearianohvo.santana?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==',
  googleMapsRoute: 'https://www.google.com/maps/dir/?api=1&destination=R.+Conselheiro+Moreira+de+Barros,+596+-+Santana,+S%C3%A3o+Paulo+-+SP,+02018-011',
  wazeRoute: 'https://waze.com/ul?q=R.+Conselheiro+Moreira+de+Barros,+596+-+Santana,+S%C3%A3o+Paulo+-+SP,+02018-011&navigate=yes',
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'corte-signature',
    name: 'Corte Nohvo Signature',
    description: 'Corte moderno personalizado (degradê, fade, clássico ou tesoura), lavagem especial, alinhamento e finalização com pomada premium.',
    price: 55,
    durationMinutes: 40,
    category: 'cabelo',
    isPopular: true,
  },
  {
    id: 'barba-terapia',
    name: 'Barba Terapia Premium',
    description: 'Protocolo completo com toalha quente, óleos essenciais relaxantes, esfoliação suave, alinhamento preciso na navalha e balm hidratante.',
    price: 45,
    durationMinutes: 35,
    category: 'barba',
    isPopular: true,
  },
  {
    id: 'combo-nohvo',
    name: 'Combo Nohvo Completo (Corte + Barba)',
    description: 'A experiência definitiva de cuidado masculino: Corte Signature e Barba Terapia completa com lavagem capilar e acabamento minucioso.',
    price: 90,
    durationMinutes: 70,
    category: 'combo',
    isPopular: true,
  },
  {
    id: 'acabamento-pezinho',
    name: 'Pezinho & Acabamento na Navalha',
    description: 'Alinhamento dos contornos da nuca, costeletas e linhas frontais para manter o corte alinhado entre as visitas.',
    price: 25,
    durationMinutes: 20,
    category: 'cabelo',
    isPopular: false,
  },
  {
    id: 'sobrancelha-navalha',
    name: 'Design de Sobrancelha Masculina',
    description: 'Limpeza e alinhamento anatômico na navalha ou pinça, mantendo a naturalidade e harmonia do rosto.',
    price: 20,
    durationMinutes: 15,
    category: 'especial',
    isPopular: false,
  },
  {
    id: 'tratamento-capilar',
    name: 'Hidratação & Revitalização Capilar',
    description: 'Tratamento intensivo para fios secos ou danificados, revitalizando o brilho natural e a saúde do couro cabeludo.',
    price: 45,
    durationMinutes: 30,
    category: 'especial',
    isPopular: false,
  },
  {
    id: 'camuflagem-cabelo-barba',
    name: 'Camuflagem de Grisalhos',
    description: 'Tonalização sutil e discreta para atenuar fios brancos da barba ou cabelo de forma extremamente natural.',
    price: 50,
    durationMinutes: 30,
    category: 'especial',
    isPopular: false,
  },
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Matheus Guimarães',
    timeAgo: 'Há 1 semana',
    rating: 5,
    text: 'Melhor barbearia de Santana, sem dúvidas! O corte degradê ficou exatamente como eu queria, atendimento pontual e um café de primeira. A equipe é super atenciosa.',
    avatarLetter: 'M',
    avatarColor: 'bg-blue-600',
    serviceMentioned: 'Corte Nohvo Signature',
  },
  {
    id: 'rev-2',
    author: 'Rodrigo Silveira',
    timeAgo: 'Há 2 semanas',
    rating: 5,
    text: 'A experiência da barba terapia é outro nível! Toalha quente, produtos de alta qualidade e navalha afiada com precisão cirúrgica. Virei cliente fiel.',
    avatarLetter: 'R',
    avatarColor: 'bg-amber-600',
    serviceMentioned: 'Barba Terapia Premium',
  },
  {
    id: 'rev-3',
    author: 'Felipe Dantas',
    timeAgo: 'Há 3 semanas',
    rating: 5,
    text: 'Espaço moderno, extremamente limpo e organizado. Dá pra perceber o cuidado desde a recepção até a cadeira. Vale cada centavo.',
    avatarLetter: 'F',
    avatarColor: 'bg-emerald-600',
    serviceMentioned: 'Combo Nohvo Completo',
  },
  {
    id: 'rev-4',
    author: 'Carlos Eduardo Santos',
    timeAgo: 'Há 1 mês',
    rating: 5,
    text: 'Profissionais de altíssimo nível. Já passei por vários lugares em Santana e a Nohvo é a única que mantém o mesmo padrão impecável em todo atendimento.',
    avatarLetter: 'C',
    avatarColor: 'bg-indigo-600',
    serviceMentioned: 'Corte & Sobrancelha',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Corte Degradê Texturizado com Navalha',
    category: 'cortes',
    image: '/src/assets/images/barber_precision_cut_1793991832861.jpg',
    alt: 'Master barber executando corte degradê com clippers de alta precisão',
  },
  {
    id: 'gal-2',
    title: 'Ritual de Barba Terapia & Toalha Quente',
    category: 'barba',
    image: '/src/assets/images/barber_beard_grooming_1793991832816.jpg',
    alt: 'Barbeiro cuidando da barba com toalha quente e espuma artesanal',
  },
  {
    id: 'gal-3',
    title: 'Salão Principal & Estações de Atendimento',
    category: 'ambiente',
    image: '/src/assets/images/hero_barbershop_ambience_1793991832121.jpg',
    alt: 'Visão panorâmica da barbearia com cadeiras de couro vintage e iluminação ambiente',
  },
  {
    id: 'gal-4',
    title: 'Lounge de Espera & Café Expresso Cortesia',
    category: 'ambiente',
    image: '/src/assets/images/barbershop_interior_lounge_1793991833779.jpg',
    alt: 'Lounge confortável com sofás de couro e balcão de café e bebidas',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    likes: '142',
    comments: '18',
    image: '/src/assets/images/barber_precision_cut_1793991832861.jpg',
    caption: 'Precisão milimétrica em cada fade. O padrão Nohvo Santana que você merece. 🔥✂️',
    tag: '#NohvoSantana #FadePerfeito #BarbeariaSantana',
  },
  {
    id: 'ig-2',
    likes: '189',
    comments: '24',
    image: '/src/assets/images/barber_beard_grooming_1793991832816.jpg',
    caption: 'Barba alinhada, pele descansada. Agende seu momento de cuidado pelo WhatsApp no link da bio. 💈☕',
    tag: '#BarbaTerapia #CuidadoMasculino #Estilo',
  },
  {
    id: 'ig-3',
    likes: '230',
    comments: '31',
    image: '/src/assets/images/hero_barbershop_ambience_1793991832121.jpg',
    caption: 'Sexta-feira na Nohvo Santana: ambiente climatizado, café fresco e os melhores profissionais prontos pra te atender.',
    tag: '#BarbeariaPremium #SantanaSP #EstiloMasculino',
  },
];
