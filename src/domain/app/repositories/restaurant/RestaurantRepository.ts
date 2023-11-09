import { Restaurant } from '../../entities'

export interface RestaurantRepository {
  create(restaurant: Restaurant): Promise<void>
}
