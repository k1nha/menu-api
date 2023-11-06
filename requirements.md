## Requisitos Funcionais

- [ ] Deve ser possível realizar um pedido
- [ ] Deve ser possível cancelar um pedido
- [ ] Deve ser possível o cadastro de um consumidor
- [ ] Deve ser possível visualizar todos os pedidos de um cliente no restaurante

## Requisitos Obrigatórios

- [ ] Pedido só pode ser realizado em um endereço ao máximo de 2km de distância
- [ ] Pedido só pode ser realizado por um consumidor

---

## Consumidor

```ts
class Customer {
  name: string
  email: string
  addresId?: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}
```

## Requisitos funcionais - Consumidor

- [ ] Deve ser possível criar uma conta
- [ ] Deve ser possível adicionar endereços
- [ ] Deve ser possível mudar endereço principal
- [ ] Deve ser possível visualizar os endereços
- [ ] Deve ser possível visualizar pedidos feitos em cada restaurante

## Requisitos obrigatórios - Consumidor

- [ ] Ter um endereço principal
- [ ] Ter um contato
- [ ] Pode ter multiplos endereços

---

## Endereço

```ts
class Address {
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

## Requisitos funcionais

- [ ] s
- [ ]
