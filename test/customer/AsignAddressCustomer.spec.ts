import { UniqueEntityId } from '@/domain/app/entities/value-objects/unique-entity-id'
import { AsignPinAddressToCustomer } from '@/domain/app/use-cases'
import { makeAddress, makeCustomer } from 'test/factories'
import { InMemoryAddressRepository } from 'test/repositories/InMemoryAddressRepository'
import { InMemoryCustomerRepository } from 'test/repositories/InMemoryCustomerRepository'
import { describe, expect, it } from 'vitest'

const makeSut = () => {
  const inMemoryCustomerRepository = new InMemoryCustomerRepository()
  const inMemoryAddressRepository = new InMemoryAddressRepository()
  const sut = new AsignPinAddressToCustomer(
    inMemoryCustomerRepository,
    inMemoryAddressRepository,
  )

  return {
    sut,
    inMemoryAddressRepository,
    inMemoryCustomerRepository,
  }
}

describe('Asign Address to Customer Use Case', () => {
  it('should asign pinAddress to customer', async () => {
    const { inMemoryAddressRepository, sut, inMemoryCustomerRepository } =
      makeSut()

    const customer = makeCustomer()

    await inMemoryCustomerRepository.create(customer)

    const address = makeAddress({
      customerId: customer.id,
    })

    inMemoryAddressRepository.create(address)

    await sut.execute({
      customerId: customer.id.toString(),
      addressId: address.id.toValue(),
    })

    expect(inMemoryCustomerRepository.items.length).toBe(1)
    expect(inMemoryCustomerRepository.items[0].pinAddressId).toEqual(address.id)
  })

  it('should return error if customer is not exists', async () => {
    const { sut } = makeSut()

    const address = makeAddress()

    expect(() =>
      sut.execute({
        addressId: address.id.toString(),
        customerId: address.customerId.toString(),
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it('should be return error if address is not found', async () => {
    const { inMemoryCustomerRepository, sut } = makeSut()

    const customer = makeCustomer()

    await inMemoryCustomerRepository.create(customer)

    const fakeAddressId = new UniqueEntityId()

    expect(() =>
      sut.execute({
        addressId: fakeAddressId.toString(),
        customerId: customer.id.toString(),
      }),
    ).rejects.toBeInstanceOf(Error)
  })

  it('should be return error if address is not matches with customer', async () => {
    const { inMemoryCustomerRepository, inMemoryAddressRepository, sut } =
      makeSut()

    const customer = makeCustomer()
    const address = makeAddress()

    await inMemoryCustomerRepository.create(customer)
    inMemoryAddressRepository.items.push(address)

    expect(() =>
      sut.execute({
        addressId: address.id.toString(),
        customerId: customer.id.toString(),
      }),
    ).rejects.toBeInstanceOf(Error)
  })
})
