import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '@app/common/components/footer/footer.components';


export default {
  title: 'Common/Footer',
  component: Footer,

} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer/>;

export const View = Template.bind({});