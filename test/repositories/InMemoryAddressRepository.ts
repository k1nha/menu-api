import { Address } from '@/domain/app/entities'
import { AddressRepository } from '@/domain/app/repositories'

export class InMemoryAddressRepository implements AddressRepository {
  async findById(id: string): Promise<Address> {
    throw new Error('Method not implemented.')
  }
}
