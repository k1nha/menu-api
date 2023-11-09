import { Entity } from '@/core/base/entity'
import { Optional } from '@/core/types/optional'
import { UniqueEntityId } from './value-objects/unique-entity-id'

export type RestaurantProps = {
  name: string
  address: string
  latitude: number
  longitude: number
  paymentType: Array<string>
  phoneNumber: string
  createdAt: Date
}

export class Restaurant extends Entity<RestaurantProps> {
  get name(): string {
    return this.props.name
  }

  get address(): string {
    return this.props.address
  }

  get latitude(): number {
    return this.props.latitude
  }

  get longitude(): number {
    return this.props.longitude
  }

  get paymentType(): string[] {
    return this.props.paymentType
  }

  get phoneNumber(): string {
    return this.props.phoneNumber
  }

  static create(
    props: Optional<RestaurantProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const restaurant = new Restaurant(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return restaurant
  }
}
