import { createRoute } from '@tanstack/react-router'
import { teamRoute } from './team'
import Member from '@/pages/member'

export const memberRoute = createRoute({
  getParentRoute: () => teamRoute,
  path: '$memberId',
  component: Member,
})
