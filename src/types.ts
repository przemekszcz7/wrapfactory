export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  features: string[];
}

export interface RealizacjaItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  extraText?: string;
  images: string[];
}

export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  file?: {
    name: string;
    size: number;
    url: string;
  };
  calculatorDetails?: {
    type: string;
    width: number;
    height: number;
    qty: number;
    options: string[];
    estimate: string;
  };
  createdAt: string;
}
