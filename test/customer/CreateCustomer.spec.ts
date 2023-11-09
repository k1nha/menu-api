import { CreateCustomer } from '@/domain/app/use-cases'
import { makeCustomer } from 'test/factories'
import { InMemoryCustomerRepository } from 'test/repositories/InMemoryCustomerRepository'
import { describe, expect, it } from 'vitest'

const makeSut = () => {
  const inMemoryCustomerRepository = new InMemoryCustomerRepository()
  const sut = new CreateCustomer(inMemoryCustomerRepository)

  return {
    sut,
    inMemoryCustomerRepository,
  }
}

describe('Create Customer Use Case', () => {
  it('should create a customer', async () => {
    const { sut, inMemoryCustomerRepository } = makeSut()
    const customer = makeCustomer()

    await sut.execute(customer)

    expect(inMemoryCustomerRepository.items.length).toBe(1)
    expect(inMemoryCustomerRepository.items[0].email).toEqual(customer.email)
  })
})
