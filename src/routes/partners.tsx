import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import Partners from '@/pages/partners'

export const partnersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'partners',
  component: Partners,
})
