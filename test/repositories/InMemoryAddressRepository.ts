import { Address } from '@/domain/app/entities'
import { AddressRepository } from '@/domain/app/repositories'

export class InMemoryAddressRepository implements AddressRepository {
  public items: Address[] = []

  async create(address: Address): Promise<void> {
    this.items.push(address)
  }

  async findById(id: string): Promise<Address | null> {
    const address = this.items.find((item) => item.id.toString() === id)

    if (!address) return null

    return address
  }

  async findByCustomerId(customerId: string): Promise<Address[]> {
    const address = this.items.filter(
      (item) => item.id.toString() === customerId,
    )

    return address
  }
}
