import { Badge } from '@/components/ui/badge'
import { graphql } from '../../graphql'
import { readFragment } from 'gql.tada'
import type { FragmentOf } from 'gql.tada'

export const UserBadgeFragment = graphql(`
  fragment UserBadge on User {
    name
    role
  }
`)

type Role = 'ADMIN' | 'EDITOR' | 'VIEWER'

const roleVariant: Record<Role, 'default' | 'secondary' | 'outline'> = {
  ADMIN: 'default',
  EDITOR: 'secondary',
  VIEWER: 'outline',
}

type UserBadgeProps = {
  fragment: FragmentOf<typeof UserBadgeFragment>
}

export const UserBadge = ({ fragment }: UserBadgeProps) => {
  const { name, role } = readFragment(UserBadgeFragment, fragment)

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">{name}</span>
      <Badge variant={roleVariant[role]}>{role}</Badge>
    </div>
  )
}
