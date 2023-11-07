import { Address, Customer } from '@/domain/app/entities'
import { AsignPinAddressToCustomer } from '@/domain/app/use-cases'
import { InMemoryAddressRepository } from 'test/repositories/InMemoryAddressRepository'
import { InMemoryCustomerRepository } from 'test/repositories/InMemoryCustomerRepository'
import { beforeEach, describe, expect, it } from 'vitest'

let inMemoryCustomerRepository: InMemoryCustomerRepository
let inMemoryAddressRepository: InMemoryAddressRepository
let sut: AsignPinAddressToCustomer

describe('Asign Address to Customer Use Case', () => {
  beforeEach(() => {
    inMemoryCustomerRepository = new InMemoryCustomerRepository()
    inMemoryAddressRepository = new InMemoryAddressRepository()
    sut = new AsignPinAddressToCustomer(
      inMemoryCustomerRepository,
      inMemoryAddressRepository,
    )
  })

  it('should asign one address to customer', async () => {
    const customer = Customer.create({
      email: 'test@example.com',
      name: 'test',
    })

    const address = Address.create({
      customerId: customer.id.toString(),
      city: 'San Francisco',
      latitude: 0,
      longitude: 0,
      state: 'San Francisco',
      street: 'San Francisco',
      zipCode: '123',
    })

    await sut.execute(customer.id.toString(), address.id.toString())

    expect(inMemoryCustomerRepository.items.length).toBe(1)
    expect(inMemoryCustomerRepository.items[0].pinAddressId).toEqual(
      address.id.toString(),
    )
  })
})
