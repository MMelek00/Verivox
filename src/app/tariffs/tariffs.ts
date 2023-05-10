export interface ITariffs {
  id: number;
  name: string;
  download: number;
  upload: number;
  price: number;
  benefits: Array<string>;
}
