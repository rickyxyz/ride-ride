import { Meta, StoryObj } from '@storybook/react';
import Header from '../src/components/Header';

const meta = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderStatic: Story = {};
