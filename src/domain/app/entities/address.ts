import { Entity } from '@/core/base/entity'
import { UniqueEntityId } from './value-objects/unique-entity-id'
import { Optional } from '@/core/types/optional'

export type AddressProps = {
  customerId: UniqueEntityId
  street: string
  city: string
  zipCode: string
  state: string
  latitude: number
  longitude: number
  createdAt: Date
  updatedAt?: Date
}

export class Address extends Entity<AddressProps> {
  get customerId() {
    return this.props.customerId
  }

  static create(
    props: Optional<AddressProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const address = new Address({ ...props, createdAt: new Date() }, id)

    return address
  }
}
