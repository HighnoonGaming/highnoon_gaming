import { createRoute } from '@tanstack/react-router'
import { updatesRoute } from './updates'
import Updates from '@/pages/updates/updates'

export const updateRoute = createRoute({
  getParentRoute: () => updatesRoute,
  path: '$updateId',
  component: Updates,
})
