import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";

import pizzaItems from "@app/moks/pizza.json";

export default {
  title: "Menu/Menu list",
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => <MenuList {...args}/>;

export const View = Template.bind({});