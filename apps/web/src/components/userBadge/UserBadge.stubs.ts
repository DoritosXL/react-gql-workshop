import { maskFragments } from 'gql.tada'
import type { ResultOf } from 'gql.tada'
import { UserBadgeFragment } from './UserBadge'

export const mockUserBadge = (overrides?: Partial<ResultOf<typeof UserBadgeFragment>>) =>
  maskFragments([UserBadgeFragment], { name: 'John', role: 'VIEWER', ...overrides })

export const mockUserBadgeAdmin = mockUserBadge({ name: 'Jane', role: 'ADMIN' })
export const mockUserBadgeEditor = mockUserBadge({ name: 'Bob', role: 'EDITOR' })
export const mockUserBadgeViewer = mockUserBadge({ name: 'John', role: 'VIEWER' })
