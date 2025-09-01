import { create } from "zustand";

export const useProducts = create((set) => ({
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
