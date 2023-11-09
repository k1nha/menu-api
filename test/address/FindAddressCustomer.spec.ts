import { UniqueEntityId } from '@/domain/app/entities/value-objects/unique-entity-id'
import { FindAddressCustomer } from '@/domain/app/use-cases'
import { makeAddress } from 'test/factories'
import { InMemoryAddressRepository } from 'test/repositories'
import { describe, expect, it } from 'vitest'

const makeSut = () => {
  const inMemoryAddressRepository = new InMemoryAddressRepository()
  const sut = new FindAddressCustomer(inMemoryAddressRepository)

  return {
    inMemoryAddressRepository,
    sut,
  }
}

describe('Find Customer Address Use Case', () => {
  it('should be list all address of a user', async () => {
    const { sut, inMemoryAddressRepository } = makeSut()

    const customerId = new UniqueEntityId()

    const firstAddress = makeAddress({
      customerId,
    })
    const secondAddress = makeAddress({
      customerId,
    })

    await inMemoryAddressRepository.create(firstAddress)
    await inMemoryAddressRepository.create(secondAddress)

    const { addresses } = await sut.execute({
      customerId: customerId.toString(),
    })

    expect(addresses.length).toEqual(2)
  })
})
