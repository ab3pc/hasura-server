import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterLink } from './footer-link.components';


export default {
  title: 'Common/FooterLink',
  component: FooterLink,

} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <ul>
    <FooterLink {...args}/>
  </ul>
) 

export const View = Template.bind({});
View.args = {
  children: '044 456 45 45',
  type: 'tel:3800444564545'
}