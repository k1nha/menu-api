import { UseCase } from '@/core/base/use-cases'
import { AddressRepository } from '../../repositories'
import { Address } from '../../entities'

type Input = {
  customerId: string
}

type Output = {
  addresses: Address[]
}

export class FindAddressCustomer implements UseCase<Input, Output> {
  constructor(private readonly addressRepository: AddressRepository) {}

  async execute({ customerId }: Input): Promise<Output> {
    const addresses = await this.addressRepository.findByCustomerId(customerId)

    return { addresses }
  }
}
