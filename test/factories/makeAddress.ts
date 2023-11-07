import { Address, AddressProps } from '@/domain/app/entities'
import { UniqueEntityId } from '@/domain/app/entities/value-objects/unique-entity-id'

export function makeAddress(override: Partial<AddressProps>) {
  const address = Address.create({
    customerId: new UniqueEntityId(),
    city: 'Example city',
    latitude: 0,
    longitude: 0,
    state: 'Example state',
    street: 'Example street',
    zipCode: 'Example zip code',
    ...override,
  })

  return address
}
