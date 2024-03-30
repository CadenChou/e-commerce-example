export type Item = {
  id?: string;
  photo_refs?: string[];
  name?: string;
  description?: string;
  condition?: number;
  category?: string;
  price?: number;
  numItem?: number;
};

export type ItemDict = {
  [key: string]: Item;
};

export const categories = [
  "Suits",
  "Dress Shirts",
  "Chinos & Casual Pants",
  "Sweaters",
];

export const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Cart",
    link: "/cart",
  },
];
