import { cartStore, type ICartItem } from "./store"

export class CartService {
  setCartTotal() {
    cartStore.setState((state) => ({
      ...state,
      total: state.cart.reduce(
        (acc, item) => acc + item.qty * item.product.price,
        0
      ),
    }))
  }
  addToCart(dto: Omit<ICartItem, "qty">) {
    cartStore.setCart((cart) => {
      const index = cart.findIndex((item) => item.id === dto.id)

      if (index === -1) {
        return [...cart, { ...dto, qty: 1 }]
      }

      return cart.map((item) =>
        item.id === dto.id ? { ...item, qty: item.qty + 1 } : item
      )
    })

    this.setCartTotal()
  }

  removeFromCart(dto: Pick<ICartItem, "id">) {
    cartStore.setCart((cart) => cart.filter((item) => item.id !== dto.id))

    this.setCartTotal()
  }
  updateQty(dto: Pick<ICartItem, "id">, qty: number) {
    cartStore.setCart((cart) => {
      const index = cart.findIndex((item) => item.id === dto.id)

      if (index === -1) {
        return cart
      }

      return cart.map((item) => (item.id === dto.id ? { ...item, qty } : item))
    })

    this.setCartTotal()
  }
}

export const cartService = new CartService()
