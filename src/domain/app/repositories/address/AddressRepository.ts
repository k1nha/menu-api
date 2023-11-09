import { Address } from '../../entities'

export interface AddressRepository {
  create: (address: Address) => Promise<void>
  findById(id: string): Promise<Address | null>
  findByCustomerId(customerId: string): Promise<Address[]>
}
