export type Item = {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  photo_refs?: string[];
  images?: string[];
  numItem?: number;
};

export type ItemDict = {
  [key: string]: Item;
};
