import { Entity } from '@/core/base/entity'
import { UniqueEntityId } from './value-objects/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface CustomerProps {
  name: string
  email: string
  pinAddressId?: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}

export class Customer extends Entity<CustomerProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  set pinAddressId(pinAddressId: UniqueEntityId | undefined) {
    this.props.pinAddressId = pinAddressId
    this.touch()
  }

  get pinAddressId() {
    return this.props.pinAddressId
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<CustomerProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const customer = new Customer(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return customer
  }
}
