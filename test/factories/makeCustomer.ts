import { Customer, CustomerProps } from '@/domain/app/entities'

export function makeCustomer(override?: Partial<CustomerProps>) {
  const customer = Customer.create({
    email: 'email@example.com',
    name: 'Example',
    ...override,
  })

  return customer
}
