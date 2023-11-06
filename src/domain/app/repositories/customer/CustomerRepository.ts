import { Customer } from '../../entities'

export interface CustomerRepository {
  create(customer: Customer): Promise<void>
  asignAddress(customerId: string, address: string): Promise<void>
}
