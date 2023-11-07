import { Address, Customer } from '@/domain/app/entities'
import { UniqueEntityId } from '@/domain/app/entities/value-objects/unique-entity-id'
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

    await inMemoryCustomerRepository.items.push(customer)

    const address = Address.create({
      customerId: customer.id,
      city: 'San Francisco',
      latitude: 0,
      longitude: 0,
      state: 'San Francisco',
      street: 'San Francisco',
      zipCode: '123',
    })

    await inMemoryAddressRepository.items.push(address)

    await sut.execute({
      customerId: customer.id.toString(),
      addressId: address.id.toValue(),
    })

    expect(inMemoryCustomerRepository.items.length).toBe(1)
    expect(inMemoryCustomerRepository.items[0].pinAddressId).toEqual(address.id)
  })

  it('should return error if customer is not exists', async () => {
    const customerId = new UniqueEntityId()

    const address = Address.create({
      customerId,
      city: 'San Francisco',
      latitude: 0,
      longitude: 0,
      state: 'San Francisco',
      street: 'San Francisco',
      zipCode: '123',
    })

    expect(() =>
      sut.execute({
        addressId: address.id.toString(),
        customerId: customerId.toString(),
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
