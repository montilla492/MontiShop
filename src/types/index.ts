export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  description?: string;
  sizes?: string[];
  specs?: Record<string, string>;
  isNew?: boolean;
  isHot?: boolean;
  isSoldOut?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}
