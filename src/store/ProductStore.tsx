import { create } from "zustand";
import { FilterType, ProductType } from "../types/productModel";

interface ProductStoreModel {
  productList: ProductType[];
  loading: boolean;
  filters: FilterType;
  setProductList: (products: ProductType[]) => void;
  setLoading: (status: boolean) => void;
  setFilters: (key: string, value: string) => void;
}

export const useProducts = create<ProductStoreModel>((set) => ({
  productList: [],
  loading: false,
  selectedProduct: {},
  filters: {
    category: "",
    color: "",
    size: "",
    rating: 0,
    searchText: "",
  },
  setLoading: function (status) {
    set({
      loading: status,
    });
  },
  setFilters: function (key, value) {
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    }));
  },
  setProductList: (products) => {
    set({
      productList: products,
      loading: false,
    });
  },
}));
