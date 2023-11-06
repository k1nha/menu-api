import { randomUUID } from 'crypto'
import { describe, expect,  } from 'vitest'

describe('Deve criar um pedido', async () => {
  const sut = new CreateOrder()

  const input = {
    customerId: randomUUID(),
    restaurantId: randomUUID(),
    products: [randomUUID(), randomUUID()],
  }

  const output = await sut.execute(input)

  expect(output.customer_id).toBe(input.customerId)
  expect(output.fineshed_at).toBeNull()
})
