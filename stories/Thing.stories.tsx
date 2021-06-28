import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CardShopping } from '../src';

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

const Template: Story = args => <CardShopping {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};