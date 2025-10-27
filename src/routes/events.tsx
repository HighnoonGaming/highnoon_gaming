import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import Events from '@/pages/events'

export const eventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'events',
  component: Events,
})
