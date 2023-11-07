import { Customer } from '@/domain/app/entities'
import { CustomerRepository } from '@/domain/app/repositories'

export class InMemoryCustomerRepository implements CustomerRepository {
  async findById(customerId: string): Promise<Customer | null> {
    const customer = this.items.find(
      (item) => item.id.toString() === customerId,
    )

    if (!customer) {
      return null
    }

    return customer
  }

  public items: Customer[] = []

  async create(customer: Customer) {
    this.items.push(customer)
  }

  async save(customer: Customer) {
    const customerIndex = this.items.findIndex(
      (item) => item.id === customer.id,
    )

    this.items[customerIndex] = customer
  }
}
