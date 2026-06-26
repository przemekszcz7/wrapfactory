import { Service, RealizacjaItem, Review } from './types';

export const services: Service[] = [
  {
    id: 'naklejki',
    title: 'Naklejki Specjalistyczne',
    description: 'Wycinane po obrysie w dowolnym kształcie, odporne na warunki atmosferyczne i UV. Etykiety produktowe, naklejki ostrzegawcze, reklamowe i plombowe.',
    icon: 'Layers',
    features: [
      'Dowolny kształt i rozmiar (cięcie po obrysie)',
      'Wysoka odporność na UV, wodę i ścieranie',
      'Laminowanie błyszczące, matowe lub strukturalne',
      'Krótkie i długie serie produkcyjne'
    ]
  },
  {
    id: 'pojazdy',
    title: 'Reklamy na Pojazdach',
    description: 'Profesjonalne oklejanie samochodów osobowych, dostawczych, ciężarowych oraz maszyn budowlanych. Od prostych napisów po pełną zmianę koloru.',
    icon: 'Car',
    features: [
      'Trwałe folie wiodących producentów (Avery, 3M, Oracal)',
      'Oklejanie floty samochodowej i maszyn roboczych',
      'Folie wylewane 3D oraz laminaty ochronne',
      'Bezinwazyjny demontaż grafik w przyszłości'
    ]
  },
  {
    id: 'wielkoformatowy',
    title: 'Wydruk Wielkoformatowy',
    description: 'Wielkogabarytowe wydruki w najwyższej rozdzielczości. Wykorzystujemy nowoczesne plotery gwarantujące doskonałe odwzorowanie barw i trwałość.',
    icon: 'Printer',
    features: [
      'Szeroki wybór podłoży (papier, folia, płótno)',
      'Ekologiczne tusze o wysokiej trwałości',
      'Fotograficzna jakość odwzorowania detali',
      'Szybkie terminy realizacji'
    ]
  },
  {
    id: 'witryny',
    title: 'Witryny Sklepowe i Biura',
    description: 'Kompleksowe aranżacje i oklejanie szyb sklepowych, biurowych oraz przeszkleń. Folie One Way Vision (dziurkowane), mrożone (mleczne) i blockout.',
    icon: 'Store',
    features: [
      'Folie szronione / piaskowane dające intymność',
      'Folie One Way Vision (widoczność od środka)',
      'Pełne grafiki reklamowe blockout',
      'Montaż i demontaż na terenie całego województwa'
    ]
  },
  {
    id: 'banery',
    title: 'Banery i Siatki Mesh',
    description: 'Zewnętrzne nośniki reklamowe o ogromnej wytrzymałości na wiatr i deszcz. Banery powlekane, oczkowane, gotowe do natychmiastowego montażu.',
    icon: 'Tv',
    features: [
      'Siatki mesh o niskim oporze wiatru na rusztowania',
      'Wzmocnione zgrzewy i gęste oczkowanie co 50cm',
      'Materiały laminowane i w pełni powlekane premium',
      'Odporność na rozdarcia i zmienne temperatury'
    ]
  },
  {
    id: 'odziez-gadgety',
    title: 'Odzież z Twoim Logo',
    description: 'Znakowanie odzieży roboczej, sportowej i codziennej oraz gadżetów reklamowych. Koszulki, bluzy, polary, kubki, długopisy i smycze.',
    icon: 'Shirt',
    features: [
      'Trwałe metody znakowania (haft, sitodruk, flex/flock)',
      'Odzież robocza BHP o wysokiej gramaturze',
      'Gadżety reklamowe dopasowane do profilu firmy',
      'Precyzyjne odwzorowanie logotypu'
    ]
  },
  {
    id: 'wizytowki-ulotki',
    title: 'Wizytówki i Ulotki',
    description: 'Klasyczne materiały reklamowe niezbędne w każdym biznesie. Wysoki standard papieru, opcje uszlachetnienia (folia soft-touch, lakier UV).',
    icon: 'FileText',
    features: [
      'Papiery kredowe o gramaturze 350g (wizytówki)',
      'Ulotki składane, broszury, katalogi',
      'Lakierowanie wybiórcze UV, złocenia, tłoczenia',
      'Profesjonalne wsparcie projektowe'
    ]
  }
];

