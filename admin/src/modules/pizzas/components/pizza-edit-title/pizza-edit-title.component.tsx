import { Pizzas } from '@app/core/types';
import React from 'react'
import { useRecordContext } from 'react-admin'

export const PizzaEditTitle = () => {
  const pizzaItem = useRecordContext<Pizzas>();

  if(!pizzaItem) {
    return null
  }
  return (
    <div>{pizzaItem.title}</div>
  )
}
