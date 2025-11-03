import { Moon, Sun } from 'lucide-react'
import { useAppStore } from '@/store/store'

const ThemeToggle = () => {
  const theme = useAppStore((s) => s.theme)
  const toggleTheme = useAppStore((s) => s.toggleTheme)

  return (
    <button
      onClick={toggleTheme}
      className={`px-2 py-2 ${theme === 'light' ? 'bg-oxfordBlue text-white' : 'bg-white text-oxfordBlue'} rounded-full text-sm`}
    >
      {theme === 'light' ? (
        <Moon className="h-3 w-3 md:h-4 md:w-4" />
      ) : (
        <Sun className="h-3 w-3 md:h-4 md:w-4" />
      )}
    </button>
  )
}

export default ThemeToggle
