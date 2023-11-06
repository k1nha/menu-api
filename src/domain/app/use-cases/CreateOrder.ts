type Input = {
  customerId: string
  restaurantId: string
  products: Array<string>
}

type Output = {
  orderId: string
  customerId: string
  restaurantId: string
  totalPrice: number
}

export class CreateOrder {
  constructor() {}

  async execute({
    customerId,
    products,
    restaurantId,
  }: Input): Promise<Output> {
    return {}
  }
}
