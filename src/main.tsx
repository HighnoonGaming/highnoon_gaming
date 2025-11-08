import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'

import { rootRoute } from './routes/__root.tsx'
import { indexRoute } from './routes/index.tsx'
import { aboutRoute } from './routes/about.tsx'
import { contactRoute } from './routes/contact.tsx'
import { eventsRoute } from './routes/events.tsx'
import { galleryRoute } from './routes/gallery.tsx'
import { leaderboardsRoute } from './routes/leaderboards.tsx'
import { partnersRoute } from './routes/partners.tsx'
import { playersRoute } from './routes/players.tsx'
import { becomeAPartnerRoute } from './routes/become-a-partner.tsx'
import { teamRoute } from './routes/team/team.tsx'
import { memberRoute } from './routes/team/$memberId.tsx'

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  contactRoute,
  eventsRoute,
  galleryRoute,
  leaderboardsRoute,
  partnersRoute,
  playersRoute,
  becomeAPartnerRoute,
  teamRoute.addChildren([memberRoute]),
])

const savedTheme = localStorage.getItem('app-storage')

if (savedTheme) {
  try {
    const parsed = JSON.parse(savedTheme)
    const theme = parsed?.state?.theme
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  } catch (error) {
    console.error('Failed to restore theme:', error)
  }
}

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
