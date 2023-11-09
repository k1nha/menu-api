import { Restaurant, RestaurantProps } from '@/domain/app/entities'

export function makeRestaurant(
  override?: Partial<RestaurantProps>,
): Restaurant {
  const restaurant = Restaurant.create({
    name: 'Example Restaurant',
    address: 'Example Address',
    paymentType: ['Example Payment Type'],
    latitude: 0,
    longitude: 0,
    phoneNumber: '1234',
    ...override,
  })

  return restaurant
}
