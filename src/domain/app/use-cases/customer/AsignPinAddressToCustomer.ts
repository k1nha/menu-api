import { UseCase } from '@/core/base/use-cases'
import { AddressRepository, CustomerRepository } from '../../repositories'

type Input = {
  customerId: string
  addressId: string
}

export class AsignPinAddressToCustomer implements UseCase<Input, void> {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly addressRepository: AddressRepository,
  ) {}

  async execute({ addressId, customerId }: Input) {
    const addressExist = await this.addressRepository.findById(addressId)

    if (!addressExist) {
      throw new Error('Address not found')
    }
    // Verify this id is valid
    await this.customerRepository.asignAddress(addressId, customerId)
  }
}
