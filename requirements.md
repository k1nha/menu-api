## Requisitos Funcionais

- [ ] Deve ser possível realizar um pedido
- [ ] Deve ser possível cancelar um pedido
- [ ] Deve ser possível o cadastro de um consumidor
- [ ] Deve ser possível visualizar todos os pedidos de um cliente no restaurante

## Requisitos Obrigatórios

- [ ] Pedido só pode ser realizado em um endereço ao máximo de 5km de distância
- [ ] Pedido só pode ser realizado por um consumidor

---

## Consumidor

```ts
class Customer {
  name: string
  email: string
  pinAddressId?: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}
```

## Requisitos funcionais - Consumidor

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível mudar endereço principal
- [ ] Deve ser possível visualizar pedidos feitos em cada restaurante

## Requisitos obrigatórios - Consumidor

- [x] Ter um endereço principal
- [ ] Ter um contato
- [x] Pode ter multiplos endereços

---
  
## Endereço

```ts
class Address {
  customerId: string
  street: string
  city: string
  zipCode: string
  state: string
  latitude: number
  longitude: number
  createdAt: Date
  updatedAt?: Date
}
```

## Requisitos Funcionais

- [ ] Deve listar todos os endereços de um consumidor
- [ ] Deve ser possível adicionar endereços

## Requisitos Obrigatórios

- [ ] Ter um ID de um consumidor

---

## Product

```ts
class Product {
  name: string
  description: string
  value: string
  categoryName: string
  produdctImage: string
}
```

---

## Retaurante

```ts
class Restaurant {
  name: string
  address: string
  latitude: number
  longitude: number
  paymentType: Array<string>
  phoneNumber: string
  openingTime: string
  closingTime: string
}
```

## Requisitos Funcionais

- [ ] Deve ser possível criar um restaurante
- [ ] Exibir os restaurantes disponíveis com base em uma localidade seguindo os horários de abertura

## Requisitos Obrigatórios

- [ ] Precisa ter os dias com horários de abertura e fechamento
- [ ] Ter no minímo de um metodo de pagamento

---

## Pedido

```ts
class Order {
  name: string
  price: string
  deliveryFee: number // calculating from distance
  addresId?: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}
```

## Requisitos Funcionais

- [ ] s

## Requisitos Obrigatórios

- [ ] s
