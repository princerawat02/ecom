import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          // Check if item already exists in cart
          const existing = state.items.find((i) => i.id === item.id);
          // If it exists, increase the quantity
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          // If it doesn't exist, add the new item
          return { items: [...state.items, item] };
        }),

      removeItem: (id) =>
        set((state) => {
          return {
            //
            items: state.items
              .map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
              )
              .filter((item) => item.quantity > 0),
          };
        }),
      clearCart: () =>
        set(() => {
          return { items: [] };
        }),
    }),
    { name: "cart" }
  )
);
