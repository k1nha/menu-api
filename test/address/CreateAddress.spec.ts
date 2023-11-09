import { CreateAddress } from '@/domain/app/use-cases'
import { makeAddress, makeCustomer } from 'test/factories'
import {
  InMemoryAddressRepository,
  InMemoryCustomerRepository,
} from 'test/repositories'
import { describe, expect, it } from 'vitest'

const makeSut = () => {
  const inMemoryAddressRepository = new InMemoryAddressRepository()
  const inMemoryCustomerRepository = new InMemoryCustomerRepository()
  const sut = new CreateAddress(
    inMemoryAddressRepository,
    inMemoryCustomerRepository,
  )

  return {
    inMemoryAddressRepository,
    sut,
    inMemoryCustomerRepository,
  }
}

describe('Create Address Use Case', () => {
  it('should create a new address', async () => {
    const { sut, inMemoryAddressRepository, inMemoryCustomerRepository } =
      makeSut()

    const customer = makeCustomer()

    await inMemoryCustomerRepository.create(customer)

    const address = makeAddress({
      customerId: customer.id,
    })

    await sut.execute({
      city: address.city,
      customerId: address.customerId.toString(),
      latitude: address.latitude,
      longitude: address.longitude,
      state: address.state,
      street: address.street,
      zipCode: address.zipCode,
    })

    expect(inMemoryAddressRepository.items.length).toBe(1)
    expect(inMemoryAddressRepository.items[0].id.toString()).toEqual(
      expect.any(String),
    )
  })

  it('should not be possible create address if customer does not exist', async () => {
    const { sut } = makeSut()

    const address = makeAddress()

    expect(() =>
      sut.execute({
        city: address.city,
        customerId: address.customerId.toString(),
        latitude: address.latitude,
        longitude: address.longitude,
        state: address.state,
        street: address.street,
        zipCode: address.zipCode,
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
