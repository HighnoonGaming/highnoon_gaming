import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import BecomeAPartner from '@/pages/become-a-partner'

export const becomeAPartnerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'become-a-partner',
  component: BecomeAPartner,
})
