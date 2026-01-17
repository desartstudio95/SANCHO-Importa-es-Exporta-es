import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  // image property removed
}

export interface ProductDetail {
  id: string; // Unique identifier for routing
  name: string;
  specs: string[];
  image?: string;
  description?: string; // Short description
  fullDescription?: string; // Long description for detail page
  features?: string[]; // Bullet points of features
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  items: ProductDetail[];
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}