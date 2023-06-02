
import {defineStore} from "pinia"
import { useLocalStorage } from "@vueuse/core"

export const useCartStore = defineStore('cart-store', {
    state: () => ({ cart: useLocalStorage("cartItems", [])}),
    hydrate: () => ({ cart: useLocalStorage("cartItems", [])}),
    getters: {
      getCart: (state) => state.cart
    },
    actions: {
      addToCart(item: never) {
        this.cart.push(item)
      },
      
    },
  })