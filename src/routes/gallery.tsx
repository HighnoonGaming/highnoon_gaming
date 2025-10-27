import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__root'
import Gallery from '@/pages/gallery'

export const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'gallery',
  component: Gallery,
})
