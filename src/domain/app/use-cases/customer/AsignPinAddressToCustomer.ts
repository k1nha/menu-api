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
    const customer = await this.customerRepository.findById(customerId)

    if (!customer) {
      throw new Error('Customer not found')
    }

    const address = await this.addressRepository.findById(addressId)

    if (!address) {
      throw new Error('Address not found')
    }

    if (address.customerId.toString() !== customerId) {
      throw new Error('Customer Error')
    }
    // Verify this id is valid

    customer.pinAddressId = address.id

    await this.customerRepository.save(customer)
  }
}
