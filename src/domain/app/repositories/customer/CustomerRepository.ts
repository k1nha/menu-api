import { Customer } from '../../entities'

export interface CustomerRepository {
  create(customer: Customer): Promise<void>
  findById(customerId: string): Promise<Customer | null>
  save(customer: Customer): Promise<void>
}
