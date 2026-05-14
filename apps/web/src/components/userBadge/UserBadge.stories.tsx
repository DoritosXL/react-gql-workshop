import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from '@storybook/test'
import { UserBadge } from './UserBadge'
import { mockUserBadgeAdmin, mockUserBadgeEditor, mockUserBadgeViewer } from './UserBadge.stubs'

const meta = {
  component: UserBadge,
} satisfies Meta<typeof UserBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Admin: Story = {
  args: { fragment: mockUserBadgeAdmin },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Jane')).toBeInTheDocument()
    await expect(canvas.getByText('ADMIN')).toBeInTheDocument()
  },
}

export const Editor: Story = {
  args: { fragment: mockUserBadgeEditor },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Bob')).toBeInTheDocument()
    await expect(canvas.getByText('EDITOR')).toBeInTheDocument()
  },
}

export const Viewer: Story = {
  args: { fragment: mockUserBadgeViewer },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('John')).toBeInTheDocument()
    await expect(canvas.getByText('VIEWER')).toBeInTheDocument()
  },
}
