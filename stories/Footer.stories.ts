import { Meta, StoryObj } from '@storybook/react';
import Footer from '../src/components/Footer';

const meta = {
  title: 'Component/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FooterStatic: Story = {};
