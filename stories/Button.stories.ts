import { Meta, StoryObj } from '@storybook/react';
import Button from '../src/components/common/Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    text: 'Book a Bike',
  },
};

export const ButtonSecondary: Story = {
  args: {
    text: 'Book a Bike',
    style: 'secondary',
  },
};

export const ButtonLong: Story = {
  args: {
    text: 'This is a very long text to put on a button',
  },
};
