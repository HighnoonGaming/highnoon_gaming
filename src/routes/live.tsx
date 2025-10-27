import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import Live from '@/pages/live'

export const liveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'live',
  component: Live,
})
