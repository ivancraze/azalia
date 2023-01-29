export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: IProductRating;
}

export interface IProductRating {
  rate: number;
  count: number;
}

export interface IProductList {
  products: IProduct[];
}
export interface IProductListState extends IProductList {
  error: string;
  isLoading: boolean;
}

export interface ICartItem {
  product: IProduct;
  amount: number;
}

export interface ICartState {
  items: Record<number, ICartItem>;
}

export interface IFavoriteState {
  items: Record<number, IFavoriteItem>;
}

export interface IFavoriteItem {
  product: IProduct;
}
