import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '../__root'

export const updatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'updates',
})
