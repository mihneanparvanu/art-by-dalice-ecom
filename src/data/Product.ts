export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: ProductImage[];
  materials: Materials;
  dimensions: Dimensions;
  album: string;
  exhibitions: Exhibition;
  exhibitionName?: string;
}

export interface Exhibition {
  id: number;
  name: string;
  name_ro: string;
}

export interface ProductImage {
  url: string;
}

export type Materials = {
  material: [string];
};

export type Dimensions = {
  unit: string;
  width: number;
  height: number;
};
