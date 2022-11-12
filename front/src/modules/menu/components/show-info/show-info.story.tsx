import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShowInfo } from "./show-info.component";

export default {
  title: "Common/Show Error",
  component: ShowInfo,
} as ComponentMeta<typeof ShowInfo>;

const Template: ComponentStory<typeof ShowInfo> = (args) => {
  return <ShowInfo {...args} />;
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  children: (
    <>
      <p>Something was wrong!</p>
      <p>Try again letter!</p>
    </>
  ),
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
  children: (
    <>
      <p>No items!</p>
    </>
  ),
};
