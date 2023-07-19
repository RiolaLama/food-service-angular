export interface IFood {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  ingredients: string[];
  description?: string;
  category: string;
  availability: boolean;
  hot:boolean
}
