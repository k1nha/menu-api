import { Address } from '@/domain/app/entities'
import { AddressRepository } from '@/domain/app/repositories'

export class InMemoryAddressRepository implements AddressRepository {
  public items: Address[] = []

  async findById(id: string): Promise<Address | null> {
    const address = this.items.find((item) => item.id.toString() === id)

    if (!address) return null

    return address
  }
}
