import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '@/components/Navbar'

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Navbar />

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
