export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url?: string;
  materials: Materials;
  dimensions: Dimensions;
  album: string;
  exhibition?: string;
}

export type Materials = {
  material: [string];
};

export type Dimensions = {
  unit: string;
  width: number;
  height: number;
};
