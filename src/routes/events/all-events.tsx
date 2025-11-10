import { createRoute } from '@tanstack/react-router'
import { eventsRoute } from './events'
import AllEvents from '@/pages/events/all-events'

export const allEventsRoute = createRoute({
  getParentRoute: () => eventsRoute,
  path: 'all-events',
  component: AllEvents,
})
