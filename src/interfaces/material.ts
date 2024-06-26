export interface Material {
  id: string;
  name: string;
  imageUrl: string;
  styles: {
    id: string;
    name: string;
    imageUrl: string;
    colors: {
      id: string;
      name: string;
      imageUrl: string;
      heights: {
        id: string;
        feet: string;
        imageUrl: string;
      }[];
    }[];
  }[];
}
