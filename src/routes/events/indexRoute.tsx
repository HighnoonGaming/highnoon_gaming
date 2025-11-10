import { createRoute } from '@tanstack/react-router'
import { eventsRoute } from './events'
import Events from '@/pages/events/index'

export const eventsIndexRoute = createRoute({
  getParentRoute: () => eventsRoute,
  path: '/',
  component: Events,
})