export const realizacje: RealizacjaItem[] = [
  {
    id: 'litery-przestrzenne',
    title: 'Litery Przestrzenne 3D',
    description: 'Realizacja liter przestrzennych ze styroduru z estetycznym licem z plexi – rozwiązanie, które łączy lekkość konstrukcji z eleganckim wyglądem.',
    bullets: [
      'Efekt 3D – logo i napisy nabierają głębi',
      'Lico z plexi – gładkie, nowoczesne i estetyczne wykończenie',
      'Lekka konstrukcja – łatwy i bezpieczny montaż',
      'Trwałość i odporność na warunki zewnętrzne'
    ],
    extraText: 'To idealny wybór dla firm, które chcą postawić na czytelne i profesjonalne oznakowanie, bez kompromisów wizualnych.',
    images: [
      'https://i.ibb.co/ccHLyP0g/657798722-956482656900809-5004235548129879356-n.jpg',
      'https://i.ibb.co/QvcQxBKY/656314815-956482660234142-4532444575380274084-n.jpg'
    ]
  },
  {
    id: 'obrandowanie-pojazdow',
    title: 'Kompleksowe Obrandowanie Floty',
    description: 'Realizacja kompleksowego obrandowania pojazdów firmowych oraz sprzętu pracującego w terenie – tak, aby marka była widoczna zawsze i wszędzie.',
    bullets: [
      'Spójne oznakowanie floty i maszyn',
      'Wyraźne logotypy – widoczne nawet z dużej odległości',
      'Trwałe folie odporne na warunki drogowe i pogodowe',
      'Precyzyjna aplikacja na różnych powierzchniach',
      'Profesjonalny wizerunek firmy w każdej sytuacji'
    ],
    images: [
      'https://i.ibb.co/C54cV16F/657543664-956486000233808-1249078578519271905-n.jpg',
      'https://i.ibb.co/hRP3Lqkz/658901452-956485973567144-1419872571230514778-n.jpg',
      'https://i.ibb.co/JRtthpr0/655050070-956486073567134-5157232198408915164-n.jpg'
    ]
  },
  {
    id: 'naszywki-motocyklowe',
    title: 'Naszywki dla Grupy Motocyklowej',
    description: 'Realizacja naszywek dla lokalnej grupy motocyklowej – projekt, który podkreśla przynależność i wyróżnia na drodze.',
    bullets: [
      'Wytrzymałe materiały odporne na warunki i intensywne użytkowanie',
      'Precyzyjne odwzorowanie detali i wyraziste kolory',
      'Solidne wykonanie – gotowe na każdą trasę',
      'Indywidualny projekt dopasowany do charakteru grupy',
      'Idealne na kurtki, kamizelki i odzież motocyklową'
    ],
    extraText: 'To nie tylko dodatek – to symbol ekipy i wspólnej pasji. Masz swoją grupę i chcesz zrobić coś, co naprawdę ją wyróżni? Zrobimy naszywki, które będą noszone z dumą!',
    images: [
      'https://i.ibb.co/hJ02zmZg/656090935-956485096900565-2664914782212191942-n.jpg'
    ]
  }
];

export const reviews: Review[] = [
  {
    id: 'rev-1',
    author: 'Katarzyna Nowak',
    content: 'Bardzo dobry kontakt, przy każdym zamówieniu wszystko przebiega sprawnie i szybko. Jakość naklejek na wysokim poziomie.',
    rating: 5,
    date: '14 maja 2026'
  },
  {
    id: 'rev-2',
    author: 'Paweł Kowalski',
    content: 'Terminowość, bardzo dobra obsługa. Szybki termin realizacji. Doskonały efekt końcowy. Polecam!',
    rating: 5,
    date: '3 kwietnia 2026'
  },
  {
    id: 'rev-3',
    author: 'Agnieszka Wiśniewska',
    content: 'Polecam wszystkim, którzy poszukują pięknych etykiet dla swoich produktów!!! Świetny kontakt, szybka przesyłka, bardzo dobre ceny 😀 Szczerze polecam!!!',
    rating: 5,
    date: '12 lutego 2026'
  }
];
