import React, { FC } from 'react'
import { MenuItemLoading } from '../menu-item-loading/menu-item-loading.component';

type MenuItemListLoading = {
  items: number
}

export const MenuItemListLoading: FC<MenuItemListLoading> = ({items}) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {Array(items).fill(1).map((value, index) => (
        <MenuItemLoading key = {index}/>
      ))}
    </div>
  );
}
