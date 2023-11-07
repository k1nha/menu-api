import { Customer } from '@/domain/app/entities'
import { CustomerRepository } from '@/domain/app/repositories'

export class InMemoryCustomerRepository implements CustomerRepository {
  public items: Customer[] = []

  async create(customer: Customer) {
    this.items.push(customer)
  }

  async asignAddress(customerId: string, addressId: string) {
    const index = this.items.findIndex(
      (item) => item.id.toString() === customerId,
    )

    this.items[index].pinAddressId = addressId
  }
}
