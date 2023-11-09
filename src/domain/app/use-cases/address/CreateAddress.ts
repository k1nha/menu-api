import { UseCase } from '@/core/base/use-cases'
import { AddressRepository, CustomerRepository } from '../../repositories'
import { Address } from '../../entities'
import { UniqueEntityId } from '../../entities/value-objects/unique-entity-id'

type Input = {
  customerId: string
  street: string
  city: string
  zipCode: string
  state: string
  longitude: number
  latitude: number
}

export class CreateAddress implements UseCase<Input, void> {
  constructor(
    private readonly addressRepository: AddressRepository,
    private readonly customerRepository: CustomerRepository,
  ) {}

  async execute({ customerId, ...rest }: Input): Promise<void> {
    const customer = await this.customerRepository.findById(customerId)

    if (!customer) {
      throw new Error(`Customer not found`)
    }

    const address = Address.create({
      customerId: new UniqueEntityId(customerId),
      ...rest,
    })

    await this.addressRepository.create(address)
  }
}
