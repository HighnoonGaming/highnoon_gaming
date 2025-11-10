import { createRoute } from '@tanstack/react-router'
import { membersRoute } from './members'
import Member from '@/pages/member'

export const memberRoute = createRoute({
  getParentRoute: () => membersRoute,
  path: '$memberId',
  component: Member,
})
