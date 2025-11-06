import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Navbar />

      <Outlet />
      <TanStackRouterDevtools />

      <Footer />
    </div>
  ),
})
