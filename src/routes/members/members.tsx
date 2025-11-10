import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../__root'

export const membersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'team',
})
