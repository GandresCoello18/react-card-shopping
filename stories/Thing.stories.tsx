import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardShopping from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: CardShopping,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <CardShopping tag='9% descuento' addToCart={() => console.log('press cart')} {...args} />;

export const Default = Template.bind({});

Default.args = {};
