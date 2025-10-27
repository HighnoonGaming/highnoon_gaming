import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import Players from '@/pages/players'

export const playersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'players',
  component: Players,
})
