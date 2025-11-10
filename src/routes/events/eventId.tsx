import { createRoute } from '@tanstack/react-router'
import { eventsRoute } from './events'
import Event from '@/pages/events/event'

export const eventRoute = createRoute({
  getParentRoute: () => eventsRoute,
  path: '$eventId',
  component: Event,
})
