import { Meta, StoryObj } from '@storybook/react';
import PageStores from '../../src/pages/Stores';

const meta = {
  title: 'Page/Store Page',
  component: PageStores,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PageStores>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageStoresMain: Story = {};
