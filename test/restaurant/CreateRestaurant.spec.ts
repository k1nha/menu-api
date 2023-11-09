import { CreateRestaurant } from '@/domain/app/use-cases'
import { makeRestaurant } from 'test/factories'
import { InMemoryRestaurantRepository } from 'test/repositories'
import { describe, expect, it } from 'vitest'

const makeSut = () => {
  const inMemoryRestaurantRepository = new InMemoryRestaurantRepository()
  const sut = new CreateRestaurant(inMemoryRestaurantRepository)
  return {
    sut,
    inMemoryRestaurantRepository,
  }
}

describe('Create Restaurant Use Case', () => {
  it('should be possible create restaurant', async () => {
    const { sut, inMemoryRestaurantRepository } = makeSut()

    const {
      address,
      latitude,
      longitude,
      name,
      paymentType,
      phoneNumber,
      id: restaurantId,
    } = makeRestaurant()

    await sut.execute({
      address,
      latitude,
      longitude,
      name,
      paymentType,
      phoneNumber,
    })

    expect(inMemoryRestaurantRepository.items.length).toEqual(1)
    expect(inMemoryRestaurantRepository.items[0].id).toEqual(restaurantId)
  })
})
