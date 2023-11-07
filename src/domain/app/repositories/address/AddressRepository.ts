import { Address } from '../../entities'

export interface AddressRepository {
  findById(id: string): Promise<Address | null>
}
