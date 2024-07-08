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

export interface Style {
  id: string;
  name: string;
  imageUrl: string;
  color: {
    id: string;
    name: string;
    imageUrl: string;
    height: {
      id: string;
      feet: string;
      imageUrl: string;
    };
  };
}

export interface Color {
  id: string;
  name: string;
  imageUrl: string;
  height: {
    id: string;
    feet: string;
    imageUrl: string;
  };
}

export interface Height {
  id: string;
  feet: string;
  imageUrl: string;
}
