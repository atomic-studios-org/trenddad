
import {defineStore} from "pinia"
import { useLocalStorage } from "@vueuse/core"

export const useCartStore = defineStore('cart-store', {
    state: () => ({ cart: useLocalStorage("pinia-store-cartItems-cart", []) as unknown as number[]}),
    hydrate: (state) => {
      state.cart = useLocalStorage("pinia-store-cartItems-cart", [])  as unknown as number[]
    },
    getters: {
      getCart: (state) => state.cart
    },
    actions: {
      addToCart(item: number) {
        this.cart.push(item)
      },
      
    },
  })