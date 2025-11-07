import type { StateCreator } from 'zustand'

type theme = 'light' | 'dark'

export interface ThemeSlice {
  theme: theme
  toggleTheme: () => void
  setTheme: (theme: theme) => void
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set, get) => ({
  theme: 'dark',

  toggleTheme: () => {
    const newTheme = get().theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    set({ theme: newTheme })
  },

  setTheme: (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    set({ theme })
  },
})
