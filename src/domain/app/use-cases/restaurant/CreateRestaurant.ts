import { UseCase } from '@/core/base/use-cases'
import { Restaurant } from '../../entities'
import { RestaurantRepository } from '../../repositories'

type Input = {
  name: string
  address: string
  latitude: number
  longitude: number
  paymentType: Array<string>
  phoneNumber: string
}

export class CreateRestaurant implements UseCase<Input, void> {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async execute(input: Input): Promise<void> {
    const restaurant = Restaurant.create(input)

    await this.restaurantRepository.create(restaurant)
  }
}
