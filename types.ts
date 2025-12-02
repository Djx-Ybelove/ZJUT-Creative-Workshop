export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  sales: number;
}

export interface DesignPost {
  id: string;
  author: string;
  avatar: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
}

export interface Competition {
  id: string;
  title: string;
  deadline: string;
  status: 'active' | 'upcoming' | 'ended';
  participants: number;
  image: string;
}

export interface Asset {
  id: string;
  type: 'image' | 'text' | 'shape';
  content: string; // URL for image, text content for text
  x: number;
  y: number;
}

export enum CanvasMode {
  EDIT = 'EDIT',
  PREVIEW = 'PREVIEW'
}