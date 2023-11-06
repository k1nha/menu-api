import { Customer } from '@/domain/app/entities'
import { CreateCustomer } from '@/domain/app/use-cases'
import { InMemoryCustomerRepository } from 'test/repositories/InMemoryCustomerRepository'
import { beforeEach, describe, it } from 'vitest'

let inMemoryCustomerRepository: InMemoryCustomerRepository
let sut: CreateCustomer

describe('Create Customer Use Case', () => {
  beforeEach(() => {
    inMemoryCustomerRepository = new InMemoryCustomerRepository()
    sut = new CreateCustomer(inMemoryCustomerRepository)
  })

  it('should create a customer', async () => {
    const customer = Customer.create({
      email: 'test@example.com',
      name: 'test',
    })

    await sut.execute(customer)
  })
})
