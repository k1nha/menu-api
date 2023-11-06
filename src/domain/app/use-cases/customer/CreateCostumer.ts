import { Customer } from '../../entities'
import { CustomerRepository } from '../../repositories'

type Input = {
  name: string
  email: string
}

export class CreateCustomer {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute({ email, name }: Input): Promise<void> {
    const customer = Customer.create({
      email,
      name,
    })

    await this.customerRepository.create(customer)
  }
}
