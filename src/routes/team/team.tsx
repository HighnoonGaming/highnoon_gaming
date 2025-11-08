import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../__root'

export const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'team',
})
