import { UseCase } from '@/core/base/use-cases'
import { Customer } from '../../entities'
import { CustomerRepository } from '../../repositories'

type Input = {
  name: string
  email: string
}

export class CreateCustomer implements UseCase<Input, void> {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async execute({ email, name }: Input): Promise<void> {
    const customer = Customer.create({
      email,
      name,
    })

    await this.customerRepository.create(customer)
  }
}
