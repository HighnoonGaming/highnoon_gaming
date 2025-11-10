import { createRoute } from '@tanstack/react-router'
import { updatesRoute } from './updates'
import UpdatesIndex from '@/pages/updates/index'

export const updateIndexRoute = createRoute({
  getParentRoute: () => updatesRoute,
  path: '/',
  component: UpdatesIndex,
})
