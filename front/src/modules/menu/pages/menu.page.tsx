import { useGetMenuQuery } from "@app/core/types";
import React from "react";
import { MenuItemListLoading } from "../components/menu-item-list-loading/menu-item-list-loading.component";
import { MenuList } from "../components/menu-list/menu-list.component";
import { ShowInfo } from "../components/show-info/show-info.component";

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();
  console.log(data);

  if (error) {
    return (
      <ShowInfo type="error">
        <p>Something was wrong!</p>
        <p>Try again letter!</p>
      </ShowInfo>
    );
  }

  if (loading) {
    return <MenuItemListLoading items={9} />;
  }
  if (!data) {
    return (
      <ShowInfo type="info">
        <p>No items!</p>
      </ShowInfo>
    )
  }

  return <MenuList items={data.pizzas} />;
};
