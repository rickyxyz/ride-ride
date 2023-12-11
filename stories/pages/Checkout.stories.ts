import { Meta, StoryObj } from '@storybook/react';
import PageCheckout from '../../src/pages/Checkout';

const meta = {
  title: 'Page/Checkout Page',
  component: PageCheckout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageCheckout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageCheckoutMain: Story = {};
