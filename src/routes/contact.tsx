import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import Contact from '@/pages/contact'

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'contact',
  component: Contact,
})
