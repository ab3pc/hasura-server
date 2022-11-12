import { Pizzas } from '@app/core/types';
import { Typography } from '@mui/material';
import React from 'react'
import { useRecordContext } from 'react-admin'

export const PizzasListExpand = () => {
  const pizzaItem = useRecordContext<Pizzas>();


  return (
    <div style={{display: 'flex', gap: 64}}>
      <div>
      <Typography variant='subtitle2'>Інградієнти</Typography>
      <Typography variant='body2'>{pizzaItem.ingredients}</Typography>
    </div>
    <div>
      <Typography variant='subtitle2'>Вага</Typography>
      <Typography variant='body2'>{pizzaItem.weight} гр.</Typography>
    </div>
    </div>
  )
}