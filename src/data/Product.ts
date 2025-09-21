export interface Product {
  id: string
  name: string
  price: number
  description: string
  image_url?: string
  material: string
  dimensions: Dimensions
  album: string
}

export interface Dimensions {
  unit: string;
  width: number;
  height: number;
}
