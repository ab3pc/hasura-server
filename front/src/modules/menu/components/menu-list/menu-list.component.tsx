import { FC } from "react";
import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";
import { PizzaItemType } from "@app/modules/menu/types/pizza-item.type";


interface MenuListProps {
  items: PizzaItemType[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {items.map((pizza) => (
        <MenuItem {...pizza} key={`pizza-${pizza.id}`} />
      ))}
    </div>
  );
};
