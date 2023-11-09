import { Restaurant } from '@/domain/app/entities'
import { RestaurantRepository } from '@/domain/app/repositories'

export class InMemoryRestaurantRepository implements RestaurantRepository {
  public items: Restaurant[] = []

  async create(restaurant: Restaurant): Promise<void> {
    this.items.push(restaurant)
  }
}
