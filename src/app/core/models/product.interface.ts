export interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  customerRating: number;
  image: string;
  description?: string;
  reviews?: Review[];
}

export interface Review {
  user: string;
  comment: string;
  rating: number;
}
