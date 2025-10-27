import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import Leaderboards from '@/pages/leaderboards'

export const leaderboardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'leaderboards',
  component: Leaderboards,
})
